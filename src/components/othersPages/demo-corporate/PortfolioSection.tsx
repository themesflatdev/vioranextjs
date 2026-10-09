"use client";

import Link from "next/link";
import { portfolioItems } from "@/data/demo-corporate/portfolio";
import { useFixedThumb } from "@/hooks/useFixedThumb";
import { useStackElement } from "@/hooks/useStackElement";
import { useSplitTextReveal } from "@/hooks/useSplitTextReveal";
import PortfolioCursorImage from "./PortfolioCursorImage";

export default function PortfolioSection() {
  const wrapRef = useFixedThumb<HTMLDivElement>();
  const stackRef = useStackElement<HTMLDivElement>();
  const titleRef = useSplitTextReveal<HTMLHeadingElement>("right");

  return (
    <div className="section-portfolio tf-spacing-1">
      <div className="tf-container fixed-thumb-wrap" ref={wrapRef}>
        <div className="row">
          <div className="col-lg-4">
            <div className="fixed-thumb">
              <div className="heading-section style-default fixed-thumb">
                <div className="sub text-label text-uppercase wow fadeInUp">Case Studies</div>
                <h2 className="title text-nowrap" ref={titleRef}>Our Portfolio</h2>
              </div>
            </div>
          </div>
          <div className="col-lg-8 stack-element" ref={stackRef}>
            <div className="stack-content-wrap">
              {portfolioItems.map((item) => {
                const href = `/portfolio-detail/${item.slug}`;
                return (
                  <div className="element" key={item.slug}>
                    <div className="portfolio-item cursor-wrapper">
                      <PortfolioCursorImage
                        href={href}
                        image={item.image}
                        width={item.width}
                        height={item.height}
                      />
                      <div className="content">
                        <Link href={href} className="h4 title link mb_12">
                          {item.title}
                        </Link>
                        <div className="text-label text-uppercase lh-16 letter-spacing-1">
                          {item.category}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
