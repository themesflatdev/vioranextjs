"use client";

import { useState } from "react";
import Image from "next/image";
import { useSplitTextReveal } from "@/hooks/useSplitTextReveal";
import { processDesc, processSteps } from "@/data/demo-aicontentwriter/processSteps";

export default function ProcessSection() {
  const [activeId, setActiveId] = useState(processSteps[1].id);
  const titleRef = useSplitTextReveal<HTMLHeadingElement>("right");

  return (
    <div className="section-process-3">
      <div className="tf-container">
        <div className="heading-section style-default text-center mb_48">
          <div className="sub text-label text-uppercase">Our Process</div>
          <h2 className="title" ref={titleRef}>
            How It Works
          </h2>
          <p className="text-body-2 text_secondary">Your content, created in 4 simple steps with the power of AI.</p>
        </div>
        <div className="wrap-process flat-animate-tab wow fadeInLeft">
          <div className="tab-slide style-2 d-flex justify-content-center mb_40">
            <ul className="menu-tab d-flex align-items-center overflow-x-auto" role="tablist">
              {processSteps.map((step) => (
                <li className={`nav-tab-item${activeId === step.id ? " active" : ""}`} role="presentation" key={step.id}>
                  <a
                    href={`#${step.id}`}
                    className={`tab-link${activeId === step.id ? " active" : ""}`}
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveId(step.id);
                    }}
                  >
                    <span className="h6">{step.tabTitle}</span>
                    <span className="text_muted text-label text-uppercase fw-6 step letter-spacing-1">{step.stepLabel}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="tab-content">
            {processSteps.map((step, index) => (
              <div className={`tab-pane${activeId === step.id ? " active show" : ""}`} id={step.id} role="tabpanel" key={step.id}>
                <div className="box-process">
                  <div className="content">
                    <div className="heading-section style-default mb_32">
                      <div className="sub text_primary-color lh-16 text-label text-uppercase">Step {index + 1}</div>
                      <h3 className="title font-2">{step.title}</h3>
                      <p className="text-body-2 text_secondary">{processDesc}</p>
                    </div>
                    <a href="#" className="tf-btn btn-hover-animate">
                      <span>{step.ctaLabel}</span>
                      <span />
                    </a>
                  </div>
                  <div className="img-process">
                    <Image loading="eager" width={596} height={596} src="/assets/images/demo-aicontentwriter/process-1.jpg" alt="process" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
