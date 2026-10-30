"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { usePricingTab, type PricingPeriod } from "@/hooks/usePricingTab";
import { useSplitTextReveal } from "@/hooks/useSplitTextReveal";
import { useSwiperControls } from "@/hooks/useSwiperControls";
import { pricingPlans } from "@/data/demo-lawyer/pricing";
import type { PricingPlan } from "@/data/demo-lawyer/pricing";

function PricingCard({ plan, period }: { plan: PricingPlan; period: PricingPeriod }) {
  return (
    <div className="pricing-item style-7">
      <div className="heading mb_12">
        {plan.tag ? (
          <div className="d-flex align-items-center mb_12 justify-content-between gap_12">
            <h4 className="title d-flex gap_12 align-items-center">
              <i className={plan.icon} />
              {plan.name}
            </h4>
            <div className="tag d-inline-flex align-items-center gap_4 text-button-small text_white rounded-0">
              <Image src="/assets/images/shape/Lightning-2.png" alt="Lightning" width={20} height={21} />
              {plan.tag}
            </div>
          </div>
        ) : (
          <h4 className="title d-flex gap_12 align-items-center mb_12">
            <i className={plan.icon} />
            {plan.name}
          </h4>
        )}
        <p className="text-body-2 text_secondary">{plan.desc}</p>
      </div>
      <div className="h3 price text_primary mb_32 price-value">
        $
        <span className="wrap-price">
          <span>
            <span className={`price-month${period === "monthly" ? " active" : ""}`}>
              {period === "monthly" ? plan.monthly : ""}
            </span>
            <span className={`price-year${period === "yearly" ? " active" : ""}`}>
              {period === "yearly" ? plan.yearly : ""}
            </span>
          </span>
        </span>
        <span className="text-body-2 text-muted fw-4 font-main price-period">
          / {period === "monthly" ? "month" : "year"}
        </span>
      </div>
      <ul className="list mb_32">
        {plan.features.map((feature) => (
          <li className="text-body-2 text_primary" key={feature}>
            <i className="icon-CheckCircleFill" />
            {feature}
          </li>
        ))}
      </ul>
      <a
        href="#"
        className={`tf-btn btn-hover-animate-2 rounded-0${plan.styleBorder ? " style-border-2" : " btn-bg-secondary"}`}
      >
        <span>Start Consultation</span>
        <span className="bg-effect" />
      </a>
    </div>
  );
}

// Swiper breakpoints mirror assets/js/carousel.js `.sw-layout` init (this
// section's `.swiper` carries `.tf-sw-mobile` but is wrapped in `.sw-layout`,
// so it's governed by the generic sw-layout handler, NOT the destroy-based
// tf-sw-mobile one — verified directly against the original HTML: the
// swiper stays active and responsive at every viewport, never destroyed).
// data-mobile=1/space=15, data-tablet=2/space-md=20, data-preview=2/
// space-lg=30, data-screen-xl=3 (space-xl falls back to space-lg=30);
// data-mobile-sm is absent so the 575 breakpoint falls back to mobile=1.
export default function PricingSection() {
  const { period, setPeriod, tabSlideRef } = usePricingTab();
  const { dotsRef, dotsEl, onSwiper } = useSwiperControls();
  const titleRef = useSplitTextReveal<HTMLHeadingElement>("right");

  return (
    <div className="section-pricing-9 pricing-container">
      <div className="tf-container">
        <div className="heading-section text-center d-grid gap_16 mb_40">
          <div className="letter-spacing-1 text-label lh-16 text_secondary text-uppercase wow fadeInUp">
            Our Pricing
          </div>
          <h2 ref={titleRef} className="split-text effect-right">
            Choose Your <span className="text_primary-color">Legal Plan</span>
          </h2>
          <p className="text-body-2 wow fadeInUp" data-wow-delay=".2s">
            Find the right legal plan with flexible options designed to meet your needs.
          </p>
        </div>

        <div className="tab-slide style-1 d-flex justify-content-center mb_48" ref={tabSlideRef}>
          <ul className="menu-tab d-inline-flex align-items-center justify-content-center" role="tablist">
            <li className="item-slide-effect" role="presentation" />
            <li className={`nav-tab-item${period === "monthly" ? " active" : ""}`} role="presentation">
              <a
                href="#standard-plan"
                className={`text-button tab-link${period === "monthly" ? " active" : ""}`}
                data-pricing="monthly"
                onClick={(e) => {
                  e.preventDefault();
                  setPeriod("monthly");
                }}
              >
                Pay Monthly
              </a>
            </li>
            <li className={`nav-tab-item${period === "yearly" ? " active" : ""}`} role="presentation">
              <a
                href="#premium-plan"
                className={`text-button tab-link${period === "yearly" ? " active" : ""}`}
                data-pricing="year"
                onClick={(e) => {
                  e.preventDefault();
                  setPeriod("yearly");
                }}
              >
                Pay Yearly
              </a>
            </li>
          </ul>
        </div>

        <div className="tab-content wow fadeInUp sw-layout">
          <Swiper
            className="swiper tf-sw-mobile"
            modules={[Pagination]}
            slidesPerView={1}
            spaceBetween={15}
            speed={1000}
            pagination={{ el: dotsEl, clickable: true }}
            onSwiper={onSwiper}
            breakpoints={{
              575: { slidesPerView: 1, spaceBetween: 15 },
              768: { slidesPerView: 2, spaceBetween: 20 },
              992: { slidesPerView: 2, spaceBetween: 30 },
              1200: { slidesPerView: 3, spaceBetween: 30 },
            }}
          >
            {pricingPlans.map((plan) => (
              <SwiperSlide key={plan.key}>
                <PricingCard plan={plan} period={period} />
              </SwiperSlide>
            ))}
            <div
              className="sw-dots style-1 position-relative z-5 sw-pagination-layout text-center mt_24"
              ref={dotsRef}
            />
          </Swiper>
        </div>
      </div>
    </div>
  );
}
