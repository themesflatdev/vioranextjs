"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import { useSwiperControls } from "@/hooks/useSwiperControls";

const slides = [
  {
    image: "/assets/images/demo-coworkingspace/hero-1.jpg",
    title: "Work Smarter With Us Today",
    desc: "Discover flexible coworking spaces designed to fuel your productivity and growth every day.",
    boxDelay: "delay-5",
  },
  {
    image: "/assets/images/demo-coworkingspace/hero-2.jpg",
    title: "Work Better In Shared Spaces",
    desc: "Unlock productivity with inspiring coworking environments designed for teams, startups, and freelancers alike.",
    boxDelay: "delay-6",
  },
  {
    image: "/assets/images/demo-coworkingspace/hero-3.jpg",
    title: "Your Office, Your Style",
    desc: "Create the ideal work environment with flexible spaces tailored to your needs and lifestyle.",
    boxDelay: "delay-6",
  },
];

export default function HeroSlider() {
  const { dotsRef, onSwiper } = useSwiperControls();

  return (
    <div className="tf-slider-5 sw-layout effect-content-slide effect-2">
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
            <div className="hero-banner-12">
              <div className="thumb effect-img-zoom">
                <Image
                  width={1920}
                  height={860}
                  priority
                  className="img-zoom"
                  src={slide.image}
                  alt="hero"
                />
              </div>
              <div className="content-inner">
                <div className="tf-container w-1840">
                  <div className="row align-items-end">
                    <div className="col-md-8">
                      <div className="content effect-item effect-left">
                        <div className="heading mb_48">
                          <h1 className="text_white mb_16 effect-item effect-left delay-3">
                            {slide.title}
                          </h1>
                          <p className="text-body-2 text_white effect-item effect-left delay-4">
                            {slide.desc}
                          </p>
                        </div>
                        <Link
                          href="#"
                          className="tf-btn btn-switch-text effect-item effect-left delay-5"
                        >
                          <span>
                            <span className="btn-double-text" data-text="Learn More">
                              Learn More
                            </span>
                          </span>
                        </Link>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div
                        className={`box-item ms-md-auto effect-item effect-right ${slide.boxDelay}`}
                      >
                        <div className="d-flex gap_16 align-items-center">
                          <div className="img-style">
                            <Image
                              width={60}
                              height={60}
                              src="/assets/images/demo-coworkingspace/box-hero-1.jpg"
                              alt="box"
                            />
                          </div>
                          <h6>
                            <Link href="#" className="link line-clamp-2">
                              Work Better In Shared Spaces
                            </Link>
                          </h6>
                        </div>
                        <Link href="#" className="btn-arrow">
                          <i className="icon-ArrowRight" />
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
      <div
        ref={dotsRef}
        className="sw-dots z-5 style-1 sw-pagination-layout text-center d-lg-none"
      />
    </div>
  );
}
