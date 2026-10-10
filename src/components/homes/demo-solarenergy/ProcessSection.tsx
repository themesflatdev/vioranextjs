"use client";

import Image from "next/image";
import Link from "next/link";
import { useMobileSwiper } from "@/hooks/useMobileSwiper";
import { useSplitTextReveal } from "@/hooks/useSplitTextReveal";

const steps = [
  {
    icon: "icon-Headset",
    number: "1",
    title: "Consultation Phase",
    desc: "We assess your energy needs and provide a tailored solar solution.",
  },
  {
    icon: "icon-Wrench",
    number: "2",
    title: "Professional Installation",
    desc: "Our experts handle everything with professional, safe, and efficient setup.",
  },
  {
    icon: "icon-SolarPanel",
    number: "3",
    title: "System Activation",
    desc: "We connect and activate your solar system for immediate energy savings.",
  },
];

export default function ProcessSection() {
  const titleRef = useSplitTextReveal<HTMLHeadingElement>("blur-fade");
  const swiperRef = useMobileSwiper<HTMLDivElement>({ screen: 575, preview: 1, spacing: 15 });

  return (
    <div className="section-process-7 themes-solar-energy tf-spacing-1 pt-0">
      <div className="tf-container">
        <div className="heading-section text-center mb_60">
          <span className="sub text-label text_primary letter-spacing-1 text-uppercase mb_16 d-block lh-16 wow fadeInUp">
            OUR WORKING PROCESS
          </span>
          <h2 ref={titleRef} className="split-text effect-blur-fade onest-font text_primary">
            Simple Solar Steps
          </h2>
        </div>
        <div className="swiper tf-sw-mobile" data-screen="575" data-preview="1" data-space="15" ref={swiperRef}>
          <div className="swiper-wrapper wrap-process position-relative">
            {steps.map((step) => (
              <div className="process-item swiper-slide" key={step.number}>
                <div className="icon mb_40">
                  <i className={step.icon} />
                  <span className="number">{step.number}</span>
                </div>
                <div className="content">
                  <h5 className="mb_12 onest-font text_primary">
                    <Link href="#" className="hover-line-text">
                      {step.title}
                    </Link>
                  </h5>
                  <p className="text-body-default text_secondary">{step.desc}</p>
                </div>
              </div>
            ))}
            <div className="line-1 position-absolute sm-hide">
              <Image width={252} height={43} src="/assets/images/demo-solarenergy/line-1.png" alt="" />
            </div>
            <div className="line-2 position-absolute sm-hide">
              <Image width={252} height={43} src="/assets/images/demo-solarenergy/line-2.png" alt="" />
            </div>
          </div>
          <div className="sw-dots style-1 sw-pagination-mb justify-content-center d-flex mt_24 d-sm-none" />
        </div>
      </div>
    </div>
  );
}
