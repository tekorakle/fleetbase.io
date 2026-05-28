import fs from 'node:fs/promises';
import path from 'node:path';

function stripSource(text) {
  return text
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/import\s+.*?;$/gm, ' ')
    .replace(/className="[^"]*"/g, ' ')
    .replace(/[{}[\]()`]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function normalizePath(value) {
  return value.split(path.sep).join('/');
}

function expandBraceGlob(glob) {
  const match = glob.match(/\{([^}]+)\}/);
  if (!match) return [glob];

  return match[1].split(',').map((part) => glob.replace(match[0], part));
}

function globToRegExp(glob) {
  let pattern = '';

  for (let index = 0; index < glob.length; index += 1) {
    const char = glob[index];
    const next = glob[index + 1];

    if (char === '*' && next === '*') {
      if (glob[index + 2] === '/') {
        pattern += '(?:.*/)?';
        index += 2;
      } else {
        pattern += '.*';
        index += 1;
      }
      continue;
    }

    if (char === '*') {
      pattern += '[^/]*';
      continue;
    }

    pattern += char.replace(/[.+^${}()|[\]\\]/g, '\\$&');
  }

  return new RegExp(`^${pattern}$`);
}

function matchesAnyGlob(filePath, globs) {
  const normalized = normalizePath(filePath);

  return globs
    .flatMap(expandBraceGlob)
    .some((glob) => globToRegExp(glob).test(normalized));
}

function isExcluded(filePath, excludePathParts = []) {
  const normalized = normalizePath(filePath);
  return excludePathParts.some((part) => normalized.includes(part));
}

async function pathExists(filePath) {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

async function walk(dir, root, options = {}, files = []) {
  if (!(await pathExists(dir))) return files;

  const entries = await fs.readdir(dir, { withFileTypes: true });

  for (const entry of entries) {
    const absolutePath = path.join(dir, entry.name);
    const relativePath = normalizePath(path.relative(root, absolutePath));

    if (isExcluded(relativePath, options.excludePathParts)) continue;

    if (entry.isDirectory()) {
      await walk(absolutePath, root, options, files);
      continue;
    }

    if (matchesAnyGlob(relativePath, options.includeGlobs)) {
      files.push(relativePath);
    }
  }

  return files;
}

function toTitleishText(filePath, text) {
  const heading = text.match(/^#\s+(.+)$/m)?.[1] || text.match(/title:\s*["']?(.+?)["']?$/m)?.[1];
  if (heading) return heading.trim();

  return filePath
    .split('/')
    .pop()
    .replace(/\.(mdx|md|tsx|ts|js|hbs|php)$/i, '')
    .replace(/[-_]/g, ' ')
    .trim();
}

function toSiteCategory(filePath) {
  if (filePath.startsWith('content/docs/api/')) return 'api-reference';
  if (filePath.startsWith('content/docs/')) return 'documentation';
  if (filePath.startsWith('src/app/')) return 'website-page';
  if (filePath === 'README.md') return 'site-readme';
  return 'site';
}

function keywordSet(...values) {
  return values
    .join(' ')
    .toLowerCase()
    .split(/[^a-z0-9]+/)
    .filter((word) => word.length > 2);
}

function scoreManifestItem(item, queryWords, contentFocus) {
  const haystack = `${item.path} ${item.title} ${item.excerpt} ${item.repo} ${item.category}`.toLowerCase();
  let score = 0;

  for (const word of queryWords) {
    if (haystack.includes(word)) score += 4;
  }

  if (contentFocus === 'fleetbase-api-tutorial') {
    if (item.category === 'api-reference') score += 28;
    if (item.repo === 'core-api') score += 24;
    if (item.path.includes('controllers') || item.path.includes('requests')) score += 12;
    if (item.path.includes('developers') || item.path.includes('webhooks')) score += 10;
  }

  if (contentFocus === 'supply-chain-software') {
    if (['pallet', 'ledger', 'storefront'].includes(item.repo)) score += 20;
    if (item.path.includes('pallet') || item.path.includes('inventory')) score += 12;
  }

  if (contentFocus === 'logistics-software') {
    if (['fleetops', 'core-api'].includes(item.repo)) score += 20;
    if (item.path.includes('fleet-ops') || item.path.includes('orders')) score += 12;
  }

  if (item.category === 'website-page') score += 8;
  if (item.category === 'documentation') score += 10;
  if (item.category === 'api-reference') score += 12;

  return score;
}

async function readContextFile(root, relativePath, meta, config) {
  const absolutePath = path.join(root, relativePath);
  const content = await fs.readFile(absolutePath, 'utf8');
  const text = stripSource(content);

  if (text.length < 80) return null;

  return {
    repo: meta.repo,
    category: meta.category,
    path: relativePath,
    title: toTitleishText(relativePath, content),
    excerpt: text.slice(0, config.context.maxCharsPerFile),
    charCount: text.length,
  };
}

export async function buildContextManifest(config, options = {}) {
  const root = options.root || process.cwd();
  const manifest = [];
  const siteFiles = await walk(root, root, {
    includeGlobs: config.context.includeGlobs,
    excludePathParts: config.context.excludePathParts,
  });

  for (const file of siteFiles) {
    const item = await readContextFile(
      root,
      file,
      { repo: 'fleetbase.io', category: toSiteCategory(file) },
      config,
    );
    if (item) manifest.push(item);
  }

  for (const repoConfig of config.sourceTruthRepos) {
    const repoRoot = path.join(root, repoConfig.path);
    const repoFiles = await walk(repoRoot, repoRoot, {
      includeGlobs: repoConfig.includeGlobs,
      excludePathParts: ['node_modules', 'dist', 'tmp', '.git', 'coverage'],
    });

    for (const file of repoFiles) {
      const item = await readContextFile(
        repoRoot,
        file,
        { repo: repoConfig.path.replace('source-truth/', ''), category: repoConfig.category },
        config,
      );
      if (item) {
        manifest.push({
          ...item,
          path: `${repoConfig.path}/${item.path}`,
        });
      }
    }
  }

  return manifest.sort((a, b) => a.repo.localeCompare(b.repo) || a.path.localeCompare(b.path));
}

export function selectContextSources(manifest, config, options = {}) {
  const queryWords = keywordSet(
    options.contentFocus || '',
    options.topic?.title || options.topic || '',
    options.topic?.keyword || '',
    options.keyword || '',
    options.contentStrategy?.requiredRelevance || '',
  );

  return manifest
    .map((item) => ({
      ...item,
      score: scoreManifestItem(item, queryWords, options.contentFocus),
    }))
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score || a.path.localeCompare(b.path))
    .slice(0, options.maxSelectedFiles || config.context.maxSelectedFiles);
}

function summarizeContext(selectedContext, options = {}) {
  const maxCharsPerSource = options.maxCharsPerSource || Number.POSITIVE_INFINITY;
  const maxTotalChars = options.maxTotalChars || Number.POSITIVE_INFINITY;
  const chunks = [];
  let totalChars = 0;

  for (const item of selectedContext) {
    const excerpt = item.excerpt.slice(0, maxCharsPerSource);
    const chunk = `Source: ${item.path}\nRepo: ${item.repo}\nCategory: ${item.category}\nTitle: ${item.title}\n${excerpt}`;

    if (totalChars + chunk.length > maxTotalChars) break;

    chunks.push(chunk);
    totalChars += chunk.length;
  }

  return chunks.join('\n\n---\n\n');
}

export async function fetchExistingGhostPosts(config, options = {}) {
  const apiUrl = (options.apiUrl || process.env.GHOST_API_URL || '').trim().replace(/\/+$/, '');
  const key = (options.contentApiKey || process.env.GHOST_CONTENT_API_KEY || '').trim();

  if (!apiUrl || !key) return [];

  const url = new URL(`${apiUrl}/ghost/api/content/posts/`);
  url.searchParams.set('key', key);
  url.searchParams.set('fields', 'title,slug,excerpt,published_at');
  url.searchParams.set('limit', '20');
  url.searchParams.set('order', 'published_at desc');

  const response = await (options.fetchImpl || fetch)(url, {
    headers: {
      Accept: 'application/json',
      'Accept-Version': process.env.GHOST_API_VERSION || config.ghost.apiVersion,
    },
  });

  if (!response.ok) {
    console.warn(`[content-agent] Unable to fetch existing Ghost posts: ${response.status}`);
    return [];
  }

  const payload = await response.json();
  return (payload.posts || []).map((post) => ({
    title: post.title,
    slug: post.slug,
    excerpt: post.excerpt,
    publishedAt: post.published_at,
  }));
}

export async function buildFleetbaseContext(config, options = {}) {
  const manifest = options.manifest || (await buildContextManifest(config, options));
  const selectedContext = selectContextSources(manifest, config, {
    ...options,
    contentStrategy: config.contentStrategy,
  });
  const existingBlogPosts = await fetchExistingGhostPosts(config, options);
  const summary = summarizeContext(selectedContext, options);

  return {
    summary,
    manifest,
    localContext: selectedContext,
    selectedContext,
    sourceCitations: selectedContext.map(({ repo, category, path, title, score }) => ({
      repo,
      category,
      path,
      title,
      score,
    })),
    existingBlogPosts,
  };
}
