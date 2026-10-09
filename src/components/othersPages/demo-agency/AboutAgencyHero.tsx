"use client";

import Link from "next/link";
import { useCountUp } from "@/hooks/useCountUp";
import { useSplitTextReveal } from "@/hooks/useSplitTextReveal";
import { useTextChangeColor } from "@/hooks/useTextChangeColor";

const counters = [
  { count: 120, duration: 700, suffix: "+", label: "Completed Projects", bg: "bg-5", extraNumberClass: "" },
  { count: 10, duration: 700, suffix: "+", label: "Years of Experience", bg: "bg-1", extraNumberClass: "" },
  { count: 95, duration: 700, suffix: "%", label: "Client Satisfaction", bg: "bg-1", extraNumberClass: "" },
  { count: 30, duration: 700, suffix: "+", label: "Our Clients", bg: "bg-5", extraNumberClass: " text_white" },
];

function CounterItem({ count, duration, suffix, label, bg, extraNumberClass }: (typeof counters)[number]) {
  const { value, ref } = useCountUp(count, duration);

  return (
    <div
      className={`counter-item d-flex flex-column align-items-center justify-content-center ${bg}`}
      ref={ref as React.RefObject<HTMLDivElement>}
    >
      <div className={`counter h1 text_primary mb_6${extraNumberClass}`}>
        <span className="numberCounter">{value}</span>
        <span className="sub-counter">{suffix}</span>
      </div>
      <p className="sub-title text-body-2 text_primary text-center">{label}</p>
    </div>
  );
}

// section-about-2 v2 — same text-change-color/counter mechanism as Home
// Agency's AboutSection, but this page's own copy differs in two real
// ways confirmed against about.html: the description paragraph is
// `text_white` (Home's is `text_secondary`), and the "About Us" button is
// a self-link back to this same page (kept as-is per CLAUDE.md rule 4).
export default function AboutAgencyHero() {
  const headingRef = useTextChangeColor<HTMLHeadingElement>();
  const descRef = useSplitTextReveal<HTMLParagraphElement>("lines-transform");

  return (
    <div className="section-about-2 v2 tf-spacing-1">
      <div className="box-about style-2">
        <div className="tf-container large">
          <div className="row">
            <div className="col-xxl-8 col-lg-7">
              <div className="box-left">
                <div className="scroll-effect">
                  <h1 className="text-capitalize text mb_28 text-change-color" ref={headingRef}>
                    We don&rsquo;t just build websites.we build digital experiences. Creative, fast,
                    and tailored to help your brand stand out.
                  </h1>
                </div>
                <p className="text-body-default text_white" ref={descRef}>
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
