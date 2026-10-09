"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { useSplitTextReveal } from "@/hooks/useSplitTextReveal";
import { useSwiperControls } from "@/hooks/useSwiperControls";
import { spaPricingPlans } from "@/data/demo-spasalon/pricing";

// carousel.js data-preview=3 data-tablet=2 data-mobile=1 data-space-lg=32
// data-space-md=20 data-space=15: <768px 1 slide/15px, 768-991px 2/20px,
// >=992px 3/32px (screen-xl defaults to preview/space-lg, same as 992).
export default function PricingSection() {
  const subRef = useSplitTextReveal<HTMLDivElement>("up");
  const titleRef = useSplitTextReveal<HTMLHeadingElement>("blur-fade");
  const descRef = useSplitTextReveal<HTMLParagraphElement>("lines-transform");
  const { dotsRef, onSwiper } = useSwiperControls();

  return (
    <div className="section-pricing-5 tf-spacing-14 sw-layout">
      <div className="tf-container medium">
        <div className="heading-section d-grid gap_12 mb_48 text-center">
          <div className="sub text-label text-uppercase split-text effect-up text_primary-color" ref={subRef}>
            Our Pricing
          </div>
          {/* Same "Moments of Calm" heading as Gallery — a real content bug
              in the source HTML, preserved verbatim per CLAUDE.md rule 4. */}
          <h2 className="title split-text effect-blur-fade" ref={titleRef}>
            Moments of Calm
          </h2>
          <p className="text-body-2 desc mt_4 split-text split-lines-transform" ref={descRef}>
            A glimpse into the serene moments, caring hands, and calming spaces that define your spa experience.
          </p>
        </div>
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
            992: { slidesPerView: 3, spaceBetween: 32 },
            1200: { slidesPerView: 3, spaceBetween: 32 },
          }}
        >
          {spaPricingPlans.map((plan) => (
            <SwiperSlide key={plan.key}>
              <div className={`pricing-item style-4${plan.center ? " center" : ""}`}>
                <div className="heading mb_24">
                  <h5 className="title d-flex gap_12 align-items-center mb_16 text_primary">
                    <i className={plan.icon} />
                    {plan.title}
                  </h5>
                  <p className="text-body-default text_secondary">{plan.desc}</p>
                </div>
                <h2 className="price text_primary mb_32">
                  {plan.price}{" "}
                  <span className="text-body-default text-muted fw-4 font-main">{plan.period}</span>
                </h2>
                <a
                  href="#"
                  className={`tf-btn${plan.btnBordered ? " style-border" : ""} btn-switch-text mx-auto w-full mb_32`}
                >
                  <span>
                    <span className="btn-double-text" data-text={plan.btnText}>
                      {plan.btnText}
                    </span>
                  </span>
                </a>
                <ul className="list">
                  {plan.features.map((feature) => (
                    <li className="text-body-2 text_primary font-4" key={feature}>
                      <i className="icon-Check" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="img-style">
                  <Image loading="lazy" width={329} height={132} src={plan.image} alt="pricing" />
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div
            className="sw-dots style-1 position-relative z-5 sw-pagination-layout text-center mt_24"
            ref={dotsRef}
          />
        </Swiper>
      </div>
    </div>
  );
}
