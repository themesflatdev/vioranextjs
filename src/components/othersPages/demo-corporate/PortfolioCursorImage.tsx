"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

type PortfolioCursorImageProps = {
  href: string;
  image: string;
  width: number;
  height: number;
  loading?: "eager" | "lazy";
  className?: string;
};

// Mirrors assets/js/main.js `cursorCustom`: the "View" label tracks the
// mouse inside `.area-cursor-custom`, positioned relative to that element
// (not the viewport) — mutate the DOM node directly instead of React state
// so it doesn't re-render on every mousemove. Shared by CaseStudiesSection
// (home) and the /portfolio list, which wrap this in different outer
// markup/classes per their own HTML source — only this cursor mechanism is
// identical between the two.
export default function PortfolioCursorImage({
  href,
  image,
  width,
  height,
  loading = "lazy",
  className = "img-style area-cursor-custom mb_20",
}: PortfolioCursorImageProps) {
  const cursorRef = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const cursor = cursorRef.current;
    if (!cursor) return;
    cursor.style.top = `${e.clientY - rect.top - 60}px`;
    cursor.style.left = `${e.clientX - rect.left - 60}px`;
    cursor.style.opacity = "1";
    cursor.style.transform = "scale(1)";
  };

  const handleLeave = () => {
    const cursor = cursorRef.current;
    if (!cursor) return;
    cursor.style.opacity = "0";
    cursor.style.transform = "scale(0.3)";
  };

  return (
    <Link href={href} className={className} onMouseMove={handleMove} onMouseLeave={handleLeave}>
      <Image loading={loading} width={width} height={height} src={image} alt="portfolio" />
      <div className="custom-cursor text-button fw-6" ref={cursorRef}>
        View
      </div>
    </Link>
  );
}
