"use client";

import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { useSwiperControls } from "@/hooks/useSwiperControls";

const plans = [
  {
    icon: "icon-stars-shape-5",
    name: "Basic Care",
    desc: "Essential maintenance ensuring smooth everyday driving.",
    price: "$49",
    features: ["Oil & filter change", "Fluid top-up", "Brake inspection", "Tire pressure check"],
    popular: false,
    btnClass: "tf-btn btn-bg-stroke-dark btn-hover-animate-2 w-full",
  },
  {
    icon: "icon-stars-shape-6",
    name: "Standard Service",
    desc: "Complete service delivering truly reliable car performance.",
    price: "$99",
    features: ["All Basic Care services", "Tire rotation & balance", "Battery test", "Multi-point inspection"],
    popular: true,
    btnClass: "tf-btn btn-bg-primary-2 btn-hover-animate-2 w-full",
  },
  {
    icon: "icon-stars-shape-5",
    name: "Premium Package",
    desc: "Maximum protection providing long-term peace of mind.",
    price: "$199",
    features: ["All Standard Service", "Full diagnostic scan", "AC & heating check", "Priority scheduling"],
    popular: false,
    btnClass: "tf-btn btn-bg-stroke-dark btn-hover-animate-2 w-full",
  },
];

export default function PricingSection() {
  const { dotsRef, onSwiper } = useSwiperControls();

  return (
    <div className="section-pricing-8 sw-layout tf-spacing-1 pt-0">
      <div className="tf-container">
        <div className="heading-section text-center mb_48">
          <h2 className="mb_16 split-text effect-blur-fade">Car Service Pricing Plans</h2>
          <p className="text-body-2 wow fadeInUp" data-wow-delay=".2s">
            Clear plans, fair rates, and quality service—so you always know what you’re paying for.
          </p>
        </div>
        <Swiper
          className="swiper wow fadeInUp"
          data-wow-delay=".4s"
          modules={[Pagination]}
          speed={1000}
          loop={false}
          pagination={{ el: dotsRef.current, clickable: true }}
          onSwiper={onSwiper}
          slidesPerView={1}
          spaceBetween={15}
          breakpoints={{
            575: { slidesPerView: 2, spaceBetween: 15 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            992: { slidesPerView: 3, spaceBetween: 40 },
            1200: { slidesPerView: 3, spaceBetween: 40 },
          }}
        >
          {plans.map((plan) => (
            <SwiperSlide key={plan.name}>
              <div className={`pricing-item style-6${plan.popular ? " z-5" : ""}`}>
                {plan.popular && (
                  <div className="tag d-inline-flex align-items-center gap_4 text-button text_primary">
                    <Image src="/assets/images/shape/Lightning-3.png" alt="Lightning" width={21} height={20} />
                    Popular
                  </div>
                )}
                <div className="heading mb_24">
                  {plan.popular ? (
                    <div className="d-flex align-items-center mb_11 justify-content-between gap_12">
                      <h4 className="title d-flex gap_12 align-items-center">
                        <i className={plan.icon} />
                        {plan.name}
                      </h4>
                    </div>
                  ) : (
                    <h4 className="title d-flex gap_12 align-items-center mb_11">
                      <i className={plan.icon} />
                      {plan.name}
                    </h4>
                  )}
                  <p className="text-body-2">{plan.desc}</p>
                </div>
                <div className="price h1 ">
                  {plan.price} <span className="text-body-2 text_muted fw-4">/ service</span>
                </div>
                <ul className="list mb_32">
                  {plan.features.map((feature) => (
                    <li className="text-body-2 text_white" key={feature}>
                      <i className="icon-CheckCircleFill" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link href="/portfolio" className={plan.btnClass}>
                  <span>Order Now</span>
                  <span className="bg-effect" />
                </Link>
              </div>
            </SwiperSlide>
          ))}
          <div className="sw-dots style-white position-relative z-5 sw-pagination-layout text-center mt_24" ref={dotsRef} />
        </Swiper>
      </div>
    </div>
  );
}
