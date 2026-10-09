"use client";

import { useEffect, useRef, useState } from "react";
import type Isotope from "isotope-layout";
import Image from "next/image";
import Link from "next/link";
import { useSplitTextReveal } from "@/hooks/useSplitTextReveal";
import { portfolioItems, portfolioFilters, portfolioDescription } from "@/data/demo-medical/portfolio";

// Mirrors main.js's fillterIso() exactly: itemSelector ".item-fillter",
// layoutMode "fitRows". Dynamic-imported in useEffect since Isotope touches
// `document` and isn't SSR-safe.
export default function PortfolioFilterGrid() {
  const titleRef = useSplitTextReveal<HTMLHeadingElement>("left");
  const descRef = useSplitTextReveal<HTMLParagraphElement>("lines-transform");
  const gridRef = useRef<HTMLDivElement>(null);
  const isoRef = useRef<Isotope | null>(null);
  const [activeFilter, setActiveFilter] = useState("*");

  useEffect(() => {
    let cancelled = false;
    import("isotope-layout").then(({ default: IsotopeCtor }) => {
      if (cancelled || !gridRef.current) return;
      isoRef.current = new IsotopeCtor(gridRef.current, {
        itemSelector: ".item-fillter",
        layoutMode: "fitRows",
      });
    });
    return () => {
      cancelled = true;
      isoRef.current?.destroy();
      isoRef.current = null;
    };
  }, []);

  useEffect(() => {
    isoRef.current?.arrange({ filter: activeFilter });
  }, [activeFilter]);

  return (
    <div className="section-portfolio-3 tf-spacing-1">
      <div className="tf-container medium">
        <div className="heading-section-5 mb_56">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="left">
                <h3 className="title" ref={titleRef}>
                  Medical Cases: Challenges And Breakthroughs
                </h3>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="right">
                <p className="text-body-2 text_secondary desc" ref={descRef}>
                  We provide a wide range of healthcare services, such as general medicine,
                  treatments, surgical procedures, and rehabilitation.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="tf-filters style-2 gap_14 mb_44 overflow-x-auto mx-auto wow fadeInUp" data-wow-delay="0.4s">
          {portfolioFilters.map((item) => (
            <button
              key={item.filter}
              type="button"
              className={`btn-fillter text-button${activeFilter === item.filter ? " active" : ""}`}
              onClick={() => setActiveFilter(item.filter)}
            >
              {item.label}
            </button>
          ))}
        </div>
        <div className="fillters-wrap v2 wow fadeInUp mb_60" data-wow-delay="0.4s" ref={gridRef}>
          {portfolioItems.map((item) => (
            <div className={`portfolio-item style-2 item-fillter hover-image-2 ${item.filterClass}`} key={item.slug}>
              <div className="position-relative">
                <div className="img-style">
                  <Image loading="lazy" width={410} height={308} src={item.image} alt="portfolio-item" />
                  <Link href={`/demo-medical/portfolio-detail/${item.slug}`} className="overlay-link" />
                </div>
                <a href="#" className="btn-arrow">
                  <i className="icon-ArrowUpRight" />
                </a>
              </div>
              <div className="content">
                <a href="#" className="text-button text_primary-color category">
                  {item.category}
                </a>
                <Link href={`/demo-medical/portfolio-detail/${item.slug}`} className="title mb_8 link h5">
                  {item.title}
                </Link>
                <p className="text_secondary mb_16">{portfolioDescription}</p>
              </div>
            </div>
          ))}
        </div>
        <ul className="wg-pagination style-2 justify-content-center">
          <li className="active">
            <a href="#">1</a>
          </li>
          <li>
            <a href="#">2</a>
          </li>
          <li>
            <a href="#">3</a>
          </li>
          <li className="arrow">
            <a href="#">
              <i className="icon-CaretRight" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
