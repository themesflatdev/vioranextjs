"use client";

import Image from "next/image";
import Link from "next/link";
import { useSplitTextReveal } from "@/hooks/useSplitTextReveal";
import { useMobileSwiper } from "@/hooks/useMobileSwiper";

const boxNumbers = [
  { number: "1", title: "Healthy Products", desc: "Fresh, organic, and chemical-free produce grown with care.", delay: undefined as string | undefined },
  { number: "2", title: "Green Methods", desc: "Eco-friendly farming methods that protect the environment.", delay: "0.2s" },
  { number: "3", title: "Trusted Quality", desc: "Consistent standards to ensure safe and reliable food.", delay: "0.4s" },
  { number: "4", title: "Local Growth", desc: "Empowering local farmers and strengthening communities.", delay: "0.6s" },
];

export default function BenefitSection() {
  const titleRef = useSplitTextReveal<HTMLHeadingElement>("scale");
  const swiperRef = useMobileSwiper<HTMLDivElement>({ screen: 575, preview: 1, spacing: 15 });

  return (
    <div className="section-benefit-3">
      <div className="tf-container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="tf-grid-layout tf-col-2 gap_12">
              <div className="img-style wow zoomIn">
                <Image
                  className="scale-up"
                  width={339}
                  height={452}
                  loading="lazy"
                  src="/assets/images/demo-agriculturefarming/benefit-1.jpg"
                  alt="benefit"
                />
              </div>
              <div className="img-style wow zoomIn">
                <Image
                  className="scale-up"
                  width={339}
                  height={452}
                  loading="lazy"
                  src="/assets/images/demo-agriculturefarming/benefit-2.jpg"
                  alt="benefit"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="box-right">
              <div className="heading-section mb_48">
                <div className="sub text-label text-uppercase text_primary-color split-text effect-up mb_12 lh-16">
                  OUR BENEFITS
                </div>
                <h2 ref={titleRef} className="title mb_16 split-text effect-scale">
                  Why Choose Our Farming Solutions
                </h2>
                <p className="desc text-body-2 wow fadeInUp" data-wow-delay=".2s">
                  Our mission is to provide eco-friendly solutions that benefit farmers, consumers, and future
                  generations alike.
                </p>
              </div>
              <Link href="#" className="tf-btn btn-hover-animate-2 btn-bg-secondary wow fadeInUp" data-wow-delay=".4s">
                <span>Our Services</span>
                <span className="bg-effect" />
              </Link>
            </div>
          </div>
        </div>
        <div className="swiper tf-sw-mobile z-5 tf-spacing-1" ref={swiperRef}>
          <div className="swiper-wrapper wrap-box-number tf-grid-layout-sm lg-col-4 sm-col-2">
            {boxNumbers.map((box) => (
              <div className="swiper-slide" key={box.number}>
                <div className="box-number wow fadeIn" data-wow-delay={box.delay}>
                  <div className="number">{box.number}</div>
                  <div className="content">
                    <h5 className="mb_12">{box.title}</h5>
                    <p className="text-body-default">{box.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="sw-dots style-1 sw-pagination-mb justify-content-center d-flex mt_24 d-md-none" />
        </div>
      </div>
    </div>
  );
}
