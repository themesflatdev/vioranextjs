"use client";

import Image from "next/image";
import { pricingPlans } from "@/data/demo-corporate/servicesPricing";
import { usePricingTab, type PricingPeriod } from "@/hooks/usePricingTab";
import { useSplitTextReveal } from "@/hooks/useSplitTextReveal";
import type { PricingPlan } from "@/data/demo-corporate/servicesPricing";

function PricingCard({ plan, period }: { plan: PricingPlan; period: PricingPeriod }) {
  const isFree = plan.monthly === null || plan.yearly === null;

  return (
    <div className="pricing-item style-1 wow fadeInUp">
      <div className="heading mb_24">
        {plan.tag ? (
          <div className="d-flex align-items-center mb_16 justify-content-between gap_12">
            <h5 className="title d-flex gap_12 align-items-center">
              <i className={plan.icon} />
              {plan.name}
            </h5>
            <div className="tag d-inline-flex align-items-center gap_4 text-button-small">
              <Image src="/assets/images/shape/Lightning.png" alt="Lightning" width={21} height={20} />
              {plan.tag}
            </div>
          </div>
        ) : (
          <h5 className="title d-flex gap_12 align-items-center mb_16">
            <i className={plan.icon} />
            {plan.name}
          </h5>
        )}
        <p className="text-body-default text_secondary">{plan.description}</p>
      </div>
      <h2 className="price text_primary mb_32 price-value">
        {!isFree && "$"}
        <span className="wrap-price">
          <span>
            <span className={`price-month${period === "monthly" ? " active" : ""}`}>
              {isFree ? "free" : plan.monthly}
            </span>
            <span className={`price-year${period === "yearly" ? " active" : ""}`}>
              {isFree ? "free" : plan.yearly}
            </span>
          </span>
        </span>
        <span className="text-body-default text-muted fw-4 price-period">
          / {period === "monthly" ? "month" : "year"}
        </span>
      </h2>
      <a href="#" className={`tf-btn btn-hover-animate-2${plan.styleBorder ? " style-border" : ""} w-full mb_32`}>
        <span>{plan.ctaLabel}</span>
        <span />
      </a>
      <ul className="list">
        {plan.features.map((feature) => (
          <li className="text-body-default" key={feature}>
            <i className="icon-Check" />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function PricingTabSection() {
  const { period, setPeriod, tabSlideRef } = usePricingTab();
  const titleRef = useSplitTextReveal<HTMLHeadingElement>("right");

  return (
    <div className="section-pricing flat-animate-tab tf-spacing-1 pt-0 pricing-container">
      <div className="tf-container">
        <div className="heading-section style-default text-center mb_48">
          <div className="sub text-label text-uppercase wow fadeInUp">Our Pricing</div>
          <h2 className="title" ref={titleRef}>
            Flexible Plans For Every Business
          </h2>
          <p className="text-body-2 text_secondary wow fadeInUp">
            Choose the plan that fits your needs — upgrade anytime as you grow.
          </p>
        </div>
        <div className="tab-slide style-1 d-flex justify-content-center mb_48 wow fadeInUp" ref={tabSlideRef}>
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
        <div className="tf-grid-layout lg-col-3">
          {pricingPlans.map((plan) => (
            <PricingCard plan={plan} period={period} key={plan.key} />
          ))}
        </div>
      </div>
    </div>
  );
}
