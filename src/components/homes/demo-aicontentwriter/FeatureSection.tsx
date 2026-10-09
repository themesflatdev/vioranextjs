"use client";

import Image from "next/image";
import { useSplitTextReveal } from "@/hooks/useSplitTextReveal";
import { useStackElements } from "@/hooks/useStackElements";
import { features, type FeatureItem } from "@/data/demo-aicontentwriter/features";

function FeatureCard({ item }: { item: FeatureItem }) {
  const image = (
    <div className="img-style">
      <Image width={555} height={555} loading="lazy" src={item.image} alt="feature" />
    </div>
  );

  const content = (
    <div className="content">
      <a href="#" className="h2 link mb_12">
        {item.title}
      </a>
      <p className="text-body-2 mb_32">{item.desc}</p>
      <ul className="list d-grid gap_16">
        {item.points.map((point, index) => (
          <li className="text-body-default d-flex align-items-center gap_16" data-wow-delay={`${(index + 1) * 0.2}s`} key={point}>
            <i className="icon-Check" />
            {point}
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div className="element">
      <div className={`feature-item style-1${item.contentFirst ? " ctl" : ""}`}>
        {item.contentFirst ? (
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

export default function FeatureSection() {
  const subRef = useSplitTextReveal<HTMLDivElement>("up");
  const titleRef = useSplitTextReveal<HTMLHeadingElement>("right");
  const descRef = useSplitTextReveal<HTMLParagraphElement>("lines-transform");
  const stackRef = useStackElements<HTMLDivElement>();

  return (
    <div className="section-feature-2 tf-spacing-10">
      <div className="tf-container">
        <div className="heading-section d-grid gap_16 text-center mb_48">
          <div className="sub text-label text_primary-color text-uppercase" ref={subRef}>
            Our Features
          </div>
          <h2 className="title" ref={titleRef}>
            Key Features
          </h2>
          <p className="text-body-2" ref={descRef}>
            Everything you need to write better, faster, and smarter with AI.
          </p>
        </div>
        <div className="stack-element mb_48" ref={stackRef}>
          <div className="wrap-feature stack-content-wrap">
            {features.map((item) => (
              <FeatureCard item={item} key={item.title} />
            ))}
          </div>
        </div>
        <a href="#" className="tf-btn mx-auto btn-hover-animate wow fadeInUp">
          <span>Start Writing for Free</span>
          <span />
        </a>
      </div>
    </div>
  );
}
