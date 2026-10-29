"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { useSwiperControls } from "@/hooks/useSwiperControls";

// All 3 slides share identical title/desc/button — a real content bug in
// the original HTML (demo copy never customized per-slide), preserved
// verbatim per CLAUDE.md rule 4. Only the background image differs.
const slides = [
  { image: "/assets/images/demo-corporate/corporate-hero-1.jpg" },
  { image: "/assets/images/demo-corporate/corporate-hero-2.jpg" },
  { image: "/assets/images/demo-corporate/corporate-hero-3.jpg" },
];

export default function HeroSlider() {
  const { prevRef, nextRef, dotsRef, prevEl, nextEl, dotsEl, onSwiper } = useSwiperControls();

  return (
    <div className="tf-slider-1 sw-layout">
      <Swiper
        className="swiper effect-content-slide"
        modules={[EffectFade, Autoplay, Navigation, Pagination]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={1000}
        loop={false}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        navigation={{ prevEl, nextEl }}
        pagination={{ el: dotsEl, clickable: true }}
        onSwiper={onSwiper}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.image}>
            <div className="hero-banner-1">
              <div className="thumbs effect-img-zoom">
                <Image
                  className="img-zoom"
                  width={1920}
                  height={772}
                  priority={index === 0}
                  src={slide.image}
                  alt="hero"
                />
              </div>
              <div className="content">
                <div className="tf-container">
                  <div className="wrap-content">
                    <div className="box-text">
                      <h1 className="text_white title effect-item effect-up delay-1">
                        Empowering Your Business With Digital Excellence
                      </h1>
                      <p className="text_white text-body-2 effect-item effect-up delay-2">
                        We build scalable, high-impact solutions to help you grow with confidence.
                      </p>
                    </div>
                    <div className="btn_wrapper effect-item effect-right delay-3">
                      <Link href="/services" className="btn_link btn-item btn-hover h6 text_white">
                        View Services
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="wrap-sw-button">
          <div className="sw-button style-1 nav-prev-layout" ref={prevRef}>
            <i className="icon-CaretLeft" />
          </div>
          <div className="sw-button style-1 nav-next-layout" ref={nextRef}>
            <i className="icon-CaretRight" />
          </div>
        </div>
        <div className="sw-dots style-white sw-pagination-layout text-center" ref={dotsRef} />
      </Swiper>
    </div>
  );
}
