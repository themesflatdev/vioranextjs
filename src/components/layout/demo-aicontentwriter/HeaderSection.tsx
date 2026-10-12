"use client";

import { useState, type ReactNode } from "react";
import { useHeaderFixed } from "@/hooks/useHeaderFixed";
import { useScrollSmoother } from "@/hooks/useScrollSmoother";
import { useWow } from "@/hooks/useWow";
import Header from "./Header";
import Footer from "./Footer";
import MobileNav from "./MobileNav";
import ScrollToTop from "@/components/common/ScrollToTop";

export default function HeaderSection({ children }: { children: ReactNode }) {
  const isFixed = useHeaderFixed();
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  useScrollSmoother();
  useWow();

  return (
    <div className="niche-aicontentwriter">
      <div id="wrapper">
        <Header fixed isFixed={isFixed} onOpenMobileNav={() => setMobileNavOpen(true)} />

        <div id="smooth-wrapper" className="smooth-wrapper-aicontentwriter">
          <div id="smooth-content">
            <Header onOpenMobileNav={() => setMobileNavOpen(true)} />
            {children}
            <Footer />
          </div>
        </div>
      </div>

      <MobileNav open={mobileNavOpen} onClose={() => setMobileNavOpen(false)} />
      <ScrollToTop />
    </div>
  );
}
