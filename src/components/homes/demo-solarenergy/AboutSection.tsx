"use client";

import Image from "next/image";
import { useSplitTextReveal } from "@/hooks/useSplitTextReveal";
import { useCountUp } from "@/hooks/useCountUp";
import { useScaleUpImage } from "@/hooks/useScaleUpImage";

export default function AboutSection() {
  const titleRef = useSplitTextReveal<HTMLHeadingElement>("blur-fade");
  const { value, ref: counterRef } = useCountUp(15, 700, 15);
  const scaleRef = useScaleUpImage<HTMLDivElement>();

  return (
    <div className="section-about-13 tf-spacing-1">
      <div className="tf-container">
        <div className="row align-items-center">
          <div className="col-lg-7">
            <div className="left">
              <div className="heading-section mb_80">
                <span className="sub text-label text_primary letter-spacing-1 text-uppercase mb_16 d-block lh-16 wow fadeInUp">
                  About Us
                </span>
                <h2 ref={titleRef} className="text-capitalize split-text effect-blur-fade">
                  Welcome to Solarify Lighting the Future with Solar Energy
                </h2>
              </div>
              <div className="content">
                <div
                  ref={counterRef as React.RefObject<HTMLDivElement>}
                  className="counter-item d-flex flex-column wow fadeInUp"
                  data-wow-delay="0.2s"
                >
                  <div className="counter h1 mb_5">
                    <span className="numberCounter">{value}</span>
                    <span className="sub-counter">+</span>
                  </div>
                  <p className="sub-title text-label text-uppercase letter-spacing-1">Years of Experience</p>
                </div>
                <p className="text-body-default wow fadeInUp" data-wow-delay="0.4s">
                  Harness the endless power of the sun to brighten your world with clean, renewable energy. Just as
                  sunlight sustains life on Earth, our solar panels convert it into reliable electricity that powers
                  your home and business.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div ref={scaleRef} className="right position-relative scale-up-img">
              <div className="img-style overflow-hidden">
                <Image
                  className="scale-up"
                  width={500}
                  height={667}
                  src="/assets/images/demo-solarenergy/about-1.jpg"
                  alt="about"
                />
              </div>
              <div className="item" data-speed="0.9">
                <span className="text-label text-uppercase text_secondary lh-16 letter-spacing-1">
                  Electrical Fixed
                </span>
                <div>
                  <h4 className="mb_16">SOLARIFY</h4>
                  <div>
                    <p className="text-button text_secondary mb_4">Certified</p>
                    <p className="text-button text_secondary">Professional 2024</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
