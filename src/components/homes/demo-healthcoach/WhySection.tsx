"use client";

import Image from "next/image";
import { useSplitTextReveal } from "@/hooks/useSplitTextReveal";

const whyItems = [
  {
    icon: "icon-UserSound",
    title: "Understand Your Needs",
    desc: "We take time to truly listen understanding your lifestyle, goals, and challenges before designing any plan.",
    delay: "",
  },
  {
    icon: "icon-ReadCvLogo",
    title: "Create Personalized Programs",
    desc: "From fitness routines to nutrition plans, everything is tailored to your body, your pace, and your vision of health.",
    delay: ".2s",
  },
  {
    icon: "icon-Barbell",
    title: "Support Your Real Progress",
    desc: "We stay with you throughout offering ongoing guidance, encouragement, and adjustments for real, lasting results.",
    delay: ".4s",
  },
];

export default function WhySection() {
  const subRef = useSplitTextReveal<HTMLDivElement>("up");
  const titleRef = useSplitTextReveal<HTMLHeadingElement>("scale");

  return (
    <div className="section-why-3">
      <div className="tf-container medium">
        <div className="heading-section d-grid gap_14 text-center mb_48">
          <div className="sub text-label lh-20 text-uppercase text_primary-color split-text effect-up" ref={subRef}>
            Why choose us?
          </div>
          <h2 className="title text_primary-color split-text effect-scale" ref={titleRef}>
            What Makes Us Different
          </h2>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="wrap-box d-grid gap_20">
              {whyItems.map((item) => (
                <div className="tf-box-icon style-5 wow fadeInLeft" data-wow-delay={item.delay || undefined} key={item.title}>
                  <h4 className="heading d-flex align-items-center gap_20 font-main">
                    <i className={item.icon} />
                    {item.title}
                  </h4>
                  <p className="text-body-2 text_secondary">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-6">
            <div className="thumbs">
              <Image className="img-1 wow zoomIn" width={450} height={600} src="/assets/images/demo-healthcoach/whychoose-1.jpg" alt="health-whychoose" />
              <Image className="img-2 wow zoomIn" width={300} height={400} src="/assets/images/demo-healthcoach/whychoose-2.jpg" alt="health-whychoose" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
