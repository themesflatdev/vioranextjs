"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import { useSwiperControls } from "@/hooks/useSwiperControls";

const slides = [
  {
    image: "/assets/images/demo-agriculturefarming/hero-banner-1.jpg",
    title: "Sustainable Green Farming",
    desc: "Growing healthy crops with eco-friendly methods that protect the land and support future generations.",
    titleDelay: "delay-1",
  },
  {
    image: "/assets/images/demo-agriculturefarming/hero-banner-2.jpg",
    title: "Healthy Green Agriculture",
    desc: "Blending technology and tradition to create smarter solutions for farmers and communities.",
    titleDelay: "",
  },
  {
    image: "/assets/images/demo-agriculturefarming/hero-banner-3.jpg",
    title: "Farming Best Agriculture",
    desc: "Providing trusted farming solutions that deliver quality products and support sustainable growth for communities.",
    titleDelay: "",
  },
];

export default function HeroSection() {
  const { dotsRef, onSwiper } = useSwiperControls();

  return (
    <div className="tf-slider-6 sw-layout effect-content-slide">
      <Swiper
        className="swiper"
        modules={[EffectFade, Autoplay, Pagination]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={1000}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ el: dotsRef.current, clickable: true }}
        onSwiper={onSwiper}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.image}>
            <div className="hero-banner-18">
              <div className="thumb effect-img-zoom">
                <Image
                  width={1920}
                  height={720}
                  priority
                  className="img-zoom"
                  src={slide.image}
                  alt="hero-banner"
                />
              </div>
              <div className="content-inner">
                <div className="tf-container">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="content mb_40">
                        <div className={`h1 text-white mb_12 effect-item effect-down ${slide.titleDelay}`}>
                          {slide.title}
                        </div>
                        <p className="text-body-2 text_white effect-item effect-left delay-2">
                          {slide.desc}
                        </p>
                      </div>
                      <div className="wrap-btn d-flex gap_20 effect-item effect-up delay-3">
                        <Link href="#" className="tf-btn btn-hover-animate-2 btn-bg-secondary">
                          <span>Our Services</span>
                          <span className="bg-effect" />
                        </Link>
                        <Link href="#" className="tf-btn btn-hover-animate-2 btn-bg-white-3">
                          <span>Get Started</span>
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
      </Swiper>
      <div ref={dotsRef} className="sw-dots style-white sw-pagination-layout flex-column d-flex gap_8" />
    </div>
  );
}
