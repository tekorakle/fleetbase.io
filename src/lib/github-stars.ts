/**
 * Fetches the live GitHub star count for fleetbase/fleetbase and formats it
 * for display (e.g. "1.9k+", "850+"). Server-component only — relies on
 * Next.js's request-level cache keyed on the URL + revalidate window, so
 * multiple callers in the same render share a single fetch.
 *
 * On any failure (offline, GitHub rate-limit, schema drift) returns the most
 * recent known floor so the UI never shows a regression.
 */
const FALLBACK = '1.9k+';

export async function getGitHubStars(): Promise<string> {
  try {
    const res = await fetch('https://api.github.com/repos/fleetbase/fleetbase', {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return FALLBACK;
    const data = await res.json();
    const count: number = data.stargazers_count;
    if (typeof count !== 'number') return FALLBACK;
    if (count >= 1000) return `${(count / 1000).toFixed(1).replace(/\.0$/, '')}k+`;
    return `${count}+`;
  } catch {
    return FALLBACK;
  }
}
