"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import { NormalHeader } from "@/components/layout/demo-gardenlandscaping/HeaderSection";
import { useImageParallax } from "@/hooks/useImageParallax";

export default function ParallaxHeroWrap({ children }: { children: ReactNode }) {
  const parallaxRef = useImageParallax<HTMLDivElement>();

  return (
    <div className="wrap-header-hero parallax-container" ref={parallaxRef}>
      <div className="thumbs parallax-image">
        <Image
          className="image-inner"
          width={1920}
          height={840}
          loading="eager"
          src="/assets/images/demo-gardenlandscaping/hero-1.jpg"
          alt="hero"
        />
      </div>
      <NormalHeader />
      {children}
    </div>
  );
}
