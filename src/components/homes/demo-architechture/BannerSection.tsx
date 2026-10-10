"use client";

import { useSplitTextReveal } from "@/hooks/useSplitTextReveal";
import { useCountUp } from "@/hooks/useCountUp";

type CounterData = { target: number; suffix: string; fw4: boolean; label: string };

const counters: CounterData[] = [
  { target: 10, suffix: "+", fw4: false, label: "Years of Experience" },
  { target: 250, suffix: "+", fw4: true, label: "Successful Projects" },
  { target: 50, suffix: "+", fw4: true, label: "Corporate Clients" },
  { target: 98, suffix: "%", fw4: true, label: "Client Satisfaction" },
];

function Counter({ target, suffix, fw4, label }: CounterData) {
  const { value, ref } = useCountUp(target, 700);
  return (
    <div className="counter-item d-flex flex-column text-center">
      <div className={`counter h1 ${fw4 ? "fw-4 " : ""}mb_8`}>
        <span className="numberCounter" ref={ref as React.Ref<HTMLSpanElement>}>
          {value}
        </span>
        <span className="sub-counter">{suffix}</span>
      </div>
      <p className="sub-title text-body-2">{label}</p>
    </div>
  );
}

export default function BannerSection() {
  const titleRef = useSplitTextReveal<HTMLHeadingElement>("blur-fade");

  return (
    <div className="section-banner-13">
      <div className="position-relative">
        <div className="banner">
          <div
            className="bg-banner"
            data-speed="0.8"
            data-background="/assets/images/demo-architechture/banner-1.jpg"
            style={{ backgroundImage: "url(/assets/images/demo-architechture/banner-1.jpg)" }}
          />
        </div>
        <div className="tf-container large">
          <div className="heading d-flex gap_12 flex-wrap justify-content-between align-items-center">
            <h2 ref={titleRef} className="text_white fw-4 text-uppercase split-text effect-blur-fade">
              Building Strength Creating Futures.
            </h2>
            <a href="#" className="tf-btn-2 wow fadeInRight btn-switch-text">
              <span>
                <span className="btn-double-text" data-text="Get In Touch">
                  Get In Touch
                </span>
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className="wrap-counter">
        <div className="tf-container large">
          <div className="tf-grid-layout lg-col-4 tf-col-2">
            {counters.map((c) => (
              <Counter key={c.label} {...c} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
