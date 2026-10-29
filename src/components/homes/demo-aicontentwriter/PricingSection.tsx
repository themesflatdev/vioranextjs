"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { usePricingTab, type PricingPeriod } from "@/hooks/usePricingTab";
import { useSplitTextReveal } from "@/hooks/useSplitTextReveal";
import { useSwiperControls } from "@/hooks/useSwiperControls";
import { pricingPlans, type PricingPlan } from "@/data/demo-aicontentwriter/pricing";

function PricingCard({ plan, period }: { plan: PricingPlan; period: PricingPeriod }) {
  const hasPrice = plan.monthly !== undefined && plan.yearly !== undefined;

  return (
    <div className={`pricing-item style-1${plan.tag ? " z-5" : ""}`}>
      <div className="heading mb_24">
        {plan.tag ? (
          <div className="d-flex align-items-center mb_16 justify-content-between gap_12">
            <h5 className="title d-flex gap_12 align-items-center">
              <i className={plan.icon} />
              {plan.name}
            </h5>
            <div className="tag d-inline-flex align-items-center gap_4 text-button-small text_white">
              <Image width={20} height={21} src="/assets/images/shape/Lightning-2.png" alt="Lightning" />
              {plan.tag}
            </div>
          </div>
        ) : (
          <h5 className="title d-flex gap_12 align-items-center mb_16">
            <i className={plan.icon} />
            {plan.name}
          </h5>
        )}
        <p className="text-body-default text_secondary">{plan.desc}</p>
      </div>
      <h2 className="price text_primary mb_32 price-value">
        {hasPrice && "$"}
        <span className="wrap-price">
          <span>
            <span className={`price-month${period === "monthly" ? " active" : ""}`}>
              {hasPrice ? (period === "monthly" ? plan.monthly : "") : "free"}
            </span>
            <span className={`price-year${period === "yearly" ? " active" : ""}`}>
              {hasPrice ? (period === "yearly" ? plan.yearly : "") : "free"}
            </span>
          </span>
        </span>
        <span className="text-body-default text-muted fw-4 price-period">/ {period === "monthly" ? "month" : "year"}</span>
      </h2>
      <a href="#" className={`tf-btn${plan.ctaStyleBorder ? " style-border btn-hover-animate-border" : " btn-hover-animate"} w-full mb_32`}>
        <span>{plan.ctaLabel}</span>
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

export default function PricingSection() {
  const { period, setPeriod, tabSlideRef } = usePricingTab();
  const { dotsRef, dotsEl, onSwiper } = useSwiperControls();
  const subRef = useSplitTextReveal<HTMLDivElement>("up");
  const titleRef = useSplitTextReveal<HTMLHeadingElement>("right");
  const descRef = useSplitTextReveal<HTMLParagraphElement>("lines-transform");

  return (
    <div className="section-pricing-3 flat-animate-tab tf-spacing-10 pricing-container sw-layout">
      <div className="tf-container">
        <div className="heading-section style-default text-center mb_48">
          <div className="sub text-label text-uppercase text_primary-color" ref={subRef}>
            Our Pricing
          </div>
          <h2 className="title" ref={titleRef}>
            Flexible Plans For Every Writer
          </h2>
          <p className="text-body-2 text_secondary" ref={descRef}>
            Choose the plan that fits your needs — upgrade anytime as you grow.
          </p>
        </div>
        <div className="tab-slide style-1 d-flex justify-content-center mb_48" ref={tabSlideRef}>
          <ul className="menu-tab d-inline-flex align-items-center justify-content-center" role="tablist">
            <li className="item-slide-effect" />
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
                Monthly
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
                Yearly
              </a>
            </li>
          </ul>
        </div>
        <div className="tab-content wow fadeInUp">
          <Swiper
            className="swiper"
            modules={[Pagination]}
            speed={1000}
            observer
            observeParents
            slidesPerView={1}
            spaceBetween={15}
            pagination={{ el: dotsEl, clickable: true }}
            onSwiper={onSwiper}
            breakpoints={{
              768: { slidesPerView: 2, spaceBetween: 20 },
              992: { slidesPerView: 3, spaceBetween: 30 },
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
