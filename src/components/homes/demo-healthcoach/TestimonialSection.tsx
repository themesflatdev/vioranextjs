"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { useSplitTextReveal } from "@/hooks/useSplitTextReveal";
import { useSwiperControls } from "@/hooks/useSwiperControls";
import { testimonials } from "@/data/demo-healthcoach/testimonials";

// Swiper breakpoints mirror carousel.js data-preview=3/data-tablet=2/
// data-mobile=1/space-lg=30/space-md=20/space=15: <768px 1 slide space 15,
// 768-991px 2 slide space 20, >=992px 3 slide space 30 (screen-xl defaults
// to preview/space-lg, same as 992). Nav prev/next are OUTSIDE .swiper
// (siblings in .position-relative) per HTML gốc — dots stay inside.
export default function TestimonialSection() {
  const subRef = useSplitTextReveal<HTMLDivElement>("up");
  const titleRef = useSplitTextReveal<HTMLHeadingElement>("scale");
  const descRef = useSplitTextReveal<HTMLParagraphElement>("lines-transform");
  const { prevRef, nextRef, dotsRef, prevEl, nextEl, dotsEl, onSwiper } = useSwiperControls();

  return (
    <div className="tf-container w-1840">
      <div className="section-testimonial-8 sw-layout tf-spacing-1">
        <div className="tf-container medium">
          <div className="heading-section style-2 mb_48">
            <div className="row align-items-center">
              <div className="col-lg-7">
                <div className="d-grid gap_16">
                  <div className="sub text-label text_white text-uppercase letter-spacing-1 split-text effect-up" ref={subRef}>
                    REAL STORIES, REAL RESULTS
                  </div>
                  <h2 className="title text_white split-text effect-scale" ref={titleRef}>
                    Trusted Voices
                  </h2>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="right text-lg-end ps-lg-5">
                  <p className="text-body-2 text_white split-text split-lines-transform" ref={descRef}>
                    Discover how coaching with Viora has helped others live stronger, more balanced lives.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="position-relative">
            <Swiper
              className="swiper wow fadeInLeft"
              slidesPerView={1}
              spaceBetween={15}
              speed={1000}
              observer
              loop
              navigation={{ prevEl, nextEl }}
              pagination={{ el: dotsEl, clickable: true }}
              modules={[Navigation, Pagination]}
              onSwiper={onSwiper}
              breakpoints={{
                768: { slidesPerView: 2, spaceBetween: 20 },
                992: { slidesPerView: 3, spaceBetween: 30 },
                1200: { slidesPerView: 3, spaceBetween: 30 },
              }}
            >
              {testimonials.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="testimonial-item style-7">
                    <p className="text-body-2 text_primary-color">&quot;{item.quote}&quot;</p>
                    <div className="author d-flex gap_12 align-items-center">
                      <div className="avatar">
                        <Image width={48} height={48} src={item.avatar} alt="avatar" />
                      </div>
                      <div>
                        <a href="#" className="text-button d-block link text_primary-color font-main">
                          {item.author}
                        </a>
                        <span className="text-caption-1 text_secondary">{item.role}</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <div className="sw-dots style-white sw-pagination-layout justify-content-center text-center mt_24 d-flex" ref={dotsRef} />
            </Swiper>
            <div className="sw-button style-1 nav-prev-layout" ref={prevRef}>
              <i className="icon-CaretLeft" />
            </div>
            <div className="sw-button style-1 nav-next-layout" ref={nextRef}>
              <i className="icon-CaretRight" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
