"use client";

import { useRef } from "react";
import Image from "next/image";
import { useSplitTextReveal } from "@/hooks/useSplitTextReveal";
import { popularMenuItems, type PopularMenuItem } from "@/data/demo-restaurant/popularMenu";

// Mirrors assets/js/main.js `cursorCustom` for `.area-cursor-custom` — each
// card tracks the mouse within its own image area independently (unlike
// OurProjectSection's single shared area), matching the original's
// `$(this)`-scoped jQuery handler run per `.area-cursor-custom` element.
function PopularMenuCard({ item }: { item: PopularMenuItem }) {
  const cursorRef = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
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

  const content = (
    <div className="content d-flex flex-column justify-content-between gap_8">
      <h4 className="title text-capitalize">
        <a href="#" className="hover-line-text link">
          {item.name}
        </a>
      </h4>
      <p className="text-body-default">{item.desc}</p>
    </div>
  );

  const image = (
    <div className="img-style area-cursor-custom overflow-hidden" onMouseMove={handleMove} onMouseLeave={handleLeave}>
      <Image data-speed="0.9" width={455} height={455} loading="lazy" src={item.image} alt="menu-popular" />
      <div className="custom-cursor text-button fw-6" ref={cursorRef}>
        Order
      </div>
      <h4 className="price">{item.price}</h4>
    </div>
  );

  return (
    <div className="menu-restaurant-item style-list cursor-wrapper">
      {item.imageFirst ? (
        <>
          {image}
          {content}
        </>
      ) : (
        <>
          {content}
          {image}
        </>
      )}
    </div>
  );
}

export default function DeliciousPopularSection() {
  const titleRef = useSplitTextReveal<HTMLHeadingElement>("blur-fade");
  const column1 = popularMenuItems.slice(0, 2);
  const column2 = popularMenuItems.slice(2, 4);

  return (
    <div className="section-delicious-popular">
      <div className="tf-container medium">
        <div className="heading-section-3 flex-wrap gap_16 d-flex align-items-center justify-content-between mb_40">
          <div>
            <div className="sub text-label text-uppercase wow fadeInUp text_white mb_12 lh-16">Choose delicious</div>
            <h3 className="title" ref={titleRef}>
              Popular Menu
            </h3>
          </div>
          <div>
            <a href="#" className="tf-btn style-border btn-hover-animate-border wow fadeInRight">
              <span>View All</span>
              <span />
            </a>
          </div>
        </div>
      </div>
      <div className="wrap tf-grid-layout lg-col-2 gap_20 wow fadeInUp">
        <div className="d-flex gap_20 flex-column">
          {column1.map((item) => (
            <PopularMenuCard item={item} key={item.name} />
          ))}
        </div>
        <div className="d-flex gap_20 flex-column">
          {column2.map((item) => (
            <PopularMenuCard item={item} key={item.name} />
          ))}
        </div>
      </div>
    </div>
  );
}
