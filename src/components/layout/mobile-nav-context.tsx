'use client';

import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from 'react';

interface MobileNavContextValue {
  isOpen: boolean;
  setOpen: (open: boolean) => void;
  toggle: () => void;
}

const MobileNavContext = createContext<MobileNavContextValue>({
  isOpen: false,
  setOpen: () => {},
  toggle: () => {},
});

export function MobileNavProvider({ children }: { children: ReactNode }) {
  const [isOpen, setOpen] = useState(false);
  const toggle = useCallback(() => setOpen((v) => !v), []);
  const value = useMemo(() => ({ isOpen, setOpen, toggle }), [isOpen, toggle]);
  return <MobileNavContext.Provider value={value}>{children}</MobileNavContext.Provider>;
}

export function useMobileNav() {
  return useContext(MobileNavContext);
}
