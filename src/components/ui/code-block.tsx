'use client';

import { useEffect, useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus, vs } from 'react-syntax-highlighter/dist/esm/styles/prism';

const DARK_BG = '#1e1e1e';
const DARK_HEADER = '#252526';
const DARK_BORDER = '#333333';
const LIGHT_BG = '#fafafa';
const LIGHT_HEADER = '#f0f0f0';
const LIGHT_BORDER = '#e5e7eb';

interface CodeBlockProps {
  code: string;
  language?: string;
  label?: string;
  className?: string;
}

export function CodeBlock({ code, language = 'javascript', label, className }: CodeBlockProps) {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const check = () => setIsDark(document.documentElement.classList.contains('dark'));
    check();
    const observer = new MutationObserver(check);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  const bg = isDark ? DARK_BG : LIGHT_BG;
  const headerBg = isDark ? DARK_HEADER : LIGHT_HEADER;
  const border = isDark ? DARK_BORDER : LIGHT_BORDER;

  return (
    <div
      className={`overflow-hidden rounded-xl border ${className ?? ''}`}
      style={{ backgroundColor: bg, borderColor: border }}
    >
      {label && (
        <div
          className="flex items-center gap-2 border-b px-4 py-3"
          style={{ backgroundColor: headerBg, borderColor: border }}
        >
          <div className="flex gap-1.5">
            <div className="h-2.5 w-2.5 rounded-full bg-red-400/60" />
            <div className="h-2.5 w-2.5 rounded-full bg-yellow-400/60" />
            <div className="h-2.5 w-2.5 rounded-full bg-green-400/60" />
          </div>
          <span className="ml-1 font-mono text-xs text-muted-foreground">{label}</span>
        </div>
      )}
      <SyntaxHighlighter
        language={language}
        style={isDark ? vscDarkPlus : vs}
        customStyle={{
          margin: 0,
          padding: '1.25rem 1rem',
          background: 'transparent',
          fontSize: '0.75rem',
          lineHeight: '1.7',
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}
