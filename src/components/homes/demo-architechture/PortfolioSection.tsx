"use client";

import { useRef } from "react";
import Image from "next/image";
import { useStackElements } from "@/hooks/useStackElements";

type PortfolioItem = {
  image: string;
};

const portfolioItems: PortfolioItem[] = [
  { image: "/assets/images/demo-architechture/portfolio-1.jpg" },
  { image: "/assets/images/demo-architechture/portfolio-2.jpg" },
  { image: "/assets/images/demo-architechture/portfolio-3.jpg" },
];

const DESCRIPTION =
  "A minimalist villa with clean stone façades, expansive glazing, and a private courtyard garden — designed for timeless elegance, natural light, and comfortable everyday living.";

function PortfolioCard({ item }: { item: PortfolioItem }) {
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
    <div className="element">
      <div className="portfolio-item style-3 hover-image-2 cursor-wrapper">
        <div className="row align-items-center">
          <div className="col-xl-4 col-lg-5">
            <div className="content">
              <div className="heading mb_48">
                <div className="wrap-tag mb_16">
                  <span className="tag text-label text-uppercase letter-spacing-1">Residential</span>
                  <span className="tag text-label text-uppercase letter-spacing-1">Architecture</span>
                </div>
                <div className="h1 fw-4 text-uppercase mb_16">
                  <a href="#" className="hover-line-text">
                    Modern Villa Garden
                  </a>
                </div>
                <p className="text-body-2">{DESCRIPTION}</p>
              </div>
              <div className="wrap-info">
                <div>
                  <span className="text-label text_muted d-block letter-spacing-1 text-uppercase mb_8 lh-16">
                    Location:
                  </span>
                  <h6 className="fw-4 text-uppercase">Los Angeles, USA</h6>
                </div>
                <div>
                  <span className="text-label text_muted d-block letter-spacing-1 text-uppercase mb_8 lh-16">
                    Year:
                  </span>
                  <h6 className="fw-4 text-uppercase">August 18, 2025</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-8 col-lg-7">
            <a
              href="#"
              className="img-style area-cursor-custom"
              onMouseMove={handleMove}
              onMouseLeave={handleLeave}
            >
              <Image src={item.image} width={1140} height={641} alt="portfolio" />
              <div className="custom-cursor text-button fw-6" ref={cursorRef}>
                View
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PortfolioSection() {
  const stackRef = useStackElements<HTMLDivElement>();

  return (
    <div className="section-portfolio-4 tf-spacing-12">
      <div className="tf-container large">
        <div className="heading-section-6 mb_48">
          <div className="row align-items-center">
            <div className="col-sm-8 col-7">
              <span className="tag-line color-dark lh-16 text-label letter-spacing-1 text-uppercase mb_20 text_primary wow fadeInUp">
                Portfolio
              </span>
              <h3 className="text-uppercase font-2 split-text effect-blur-fade">Featured work</h3>
            </div>
            <div className="col-sm-4 col-5">
              <a href="#" className="tf-btn-2 btn-switch-text border-dark ms-auto wow fadeInRight">
                <span>
                  <span className="btn-double-text" data-text="View All">
                    View All
                  </span>
                </span>
              </a>
            </div>
          </div>
          <div className="line" />
        </div>
        <div className="wrap-portfolio-item stack-element" ref={stackRef}>
          <div className="stack-content-wrap">
            {portfolioItems.map((item) => (
              <PortfolioCard item={item} key={item.image} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
