"use client";

import Image from "next/image";
import { useRevealElements } from "@/hooks/useRevealElements";
import { useSplitTextReveal } from "@/hooks/useSplitTextReveal";
import { features } from "@/data/demo-aitech/features";

function FeatureCard({ item }: { item: (typeof features)[number] }) {
  const revealRef = useRevealElements<HTMLDivElement>();

  return (
    <div
      className="project-item style-1 hover-image"
      data-ns-animate
      data-duration="1"
      data-delay={item.delay ?? ""}
      ref={revealRef}
    >
      <a href="#" className="img-style mb_32">
        <Image loading="lazy" width={item.width} height={item.height} src={item.image} alt="AI-project" />
      </a>
      <div className="content">
        <a href="#" className="title link h4 font-3 mb_8 line-clamp-1">
          {item.title}
        </a>
        <p className="text-body-2">{item.desc}</p>
      </div>
    </div>
  );
}

export default function FeatureSection() {
  const subRef = useSplitTextReveal<HTMLDivElement>("up");
  const titleRef = useSplitTextReveal<HTMLHeadingElement>("blur-fade");
  const descRef = useSplitTextReveal<HTMLParagraphElement>("lines-transform");

  return (
    <div className="section-feature tf-spacing-10">
      <div className="tf-container">
        <div className="heading-section style-default d-grid gap_14 text-center mb_60">
          <div className="sub text-label text_primary-color text-uppercase lh-20 fw-4" ref={subRef}>
            Our Features
          </div>
          <h2 className="title" ref={titleRef}>
            Key Features
          </h2>
          <p className="text-body-2" ref={descRef}>
            From automation to deep learning discover how our AI transforms your business.
          </p>
        </div>
        <div className="row-feature d-flex gap_20 mb_20">
          <FeatureCard item={features[0]} />
          <FeatureCard item={features[1]} />
        </div>
        <div className="row-feature d-flex gap_20">
          <FeatureCard item={features[2]} />
          <FeatureCard item={features[3]} />
        </div>
      </div>
    </div>
  );
}
