"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import { useSwiperControls } from "@/hooks/useSwiperControls";

const slides = [
  { image: "/assets/images/demo-architechture/hero-banner-1.jpg", wrapped: false },
  { image: "/assets/images/demo-architechture/hero-banner-2.jpg", wrapped: true },
  { image: "/assets/images/demo-architechture/hero-banner-1.jpg", wrapped: true },
];

function HeroContent() {
  return (
    <div className="content">
      <h6 className="tag-line lh-16 text-uppercase text_white font-3 mb_40 effect-item effect-left">
        feature project 2024
      </h6>
      <div className="text-display-2 text-whitetext-uppercase text_white font-2 text-uppercase effect-item effect-left delay-3">
        Walt Disney Concert Hall
      </div>
    </div>
  );
}

export default function HeroSection() {
  const { dotsRef, dotsEl, onSwiper } = useSwiperControls();

  return (
    <div className="tf-slider-8 sw-layout effect-content-slide">
      <Swiper
        className="swiper"
        modules={[EffectFade, Autoplay, Pagination]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ el: dotsEl, clickable: true }}
        onSwiper={onSwiper}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="hero-banner-20">
              <div className="thumb effect-img-zoom">
                <Image
                  width={1920}
                  height={860}
                  priority={index === 0}
                  className="img-zoom"
                  src={slide.image}
                  alt="hero-banner"
                />
              </div>
              <div className="content-inner">
                <div className="tf-container w-1840">
                  {slide.wrapped ? (
                    <div className="row">
                      <div className="col-lg-6">
                        <HeroContent />
                      </div>
                    </div>
                  ) : (
                    <HeroContent />
                  )}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div ref={dotsRef} className="sw-dots style-white sw-pagination-layout text-end" />
    </div>
  );
}
