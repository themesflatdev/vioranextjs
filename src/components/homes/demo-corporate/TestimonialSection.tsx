"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Controller, EffectFade, Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper/types";
import { testimonials } from "@/data/demo-corporate/testimonials";
import { useSwiperControls } from "@/hooks/useSwiperControls";

// Mirrors assets/js/carousel.js `.flat-thumbs-tes` handling: two Swiper
// instances (text + thumbnail images) cross-linked via the Controller
// module so scrolling either one moves the other in lock-step.
export default function TestimonialSection() {
  const { prevRef, nextRef, onSwiper: onMainSwiper } = useSwiperControls();
  const [mainSwiper, setMainSwiper] = useState<SwiperType | null>(null);
  const [thumbSwiper, setThumbSwiper] = useState<SwiperType | null>(null);

  useEffect(() => {
    if (!mainSwiper || !thumbSwiper) return;
    mainSwiper.controller.control = thumbSwiper;
    thumbSwiper.controller.control = mainSwiper;
  }, [mainSwiper, thumbSwiper]);

  return (
    <div className="section-testimonial tf-spacing-1">
      <div className="tf-container">
        <div className="testimonial-item style-1 flat-thumbs-tes wow fadeInUp">
          <div className="box-contnet">
            <Swiper
              className="swiper tf-tes-main"
              modules={[EffectFade, Controller, Navigation]}
              effect="fade"
              fadeEffect={{ crossFade: true }}
              speed={800}
              spaceBetween={0}
              breakpoints={{ 768: { spaceBetween: 10 } }}
              navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
              onSwiper={(swiper) => {
                setMainSwiper(swiper);
                onMainSwiper(swiper);
              }}
            >
              {testimonials.map((testimonial) => (
                <SwiperSlide key={testimonial.author}>
                  <div className="content">
                    <p className="font-3 desc text_white h4 fw-4">{testimonial.quote}</p>
                    <div className="author">
                      <h5 className="text_white mb_2">{testimonial.author}</h5>
                      <p className="category text-label text-uppercase text_muted">
                        {testimonial.category}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="wrap-sw-button d-flex gap_12">
              <div className="sw-button style-2 nav-prev-tes" ref={prevRef}>
                <i className="icon-CaretLeft" />
              </div>
              <div className="sw-button style-2 nav-next-tes" ref={nextRef}>
                <i className="icon-CaretRight" />
              </div>
            </div>
          </div>
          <div className="box-img">
            <Swiper
              className="swiper tf-thumb-tes"
              modules={[Controller]}
              speed={800}
              spaceBetween={0}
              breakpoints={{ 768: { spaceBetween: 10 } }}
              onSwiper={setThumbSwiper}
            >
              {testimonials.map((testimonial) => (
                <SwiperSlide className="hover-image-2" key={testimonial.image}>
                  <div className="img-style">
                    <Image loading="lazy" width={887} height={665} src={testimonial.image} alt="testimonial" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
