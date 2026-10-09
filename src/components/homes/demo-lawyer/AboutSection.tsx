"use client";

import Link from "next/link";
import { useSplitTextReveal } from "@/hooks/useSplitTextReveal";

const boxIcons = [
  {
    icon: "icon-Scroll",
    title: "Proven Experience",
    desc: "With more than 10 years of managing diverse legal matters, we deliver proven results.",
    number: 1,
    delay: "",
  },
  {
    icon: "icon-Handshake",
    title: "Committed to Clients",
    desc: "We carefully listen and thoughtfully design strategies to safeguard your best interests.",
    number: 2,
    delay: ".2s",
  },
  {
    icon: "icon-Coins",
    title: "Fair & Open Pricing",
    desc: "Transparent pricing with no unexpected fees — built on trust and professionalism.",
    number: 3,
    delay: ".4s",
  },
  {
    icon: "icon-Scales",
    title: "Strong Commitment",
    desc: "Always committed to securing the strongest possible outcomes for every valued client.",
    number: 4,
    delay: ".6s",
  },
];

export default function AboutSection() {
  const subRef = useSplitTextReveal<HTMLDivElement>("up");
  const titleRef = useSplitTextReveal<HTMLHeadingElement>("right");

  return (
    <div className="section-about-15 tf-spacing-18">
      <div className="tf-container">
        <div className="row">
          <div className="col-lg-6">
            <div className="box-left">
              <div className="heading-section mb_48">
                <div
                  ref={subRef}
                  className="sub text-label text-uppercase text_muted split-text effect-up mb_17 lh-16 wow fadeInUp"
                >
                  WHO WE ARE
                </div>
                <h2 ref={titleRef} className="title mb_16 split-text effect-right">
                  Trusted Legal Experts For Your <span className="text_primary-color">Peace Of Mind</span>
                </h2>
                <p className="desc text-body-2 wow fadeInUp" data-wow-delay="0.2s">
                  We are experienced lawyers protecting your rights, resolving disputes, and guiding you through
                  challenges.
                </p>
              </div>
              <div className="quote mb_48 wow fadeInUp" data-wow-delay="0.4s">
                <p className="desc h5 mb_24 font-2 text-capitalize">
                  You deserve more than advice a partner who listens, understands, and defends your interests. With
                  expertise, we deliver clarity, confidence.
                </p>
                <div className="author">
                  <h6 className="text_primary mb_4">Aisha Malik</h6>
                  <div className="text-caption-1 text_primary">CEO at FlowEdge</div>
                </div>
              </div>
              <Link
                href="#"
                className="tf-btn btn-hover-animate-2 btn-bg-secondary rounded-0 wow fadeInUp"
                data-wow-delay="0.6s"
              >
                <span>About Us</span>
                <span className="bg-effect" />
              </Link>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="wrap-box-icon">
              {boxIcons.map((item) => (
                <div
                  key={item.number}
                  className="box-icon wow fadeInRight"
                  data-wow-delay={item.delay || undefined}
                >
                  <div className="icon">
                    <i className={item.icon} />
                  </div>
                  <div className="content">
                    <h5 className="mb_8">{item.title}</h5>
                    <p className="text-body-default">{item.desc}</p>
                  </div>
                  <div className="number h4">{item.number}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
