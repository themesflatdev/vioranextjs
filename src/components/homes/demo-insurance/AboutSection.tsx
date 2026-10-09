"use client";

import Image from "next/image";
import { useCountUp } from "@/hooks/useCountUp";
import { useSplitTextReveal } from "@/hooks/useSplitTextReveal";

function CounterItem({
  count,
  duration,
  suffix,
  label,
  className,
  white,
}: {
  count: number;
  duration: number;
  suffix: string;
  label: string;
  className: string;
  white?: boolean;
}) {
  const { value, ref } = useCountUp(count, duration);

  return (
    <div
      className={`counter-item d-flex flex-column align-items-center justify-content-center ${className}`}
      ref={ref as React.RefObject<HTMLDivElement>}
    >
      <div className={`counter h1${white ? " text_white" : ""}`}>
        <span className="numberCounter">{value}</span>
        <span className="sub-counter">{suffix}</span>
      </div>
      <p className={`sub-title text-body-2${white ? " text_white" : ""}`}>{label}</p>
    </div>
  );
}

export default function AboutSection() {
  const subRef = useSplitTextReveal<HTMLDivElement>("up");
  const titleRef = useSplitTextReveal<HTMLHeadingElement>("blur-fade");

  return (
    <div className="section-about tf-spacing-1">
      <div className="tf-container">
        <div className="box-about">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="heading-section style-default mb_28">
                <div className="sub text-label text-uppercase" ref={subRef}>
                  About Us
                </div>
                <h2 className="title" ref={titleRef}>
                  Trusted Insurance For Every Stage Of Life
                </h2>
              </div>
              <div className="wow fadeInUp">
                <p className="mb_16 text-body-default">
                  For over 15 years, we’ve helped individuals, families, and businesses protect what
                  matters most. From health and life coverage to property and business insurance, our
                  mission is to provide peace of mind through reliable, personalized protection.
                </p>
                <p className="text-body-default">
                  With a team of licensed experts and a commitment to transparency, we’re here to
                  support you every step of the way.
                </p>
              </div>
              <a href="#" className="tf-btn btn-hover-animate-2 wow fadeInUp">
                <span>About Us</span>
                <span />
              </a>
            </div>
            <div className="col-lg-6">
              <div className="wrap-content tf-grid-layout tf-col-2 gap_10">
                <CounterItem count={15} duration={700} suffix="+" label="Years of Experience" className="bg-1" />
                <CounterItem count={6} duration={700} suffix="k+" label="Happy Clients" className="bg-2" />
                <div className="img-style">
                  <Image width={308} height={308} src="/assets/images/demo-insurance/about-1.jpg" alt="about" />
                </div>
                <CounterItem
                  count={120}
                  duration={700}
                  suffix="+"
                  label="Professional Advisors"
                  className="bg-3"
                  white
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
