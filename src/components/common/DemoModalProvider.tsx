"use client";

import { createContext, useContext, useMemo, useState, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import DemoModal from "./DemoModal";

type DemoModalContextValue = {
  open: boolean;
  openDemoModal: () => void;
  closeDemoModal: () => void;
};

const DemoModalContext = createContext<DemoModalContextValue | null>(null);

export function useDemoModal() {
  const ctx = useContext(DemoModalContext);
  if (!ctx) throw new Error("useDemoModal must be used within DemoModalProvider");
  return ctx;
}

export default function DemoModalProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const [prevPathname, setPrevPathname] = useState(pathname);

  // Safety net: if navigation to a demo happens through any path other than
  // the explicit onClick close handler, the route change itself closes the
  // popup so it never stays open (and the body never stays scroll-locked)
  // on the new page. Derived during render (not an effect) so the close
  // happens in the same commit as the route change, not one render later.
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setOpen(false);
  }

  const value = useMemo(
    () => ({
      open,
      openDemoModal: () => setOpen(true),
      closeDemoModal: () => setOpen(false),
    }),
    [open],
  );

  return (
    <DemoModalContext.Provider value={value}>
      {children}
      <DemoModal open={open} onClose={() => setOpen(false)} />
    </DemoModalContext.Provider>
  );
}
