"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCountUp } from "@/hooks/useCountUp";
import { useSectionTrigger } from "@/hooks/useSectionTrigger";
import { useSplitTextReveal } from "@/hooks/useSplitTextReveal";
import VideoModal from "@/components/common/VideoModal";

const counters = [
  { count: 10, duration: 700, suffix: "+", label: "Years of Experience" },
  { count: 250, duration: 700, suffix: "+", label: "Successful Projects" },
  { count: 50, duration: 700, suffix: "+", label: "Corporate Clients" },
  { count: 98, duration: 700, suffix: "%", label: "Client Satisfaction" },
];

function CounterItem({ count, duration, suffix, label }: (typeof counters)[number]) {
  const { value, ref } = useCountUp(count, duration);

  return (
    <div className="counter-item" ref={ref as React.RefObject<HTMLDivElement>}>
      <div className="counter h1 font-2">
        <span className="numberCounter">{value}</span>
        <span className="sub-counter">{suffix}</span>
      </div>
      <p className="sub-title text-body-2 text_secondary">{label}</p>
    </div>
  );
}

export default function AboutSection() {
  const [videoOpen, setVideoOpen] = useState(false);
  const sectionRef = useSectionTrigger<HTMLDivElement>();
  const subRef = useSplitTextReveal<HTMLDivElement>("up");
  const titleRef = useSplitTextReveal<HTMLHeadingElement>("right");
  const descRef = useSplitTextReveal<HTMLParagraphElement>("lines-transform");

  return (
    <div className="section-about-1 tf-spacing-1">
      <div className="tf-container">
        <div className="widget-video overflow-hidden section-triger" ref={sectionRef}>
          <div className="parallax-image">
            <Image
              data-speed="0.9"
              className="image-inner"
              loading="lazy"
              width={1410}
              height={680}
              src="/assets/images/demo-corporate/bg-video-2.jpg"
              alt="video"
            />
            <div className="uncover">
              <div className="uncover_slice" />
              <div className="uncover_slice" />
              <div className="uncover_slice" />
            </div>
          </div>
          <button type="button" onClick={() => setVideoOpen(true)} className="popup-youtube">
            <div className="icon">
              <i className="icon-Play" />
            </div>
          </button>
        </div>
        <div className="heading-section mb_60">
          <div className="row align-items-center">
            <div className="col-lg-6 d-grid gap_16">
              <div className="sub text-label text-uppercase" ref={subRef}>About Us</div>
              <h2 className="title" ref={titleRef}>We Turn Vision Into Reality</h2>
            </div>
            <div className="col-lg-6">
              <div className="right">
                <p className="text-body-2 text_secondary mb_24" ref={descRef}>
                  As a trusted corporate partner, we specialize in delivering strategic digital
                  solutions, combining technology, creativity, and business insight to drive
                  results. Our team is dedicated to helping you achieve long-term success.
                </p>
                <div>
                  <Link href="/about-us" className="tf-btn btn-hover-animate-2">
                    <span>About Us</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="wrap-counter tf-grid-layout lg-col-4 tf-col-2">
          {counters.map((counter) => (
            <CounterItem key={counter.label} {...counter} />
          ))}
        </div>
      </div>
      <VideoModal youtubeId="MLpWrANjFbI" open={videoOpen} onClose={() => setVideoOpen(false)} />
    </div>
  );
}
