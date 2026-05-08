'use client';

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react';

import { cn } from '@/lib/utils';

export const SUPPORTED_LANGUAGES = [
  { id: 'curl', label: 'curl' },
  { id: 'js', label: 'JavaScript' },
  { id: 'php', label: 'PHP' },
  { id: 'python', label: 'Python' },
] as const;

export type LanguageId = (typeof SUPPORTED_LANGUAGES)[number]['id'];

const STORAGE_KEY = 'fleetbase:api-docs:language';

interface LanguageContextValue {
  language: LanguageId;
  setLanguage: (id: LanguageId) => void;
}

const LanguageContext = createContext<LanguageContextValue>({
  language: 'curl',
  setLanguage: () => {},
});

interface LanguageTabsProviderProps {
  children: ReactNode;
  /** Initial language until localStorage hydrates. */
  defaultLanguage?: LanguageId;
}

/**
 * Provider for syncing the selected code-sample language across every
 * <HttpRequest> on the page. The selection persists to localStorage so a
 * user's preference carries between page loads.
 */
export function LanguageTabsProvider({
  children,
  defaultLanguage = 'curl',
}: LanguageTabsProviderProps) {
  const [language, setLanguageState] = useState<LanguageId>(defaultLanguage);

  // Hydrate from localStorage on mount.
  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored && SUPPORTED_LANGUAGES.some((l) => l.id === stored)) {
        setLanguageState(stored as LanguageId);
      }
    } catch {
      // Storage may be unavailable (privacy mode, SSR). Fall back to default.
    }
  }, []);

  const setLanguage = useCallback((id: LanguageId) => {
    setLanguageState(id);
    try {
      window.localStorage.setItem(STORAGE_KEY, id);
    } catch {
      // Ignore — non-fatal.
    }
  }, []);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useApiLanguage() {
  return useContext(LanguageContext);
}

interface LanguageTabsProps {
  /** Restrict to a subset of languages. Default: all supported. */
  languages?: LanguageId[];
  className?: string;
}

/**
 * The tab bar that sits at the top of every <HttpRequest>. Reads from and
 * writes to the LanguageTabsProvider so all instances on the page stay in
 * sync.
 */
export function LanguageTabs({ languages, className }: LanguageTabsProps) {
  const { language, setLanguage } = useApiLanguage();
  const list = languages
    ? SUPPORTED_LANGUAGES.filter((l) => languages.includes(l.id))
    : SUPPORTED_LANGUAGES;

  return (
    <div
      role="tablist"
      aria-label="Code sample language"
      className={cn(
        'flex items-center gap-1 border-b border-border/40 px-2 py-1',
        className,
      )}
    >
      {list.map((l) => (
        <button
          key={l.id}
          type="button"
          role="tab"
          aria-selected={language === l.id}
          onClick={() => setLanguage(l.id)}
          className={cn(
            'rounded px-2 py-1 text-xs font-medium transition-colors',
            language === l.id
              ? 'bg-muted text-foreground'
              : 'text-muted-foreground hover:bg-muted/60 hover:text-foreground',
          )}
        >
          {l.label}
        </button>
      ))}
    </div>
  );
}
