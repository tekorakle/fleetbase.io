import type { Metadata } from 'next';
'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Bell, ExternalLink, Tag, GitCommit, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Changelog | Fleetbase',
  description: 'See the latest updates, new features, and improvements to the Fleetbase platform.',
  keywords: 'fleetbase changelog, platform updates, new features, release notes',
  openGraph: {
    title: 'Changelog | Fleetbase',
    description: 'See the latest updates, new features, and improvements to the Fleetbase platform.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Changelog | Fleetbase',
    description: 'See the latest updates, new features, and improvements to the Fleetbase platform.',
  },
};
// ─── Types ────────────────────────────────────────────────────────────────────
interface GitHubRelease {
 id: number;
 tag_name: string;
 name: string;
 body: string;
 published_at: string;
 html_url: string;
 prerelease: boolean;
 draft: boolean;
}

// ─── Lightweight Markdown → HTML parser ──────────────────────────────────────
// Handles the subset of Markdown used in GitHub release notes.
// No external dependencies required.
function parseMarkdown(md: string): string {
 if (!md) return '';

 const lines = md.split('\n');
 const output: string[] = [];
 let inCodeBlock = false;
 let inList = false;
 let inOrderedList = false;
 let codeLines: string[] = [];
 let codeLang = '';

 const escapeHtml = (s: string) =>
 s
 .replace(/&/g, '&amp;')
 .replace(/</g, '&lt;')
 .replace(/>/g, '&gt;')
 .replace(/"/g, '&quot;');

 const inlineFormat = (s: string) => {
 // Bold + italic
 s = s.replace(/\*\*\*(.*?)\*\*\*/g, '<strong><em>$1</em></strong>');
 // Bold
 s = s.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
 s = s.replace(/__(.*?)__/g, '<strong>$1</strong>');
 // Italic
 s = s.replace(/\*(.*?)\*/g, '<em>$1</em>');
 s = s.replace(/_(.*?)_/g, '<em>$1</em>');
 // Inline code
 s = s.replace(/`([^`]+)`/g, '<code class="inline-code">$1</code>');
 // Links
 s = s.replace(
 /\[([^\]]+)\]\((https?:\/\/[^\)]+)\)/g,
 '<a href="$2" target="_blank" rel="noopener noreferrer" class="md-link">$1</a>'
 );
 // Strikethrough
 s = s.replace(/~~(.*?)~~/g, '<del>$1</del>');
 return s;
 };

 const closeList = () => {
 if (inList) { output.push('</ul>'); inList = false; }
 if (inOrderedList) { output.push('</ol>'); inOrderedList = false; }
 };

 for (let i = 0; i < lines.length; i++) {
 const raw = lines[i];
 const line = raw;

 // Fenced code blocks
 if (line.startsWith('```')) {
 if (!inCodeBlock) {
 closeList();
 inCodeBlock = true;
 codeLang = line.slice(3).trim();
 codeLines = [];
 } else {
 inCodeBlock = false;
 const escaped = codeLines.map(escapeHtml).join('\n');
 output.push(
 `<pre class="md-pre"><code class="md-code${codeLang ? ' language-' + codeLang : ''}">${escaped}</code></pre>`
 );
 codeLines = [];
 codeLang = '';
 }
 continue;
 }

 if (inCodeBlock) {
 codeLines.push(line);
 continue;
 }

 // Horizontal rule
 if (/^(-{3,}|\*{3,}|_{3,})$/.test(line.trim())) {
 closeList();
 output.push('<hr class="md-hr" />');
 continue;
 }

 // Headings
 const h6 = line.match(/^#{6}\s+(.*)/);
 const h5 = line.match(/^#{5}\s+(.*)/);
 const h4 = line.match(/^#{4}\s+(.*)/);
 const h3 = line.match(/^#{3}\s+(.*)/);
 const h2 = line.match(/^#{2}\s+(.*)/);
 const h1 = line.match(/^#{1}\s+(.*)/);

 if (h6) { closeList(); output.push(`<h6 class="md-h6">${inlineFormat(h6[1])}</h6>`); continue; }
 if (h5) { closeList(); output.push(`<h5 class="md-h5">${inlineFormat(h5[1])}</h5>`); continue; }
 if (h4) { closeList(); output.push(`<h4 class="md-h4">${inlineFormat(h4[1])}</h4>`); continue; }
 if (h3) { closeList(); output.push(`<h3 class="md-h3">${inlineFormat(h3[1])}</h3>`); continue; }
 if (h2) { closeList(); output.push(`<h2 class="md-h2">${inlineFormat(h2[1])}</h2>`); continue; }
 if (h1) { closeList(); output.push(`<h1 class="md-h1 sr-only">${inlineFormat(h1[1])}</h1>`); continue; }

 // Blockquote
 if (line.startsWith('> ')) {
 closeList();
 output.push(`<blockquote class="md-blockquote">${inlineFormat(line.slice(2))}</blockquote>`);
 continue;
 }

 // Unordered list
 const ulMatch = line.match(/^(\s*)[-*+]\s+(.*)/);
 if (ulMatch) {
 if (!inList) { if (inOrderedList) { output.push('</ol>'); inOrderedList = false; } output.push('<ul class="md-ul">'); inList = true; }
 output.push(`<li class="md-li">${inlineFormat(ulMatch[2])}</li>`);
 continue;
 }

 // Ordered list
 const olMatch = line.match(/^(\s*)\d+\.\s+(.*)/);
 if (olMatch) {
 if (!inOrderedList) { if (inList) { output.push('</ul>'); inList = false; } output.push('<ol class="md-ol">'); inOrderedList = true; }
 output.push(`<li class="md-li">${inlineFormat(olMatch[2])}</li>`);
 continue;
 }

 // Empty line
 if (line.trim() === '') {
 closeList();
 output.push('');
 continue;
 }

 // Paragraph
 closeList();
 output.push(`<p class="md-p">${inlineFormat(line)}</p>`);
 }

 closeList();
 if (inCodeBlock && codeLines.length) {
 output.push(`<pre class="md-pre"><code class="md-code">${codeLines.map(escapeHtml).join('\n')}</code></pre>`);
 }

 return output.join('\n');
}

// ─── Helpers ──────────────────────────────────────────────────────────────────
function formatDate(iso: string): string {
 return new Date(iso).toLocaleDateString('en-US', {
 year: 'numeric',
 month: 'long',
 day: 'numeric',
 });
}

function formatDateShort(iso: string): string {
 return new Date(iso).toLocaleDateString('en-US', {
 year: 'numeric',
 month: 'short',
 day: 'numeric',
 });
}

// ─── Page Component ───────────────────────────────────────────────────────────
export default function ChangelogPage() {
 const [releases, setReleases] = useState<GitHubRelease[]>([]);
 const [loading, setLoading] = useState(true);
 const [error, setError] = useState(false);

 useEffect(() => {
 fetch(
 'https://api.github.com/repos/fleetbase/fleetbase/releases?per_page=30',
 {
 headers: {
 Accept: 'application/vnd.github+json',
 'X-GitHub-Api-Version': '2022-11-28',
 },
 }
 )
 .then((res) => {
 if (!res.ok) throw new Error(`GitHub API ${res.status}`);
 return res.json();
 })
 .then((data: GitHubRelease[]) => {
 setReleases(data.filter((r) => !r.draft));
 setLoading(false);
 })
 .catch(() => {
 setError(true);
 setLoading(false);
 });
 }, []);

 return (
 <>
 {/* Scoped styles for the markdown renderer */}
 <style>{`
 .md-h1 { font-size: 1.5rem; font-weight: 600; margin: 1.5rem 0 0.75rem; color: var(--accent-foreground); }
 .md-h2 { font-size: 1.25rem; font-weight: 600; margin: 1.5rem 0 0.75rem; color: var(--accent-foreground); }
 .md-h3 { font-size: 1.1rem; font-weight: 500; margin: 1.25rem 0 0.5rem; color: var(--accent-foreground); }
 .md-h4, .md-h5, .md-h6 { font-size: 1rem; font-weight: 500; margin: 1rem 0 0.5rem; color: var(--accent-foreground); }
 .md-p { color: var(--muted-foreground); line-height: 1.7; margin-bottom: 0.75rem; font-size: 1rem; }
 .md-blockquote { border-left: 2px solid hsl(var(--primary) / 0.4); padding-left: 1rem; margin: 0.75rem 0; font-style: italic; color: var(--muted-foreground); }
 .md-ul, .md-ol { color: var(--muted-foreground); margin-bottom: 0.75rem; padding-left: 0; list-style: none; }
 .md-ol { list-style: decimal; padding-left: 1.25rem; }
 .md-li { display: flex; align-items: flex-start; gap: 0.625rem; margin-bottom: 0.375rem; font-size: 1rem; }
 .md-ol .md-li { display: list-item; }
 .md-li::before { content: ''; display: inline-block; width: 6px; height: 6px; border-radius: 50%; background: var(--muted-foreground); margin-top: 0.5rem; flex-shrink: 0; }
 .md-ol .md-li::before { display: none; }
 .inline-code { background: var(--muted); color: var(--primary); padding: 0.125rem 0.375rem; border-radius: 0.25rem; font-size: 0.875rem; font-family: monospace; }
 .md-pre { background: var(--muted); border-radius: 0.5rem; padding: 1rem; overflow-x: auto; margin: 1rem 0; }
 .md-code { font-size: 0.875rem; font-family: monospace; white-space: pre; }
 .md-hr { border: none; border-top: 1px solid var(--border); margin: 1.5rem 0; }
 .md-link { color: var(--primary); text-decoration: underline; text-underline-offset: 4px; }
 .md-link:hover { opacity: 0.8; }
 `}</style>

 <section className="section-padding container max-w-5xl space-y-12">
 {/* Header */}
 <div className="flex flex-wrap items-center justify-between gap-10">
 <div className="space-y-3">
 <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs mb-2">
 <span className="text-primary">●</span>
 <span>Auto-synced from GitHub</span>
 </div>
 <h1 className="text-4xl leading-tight font-semibold tracking-tight md:text-5xl">
 Changelog
 </h1>
 <p className="text-muted-foreground text-lg leading-snug">
 New updates and product improvements to Fleetbase.
 </p>
 </div>
 <div className="flex flex-col sm:flex-row gap-3">
 <Button variant="outline" size="sm" className="h-10 gap-2" asChild>
 <Link
 href="https://github.com/fleetbase/fleetbase/releases"
 target="_blank"
 rel="noopener noreferrer"
 >
 <GitCommit className="h-4 w-4" />
 View on GitHub
 <ExternalLink className="h-3 w-3 opacity-60" />
 </Link>
 </Button>
 <Button
 variant="muted"
 size="sm"
 className="bg-muted/40 h-10 gap-2 !px-4 font-normal"
 asChild
 >
 <Link
 href="https://github.com/fleetbase/fleetbase/releases.atom"
 target="_blank"
 rel="noopener noreferrer"
 >
 Subscribe for updates
 <Bell className="h-4 w-4" />
 </Link>
 </Button>
 </div>
 </div>

 {/* Loading */}
 {loading && (
 <div className="flex items-center justify-center py-20 gap-3 text-muted-foreground">
 <Loader2 className="h-5 w-5 animate-spin" />
 <span>Loading releases from GitHub…</span>
 </div>
 )}

 {/* Error */}
 {!loading && error && (
 <div className="text-center py-20">
 <p className="text-muted-foreground text-lg">
 Unable to load releases. View them directly on{' '}
 <Link
 href="https://github.com/fleetbase/fleetbase/releases"
 target="_blank"
 rel="noopener noreferrer"
 className="text-primary underline underline-offset-4"
 >
 GitHub
 </Link>
 .
 </p>
 </div>
 )}

 {/* Timeline */}
 {!loading && !error && releases.length > 0 && (
 <div className="[--sidebar-width:160px]">
 {/* Scrollable release feed */}
 <div className="relative overflow-y-auto max-h-[72vh] pr-2 scrollbar-thin scrollbar-thumb-border scrollbar-track-transparent rounded-xl border bg-muted/20 p-6 md:p-8">
 {releases.map((release, index) => (
 <div key={release.id} className="flex gap-5 md:gap-12">
 {/* Date column */}
 <div className="relative mt-0.5 shrink-0 md:mt-1.5 md:w-[var(--sidebar-width)]">
 <time className="text-muted-foreground text-sm hidden md:inline-block">
 {formatDateShort(release.published_at)}
 </time>
 <div className="bg-background border-input absolute top-0 right-0 z-10 grid size-5 translate-x-1/2 place-items-center rounded-full border">
 <div className="bg-secondary size-2 rounded-full" />
 </div>
 {index < releases.length - 1 && (
 <div className="absolute top-0 right-0 h-full w-0.25 bg-[repeating-linear-gradient(to_bottom,var(--input)_0px,var(--input)_8px,transparent_12px,transparent_20px)]" />
 )}
 </div>

 {/* Content */}
 <div
 className={cn(
 'mb-16 flex-1 min-w-0',
 index === releases.length - 1 && 'mb-0'
 )}
 >
 {/* Mobile date */}
 <time className="text-muted-foreground text-sm mb-3 inline-block md:hidden">
 {formatDate(release.published_at)}
 </time>

 {/* Release header */}
 <div className="flex flex-wrap items-center gap-3 mb-4">
 <h2 className="text-2xl leading-tight font-semibold">
 {release.name || release.tag_name}
 </h2>
 <Link
 href={release.html_url}
 target="_blank"
 rel="noopener noreferrer"
 className="inline-flex items-center gap-1.5 text-xs text-muted-foreground border rounded-full px-2.5 py-1 hover:text-foreground hover:border-foreground transition-colors"
 >
 <Tag className="h-3 w-3" />
 {release.tag_name}
 <ExternalLink className="h-2.5 w-2.5 opacity-60" />
 </Link>
 {release.prerelease && (
 <span className="text-xs bg-amber-500/15 text-amber-600 dark:text-amber-400 border border-amber-500/30 rounded-full px-2.5 py-1 font-medium">
 Pre-release
 </span>
 )}
 </div>

 {/* Rendered Markdown body */}
 {release.body ? (
 <div
 className="mt-2"
 dangerouslySetInnerHTML={{
 __html: parseMarkdown(release.body),
 }}
 />
 ) : (
 <p className="text-muted-foreground text-sm">
 No release notes provided.{' '}
 <Link
 href={release.html_url}
 target="_blank"
 rel="noopener noreferrer"
 className="text-primary underline underline-offset-4"
 >
 View on GitHub →
 </Link>
 </p>
 )}

 {/* View full release link */}
 <div className="mt-6">
 <Link
 href={release.html_url}
 target="_blank"
 rel="noopener noreferrer"
 className="inline-flex items-center gap-1.5 text-sm text-primary hover:opacity-80 transition-opacity"
 >
 View full release on GitHub
 <ExternalLink className="h-3.5 w-3.5" />
 </Link>
 </div>
 </div>
 </div>
 ))}
 </div>
 {/* Footer */}
 <div className="flex justify-end mt-6">
 <Button
 variant="outline"
 className="h-12 w-full md:w-[calc(100%-var(--sidebar-width))]"
 asChild
 >
 <Link
 href="https://github.com/fleetbase/fleetbase/releases"
 target="_blank"
 rel="noopener noreferrer"
 >
 View all releases on GitHub
 <ExternalLink className="ml-2 h-4 w-4" />
 </Link>
 </Button>
 </div>
 </div>
 )}
 </section>
 </>
 );
}
