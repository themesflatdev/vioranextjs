"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import { useHeaderSticky } from "@/hooks/useHeaderSticky";
import { useScrollSmoother } from "@/hooks/useScrollSmoother";
import { useWow } from "@/hooks/useWow";
import Header from "./Header";
import Footer from "./Footer";
import MobileNav from "./MobileNav";
import ScrollToTop from "@/components/common/ScrollToTop";

// The original HTML nests the non-fixed header INSIDE `.wrap-header-hero`
// (between the hero's background thumb and `.hero-banner-13`), unlike every
// other niche where the header sits right above `{children}`. page.tsx needs
// to render that wrapper itself, so the non-fixed header moves out of
// HeaderSection and into a thin `NormalHeader` client component that pulls
// `onOpenMobileNav` from this context instead of receiving it as a prop.
const OpenMobileNavContext = createContext<(() => void) | null>(null);

export function NormalHeader() {
  const openMobileNav = useContext(OpenMobileNavContext);
  if (!openMobileNav) throw new Error("NormalHeader must be rendered within HeaderSection");
  return <Header onOpenMobileNav={openMobileNav} />;
}

export default function HeaderSection({ children }: { children: ReactNode }) {
  const isSticky = useHeaderSticky();
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const openMobileNav = () => setMobileNavOpen(true);
  useScrollSmoother();
  useWow();

  return (
    <OpenMobileNavContext.Provider value={openMobileNav}>
      <div className="niche-gardenlandscaping">
        <Header fixed isSticky={isSticky} onOpenMobileNav={openMobileNav} />

        <div id="smooth-wrapper">
          <div id="smooth-content">
            <main>{children}</main>
            <div className="tf-container w-1840">
              <Footer />
            </div>
          </div>
        </div>

        <MobileNav open={mobileNavOpen} onClose={() => setMobileNavOpen(false)} />
        <ScrollToTop />
      </div>
    </OpenMobileNavContext.Provider>
  );
}
