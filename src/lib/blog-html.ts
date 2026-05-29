import { createHighlighter } from 'shiki';

const BLOG_CODE_LANGUAGE_VALUES = [
  'bash',
  'html',
  'http',
  'javascript',
  'json',
  'shellscript',
  'tsx',
  'typescript',
] as const;

type BlogCodeLanguage = (typeof BLOG_CODE_LANGUAGE_VALUES)[number];

const BLOG_CODE_LANGUAGES: BlogCodeLanguage[] = [...BLOG_CODE_LANGUAGE_VALUES];

const languageAliases: Record<string, BlogCodeLanguage> = {
  curl: 'shellscript',
  js: 'javascript',
  jsx: 'javascript',
  shell: 'shellscript',
  sh: 'shellscript',
  ts: 'typescript',
  zsh: 'shellscript',
};

let highlighterPromise: ReturnType<typeof createHighlighter> | null = null;

function getHighlighter() {
  highlighterPromise ??= createHighlighter({
    themes: ['github-light', 'github-dark'],
    langs: BLOG_CODE_LANGUAGES,
  });

  return highlighterPromise;
}

function decodeHtml(value: string) {
  return value
    .replaceAll('&lt;', '<')
    .replaceAll('&gt;', '>')
    .replaceAll('&amp;', '&')
    .replaceAll('&quot;', '"')
    .replaceAll('&#39;', "'")
    .replaceAll('&apos;', "'");
}

function getLanguageFromAttributes(attributes: string) {
  const className = attributes.match(/\bclass=(["'])(.*?)\1/i)?.[2] ?? '';
  const language = className.match(/\blanguage-([a-z0-9_-]+)/i)?.[1]?.toLowerCase();

  return language ?? '';
}

function inferLanguage(language: string, code: string): BlogCodeLanguage {
  const normalized = languageAliases[language] ?? language;

  if (BLOG_CODE_LANGUAGES.includes(normalized as BlogCodeLanguage)) {
    return normalized as BlogCodeLanguage;
  }

  if (/^(DELETE|GET|PATCH|POST|PUT)\s+https?:\/\//i.test(code.trim())) {
    return 'http';
  }

  if (/^[\s\n]*[{\[]/.test(code)) {
    return 'json';
  }

  return 'javascript';
}

export async function formatBlogHtml(html: string) {
  if (!/<pre\b/i.test(html)) {
    return html;
  }

  const codeBlockPattern = /<pre\b[^>]*>\s*<code\b([^>]*)>([\s\S]*?)<\/code>\s*<\/pre>/gi;
  const blocks = [...html.matchAll(codeBlockPattern)];

  if (blocks.length === 0) {
    return html;
  }

  const highlighter = await getHighlighter();
  let formattedHtml = html;

  for (const block of blocks) {
    const [original, codeAttributes, encodedCode] = block;
    const code = decodeHtml(encodedCode).trim();
    const lang = inferLanguage(getLanguageFromAttributes(codeAttributes), code);
    const highlighted = highlighter.codeToHtml(code, {
      lang,
      themes: {
        light: 'github-light',
        dark: 'github-dark',
      },
    });

    formattedHtml = formattedHtml.replace(original, highlighted);
  }

  return formattedHtml;
}
