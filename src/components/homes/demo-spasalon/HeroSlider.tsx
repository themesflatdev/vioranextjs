"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { useSwiperControls } from "@/hooks/useSwiperControls";
import { useInfiniteSlide } from "@/hooks/useInfiniteSlide";

// All 3 slides share identical paragraph/button copy in the source HTML —
// only the h2 title differs per slide — preserved verbatim per CLAUDE.md rule 4.
const slides = [
  { title: "Rejuvenate Your Body, Calm Your Mind", image: "/assets/images/demo-spasalon/spa-hero-1.jpg" },
  { title: "Reserve Your Glow", image: "/assets/images/demo-spasalon/spa-hero-2.jpg" },
  { title: "Explore Your Inner Calm", image: "/assets/images/demo-spasalon/spa-hero-3.jpg" },
];

const marqueeItems = [
  "Rejuvenate your skin",
  "Relieve body tension",
  "Boost your confidence",
  "Feel more balanced",
  "Relax your mind",
];

export default function HeroSlider() {
  const { prevRef, nextRef, dotsRef, prevEl, nextEl, dotsEl, onSwiper } = useSwiperControls();
  const marqueeRef = useInfiniteSlide<HTMLDivElement>({ direction: "left" });

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
        navigation={{ prevEl, nextEl }}
        pagination={{ el: dotsEl, clickable: true }}
        onSwiper={onSwiper}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.image}>
            <div className="hero-banner-10">
              <div className="thumbs effect-img-zoom">
                <Image
                  className="img-zoom"
                  width={1920}
                  height={880}
                  priority={index === 0}
                  src={slide.image}
                  alt="spa-hero"
                />
              </div>
              <div className="content">
                <div className="tf-container">
                  <h2 className="title text_white mb_20 effect-item effect-up delay-1">{slide.title}</h2>
                  <p className="text_white mb_40 text-body-default effect-item effect-up delay-2">
                    Enter a serene space where beauty begins. Let every touch restore you.
                  </p>
                  <a href="#" className="tf-btn btn-switch-text mx-auto effect-item effect-up delay-3">
                    <span>
                      <span className="btn-double-text" data-text="Book An Appointment">
                        Book An Appointment
                      </span>
                    </span>
                  </a>
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
        <div className="sw-dots style-white sw-pagination-layout text-center d-lg-none" ref={dotsRef} />
      </Swiper>
      <div className="wrap-marquee">
        <div className="infiniteslide" data-style="left" ref={marqueeRef}>
          {marqueeItems.map((item) => (
            <div className="marqee-inner h6 text_secondary-color" key={item}>
              <i className="icon-CheckCircle" />
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
