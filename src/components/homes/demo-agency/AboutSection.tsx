"use client";

import Link from "next/link";
import { useCountUp } from "@/hooks/useCountUp";
import { useSplitTextReveal } from "@/hooks/useSplitTextReveal";
import { useTextChangeColor } from "@/hooks/useTextChangeColor";

const counters = [
  { count: 120, duration: 700, suffix: "+", label: "Completed Projects", bg: "bg-5", numberClass: "text_primary" },
  { count: 10, duration: 700, suffix: "+", label: "Years of Experience", bg: "bg-1", numberClass: "text_primary" },
  {
    count: 95,
    duration: 700,
    suffix: "%",
    label: "Client Satisfaction",
    bg: "bg-4",
    numberClass: "text_primary-color",
    labelClass: "text_primary-color",
  },
  { count: 30, duration: 700, suffix: "+", label: "Our Clients", bg: "bg-5", numberClass: "text_primary text_white" },
];

function CounterItem({ count, duration, suffix, label, bg, numberClass, labelClass }: (typeof counters)[number]) {
  const { value, ref } = useCountUp(count, duration);

  return (
    <div
      className={`counter-item d-flex flex-column align-items-center justify-content-center ${bg}`}
      ref={ref as React.RefObject<HTMLDivElement>}
    >
      <div className={`counter h1 mb_6 ${numberClass}`}>
        <span className="numberCounter">{value}</span>
        <span className="sub-counter">{suffix}</span>
      </div>
      <p className={`sub-title text-body-2 text-center ${labelClass ?? "text_primary"}`}>{label}</p>
    </div>
  );
}

export default function AboutSection() {
  const headingRef = useTextChangeColor<HTMLHeadingElement>();
  const descRef = useSplitTextReveal<HTMLParagraphElement>("lines-transform");

  return (
    <div className="section-about-2 tf-spacing-1 bg-light-color">
      <div className="box-about style-2">
        <div className="tf-container large">
          <div className="row align-items-center">
            <div className="col-xxl-8 col-lg-7">
              <div className="box-left">
                <div className="scroll-effect">
                  <h1 className="text-capitalize text mb_28 text-change-color" ref={headingRef}>
                    We don&rsquo;t just build websites.we build digital experiences. Creative, fast,
                    and tailored to help your brand stand out.
                  </h1>
                </div>
                <p className="text-body-default text_secondary" ref={descRef}>
                  As a creative agency, we combine strategy, aesthetics, and technology to build
                  websites that don&rsquo;t just look good — they perform. From concept to launch,
                  we&rsquo;re your partner in crafting memorable digital experiences that drive real
                  results.
                </p>
                <Link
                  href="/demo-agency/about"
                  className="tf-btn rounded-icon btn-hover-rounded-icon hover-1 btn-bg-primary wow fadeInUp"
                  data-wow-delay="0.4s"
                  data-wow-duration="2s"
                >
                  <div className="btn_inner">
                    <div className="btn_text">
                      <span>About Us</span>
                    </div>
                    <div className="btn_icon">
                      <span>
                        <i className="icon-ArrowUpRight" />
                        <i className="icon-ArrowUpRight" />
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-xxl-4 col-lg-5">
              <div className="wrap-content tf-grid-layout sm-col-2 tf-col-2">
                {counters.map((counter) => (
                  <CounterItem key={counter.label} {...counter} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
