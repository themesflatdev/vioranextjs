"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { usePricingTab, type PricingPeriod } from "@/hooks/usePricingTab";
import { useSplitTextReveal } from "@/hooks/useSplitTextReveal";
import { useSwiperControls } from "@/hooks/useSwiperControls";
import { pricingPlans, type PricingPlan } from "@/data/demo-medical/pricingPlans";

function PricingCard({ plan, period }: { plan: PricingPlan; period: PricingPeriod }) {
  return (
    <div className={`pricing-item style-1${plan.popular ? " z-5" : ""} wow ${plan.wowEffect}`}>
      <div className="heading mb_24">
        {plan.popular ? (
          <div className="d-flex align-items-center mb_16 justify-content-between gap_12">
            <h5 className="title d-flex gap_12 align-items-center">{plan.name}</h5>
            <div className="tag d-inline-flex align-items-center gap_4 text-button-small text_white">
              <Image src="/assets/images/shape/Lightning-2.png" alt="Lightning" width={21} height={20} />
              Popular
            </div>
          </div>
        ) : (
          <h5 className="title d-flex gap_12 align-items-center mb_16">{plan.name}</h5>
        )}
        <p className="text-body-default text_secondary">{plan.description}</p>
      </div>
      <h2 className="price text_primary mb_34 price-value">
        $
        <span className="wrap-price">
          <span>
            <span className={`price-month${period === "monthly" ? " active" : ""}`}>{plan.monthly}</span>
            <span className={`price-year${period === "yearly" ? " active" : ""}`}>{plan.yearly}</span>
          </span>
        </span>{" "}
        <span className="text-body-default text-muted fw-4 price-period">
          / {period === "monthly" ? "month" : "year"}
        </span>
      </h2>
      <a href="#" className={`tf-btn ${plan.styleBorder ? "style-border btn-hover-animate-border" : "btn-hover-animate"} w-full mb_32`}>
        <span>Appointment Now</span>
        <span />
      </a>
      <ul className="list">
        {plan.features.map((feature) => (
          <li className="text-body-default text_primary" key={feature}>
            <i className="icon-Check" />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}

// section-pricing-6 — breakpoints mirror assets/js/carousel.js `.sw-layout`
// cho data-preview="3" data-tablet="2" data-mobile="1" data-space-lg="30"
// data-space-md="20" data-space="15" (cùng cấu hình đã dùng ở
// demo-insurance/PricingSwiperSection.tsx — tái dùng nguyên breakpoints).
export default function PricingSection() {
  const { period, setPeriod, tabSlideRef } = usePricingTab();
  const titleRef = useSplitTextReveal<HTMLHeadingElement>("right");
  const { dotsRef, onSwiper } = useSwiperControls();

  return (
    <div className="section-pricing-6 flat-animate-tab tf-spacing-1">
      <div className="tf-container pricing-container">
        <div className="heading-section style-default text-center mb_60">
          <h2 className="title" ref={titleRef}>
            Regular Health Checkup <br />
            Package For You
          </h2>
        </div>
        <div className="tab-slide style-1 d-flex justify-content-center mb_48" ref={tabSlideRef}>
          <ul className="menu-tab d-inline-flex align-items-center justify-content-center" role="tablist">
            <li className="item-slide-effect" />
            <li className={`nav-tab-item${period === "monthly" ? " active" : ""}`} role="presentation">
              <a
                href="#standard-plan"
                className={`text-button tab-link${period === "monthly" ? " active" : ""}`}
                onClick={(e) => {
                  e.preventDefault();
                  setPeriod("monthly");
                }}
              >
                Monthly
              </a>
            </li>
            <li className={`nav-tab-item${period === "yearly" ? " active" : ""}`} role="presentation">
              <a
                href="#premium-plan"
                className={`text-button tab-link${period === "yearly" ? " active" : ""}`}
                onClick={(e) => {
                  e.preventDefault();
                  setPeriod("yearly");
                }}
              >
                Yearly
              </a>
            </li>
          </ul>
        </div>
        <div className="tab-content wow fadeInUp sw-layout">
          <Swiper
            className="swiper"
            slidesPerView={1}
            spaceBetween={15}
            modules={[Pagination]}
            pagination={{ el: dotsRef.current, clickable: true }}
            onSwiper={onSwiper}
            breakpoints={{
              575: { slidesPerView: 1, spaceBetween: 15 },
              768: { slidesPerView: 2, spaceBetween: 20 },
              992: { slidesPerView: 3, spaceBetween: 30 },
              1200: { slidesPerView: 3, spaceBetween: 30 },
            }}
          >
            {pricingPlans.map((plan) => (
              <SwiperSlide key={plan.key}>
                <PricingCard plan={plan} period={period} />
              </SwiperSlide>
            ))}
            <div className="sw-dots style-1 position-relative z-5 sw-pagination-layout text-center mt_24" ref={dotsRef} />
          </Swiper>
        </div>
      </div>
    </div>
  );
}
