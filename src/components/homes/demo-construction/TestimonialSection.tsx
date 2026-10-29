"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Controller, EffectFade, Navigation, Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper/types";
import { useSwiperControls } from "@/hooks/useSwiperControls";

type Testimonial = {
  quote: string;
  authorAvatar: string;
  author: string;
};

// SỬA theo prompt mục 3.2: 3 đoạn trích gốc nói về real-estate/landscaping
// (lệch niche) -> viết lại nội dung đúng chủ đề construction, giữ
// "CEO Themesflat" (placeholder chung toàn theme).
const testimonials: Testimonial[] = [
  {
    quote:
      "Our new office building was delivered on time and within budget. The team managed every stage with professionalism and kept us informed from the first blueprint to the final handover.",
    authorAvatar: "/assets/images/avatar/avatar-23.jpg",
    author: "Cheyenne Mango",
  },
  {
    quote:
      "They renovated our family home with exceptional care and attention to detail. The crew was safe, tidy, and reliable, and the finished result exceeded everything we imagined.",
    authorAvatar: "/assets/images/avatar/avatar-21.jpg",
    author: "Savannah Nguyen",
  },
  {
    quote:
      "From structural design to site supervision, everything was handled seamlessly. Their engineers solved problems quickly and built a project that is strong, efficient, and built to last.",
    authorAvatar: "/assets/images/avatar/avatar-22.jpg",
    author: "Robert Fox",
  },
];

// Mirrors assets/js/carousel.js `.flat-thumbs-tes` — two Swiper instances
// cross-linked via the Controller module (slide thumbs <-> fade main).
export default function TestimonialSection() {
  const { prevRef, nextRef, dotsRef, prevEl, nextEl, dotsEl, onSwiper: onMainSwiper } = useSwiperControls();
  const [mainSwiper, setMainSwiper] = useState<SwiperType | null>(null);
  const [thumbSwiper, setThumbSwiper] = useState<SwiperType | null>(null);

  useEffect(() => {
    if (!mainSwiper || !thumbSwiper) return;
    // Swiper's Controller module only cross-links instances by mutating
    // `.controller.control` directly — no setter-based API exists.
    // eslint-disable-next-line react-hooks/immutability
    mainSwiper.controller.control = thumbSwiper;
    // eslint-disable-next-line react-hooks/immutability
    thumbSwiper.controller.control = mainSwiper;
  }, [mainSwiper, thumbSwiper]);

  return (
    <div className="section-testimonial-10">
      <div className="testimonial-item style-9 flat-thumbs-tes wow fadeInUp">
        <div className="box-img">
          <Swiper
            className="swiper tf-thumb-tes"
            modules={[Controller]}
            speed={800}
            spaceBetween={0}
            breakpoints={{ 768: { spaceBetween: 10 } }}
            onSwiper={setThumbSwiper}
          >
            {testimonials.map((_, index) => (
              <SwiperSlide className="hover-image-2" key={index}>
                <div className="img-style">
                  <Image
                    loading="eager"
                    width={825}
                    height={680}
                    src="/assets/images/demo-construction/testimonial-1.jpg"
                    alt="testimonial"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="box-contnet">
          <Swiper
            className="swiper tf-tes-main"
            modules={[EffectFade, Controller, Navigation, Pagination]}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            speed={800}
            spaceBetween={0}
            breakpoints={{ 768: { spaceBetween: 10 } }}
            navigation={{ prevEl, nextEl }}
            pagination={{ el: dotsEl, clickable: true }}
            onSwiper={(swiper) => {
              setMainSwiper(swiper);
              onMainSwiper(swiper);
            }}
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.author}>
                <div className="content">
                  <div className="heading">
                    <div className="trust d-flex align-items-center gap_16 mb_32">
                      <div className="group">
                        <Image
                          className="wow fadeInLeft"
                          data-wow-delay="0.1s"
                          width={48}
                          height={48}
                          src="/assets/images/avatar/avatar-23.jpg"
                          alt="avatar"
                        />
                        <Image
                          className="wow fadeInLeft"
                          data-wow-delay="0.2s"
                          width={48}
                          height={48}
                          src="/assets/images/avatar/avatar-3.jpg"
                          alt="avatar"
                        />
                        <Image
                          className="wow fadeInLeft"
                          data-wow-delay="0.3s"
                          width={48}
                          height={48}
                          src="/assets/images/avatar/avatar-29.jpg"
                          alt="avatar"
                        />
                      </div>
                      <p className="text_primary h4">Trusted by 50k+ users</p>
                    </div>
                    <p className="desc h3 fw-4 font-main">&ldquo;{testimonial.quote}&rdquo;</p>
                  </div>
                  <div className="author">
                    <div className="avatar">
                      <Image width={80} height={80} src={testimonial.authorAvatar} alt="" />
                    </div>
                    <div>
                      <h4 className="mb_8">{testimonial.author}</h4>
                      <p className="category text-body-default text_secondary">CEO Themesflat</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
            <div className="wrap-sw-button d-flex gap_12">
              <div className="sw-button style-4 nav-prev-tes sm-hide" ref={prevRef}>
                <i className="icon-CaretLeft" />
              </div>
              <div className="sw-button style-4 nav-next-tes sm-hide" ref={nextRef}>
                <i className="icon-CaretRight" />
              </div>
            </div>
            <div
              className="sw-dots style-4 sw-pagination-tes text-center mt_24 d-sm-none d-flex justify-content-center"
              ref={dotsRef}
            />
          </Swiper>
        </div>
      </div>
    </div>
  );
}
