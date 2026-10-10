"use client";

import Image from "next/image";
import { useSplitTextReveal } from "@/hooks/useSplitTextReveal";
import { useScaleUpImage } from "@/hooks/useScaleUpImage";

const boxIcons = [
  {
    icon: "icon-Grains",
    title: "Sustainability",
    desc: "Eco-friendly farming for a healthier, sustainable future.",
  },
  {
    icon: "icon-Handshake",
    title: "Community",
    desc: "Supporting local farmers, growing stronger communities.",
  },
];

export default function AgricultureIntroSection() {
  const titleRef = useSplitTextReveal<HTMLHeadingElement>("scale");
  const imgRef = useScaleUpImage<HTMLDivElement>();

  return (
    <div className="section-agriculture-intro tf-spacing-1">
      <div className="tf-container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="box-left">
              <div className="heading-section mb_48">
                <div className="sub text-label text-uppercase text_primary-color split-text effect-up mb_12 lh-16">
                  Get to Know us
                </div>
                <h2 ref={titleRef} className="title mb_16 split-text effect-scale">
                  Agriculture Matters For Future Growth
                </h2>
                <p className="desc text-body-2 wow fadeInUp">
                  Growing together with nature and innovation to create sustainable farms that support communities
                  and businesses.
                </p>
              </div>
              <div className="wrap-box-icon tf-grid-layout tf-col-2 wow fadeInUp" data-wow-delay="0.4s">
                {boxIcons.map((box) => (
                  <div className="box-icon" key={box.title}>
                    <div className="icon mb_32">
                      <i className={box.icon} />
                    </div>
                    <div className="content">
                      <h5 className="mb_12">{box.title}</h5>
                      <p className="text-body-default text_secondary">{box.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="img-style scale-up-img" ref={imgRef}>
              <Image
                className="scale-up"
                width={690}
                height={690}
                loading="lazy"
                src="/assets/images/demo-agriculturefarming/agriculture-intro-1.jpg"
                alt="agriculture"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
