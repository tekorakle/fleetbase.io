'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize from 'rehype-sanitize';
import { Bell, ExternalLink, Tag, GitCommit, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

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

// ─── Markdown Components ──────────────────────────────────────────────────────
const markdownComponents: React.ComponentProps<typeof ReactMarkdown>['components'] = {
  h1: ({ children }) => (
    <h3 className="text-accent-foreground mt-6 mb-3 text-xl font-semibold sr-only">
      {children}
    </h3>
  ),
  h2: ({ children }) => (
    <h3 className="text-accent-foreground mt-6 mb-3 text-lg font-semibold">
      {children}
    </h3>
  ),
  h3: ({ children }) => (
    <h4 className="text-accent-foreground mt-4 mb-2 text-base font-medium">
      {children}
    </h4>
  ),
  p: ({ children }) => (
    <p className="text-muted-foreground text-base leading-relaxed mb-3">
      {children}
    </p>
  ),
  blockquote: ({ children }) => (
    <blockquote className="border-l-2 border-primary/40 pl-4 my-3 italic text-muted-foreground text-base">
      {children}
    </blockquote>
  ),
  ul: ({ children }) => (
    <ul className="text-muted-foreground text-base space-y-1.5 mb-3 list-none pl-0">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="text-muted-foreground text-base space-y-1.5 mb-3 list-decimal pl-5">
      {children}
    </ol>
  ),
  li: ({ children }) => (
    <li className="flex items-start gap-2.5">
      <span className="bg-muted-foreground flex size-1.5 rounded-full mt-2 shrink-0" />
      <span>{children}</span>
    </li>
  ),
  code: ({ children, className }) => {
    const isBlock = className?.includes('language-');
    if (isBlock) {
      return (
        <code className="block bg-muted rounded-lg p-4 overflow-x-auto text-sm font-mono my-4 whitespace-pre">
          {children}
        </code>
      );
    }
    return (
      <code className="bg-muted text-primary px-1.5 py-0.5 rounded text-sm font-mono">
        {children}
      </code>
    );
  },
  pre: ({ children }) => (
    <pre className="bg-muted rounded-lg p-4 overflow-x-auto text-sm font-mono my-4">
      {children}
    </pre>
  ),
  a: ({ href, children }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-primary underline underline-offset-4 hover:opacity-80"
    >
      {children}
    </a>
  ),
  img: ({ src, alt }) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={alt ?? ''} className="my-4 rounded-lg max-w-full" />
  ),
  hr: () => <hr className="border-border my-6" />,
  strong: ({ children }) => (
    <strong className="font-semibold text-foreground">{children}</strong>
  ),
  table: ({ children }) => (
    <div className="overflow-x-auto my-4">
      <table className="w-full text-sm border-collapse">{children}</table>
    </div>
  ),
  th: ({ children }) => (
    <th className="border border-border px-3 py-2 text-left font-medium bg-muted/50">
      {children}
    </th>
  ),
  td: ({ children }) => (
    <td className="border border-border px-3 py-2 text-muted-foreground">
      {children}
    </td>
  ),
};

// ─── Page Component ───────────────────────────────────────────────────────────
export default function ChangelogPage() {
  const [releases, setReleases] = useState<GitHubRelease[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch('https://api.github.com/repos/fleetbase/fleetbase/releases?per_page=30', {
      headers: {
        Accept: 'application/vnd.github+json',
        'X-GitHub-Api-Version': '2022-11-28',
      },
    })
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
    <section className="section-padding container max-w-5xl space-y-24">
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
          <div className="relative">
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
                    index === releases.length - 1 && 'mb-0',
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

                  {/* Markdown body */}
                  {release.body ? (
                    <div className="mt-2 space-y-2">
                      <ReactMarkdown
                        remarkPlugins={[remarkGfm]}
                        rehypePlugins={[rehypeRaw, rehypeSanitize]}
                        components={markdownComponents}
                      >
                        {release.body}
                      </ReactMarkdown>
                    </div>
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
          <div className="flex justify-end mt-16">
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
  );
}
