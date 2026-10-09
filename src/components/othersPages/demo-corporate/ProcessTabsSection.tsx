"use client";

import { useState } from "react";
import Image from "next/image";
import { useSplitTextReveal } from "@/hooks/useSplitTextReveal";

const steps = [
  { id: "discovery", label: "Discovery", step: "Step1", stepLabel: "Step 1", title: "Discovery" },
  { id: "strategy", label: "Strategy", step: "Step2", stepLabel: "Step 2", title: "Strategy" },
  { id: "execution", label: "Execution", step: "Step3", stepLabel: "Step 3", title: "Execution" },
  { id: "optimization", label: "Optimization", step: "Step4", stepLabel: "Step 4", title: "Optimization" },
];

// All 4 tabs share this exact sentence in the original HTML — a real
// repeated-content quirk, not a niche mismatch, kept verbatim (see
// CLAUDE.md rule 4). Default active tab is "Strategy" (Step 2), not the
// first tab — matches the original's markup exactly.
const sharedDescription =
  "Our team crafts a tailored plan that aligns with your vision and delivers measurable results.";

export default function ProcessTabsSection() {
  const [activeTab, setActiveTab] = useState("strategy");
  const titleRef = useSplitTextReveal<HTMLHeadingElement>("right");

  return (
    <div className="section-process tf-spacing-1">
      <div className="tf-container">
        <div className="heading-section style-default text-center mb_48">
          <div className="sub text-label text-uppercase wow fadeInUp">Our Process</div>
          <h2 className="title" ref={titleRef}>
            How It Works
          </h2>
          <p className="text-body-2 text_secondary wow fadeInUp">
            Your growth strategy, delivered in 4 simple, structured steps.
          </p>
        </div>
        <div className="wrap-process flat-animate-tab">
          <div className="tab-slide style-2 d-flex justify-content-center mb_40">
            <ul className="menu-tab d-flex align-items-center overflow-x-auto" role="tablist">
              {steps.map((step) => (
                <li
                  className={`nav-tab-item${activeTab === step.id ? " active" : ""}`}
                  key={step.id}
                  role="presentation"
                >
                  <a
                    href={`#${step.id}`}
                    className={`tab-link${activeTab === step.id ? " active" : ""}`}
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveTab(step.id);
                    }}
                  >
                    <span className="h6">{step.label}</span>
                    <span className="text_muted text-label text-uppercase fw-6 step">{step.step}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="tab-content">
            {steps.map((step) => (
              <div
                className={`tab-pane${activeTab === step.id ? " active show" : ""}`}
                id={step.id}
                key={step.id}
                role="presentation"
              >
                <div className="box-process">
                  <div className="content">
                    <div className="heading-section style-default mb_32">
                      <div className="sub text-label text-uppercase">{step.stepLabel}</div>
                      <h3 className="title">{step.title}</h3>
                      <p className="text-body-2 text_secondary">{sharedDescription}</p>
                    </div>
                    <a href="#" className="tf-btn btn-hover-animate-2">
                      <span>Get In Touch</span>
                      <span />
                    </a>
                  </div>
                  <div className="img-process">
                    <Image
                      loading="eager"
                      width={596}
                      height={596}
                      src="/assets/images/demo-corporate/process-1.jpg"
                      alt="process"
                    />
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
