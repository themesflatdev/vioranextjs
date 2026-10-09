"use client";

import Link from "next/link";
import { useSplitTextReveal } from "@/hooks/useSplitTextReveal";
import PortfolioCursorImage from "./PortfolioCursorImage";
import { portfolioItems } from "@/data/demo-spasalon/portfolio";

// 3 rows of 2 cards, narrow/wide alternating exactly like the source HTML
// (col-lg-4 + col-lg-8 per row, in that order every row — item 2/3 both
// happen to be the wide "Face Scrubbing" card back-to-back across the row
// boundary, matching the original markup).
export default function PortfolioGridSection() {
  const titleRef = useSplitTextReveal<HTMLHeadingElement>("right");
  const rows = [portfolioItems.slice(0, 2), portfolioItems.slice(2, 4), portfolioItems.slice(4, 6)];

  return (
    <div className="section-portfolio-5 tf-spacing-1">
      <div className="tf-container medium">
        <div className="heading-section d-grid gap_16 text-center mb_60">
          <div className="sub text-label text_primary-color text-uppercase wow fadeInUp">Case Studies</div>
          <h2 className="title text-nowrap split-text effect-right" ref={titleRef}>
            Revive the body &amp; Soul
          </h2>
        </div>
        <div className="d-grid gap_40">
          {rows.map((row, rowIndex) => (
            <div className="row" key={rowIndex}>
              {row.map((item) => (
                <div className={item.wide ? "col-lg-8 col-md-6" : "col-lg-4 col-md-6"} key={item.slug}>
                  <div className="portfolio-item cursor-wrapper hover-image-translate">
                    <PortfolioCursorImage
                      href={`/demo-spasalon/portfolio-detail/${item.slug}`}
                      image={item.image}
                      width={item.width}
                      height={item.height}
                    />
                    <div className="content">
                      <Link href={`/demo-spasalon/portfolio-detail/${item.slug}`} className="h4 title link mb_12">
                        {item.title}
                      </Link>
                      <div className="text-label text-uppercase lh-16 letter-spacing-1">{item.category}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
