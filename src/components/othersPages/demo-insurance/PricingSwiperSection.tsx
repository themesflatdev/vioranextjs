"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { usePricingTab, type PricingPeriod } from "@/hooks/usePricingTab";
import { useSplitTextReveal } from "@/hooks/useSplitTextReveal";
import { useSwiperControls } from "@/hooks/useSwiperControls";
import { pricingPlans } from "@/data/demo-insurance/pricingPlans";
import type { PricingPlan } from "@/data/demo-insurance/pricingPlans";

function PricingCard({ plan, period }: { plan: PricingPlan; period: PricingPeriod }) {
  return (
    <div className={`pricing-item style-1 v1${plan.popular ? " z-5 center" : ""}`}>
      <div className="heading mb_23">
        {plan.tag ? (
          <div className="d-flex align-items-center mb_16 justify-content-between gap_12">
            <h5 className="title text_primary d-flex gap_12 align-items-center">{plan.name}</h5>
            <div className="tag d-inline-flex align-items-center gap_4 text-button-small text_white">
              <Image src="/assets/images/shape/Lightning-2.png" alt="Lightning" width={21} height={20} />
              {plan.tag}
            </div>
          </div>
        ) : (
          <h5 className="title text_primary d-flex gap_12 align-items-center mb_16">{plan.name}</h5>
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
      <a
        href="#"
        className={`tf-btn ${plan.styleBorder ? "style-border-2 btn-hover-animate-border" : "btn-bg-secondary btn-hover-animate"} w-full mb_32`}
      >
        <span>Get a Quote</span>
        <span />
      </a>
      <ul className="list">
        {plan.features.map((feature) => (
          <li className="text-body-3 text_primary" key={feature}>
            <i className="icon-check-2" />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}

// section-pricing-6 — Swiper breakpoints mirror assets/js/carousel.js
// `.sw-layout`: base slidesPerView=mobile(1)/spaceBetween=space(15),
// 575=mobileSm (falls back to mobile=1)/space(15), 768=tablet(2)/
// space-md(20), 992=preview(3)/space-lg(30), 1200=screenXl (falls back to
// preview=3)/spaceXl (falls back to space-lg=30).
export default function PricingSwiperSection() {
  const { period, setPeriod, tabSlideRef } = usePricingTab();
  const { dotsRef, dotsEl, onSwiper } = useSwiperControls();
  const subRef = useSplitTextReveal<HTMLDivElement>("up");
  const titleRef = useSplitTextReveal<HTMLHeadingElement>("right");

  return (
    <div className="section-pricing-6 flat-animate-tab tf-spacing-1">
      <div className="tf-container pricing-container">
        <div className="heading-section style-default text-center mb_60">
          <div className="sub text-label text-uppercase" ref={subRef}>
            Package
          </div>
          <h2 className="title" ref={titleRef}>
            Popular Pricing Plan For <br className="lg-hide" />
            Insurance Services
          </h2>
        </div>
        <div className="tab-slide style-1 v2 d-flex justify-content-center mb_48" ref={tabSlideRef}>
          <ul className="menu-tab d-inline-flex align-items-center justify-content-center" role="tablist">
            <li className="item-slide-effect" />
            <li className={`nav-tab-item${period === "monthly" ? " active" : ""}`} role="presentation">
              <a
                href="#monthly-plan"
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
                href="#yearly-plan"
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
            speed={1000}
            pagination={{ el: dotsEl, clickable: true }}
            modules={[Pagination]}
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
