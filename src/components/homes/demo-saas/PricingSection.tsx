"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { usePricingTab, type PricingPeriod } from "@/hooks/usePricingTab";
import { useSplitTextReveal } from "@/hooks/useSplitTextReveal";
import { useSwiperControls } from "@/hooks/useSwiperControls";
import { pricingPlans } from "@/data/demo-saas/pricing";
import type { PricingPlan } from "@/data/demo-saas/pricing";

function PricingCard({ plan, period }: { plan: PricingPlan; period: PricingPeriod }) {
  return (
    <div
      className={`pricing-item style-3${plan.free ? " free" : ""} wow fadeInRight`}
      data-wow-delay={plan.delay || undefined}
    >
      <div className="content">
        <div className="heading mb_12 d-flex gap_12 align-items-center justify-content-between">
          <h5 className="title">{plan.title}</h5>
          {plan.tag && <div className="tag text-button text_white">{plan.tag}</div>}
        </div>
        <p className="text-body-default text_placehover mb_20">{plan.desc}</p>
        {plan.free ? (
          <h3 className="price text_white mb_23 price-value">
            <span className="price-amount">Free</span>
          </h3>
        ) : (
          <h3
            className="price text_white mb_26 price-value"
            data-monthly={plan.monthly}
            data-yearly={plan.yearly}
          >
            $
            <span className="wrap-price">
              <span>
                <span className={`price-month${period === "monthly" ? " active" : ""}`}>{plan.monthly}</span>
                <span className={`price-year${period === "yearly" ? " active" : ""}`}>{plan.yearly}</span>
              </span>
            </span>{" "}
            <span className="text-body-default fw-4 price-period">/ {period === "monthly" ? "month" : "year"}</span>
          </h3>
        )}
        <a href="#" className={`tf-btn btn-switch-text w-full${plan.btnBgWhite ? " btn-bg-white" : ""} mb_40`}>
          <span>
            <span className="btn-double-text" data-text="Get Started">
              Get Started
            </span>
          </span>
        </a>
        <ul className="list">
          {plan.features.map((feature) => (
            <li className={`text-body-default text_white${feature.disabled ? " disable" : ""}`} key={feature.text}>
              <i className={feature.disabled ? "icon-Close" : "icon-Check"} />
              {feature.text}
            </li>
          ))}
        </ul>
      </div>
      {plan.key === "premium" && (
        <div className="item position-absolute">
          <Image src="/assets/images/demo-saas/item-5.png" alt="" width={410} height={464} />
        </div>
      )}
    </div>
  );
}

// Swiper breakpoints mirror carousel.js data-preview=2/data-tablet=2/
// data-mobile=1/space-lg=30/space-md=20/space=15: <768px 1 slide space 15,
// 768-991px 2 slide space 20, >=992px 2 slide space 30 (screen-xl defaults
// to preview/space-lg, same as 992).
export default function PricingSection() {
  const { period, setPeriod, tabSlideRef } = usePricingTab();
  const { dotsRef, onSwiper } = useSwiperControls();
  const titleRef = useSplitTextReveal<HTMLHeadingElement>("blur-fade");
  const descRef = useSplitTextReveal<HTMLParagraphElement>("lines-transform");

  return (
    <div className="section-pricing-4 flat-animate-tab pricing-container sw-layout">
      <div className="wrap tf-spacing-12 pt-0">
        <div className="tf-container medium">
          <div className="row align-items-center">
            <div className="col-lg-4">
              <div className="box-left">
                <div className="heading-section-4 d-grid gap_16 mb_32">
                  <div className="tag text-label text-uppercase wow fadeInUp text_white">Pricing</div>
                  <h3 className="title split-text effect-blur-fade" ref={titleRef}>
                    Plans That Work
                  </h3>
                  <p className="desc text-body-default text_muted split-text split-lines-transform" ref={descRef}>
                    Transparent pricing with no hidden fees — upgrade or scale anytime as your team grows.
                  </p>
                </div>
                <div className="tab-slide style-1 d-flex wow fadeInUp" data-wow-delay="0.2s" ref={tabSlideRef}>
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
              </div>
            </div>
            <div className="col-lg-8">
              <div className="tab-content">
                <Swiper
                  className="swiper"
                  slidesPerView={1}
                  spaceBetween={15}
                  speed={1000}
                  observer
                  pagination={{ el: dotsRef.current, clickable: true }}
                  modules={[Pagination]}
                  onSwiper={onSwiper}
                  breakpoints={{
                    768: { slidesPerView: 2, spaceBetween: 20 },
                    992: { slidesPerView: 2, spaceBetween: 30 },
                    1200: { slidesPerView: 2, spaceBetween: 30 },
                  }}
                >
                  {pricingPlans.map((plan) => (
                    <SwiperSlide key={plan.key}>
                      <PricingCard plan={plan} period={period} />
                    </SwiperSlide>
                  ))}
                  <div
                    className="sw-dots style-white position-relative z-5 sw-pagination-layout text-center mt_24"
                    ref={dotsRef}
                  />
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
