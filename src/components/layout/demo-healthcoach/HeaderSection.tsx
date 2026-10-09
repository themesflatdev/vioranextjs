"use client";

import { useState, type ReactNode } from "react";
import { useHeaderSticky } from "@/hooks/useHeaderSticky";
import { useScrollSmoother } from "@/hooks/useScrollSmoother";
import { useWow } from "@/hooks/useWow";
import Header from "./Header";
import Footer from "./Footer";
import MobileNav from "./MobileNav";

export default function HeaderSection({ children }: { children: ReactNode }) {
  const isSticky = useHeaderSticky();
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  useScrollSmoother();
  useWow();

  return (
    <div className="niche-healthcoach">
      <div id="wrapper">
        <Header fixed isSticky={isSticky} onOpenMobileNav={() => setMobileNavOpen(true)} />

        <div id="smooth-wrapper" className="smooth-wrapper-healthcoach">
          <div id="smooth-content">
            <Header onOpenMobileNav={() => setMobileNavOpen(true)} />
            {children}
            <Footer />
          </div>
        </div>
      </div>

      <MobileNav open={mobileNavOpen} onClose={() => setMobileNavOpen(false)} />
    </div>
  );
}
