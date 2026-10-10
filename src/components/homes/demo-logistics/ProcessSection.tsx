"use client";

import { useSplitTextReveal } from "@/hooks/useSplitTextReveal";

const steps = [
  {
    icon: "icon-Headset",
    title: "Request & Consultation",
    desc: "We gather shipment details and understand your logistics requirements.",
    delay: ".0s",
  },
  {
    icon: "icon-Crosshair",
    title: "Planning & Strategy",
    desc: "We design a tailored transport plan ensuring efficiency and cost savings.",
    delay: ".2s",
  },
  {
    icon: "icon-Truck",
    title: "Execution & Tracking",
    desc: "We manage the transport process with real-time tracking and coordination.",
    delay: ".4s",
  },
  {
    icon: "icon-Package",
    title: "Delivery & Support",
    desc: "We deliver effective outcomes while securing long-term peace of mind.",
    delay: ".6s",
  },
];

export default function ProcessSection() {
  const titleRef = useSplitTextReveal<HTMLHeadingElement>("lines-rotation-x");

  return (
    <div className="section-process-6 tf-spacing-1">
      <div className="tf-container">
        <div className="heading-section-5 mb_80">
          <div className="row align-items-center gap-sm-0">
            <div className="col-xxl-6 col-sm-8">
              <div className="wrap-line-marker mb_16">
                <div className="wrap-line-marker text-label text_white text-uppercase letter-spacing-1 lh-16 wow fadeInUp">
                  <span className="line-marker line-primary" />
                  Our process
                </div>
              </div>
              <h2 ref={titleRef} className="text_white split-text split-lines-rotation-x">
                A Simple, Transparent Process That Gets Your Goods Moving Safely
              </h2>
            </div>
            <div className="col-xxl-6 col-sm-4">
              <div className="wow logo-container glow text-sm-end" id="logoContainer">
                <svg width="234" height="208" viewBox="0 0 234 208" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    id="path1"
                    className="path-draw"
                    d="M70.2318 205.089L3.10156 62.0906L31.5917 5.10938L105.116 166.863L148.771 71.2811H201.616L143.315 205.089H94.1899H70.2318Z"
                    stroke="#F08044"
                    strokeWidth="4"
                  />
                  <path
                    id="path2"
                    className="path-draw"
                    d="M230.336 5.08862H60.6953L105.883 105.095L131.07 45.8321H212.557L230.336 5.08862Z"
                    stroke="#F08044"
                    strokeWidth="4"
                    style={{ animationDelay: "0.5s" }}
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="tf-grid-layout lg-col-4 sm-col-2">
          {steps.map((step) => (
            <div className="tf-box-icon style-2 v3 wow fadeIn hover-effect-icon" data-wow-delay={step.delay} key={step.title}>
              <div className="icon">
                <i className={step.icon} />
              </div>
              <div className="content">
                <h5 className="mb_16 title">
                  <a href="/services" className="hover-line-text link text_white">
                    {step.title}
                  </a>
                </h5>
                <p className="text-body-default text_muted">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
