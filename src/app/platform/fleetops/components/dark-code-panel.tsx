'use client';

import { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Check, Copy } from 'lucide-react';

import { cn } from '@/lib/utils';

/**
 * Dark code panel — always-dark themed. One integrated chrome: title bar
 * with live-pulse dot + label + copy button, then the code body directly
 * underneath. No outer wrapper, no double chrome.
 *
 * Different from the shared CodeBlock component (which follows the global
 * light/dark theme); this is locked to dark so it reads as a "console" on
 * the light Fleet-Ops landing page.
 */
export function DarkCodePanel({
  label,
  language = 'javascript',
  code,
  className,
}: {
  label: string;
  language?: string;
  code: string;
  className?: string;
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div
      className={cn(
        'fo-card overflow-hidden border border-white/10 bg-[#0d1117] text-white shadow-[0_30px_60px_-30px_rgba(0,0,0,0.45)]',
        className,
      )}
    >
      {/* Title bar — pulse dot + label + copy button, all in one row */}
      <div className="flex items-center justify-between gap-3 border-b border-white/10 bg-[#0a0d12] px-5 py-3">
        <div className="flex items-center gap-2.5 text-[11px] font-medium uppercase tracking-[0.7px] text-white/65">
          <span className="fo-pulse-dot" />
          {label}
        </div>
        <button
          type="button"
          onClick={handleCopy}
          className="inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-[11px] font-medium text-white/65 transition-colors hover:bg-white/5 hover:text-white"
          aria-label="Copy code"
        >
          {copied ? (
            <>
              <Check className="size-3.5" /> Copied
            </>
          ) : (
            <>
              <Copy className="size-3.5" /> Copy
            </>
          )}
        </button>
      </div>

      {/* Code body */}
      <div className="overflow-auto">
        <SyntaxHighlighter
          language={language}
          style={vscDarkPlus}
          customStyle={{
            margin: 0,
            padding: '1.25rem 1.25rem',
            background: 'transparent',
            fontSize: '0.85rem',
            lineHeight: '1.65',
          }}
          showLineNumbers
          lineNumberStyle={{
            color: 'rgba(255,255,255,0.20)',
            paddingRight: '1.5rem',
            minWidth: '2.25rem',
            userSelect: 'none',
          }}
        >
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}
