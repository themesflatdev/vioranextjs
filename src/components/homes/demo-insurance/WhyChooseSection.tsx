"use client";

import Image from "next/image";
import Link from "next/link";
import { useSplitTextReveal } from "@/hooks/useSplitTextReveal";

const boxes = [
  {
    icon: "icon-UserFocus",
    title: "Personalized Plans",
    desc: "Flexible options tailored to your unique needs and budget.",
    delay: "0.1s",
  },
  {
    icon: "icon-ClockClockwise",
    title: "Fast & Fair Claims",
    desc: "Streamlined process with 24/7 support when you need it most.",
    delay: ".2s",
  },
  {
    icon: "icon-Lifebuoy",
    title: "Expert Support",
    desc: "Licensed advisors ready to guide you every step of the way.",
    delay: ".3s",
  },
];

// `why-3.jpg` uses the theme's ScrollSmoother `data-speed` parallax
// (effects: true in useScrollSmoother), not the GSAP ScrollTrigger-based
// useImageParallax hook — same mechanism as the request-section banner.
export default function WhyChooseSection() {
  const subRef = useSplitTextReveal<HTMLDivElement>("up");
  const titleRef = useSplitTextReveal<HTMLHeadingElement>("blur-fade");
  const descRef = useSplitTextReveal<HTMLParagraphElement>("lines-transform");

  return (
    <div className="section-why tf-spacing-1">
      <div className="tf-container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="box-left">
              <div className="heading-section style-default mb_44">
                <div className="sub text-label text-uppercase" ref={subRef}>
                  Why Choose Us
                </div>
                <h2 className="title" ref={titleRef}>
                  The Smarter Choice For Insurance
                </h2>
                <p className="desc text-body-2 text_on-suface-1 mt_8" ref={descRef}>
                  We combine trusted expertise, responsive service, and flexible plans to protect
                  what matters most to you.
                </p>
              </div>
              <div className="wrap-box-icon">
                {boxes.map((box) => (
                  <div
                    className="tf-box-icon style-1 hover-effect-icon wow fadeInLeft"
                    data-wow-delay={box.delay}
                    key={box.title}
                  >
                    <div className="box">
                      <div className="icon">
                        <i className={box.icon} />
                      </div>
                      <h5>{box.title}</h5>
                    </div>
                    <p className="text-body-default text_secondary">{box.desc}</p>
                  </div>
                ))}
              </div>
              <Link href="/demo-insurance/contact" className="tf-btn btn-hover-animate-2 wow fadeInUp">
                <span>Talk To An Expert</span>
                <span />
              </Link>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="thumbs text-lg-end overflow-hidden">
              <Image
                data-speed="0.8"
                data-lag="0"
                loading="lazy"
                width={655}
                height={873}
                src="/assets/images/demo-insurance/why-3.jpg"
                alt="why"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
