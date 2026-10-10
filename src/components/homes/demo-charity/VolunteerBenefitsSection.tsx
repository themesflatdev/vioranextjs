"use client";

import { useSplitTextReveal } from "@/hooks/useSplitTextReveal";
import { useAnimateImgItem } from "@/hooks/useAnimateImgItem";
import { volunteerBenefits } from "@/data/demo-charity/home";

export default function VolunteerBenefitsSection() {
  const titleRef = useSplitTextReveal<HTMLHeadingElement>("blur-fade");
  const thumbRef = useAnimateImgItem<HTMLDivElement>();

  return (
    <div className="tf-container w-1840">
      <div className="section-volunteer-benefits tf-spacing-1">
        <div className="thumb tf-animateCLP-left" ref={thumbRef}>
          <div
            className="bg-banner"
            data-speed="0.8"
            data-lag="0"
            data-background="/assets/images/demo-charity/volunteer-benefits.jpg"
            style={{ backgroundImage: "url(/assets/images/demo-charity/volunteer-benefits.jpg)" }}
          />
        </div>
        <div className="box-content">
          <div className="heading-section mb_40">
            <h2 className="mb_16 split-text effect-blur-fade" ref={titleRef}>
              See How Volunteering Changes Lives
            </h2>
            <p className="text-body-2 wow fadeInUp" data-wow-delay=".2s">
              Working together, we can create meaningful change for communities everywhere. Let’s bring hope and
              vital support to those who need it most.
            </p>
          </div>
          <div className="wrap-icon d-grid gap_24">
            {volunteerBenefits.map((item) => (
              <div
                className="box-icon wow fadeInRight"
                data-wow-delay={item.wowDelay || undefined}
                key={item.title}
              >
                <div className="icon">
                  <i className={item.icon} />
                </div>
                <div>
                  <h6 className="mb_8">{item.title}</h6>
                  <p className="text-body-default">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
