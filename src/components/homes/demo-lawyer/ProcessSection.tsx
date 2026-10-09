"use client";

import Link from "next/link";
import { useSplitTextReveal } from "@/hooks/useSplitTextReveal";
import { processSteps } from "@/data/demo-lawyer/processSteps";

export default function ProcessSection() {
  const titleRef = useSplitTextReveal<HTMLHeadingElement>("right");

  return (
    <div className="section-process-8 tf-spacing-1">
      <div className="tf-container">
        <div className="heading-section mb_60">
          <div className="heading-section style-default text-center mb_47">
            <div className="sub text-label text_muted text-uppercase wow fadeInUp">Working Process</div>
            <h2 ref={titleRef} className="title split-text effect-right">
              Our Trusted <span className="text_primary-color">Process</span>
            </h2>
            <p className="text-body-2 wow fadeInUp" data-wow-delay="0.2s">
              How we handle your legal matters efficiently
            </p>
          </div>
        </div>
        <div className="wrap-box-process wow fadeInUp">
          {processSteps.map((step) => (
            <div key={step.number} className="process-item">
              <div className="icon mb_40">
                <i className={step.icon} />
                <span className="number">{step.number}</span>
              </div>
              <div className="content text-center">
                <h5 className="mb_12">
                  <Link href="#" className="hover-line-text">
                    {step.title}
                  </Link>
                </h5>
                <p className="text-body-default text_secondary">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
