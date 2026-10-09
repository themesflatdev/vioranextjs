"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Controller, EffectFade, Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper/types";
import { testimonials } from "@/data/demo-agency/testimonials";
import BannerMarquee from "@/components/othersPages/demo-agency/BannerMarquee";
import { useSwiperControls } from "@/hooks/useSwiperControls";

type TestimonialSectionProps = {
  // "light" (default) = Home's own copy: "bg-light-color" wrapper, no
  // marquee banner, text_primary quote/author, text_secondary category.
  // "dark" = the "v2" variant reused verbatim by /our-team, /our-pricing
  // and /testimonials: "v2" wrapper, a BannerMarquee prepended, text_white
  // quote/author. "solid" = /services' variant: "v2 bg-linear-color"
  // wrapper, no marquee, text_white quote/author — confirmed per-page
  // against each page's HTML, not guessed. "dark" and "solid" both use
  // text_muted category (confirmed in our-team/our-pricing/testimonials/
  // services.html alike; only Home's "light" copy uses text_secondary).
  variant?: "light" | "dark" | "solid";
};

// Same "Swiper thumbs đồng bộ" mechanism as demo-corporate's TestimonialSection
// (assets/js/carousel.js `.flat-thumbs-tes`): two Swiper instances cross-linked
// via the Controller module so scrolling either one moves the other in lock-step.
export default function TestimonialSection({ variant = "light" }: TestimonialSectionProps) {
  const { prevRef, nextRef, onSwiper: onMainSwiper } = useSwiperControls();
  const [mainSwiper, setMainSwiper] = useState<SwiperType | null>(null);
  const [thumbSwiper, setThumbSwiper] = useState<SwiperType | null>(null);
  const textColorClass = variant === "light" ? "text_primary" : "text_white";
  const categoryColorClass = variant === "light" ? "text_secondary" : "text_muted";
  const wrapperClass =
    variant === "solid" ? "v2 bg-linear-color" : variant === "dark" ? "v2" : "bg-light-color";

  useEffect(() => {
    if (!mainSwiper || !thumbSwiper) return;
    mainSwiper.controller.control = thumbSwiper;
    thumbSwiper.controller.control = mainSwiper;
  }, [mainSwiper, thumbSwiper]);

  return (
    <div className={`section-testimonial-2 ${wrapperClass} tf-spacing-1 wow fadeInUp`}>
      {variant === "dark" ? <BannerMarquee /> : null}
      <div className="tf-container large">
        <div className="testimonial-item style-1 v2 flat-thumbs-tes">
          <div className="row">
            <div className="col-lg-6 wow fadeInLeft">
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
                        <p className={`font-2 desc ${textColorClass} h4 fw-4`}>&ldquo;{testimonial.quote}&rdquo;</p>
                        <div className="author">
                          <a href="#" className={`h5 font-main ${textColorClass} mb_4`}>
                            {testimonial.author}
                          </a>
                          <p className={`text-label text-uppercase ${categoryColorClass} category`}>
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
            </div>
            <div className="col-lg-6 wow fadeInRight">
              <div className="box-img">
                <Swiper
                  className="swiper tf-thumb-tes"
                  modules={[Controller]}
                  speed={800}
                  spaceBetween={0}
                  breakpoints={{ 768: { spaceBetween: 10 } }}
                  onSwiper={setThumbSwiper}
                >
                  {testimonials.map((testimonial, index) => (
                    <SwiperSlide className="hover-image-2" key={`${testimonial.image}-${index}`}>
                      <div className="img-style">
                        <Image
                          loading="lazy"
                          width={870}
                          height={665}
                          src={testimonial.image}
                          alt="testimonial"
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
