function normalizeValue(value) {
  return String(value || '')
    .toLowerCase()
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9]+/g, ' ')
    .trim()
    .replace(/\s+/g, ' ');
}

function compactSlug(value) {
  return String(value || '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function ghostSearchText(post) {
  return normalizeValue(
    [
      post.title,
      post.slug,
      post.custom_excerpt,
      post.excerpt,
      post.meta_title,
      post.meta_description,
    ].join(' '),
  );
}

export function normalizeTopicKey(value) {
  return normalizeValue(value);
}

export function findDuplicateContent(candidate, posts = []) {
  const title = normalizeValue(candidate.title);
  const slug = compactSlug(candidate.slug);
  const targetKeyword = normalizeValue(candidate.targetKeyword || candidate.keyword);
  const topic = normalizeValue(candidate.topic || candidate.title || candidate.targetKeyword);
  const duplicates = [];

  for (const post of posts) {
    const postTitle = normalizeValue(post.title);
    const postSlug = compactSlug(post.slug);
    const postText = ghostSearchText(post);

    if (slug && postSlug && slug === postSlug) {
      duplicates.push({ reason: 'slug', post });
      continue;
    }

    if (title && postTitle && title === postTitle) {
      duplicates.push({ reason: 'title', post });
      continue;
    }

    if (targetKeyword && postText.includes(targetKeyword)) {
      duplicates.push({ reason: 'targetKeyword', post });
      continue;
    }

    if (topic && postText.includes(topic)) {
      duplicates.push({ reason: 'topic', post });
    }
  }

  return duplicates;
}

export function assertNoDuplicateContent(candidate, posts = []) {
  const duplicates = findDuplicateContent(candidate, posts);

  if (duplicates.length === 0) {
    return { duplicate: false, duplicates };
  }

  const details = duplicates
    .map(({ reason, post }) => `${reason}: ${post.title || post.slug} (${post.status || 'unknown'})`)
    .join('; ');

  throw new Error(`Duplicate content blocked: ${details}`);
}
