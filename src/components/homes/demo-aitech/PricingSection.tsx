"use client";

import Image from "next/image";
import { useRevealElements } from "@/hooks/useRevealElements";
import { usePricingTab, type PricingPeriod } from "@/hooks/usePricingTab";
import { useSplitTextReveal } from "@/hooks/useSplitTextReveal";
import { pricingPlans, type PricingPlan } from "@/data/demo-aitech/pricing";

function PricingCard({ plan, period }: { plan: PricingPlan; period: PricingPeriod }) {
  const revealRef = useRevealElements<HTMLDivElement>();

  return (
    <div className="col-md-6">
      <div className="pricing-item style-2" data-ns-animate data-duration="1" data-delay={plan.delay ?? ""} ref={revealRef}>
        <div className="content">
          <div className={`heading d-flex mb_12 gap_12${plan.tag ? " justify-content-between" : " align-items-center"}`}>
            <h6 className="title">{plan.name}</h6>
            {plan.tag && (
              <div className="tag d-inline-flex align-items-center gap_4 text-button-small text_white">
                <Image width={20} height={21} src="/assets/images/shape/Lightning-2.png" alt="Lightning" />
                {plan.tag}
              </div>
            )}
          </div>
          <h2 className="price text_white mb_26 price-value">
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
            <span className="text-body-default text_secondary fw-4 price-period">
              / {period === "monthly" ? "month" : "year"}
            </span>
          </h2>
          <a href="#" className="tf-btn btn-hover-animate-border style-border w-full">
            <span>Choose Your Plan</span>
            <span />
          </a>
        </div>
        <ul className="list">
          {plan.features.map((feature) => (
            <li className="text-body-default" key={feature}>
              <i className="icon-Check" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function PricingSection() {
  const { period, setPeriod, tabSlideRef } = usePricingTab();
  const subRef = useSplitTextReveal<HTMLDivElement>("up");
  const titleRef = useSplitTextReveal<HTMLHeadingElement>("blur-fade");
  const descRef = useSplitTextReveal<HTMLParagraphElement>("lines-transform");
  const tabListRef = useRevealElements<HTMLUListElement>();

  return (
    <div className="section-pricing-2 flat-animate-tab tf-spacing-10 pricing-container">
      <div className="tf-container">
        <div className="heading-section d-grid gap_16 text-center mb_48">
          <div className="sub text-label text_primary-color text-uppercase" ref={subRef}>
            Our Pricing
          </div>
          <h2 className="title" ref={titleRef}>
            Simple, Transparent Pricing
          </h2>
          <p className="text-body-2" ref={descRef}>
            Choose the plan that fits your needs — upgrade anytime as you grow.
          </p>
        </div>
        <div className="tab-slide style-5 d-flex justify-content-center mb_48" ref={tabSlideRef}>
          <ul
            className="menu-tab d-inline-flex align-items-center justify-content-center"
            data-ns-animate
            data-duration="1"
            role="tablist"
            ref={tabListRef}
          >
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
        <div className="tab-content">
          <div className="row">
            {pricingPlans.map((plan) => (
              <PricingCard plan={plan} period={period} key={plan.key} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
