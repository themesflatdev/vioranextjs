"use client";

import { useState, type ReactNode } from "react";
import Image from "next/image";
import { useHeaderSticky } from "@/hooks/useHeaderSticky";
import { useScrollSmoother } from "@/hooks/useScrollSmoother";
import { useWow } from "@/hooks/useWow";
import TopBar from "./TopBar";
import Header from "./Header";
import Footer from "./Footer";
import MobileNav from "./MobileNav";
import HeroSection from "@/components/homes/demo-solarenergy/HeroSection";

// This niche's original markup wraps `.shape` + the topbar + the *normal*
// header + the hero banner together in one `.wrap-header-hero-2` container
// (hero-only positioning context for `.shape`/`.parallax-container`) — unlike
// every other niche, where the hero section is just the first child passed
// down from page.tsx. Since this niche has only one page, HeroSection is
// rendered directly here instead of being threaded through `children`, so it
// can sit inside that wrapper; `children` is only the `.main-content` markup.
export default function HeaderSection({ children }: { children: ReactNode }) {
  const isSticky = useHeaderSticky();
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  useScrollSmoother();
  useWow();

  return (
    <div className="niche-solarenergy">
      <Header fixed isSticky={isSticky} onOpenMobileNav={() => setMobileNavOpen(true)} />

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <div className="wrap-header-hero-2">
            <div className="shape position-absolute">
              <Image
                src="/assets/images/demo-solarenergy/shape-1.png"
                alt=""
                width={1921}
                height={1203}
              />
            </div>
            <TopBar />
            <Header onOpenMobileNav={() => setMobileNavOpen(true)} />
            <HeroSection />
          </div>
          {children}
          <Footer />
        </div>
      </div>

      <MobileNav open={mobileNavOpen} onClose={() => setMobileNavOpen(false)} />
    </div>
  );
}
