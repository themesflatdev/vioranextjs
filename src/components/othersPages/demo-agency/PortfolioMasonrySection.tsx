"use client";

import Link from "next/link";
import { portfolioItems } from "@/data/demo-agency/portfolio";
import { useSplitTextReveal } from "@/hooks/useSplitTextReveal";
import PortfolioCursorImage from "./PortfolioCursorImage";

const rows = [
  [portfolioItems[0], portfolioItems[1]],
  [portfolioItems[2], portfolioItems[3]],
  [portfolioItems[4], portfolioItems[5]],
];

export default function PortfolioMasonrySection() {
  const titleRef = useSplitTextReveal<HTMLHeadingElement>("right");

  return (
    <div className="section-portfolio-5 v2 tf-spacing-1">
      <div className="tf-container">
        <div className="heading-section d-grid gap_16 mb_44">
          <div className="sub text-label text_white text-uppercase wow fadeInUp">Case Studies</div>
          <h2 className="title text-nowrap text_white" ref={titleRef}>
            Client Success Stories
          </h2>
        </div>
        <div className="wrap-portfolio d-grid gap_40">
          {rows.map((row, rowIndex) => (
            <div className="row" key={rowIndex}>
              {row.map((item) => {
                const href = `/demo-agency/portfolio-detail/${item.slug}`;
                return (
                  <div className={item.colClass} key={item.slug}>
                    <div className="portfolio-item cursor-wrapper hover-image-translate">
                      <PortfolioCursorImage
                        href={href}
                        image={item.image}
                        width={item.width}
                        height={item.height}
                      />
                      <div className="content">
                        <Link href={href} className="h4 title link mb_4 text_white">
                          {item.title}
                        </Link>
                        <div className="letter-spacing-1 text_muted text-body-2">{item.category}</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
