"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { usePricingTab, type PricingPeriod } from "@/hooks/usePricingTab";
import { useSwiperControls } from "@/hooks/useSwiperControls";
import { pricingPlans, type PricingPlan } from "@/data/demo-coworkingspace/pricing";

function PricingCard({ plan, period }: { plan: PricingPlan; period: PricingPeriod }) {
  return (
    <div className="pricing-item style-5">
      <div className="heading mb_32">
        {plan.tag ? (
          <div className="d-flex align-items-center mb_16 justify-content-between gap_12">
            <h3 className="title d-flex gap_12 align-items-center">
              <i className={plan.icon} />
              {plan.title}
            </h3>
            <div className="tag d-inline-flex align-items-center gap_4 text-button-small text_primary">
              <Image
                src="/assets/images/shape/Lightning-4.png"
                alt="Lightning"
                width={16}
                height={16}
              />
              Popular
            </div>
          </div>
        ) : (
          <h3 className="title d-flex gap_12 align-items-center mb_16">
            <i className={plan.icon} />
            {plan.title}
          </h3>
        )}
        <p className="text-body-2 text_secondary">{plan.desc}</p>
      </div>
      <div
        className="h1 price text_primary mb_32 price-value"
        data-monthly={plan.monthly}
        data-yearly={plan.yearly}
      >
        $
        <span className="wrap-price">
          <span>
            <span className={`price-month${period === "monthly" ? " active" : ""}`}>
              {plan.monthly}
            </span>
            <span className={`price-year${period === "yearly" ? " active" : ""}`}>
              {plan.yearly}
            </span>
          </span>
        </span>
        <span className="text-body-default text-muted fw-4 price-period">
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
      <Link
        href="#"
        className={`tf-btn btn-switch-text w-full${plan.borderDark ? " style-border-dark" : ""}`}
      >
        <span>
          <span className="btn-double-text" data-text="Book Call">
            Book Call
          </span>
        </span>
      </Link>
    </div>
  );
}

// carousel.js .sw-layout breakpoints: data-mobile=1/data-tablet=2/
// data-preview=2/data-screen-xl=3, data-space=15/data-space-md=40/
// data-space-lg=112 → <768 1 slide space 15, 768-991 2 slide space 40,
// 992-1199 2 slide space 112, >=1200 3 slide space 112.
export default function PricingSection() {
  const { period, setPeriod, tabSlideRef } = usePricingTab();
  const { dotsRef, dotsEl, onSwiper } = useSwiperControls();

  return (
    <div className="section-pricing-7 flat-animate-tab tf-spacing-1 pt-0 pricing-container">
      <div className="tf-container large">
        <div className="heading-section text-center d-grid gap_16 mb_40">
          <div className="letter-spacing-1 text-label lh-16 text_secondary text-uppercase split-text effect-up">
            Our Pricing
          </div>
          <h2 className="split-text effect-right">Choose Your Perfect Workspace</h2>
          <p className="text-body-2 text_secondary split-text split-lines-transform">
            Find the right workspace plan with flexible options designed for your daily needs.
          </p>
        </div>

        <div className="tab-slide style-1 d-flex justify-content-center mb_40" ref={tabSlideRef}>
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
            className="swiper"
            slidesPerView={1}
            spaceBetween={15}
            speed={1000}
            observer
            pagination={{ el: dotsEl, clickable: true }}
            modules={[Pagination]}
            onSwiper={onSwiper}
            breakpoints={{
              768: { slidesPerView: 2, spaceBetween: 40 },
              992: { slidesPerView: 2, spaceBetween: 112 },
              1200: { slidesPerView: 3, spaceBetween: 112 },
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
