"use client";

import Link from "next/link";
import { caseStudiesRow1, caseStudiesRow2, type CaseStudy } from "@/data/demo-corporate/caseStudies";
import { useSplitTextReveal } from "@/hooks/useSplitTextReveal";
import PortfolioCursorImage from "@/components/othersPages/demo-corporate/PortfolioCursorImage";

function PortfolioCard({ item }: { item: CaseStudy }) {
  const href = `/portfolio-detail/${item.slug}`;

  return (
    <div className="portfolio-item hover-image-2 cursor-wrapper">
      <PortfolioCursorImage href={href} image={item.image} width={item.width} height={item.height} loading="eager" />
      <div className="content">
        <h4 className="title mb_10">
          <Link href={href} className="link hover-line-text">
            {item.title}
          </Link>
        </h4>
        <div className="category text-label text-uppercase">{item.category}</div>
      </div>
    </div>
  );
}

export default function CaseStudiesSection() {
  const subRef = useSplitTextReveal<HTMLDivElement>("up");
  const titleRef = useSplitTextReveal<HTMLHeadingElement>("right");

  return (
    <div className="seciton-case-studies tf-spacing-3">
      <div className="tf-container">
        <div className="heading-section style-1 mb_60">
          <div className="row align-items-center">
            <div className="col-lg-7 d-grid gap_16">
              <div className="sub text-label text-uppercase text_secondary-color" ref={subRef}>Case Studies</div>
              <h2 className="title text_secondary-color" ref={titleRef}>Client Success Stories</h2>
            </div>
            <div className="col-lg-5 wow fadeInRight" data-wow-duration="2s">
              <Link href="/portfolio" className="tf-btn btn-hover-animate-2 ms-lg-auto">
                <span>View More</span>
                <span />
              </Link>
            </div>
          </div>
        </div>
        <div className="d-flex gap_10 wrap-portfolio-1 wow fadeInLeft">
          {caseStudiesRow1.map((item) => (
            <PortfolioCard item={item} key={item.image} />
          ))}
        </div>
        <div className="d-flex gap_10 wrap-portfolio-2 wow fadeInRight">
          {caseStudiesRow2.map((item) => (
            <PortfolioCard item={item} key={item.image} />
          ))}
        </div>
      </div>
    </div>
  );
}
