"use client";

import Image from "next/image";
import Link from "next/link";
import { useMobileSwiper } from "@/hooks/useMobileSwiper";
import { useSplitTextReveal } from "@/hooks/useSplitTextReveal";
import { processSteps } from "@/data/demo-gardenlandscaping/home";

export default function ProcessSection() {
  const swiperRef = useMobileSwiper<HTMLDivElement>({ screen: 575, preview: 1, spacing: 15 });
  const titleRef = useSplitTextReveal<HTMLHeadingElement>("right");

  return (
    <div className="section-process-5 tf-spacing-1 pt-0">
      <div className="tf-container">
        <div className="heading-section text-center mb_48">
          <h3 className="mb_16 split-text effect-right" ref={titleRef}>
            Steps To Your Garden
          </h3>
          <p className="text-body-2 text_secondary wow fadeInUp" data-wow-delay=".2s">
            Simple process to bring your dream garden to life.
          </p>
        </div>
        <div className="swiper tf-sw-mobile" data-screen="575" data-preview="1" data-space="15" ref={swiperRef}>
          <div className="swiper-wrapper wrap-process position-relative">
            {processSteps.map((step) => (
              <div className="process-item swiper-slide" key={step.title}>
                <div className="icon mb_40">
                  <i className={step.icon} />
                  <span className="number">{step.number}</span>
                </div>
                <div className="content">
                  <h5 className="mb_12">
                    <Link href="#" className="hover-line-text">
                      {step.title}
                    </Link>
                  </h5>
                  <p className="text-body-default text_secondary">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="line-1 position-absolute sm-hide">
            <Image width={324} height={66} src="/assets/images/demo-gardenlandscaping/line-1.png" alt="" />
          </div>
          <div className="line-2 position-absolute sm-hide">
            <Image width={324} height={66} src="/assets/images/demo-gardenlandscaping/line-2.png" alt="" />
          </div>
          <div className="sw-dots style-1 sw-pagination-mb justify-content-center d-flex mt_24 d-sm-none" />
        </div>
      </div>
    </div>
  );
}
