"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { useSwiperControls } from "@/hooks/useSwiperControls";

const slides = [
  { image: "/assets/images/demo-logistics/hero-banner-1.jpg", width: 1920, height: 860 },
  { image: "/assets/images/demo-logistics/hero-banner-2.jpg", width: 1920, height: 880 },
  { image: "/assets/images/demo-logistics/hero-banner-3.jpg", width: 1920, height: 880 },
];

export default function HeroSection() {
  const { prevRef, nextRef, dotsRef, onSwiper } = useSwiperControls();

  return (
    <div className="tf-slider-3 sw-layout effect-content-slide">
      <Swiper
        className="swiper"
        modules={[EffectFade, Autoplay, Navigation, Pagination]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={1000}
        loop
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
        pagination={{ el: dotsRef.current, clickable: true }}
        onSwiper={onSwiper}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.image}>
            <div className="hero-banner-16">
              <div className="thumbs effect-img-zoom">
                <Image
                  className="img-zoom"
                  width={slide.width}
                  height={slide.height}
                  priority={index === 0}
                  src={slide.image}
                  alt="hero"
                />
              </div>
              <div className="content-inner">
                <div className="tf-container">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="content">
                        <div className="tag wrap-line-marker lh-16 text-label text_white text-uppercase letter-spacing-1 mb_22 effect-item effect-up">
                          <span className="line-marker line-white" /> Global Logistics
                        </div>
                      </div>
                      <div className="h1 text-white title effect-item effect-up delay-3">
                        Delivering Beyond Borders
                      </div>
                      <a href="#" className="tf-btn btn-bg-primary-2 btn-hover-animate-2 effect-item effect-up delay-5">
                        <span>Explore More</span>
                        <span className="bg-effect" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="wrap-sw-button">
          <div className="sw-button lg-hide style-1 nav-prev-layout" ref={prevRef}>
            <i className="icon-CaretLeft" />
          </div>
          <div className="sw-button lg-hide style-1 nav-next-layout" ref={nextRef}>
            <i className="icon-CaretRight" />
          </div>
        </div>
        <div className="sw-dots style-white sw-pagination-layout text-center" ref={dotsRef} />
      </Swiper>
    </div>
  );
}
