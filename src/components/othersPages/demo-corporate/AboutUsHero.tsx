"use client";

import Image from "next/image";
import Link from "next/link";
import { useCountUp } from "@/hooks/useCountUp";
import { useSplitTextReveal } from "@/hooks/useSplitTextReveal";

const counters = [
  { count: 15, duration: 700, suffix: "+", label: "Years of Experience", bg: "bg-1", white: false },
  { count: 6, duration: 700, suffix: "k+", label: "Happy Clients", bg: "bg-2", white: false },
  { count: 120, duration: 700, suffix: "+", label: "Professional Advisors", bg: "bg-3", white: true },
];

function CounterItem({ count, duration, suffix, label, bg, white }: (typeof counters)[number]) {
  const { value, ref } = useCountUp(count, duration);

  return (
    <div
      className={`counter-item d-flex flex-column align-items-center justify-content-center ${bg}`}
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

// section-about — the 2 counters that flank the center image are rendered
// in original DOM order (Years/Happy Clients before the image, Professional
// Advisors after); CSS grid re-positions them into the 2x2 layout.
export default function AboutUsHero() {
  const subRef = useSplitTextReveal<HTMLDivElement>("up");
  const titleRef = useSplitTextReveal<HTMLHeadingElement>("right");

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
                  Building Intelligent Solutions For The Enterprise
                </h2>
              </div>
              <div className="mb_28 wow fadeInUp">
                <p className="mb_16 text-body-default">
                  We help global businesses streamline operations, unlock insights, and innovate
                  faster through AI-driven technologies.
                </p>
                <p className="text-body-default">
                  With a team of experienced professionals and a commitment to transparency, we&apos;re
                  here to support you every step of the way.
                </p>
              </div>
              <Link href="/contact" className="tf-btn btn-hover-animate-2 wow fadeInUp" data-wow-delay="0.4s">
                <span>Get in Touch</span>
                <span />
              </Link>
            </div>
            <div className="col-lg-6">
              <div className="wrap-content tf-grid-layout tf-col-2 gap_10">
                <CounterItem {...counters[0]} />
                <CounterItem {...counters[1]} />
                <div className="img-style">
                  <Image width={308} height={308} src="/assets/images/demo-corporate/about-1.jpg" alt="about" />
                </div>
                <CounterItem {...counters[2]} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
