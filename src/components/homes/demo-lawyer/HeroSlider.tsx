"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Parallax, Thumbs } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

const slides = [
  {
    image: "/assets/images/demo-lawyer/hero-banner-1.jpg",
    title: "Trusted Legal Experts",
    desc: "Comprehensive legal solutions designed to protect your rights and long-term interests.",
  },
  {
    image: "/assets/images/demo-lawyer/hero-banner-2.jpg",
    title: "Strong Legal Defense",
    desc: "Experienced attorneys committed to supporting you through every challenging situation.",
  },
  {
    image: "/assets/images/demo-lawyer/hero-banner-3.jpg",
    title: "Protect Your Rights",
    desc: "Dedicated legal services providing effective solutions for your most critical cases.",
  },
];

const thumbImages = [
  "/assets/images/demo-lawyer/pagi-thumb-1.jpg",
  "/assets/images/demo-lawyer/hero-banner-2.jpg",
  "/assets/images/demo-lawyer/hero-banner-3.jpg",
];

// Mirrors carousel.js: on init (and resize) the parallax travel distance is
// recalculated to 0.75 * swiper.width instead of the HTML's static 1152 —
// keep slide background parallax drift exactly in sync with real width.
function syncParallaxDistance(swiper: SwiperType) {
  const distance = 0.75 * swiper.width;
  swiper.slides.forEach((slideEl) => {
    const bg = slideEl.querySelector<HTMLElement>(".tp-showcase-slider-bg");
    bg?.setAttribute("data-swiper-parallax", String(distance));
  });
  swiper.parallax?.setTranslate?.();
}

export default function HeroSlider() {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  return (
    <div className="tf-slider-7">
      <link rel="preload" as="image" href={slides[0].image} fetchPriority="high" />
      <Swiper
        className="swiper sw-single effect-content-slide"
        modules={[Parallax, Autoplay, Thumbs]}
        parallax
        speed={1500}
        loop
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        thumbs={{ swiper: thumbsSwiper }}
        onSwiper={syncParallaxDistance}
        onResize={syncParallaxDistance}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.image}>
            <div
              className="tp-showcase-slider-bg"
              data-background={slide.image}
              data-swiper-parallax="1152"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="hero-banner-19">
                <div className="content-inner">
                  <div className="tf-container">
                    <div className="row">
                      <div className="col-lg-5">
                        <div className="content mb_40">
                          <div className="h1 text-white mb_16 effect-item effect-left delay-2">
                            {slide.title}
                          </div>
                          <p className="text-body-2 text_white effect-item effect-left delay-3">
                            {slide.desc}
                          </p>
                        </div>
                        <Link
                          href="#"
                          className="tf-btn btn-hover-animate-2 btn-bg-white-4 rounded-0 effect-item effect-left delay-4"
                        >
                          <span>Our Services</span>
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

      <div className="wrap-nav">
        <Swiper
          className="swiper sw-thumbs-pagi"
          modules={[FreeMode, Thumbs]}
          onSwiper={setThumbsSwiper}
          spaceBetween={16}
          slidesPerView={3}
          loop
          freeMode
          watchSlidesProgress
          breakpoints={{
            375: { slidesPerView: 4, spaceBetween: 16 },
            500: { slidesPerView: 3 },
          }}
        >
          {thumbImages.map((image) => (
            <SwiperSlide key={image}>
              <div className="thumbs-pagi">
                <Image width={120} height={60} src={image} alt="pagi-thumb" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
