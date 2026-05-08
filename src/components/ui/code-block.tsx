'use client';

import { useEffect, useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus, vs } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Check, Copy } from 'lucide-react';

import { Button } from '@/components/ui/button';

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
  showLineNumbers?: boolean;
}

export function CodeBlock({
  code,
  language = 'javascript',
  label,
  className,
  showLineNumbers = true,
}: CodeBlockProps) {
  const [isDark, setIsDark] = useState(true);
  const [copied, setCopied] = useState(false);

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

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div
      className={`overflow-hidden rounded-xl border ${className ?? ''}`}
      style={{ backgroundColor: bg, borderColor: border }}
    >
      <div
        className="flex shrink-0 items-center justify-between border-b px-4 py-3"
        style={{ backgroundColor: headerBg, borderColor: border }}
      >
        <span className="font-mono text-sm text-muted-foreground">{label ?? language}</span>
        <Button variant="ghost" size="sm" onClick={handleCopy} className="h-8 px-2">
          {copied ? (
            <>
              <Check className="mr-1.5 h-3.5 w-3.5" />
              <span className="text-xs">Copied!</span>
            </>
          ) : (
            <>
              <Copy className="mr-1.5 h-3.5 w-3.5" />
              <span className="text-xs">Copy</span>
            </>
          )}
        </Button>
      </div>
      <div className="overflow-auto">
        <SyntaxHighlighter
          language={language}
          style={isDark ? vscDarkPlus : vs}
          customStyle={{
            margin: 0,
            padding: '1.25rem 1rem',
            background: 'transparent',
            fontSize: '0.875rem',
            lineHeight: '1.7',
          }}
          showLineNumbers={showLineNumbers}
          lineNumberStyle={{
            color: isDark ? '#4a4a4a' : '#bbb',
            paddingRight: '1.5rem',
            minWidth: '2.5rem',
            userSelect: 'none',
          }}
        >
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}
