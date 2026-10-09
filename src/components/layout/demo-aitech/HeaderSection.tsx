"use client";

import { useState, type ReactNode } from "react";
import { useHeaderSticky } from "@/hooks/useHeaderSticky";
import { useWow } from "@/hooks/useWow";
import Header from "./Header";
import Footer from "./Footer";
import MobileNav from "./MobileNav";

// aitech's original HTML has no #smooth-wrapper/#smooth-content — both
// headers sit directly inside a plain `#wrapper` div, no GSAP ScrollSmoother
// DOM wrapper despite the script being loaded (verified: no such div
// anywhere in the source). Do not add one here, and never call
// useScrollSmoother() for this niche.
export default function HeaderSection({ children }: { children: ReactNode }) {
  const isSticky = useHeaderSticky();
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  useWow();

  return (
    <div className="niche-aitech">
      <div id="wrapper">
        <Header fixed isSticky={isSticky} onOpenMobileNav={() => setMobileNavOpen(true)} />
        <Header onOpenMobileNav={() => setMobileNavOpen(true)} />
        {children}
        <Footer />
      </div>
      <MobileNav open={mobileNavOpen} onClose={() => setMobileNavOpen(false)} />
    </div>
  );
}
