"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { useSwiperControls } from "@/hooks/useSwiperControls";

const slides = [
  {
    image: "/assets/images/demo-carservices/hero-1.jpg",
    width: 1920,
    height: 860,
    highlight: "Complete Car",
    rest: "Care Every Mile",
    desc: "Keep your vehicle safe, reliable, and ready for every journey.",
  },
  {
    image: "/assets/images/demo-carservices/hero-2.jpg",
    width: 1920,
    height: 880,
    highlight: "Expert Service",
    rest: "For Every Drive",
    desc: "Professional care that keeps your car performing at its best.",
  },
  {
    image: "/assets/images/demo-carservices/hero-3.jpg",
    width: 1920,
    height: 880,
    highlight: "Drive Safe with",
    rest: "Trusted Care",
    desc: "Reliable auto solutions that keep you confident on every road.",
  },
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
        loop={false}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
        pagination={{ el: dotsRef.current, clickable: true }}
        onSwiper={onSwiper}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.image}>
            <div className="hero-banner-14">
              <div className="thumbs effect-img-zoom">
                <Image
                  className="img-zoom-out"
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
                    <div className="col-md-6">
                      <div className="content">
                        <div className="title text_white mb_20 effect-item effect-up delay-1 h1">
                          <span className="text_primary-color">{slide.highlight}</span> {slide.rest}
                        </div>
                        <p className="text_white mb_40 text-body-2 effect-item effect-up delay-2">{slide.desc}</p>
                        <Link
                          href="/portfolio"
                          className="tf-btn btn-bg-primary-2 btn-hover-animate-2 effect-item effect-up delay-3"
                        >
                          <span>Schedule A Call</span>
                          <span className="bg-effect" />
                        </Link>
                      </div>
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
