"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

const slides = [
  { image: "/assets/images/demo-construction/hero-1.jpg", title: ["Innovative", "Modern Designs"] },
  { image: "/assets/images/demo-construction/hero-2.jpg", title: ["Building Strong Foundations"] },
  { image: "/assets/images/demo-construction/hero-3.jpg", title: ["Your Vision Our Expertise"] },
];

export default function HeroSection() {
  const swiperRef = useRef<SwiperType | null>(null);
  const [num, setNum] = useState("01");

  const handleIndexChange = (swiper: SwiperType) => {
    setNum(String(swiper.realIndex + 1).padStart(2, "0"));
  };

  const goPrev = () => {
    swiperRef.current?.slidePrev();
    swiperRef.current?.autoplay.stop();
  };

  const goNext = () => {
    swiperRef.current?.slideNext();
    swiperRef.current?.autoplay.stop();
  };

  return (
    <div className="tf-slider-4 effect-content-slide effect-2">
      <div className="slide-number left-num font-2 fw-6" id="numLeft" onClick={goPrev}>
        {num}
      </div>
      <div className="slide-number right-num font-2 fw-6" id="numRight" onClick={goNext}>
        {num}
      </div>
      <Swiper
        className="swiper sw-pagi-count"
        modules={[Autoplay, EffectFade]}
        loop
        autoplay={{ delay: 4000 }}
        effect="fade"
        speed={300}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={handleIndexChange}
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={slide.image}>
            <div className="hero-banner-11">
              <div className="thumb effect-zoom-item">
                <Image
                  width={1920}
                  height={860}
                  loading={i === 0 ? "eager" : "lazy"}
                  priority={i === 0}
                  src={slide.image}
                  alt="hero"
                />
              </div>
              <div className="content">
                <div className="tf-container medium">
                  <div className="row">
                    <div className="col-xxl-7 lg-col-8">
                      <div className="text-display-2 fw-6 text-uppercase font-2 mb_40 text_white effect-item effect-left delay-3">
                        {slide.title.map((line, j) => (
                          <span key={line}>
                            {j > 0 && <br />}
                            {line}
                          </span>
                        ))}
                      </div>
                      <a
                        href="#"
                        className="tf-btn btn-hover-animate-2 btn-bg-white-3 v2 rounded-0 effect-item effect-left delay-4"
                      >
                        <span>View More</span>
                        <span className="bg-effect" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
