"use client";

import Link from "next/link";
import { useSplitTextReveal } from "@/hooks/useSplitTextReveal";
import { useCountUp } from "@/hooks/useCountUp";

function Counter({
  target,
  duration,
  suffix,
  label,
}: {
  target: number;
  duration: number;
  suffix?: string;
  label: string;
}) {
  const { value, ref } = useCountUp(target, duration);
  return (
    <div className="counter-item">
      <div className="counter h2 text_primary-color mb_4" ref={ref as React.RefObject<HTMLDivElement>}>
        <span className="numberCounter">{value}</span> {suffix && <span className="sub-counter">{suffix}</span>}
      </div>
      <p className="sub-title text-caption-1 text_secondary">{label}</p>
    </div>
  );
}

export default function AboutSection() {
  const titleRef = useSplitTextReveal<HTMLHeadingElement>("scale");

  return (
    <div className="section-about-14 tf-spacing-1">
      <div className="tf-container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="img-style">
              <div
                className="img"
                data-speed="0.7"
                data-background="/assets/images/demo-agriculturefarming/about-1.jpg"
                style={{ backgroundImage: "url(/assets/images/demo-agriculturefarming/about-1.jpg)" }}
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="heading-section mb_48">
              <div className="sub text-label text-uppercase text_primary-color split-text effect-up mb_15 lh-16">
                WHO WE ARE
              </div>
              <h2 ref={titleRef} className="title mb_16 split-text effect-scale">
                Sustainable Farming For A Better Future
              </h2>
              <p className="desc text-body-2 wow fadeInUp">
                We are committed to building eco-friendly farms that nurture the land and support healthy
                communities. Our mission is to grow natural products with care, innovation, and respect for the
                environment.
              </p>
            </div>
            <div className="wrap-counter d-flex justify-content-between mb_48">
              <Counter target={120} duration={700} suffix="+" label="Acres Cultivated" />
              <div className="line" />
              <Counter target={15} duration={700} label="Years Experience" />
              <div className="line" />
              <Counter target={15} duration={700} suffix="+" label="Trusted Partners" />
            </div>
            <Link href="#" className="tf-btn btn-hover-animate-2 btn-bg-secondary wow fadeInUp" data-wow-delay="0.2s">
              <span>About Us</span>
              <span className="bg-effect" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
