"use client";

import Image from "next/image";
import { useSectionTrigger } from "@/hooks/useSectionTrigger";
import { useCountUp } from "@/hooks/useCountUp";
import { useSplitTextReveal } from "@/hooks/useSplitTextReveal";

// section-about-team — same uncover reveal mechanism as service-detail.html
// (useSectionTrigger), with a counter overlay badge instead of a plain image.
export default function AboutTeamHero() {
  const sectionRef = useSectionTrigger<HTMLDivElement>();
  const titleRef = useSplitTextReveal<HTMLHeadingElement>("right");
  const descRef = useSplitTextReveal<HTMLParagraphElement>("lines-transform");
  const { value, ref: counterRef } = useCountUp(120, 700);

  return (
    <div className="section-about-team tf-spacing-1">
      <div className="tf-container position-relative">
        <div className="heading-section style-default text-center mb_60">
          <div className="sub text-label text-uppercase lh-16 wow fadeInUp">About Us</div>
          <h2 className="title" ref={titleRef}>
            Meet The Team Behind Our Success
          </h2>
          <p className="desc text-body-default mt_12" ref={descRef}>
            At the core of our company is a team of passionate professionals with years of
            experience across technology, operations, enterprise strategy, and innovation. We
            believe in collaboration, accountability, and building with purpose. Together, we turn
            complex business challenges into practical solutions that scale.
          </p>
        </div>
        <div className="img-thumb section-triger overflow-hidden" ref={sectionRef}>
          <Image
            className="image-inner"
            loading="lazy"
            width={1410}
            height={680}
            src="/assets/images/demo-corporate/about-2.jpg"
            alt="about"
          />
          <div
            className="counter-item d-flex flex-column align-items-center justify-content-center bg-1"
            ref={counterRef as React.RefObject<HTMLDivElement>}
          >
            <div className="counter h1 text_white mb_6">
              <span className="numberCounter">{value}</span>
              <span className="sub-counter">+</span>
            </div>
            <p className="sub-title text-body-2 text_white">Expertise Employees</p>
          </div>
          <div className="uncover">
            <div className="uncover_slice" />
            <div className="uncover_slice" />
            <div className="uncover_slice" />
          </div>
        </div>
      </div>
    </div>
  );
}
