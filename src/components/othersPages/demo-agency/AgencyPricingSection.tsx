"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { useSplitTextReveal } from "@/hooks/useSplitTextReveal";
import { useSwiperControls } from "@/hooks/useSwiperControls";
import { pricingPlans, pricingFeatures } from "@/data/demo-agency/pricingPlans";

// section-pricing-8 — mirrors assets/js/carousel.js `.sw-layout` init for
// this swiper's data attributes (data-preview="3" data-tablet="2"
// data-mobile-sm="2" data-mobile="1" data-space-lg="40" data-space-md="20"
// data-space="15"): slidesPerView 1 below 575px, 2 from 575px, 2 from
// 768px (spaceBetween 20), 3 from 992px and 1200px up (spaceBetween 40).
export default function AgencyPricingSection() {
  const titleRef = useSplitTextReveal<HTMLHeadingElement>("blur-fade");
  const descRef = useSplitTextReveal<HTMLParagraphElement>("lines-transform");
  const { dotsRef, onSwiper } = useSwiperControls();

  return (
    <div className="section-pricing-8 sw-layout tf-spacing-1">
      <div className="tf-container">
        <div className="heading-section-2 mb_47">
          <div className="row">
            <div className="col-lg-5">
              <h2 className="title text_white" ref={titleRef}>
                Our Plans
              </h2>
            </div>
            <div className="col-lg-7">
              <div className="right">
                <p className="text_muted text-body-2 text-lg-end" ref={descRef}>
                  Our pricing plans offer flexible options tailored to your needs. From startups to{" "}
                  <br className="xxl-hide" /> enterprises, we deliver strong value and more
                </p>
              </div>
            </div>
          </div>
        </div>
        <Swiper
          className="swiper wow fadeInUp"
          data-wow-delay=".4s"
          modules={[Pagination]}
          slidesPerView={1}
          spaceBetween={15}
          speed={1000}
          pagination={{ el: dotsRef.current, clickable: true }}
          onSwiper={onSwiper}
          breakpoints={{
            575: { slidesPerView: 2, spaceBetween: 15 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            992: { slidesPerView: 3, spaceBetween: 40 },
            1200: { slidesPerView: 3, spaceBetween: 40 },
          }}
        >
          {pricingPlans.map((plan) => (
            <SwiperSlide key={plan.key}>
              <div className={`pricing-item style-6 v2${plan.popular ? " z-5" : ""}`}>
                {plan.popular ? (
                  <div className="tag d-inline-flex align-items-center gap_4 text-button text_primary">
                    <Image src="/assets/images/shape/Lightning-3.png" alt="Lightning" width={21} height={20} />
                    Popular
                  </div>
                ) : null}
                <div className="heading mb_24">
                  {plan.popular ? (
                    <div className="d-flex align-items-center mb_11 justify-content-between gap_12">
                      <h4 className="title text_white d-flex gap_12 align-items-center">
                        <i className={plan.icon} />
                        {plan.name}
                      </h4>
                    </div>
                  ) : (
                    <h4 className="title text_white d-flex gap_12 align-items-center mb_11">
                      <i className={plan.icon} />
                      {plan.name}
                    </h4>
                  )}
                  <p className="text-body-2 text_muted">{plan.description}</p>
                </div>
                <div className="price h1">
                  ${plan.price} <span className="text-body-2 text_muted fw-4">/per Month</span>
                </div>
                <ul className="list mb_32">
                  {pricingFeatures.map((feature) => (
                    <li className="text-body-2 text_white" key={feature}>
                      <i className="icon-CheckCircleFill" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="/demo-agency/portfolio"
                  className={`tf-btn ${plan.popular ? "btn-bg-primary-2" : "btn-bg-stroke-dark-2"} btn-hover-animate-2 w-full`}
                >
                  <span className={plan.popular ? "text_primary" : undefined}>Get Started</span>
                  <span />
                </a>
              </div>
            </SwiperSlide>
          ))}
          <div
            className="sw-dots style-white position-relative z-5 sw-pagination-layout text-center mt_24"
            ref={dotsRef}
          />
        </Swiper>
      </div>
    </div>
  );
}
