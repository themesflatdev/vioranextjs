"use client";

import { useState, type ReactNode } from "react";
import { useHeaderSticky } from "@/hooks/useHeaderSticky";
import TopBar from "./TopBar";
import Header from "./Header";
import Footer from "./Footer";
import MobileNav from "./MobileNav";

export default function HeaderSection({ children }: { children: ReactNode }) {
  const isSticky = useHeaderSticky();
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <div className="niche-agriculturefarming">
      <Header fixed isSticky={isSticky} onOpenMobileNav={() => setMobileNavOpen(true)} />

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <TopBar />
          <Header onOpenMobileNav={() => setMobileNavOpen(true)} />
          {children}
          <Footer />
        </div>
      </div>

      <MobileNav open={mobileNavOpen} onClose={() => setMobileNavOpen(false)} />
    </div>
  );
}
