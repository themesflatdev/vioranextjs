"use client";

import Image from "next/image";
import { useImageParallax } from "@/hooks/useImageParallax";

// Client/Industry/Scope/Timeline + hero image are static, shared across
// every slug — portfolio-detail.html only ever demos this one project
// (see CLAUDE.md rule 4 / master-workflow note on single shared demo body).
// Only the title (H1) is dynamic per portfolio.ts item.
export default function PortfolioDetailHero({ title }: { title: string }) {
  const parallaxRef = useImageParallax<HTMLDivElement>();

  return (
    <div className="thumbs-portfolio parallax-container" ref={parallaxRef}>
      <div className="thumbs parallax-image">
        <Image
          className="image-inner"
          loading="lazy"
          width={1920}
          height={800}
          src="/assets/images/demo-corporate/thumbs-portfolio.jpg"
          alt="thumbs-portfolio"
        />
      </div>
      <div className="content-inner">
        <div className="tf-container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className="text_white">{title}</h1>
            </div>
            <div className="col-lg-6">
              <div className="content">
                <ul className="list d-grid gap_8">
                  <li className="text-body-2">
                    <span className="text_secondary">Client: </span>
                    <span className="text_primary">exora Group</span>
                  </li>
                  <li className="text-body-2">
                    <span className="text_secondary">Industry: </span>
                    <span className="text_primary">Technology &amp; Innovation</span>
                  </li>
                  <li className="text-body-2">
                    <span className="text_secondary">Scope: </span>
                    <span className="text_primary">
                      Brand Audit, Visual Identity, Corporate Stationery
                    </span>
                  </li>
                  <li className="text-body-2">
                    <span className="text_secondary">Timeline: </span>
                    <span className="text_primary">12 weeks</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
