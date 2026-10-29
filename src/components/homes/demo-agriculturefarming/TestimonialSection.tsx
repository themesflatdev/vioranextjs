"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation } from "swiper/modules";
import { useSplitTextReveal } from "@/hooks/useSplitTextReveal";
import { useSwiperControls } from "@/hooks/useSwiperControls";

const testimonials = [
  {
    quote:
      "“Our partnership has been an incredible journey. The dedicated team combines innovation with care for the land, consistently delivering results that truly make a difference for farmers like us.”",
    name: "Cheyenne Mango",
    role: "Organic Farm Owner",
  },
  {
    quote:
      "“Their organic methods transformed our fields. The soil is healthier, the harvests are stronger, and we now supply fresh produce to local markets with real confidence.”",
    name: "Savannah Nguyen",
    role: "Local Crop Grower",
  },
  {
    quote:
      "“From planning to harvest, their team guided every step with honesty and care. Our yields improved, our costs dropped, and our community now trusts the food we grow.”",
    name: "Robert Fox",
    role: "Farmers Market Manager",
  },
];

export default function TestimonialSection() {
  const titleRef = useSplitTextReveal<HTMLHeadingElement>("scale");
  const { prevRef, nextRef, prevEl, nextEl, onSwiper } = useSwiperControls();

  return (
    <div className="section-testimonial-16 sw-layout tf-spacing-1">
      <div className="tf-container">
        <div className="row">
          <div className="col-lg-4">
            <div className="box-content">
              <div className="heading-section mb_48">
                <div className="sub text-label text-uppercase text_primary-color split-text effect-up mb_16 lh-16">
                  WHAT OUR CLIENTS SAY
                </div>
                <h2 ref={titleRef} className="title mb_16 split-text effect-scale">
                  Voices From The Field
                </h2>
                <p className="desc text-body-2 wow fadeInUp" data-wow-delay=".2s">
                  Discover how our farming solutions have inspired trust, supported communities, and created lasting
                  value for partners and clients.
                </p>
              </div>
              <Link href="#" className="tf-btn btn-hover-animate-2 btn-bg-secondary wow fadeInUp" data-wow-delay=".4s">
                <span>Read All Review</span>
                <span className="bg-effect" />
              </Link>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="banner">
              <Image
                width={410}
                height={546}
                src="/assets/images/demo-agriculturefarming/banner-testimonial.jpg"
                alt="banner-testimonial"
              />
            </div>
          </div>
          <div className="col-lg-4">
            <Swiper
              className="swiper"
              modules={[EffectFade, Navigation]}
              effect="fade"
              fadeEffect={{ crossFade: true }}
              speed={1000}
              navigation={{ prevEl, nextEl }}
              onSwiper={onSwiper}
            >
              {testimonials.map((t) => (
                <SwiperSlide key={t.name}>
                  <div className="testimonial-item style-15">
                    <div>
                      <div className="icon mb_20">
                        <i className="icon-Quote-2" />
                      </div>
                      <p className="h5 font-main fw-4">{t.quote}</p>
                    </div>
                    <div className="author">
                      <h6 className="mb_4">
                        <Link href="#" className="link">
                          {t.name}
                        </Link>
                      </h6>
                      <span className="text-body-default">{t.role}</span>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <div className="wrap-sw-button d-flex gap_12">
                <div className="sw-button style-6 nav-prev-layout" ref={prevRef}>
                  <i className="icon-ArrowLeft" />
                </div>
                <div className="sw-button style-6 nav-next-layout" ref={nextRef}>
                  <i className="icon-ArrowRight" />
                </div>
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
