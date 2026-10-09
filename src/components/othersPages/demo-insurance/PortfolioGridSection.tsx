"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useStackElement } from "@/hooks/useStackElement";
import { useSplitTextReveal } from "@/hooks/useSplitTextReveal";
import { portfolioItems } from "@/data/demo-insurance/portfolio";

const tabs = [
  { key: "all", label: "View All" },
  { key: "business", label: "Business" },
  { key: "insurance", label: "Insurance" },
  { key: "cardiology", label: "Cardiology" },
];

function ProjectCard({ item, reversed }: { item: (typeof portfolioItems)[number]; reversed: boolean }) {
  const href = `/demo-insurance/porfolio-detail/${item.slug}`;

  const image = (
    <Link href={href} className={`img-style tf-animateCLP-${reversed ? "right" : "left"}`}>
      <Image width={555} height={555} loading="eager" src={item.image} alt="service" />
    </Link>
  );

  const content = (
    <div className={`content wow fadeIn${reversed ? "Left" : "Right"}`}>
      <div className="heading">
        <Link href={href} className="title mb_12 link h2">
          {item.title}
        </Link>
        <p className="text_secondary text-body-2">{item.desc}</p>
      </div>
      <ul className="list">
        {item.bullets.map((bullet) => (
          <li className="text-body-default" key={bullet}>
            <i className="icon-Check" />
            {bullet}
          </li>
        ))}
      </ul>
      <Link href={href} className="btn_link">
        <i className="icon-ArrowUpRight" />
      </Link>
    </div>
  );

  return (
    <div className="element">
      <div className={`service-item style-default hover-image${reversed ? " ctl" : ""}`}>
        {reversed ? (
          <>
            {content}
            {image}
          </>
        ) : (
          <>
            {image}
            {content}
          </>
        )}
      </div>
    </div>
  );
}

// section-portfolio-6 on porfolio.html — the 4 filter tabs
// (View All/Business/Insurance/Cardiology) all show the exact same 4
// projects in the source (a real demo-content bug, confirmed with user to
// preserve, not "fix" by fabricating per-category filtering). Since every
// tab's content is identical, this renders the 4 cards once instead of
// duplicating the same markup 4x — the tab buttons only toggle which one
// looks active, matching what a visitor actually sees either way.
export default function PortfolioGridSection() {
  const [activeTab, setActiveTab] = useState("business");
  const stackRef = useStackElement<HTMLDivElement>();
  const subRef = useSplitTextReveal<HTMLDivElement>("up");
  const titleRef = useSplitTextReveal<HTMLHeadingElement>("right");

  return (
    <div className="section-portfolio-6 flat-animate-tab tf-spacing-1">
      <div className="tf-container">
        <div className="heading-section style-default text-center mb_49">
          <div className="sub text-label text-uppercase" ref={subRef}>
            portfolio
          </div>
          <h2 className="title" ref={titleRef}>
            Our Latest Projects
          </h2>
        </div>
        <div className="tab-slide style-6 v2 d-flex justify-content-center mb_48">
          <ul className="menu-tab d-flex align-items-center gap_14 overflow-x-auto" role="tablist">
            {tabs.map((tab) => (
              <li className={`nav-tab-item${activeTab === tab.key ? " active" : ""}`} key={tab.key} role="presentation">
                <a
                  href={`#${tab.key}`}
                  className={`tab-link text-button${activeTab === tab.key ? " active" : ""}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveTab(tab.key);
                  }}
                >
                  {tab.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="tab-content">
          <div className="tab-pane active" id={activeTab} role="presentation">
            <div className="stack-element" ref={stackRef}>
              <div className="stack-content-wrap">
                {portfolioItems.map((item, index) => (
                  <ProjectCard item={item} reversed={index % 2 === 1} key={item.slug} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
