"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { useRevealElements } from "@/hooks/useRevealElements";
import { useSplitTextReveal } from "@/hooks/useSplitTextReveal";
import { useSwiperControls } from "@/hooks/useSwiperControls";
import { testimonials } from "@/data/demo-saas/testimonials";

// Swiper breakpoints mirror carousel.js data-screen-xl=4/data-preview=3/
// data-tablet=2/data-mobile-sm=2/data-mobile=1/space-lg=20/space-md=20/
// space=15: <575px 1 slide space 15, 575-767px 2 slide space 15,
// 768-991px 2 slide space 20, 992-1199px 3 slide space 20, >=1200px 4
// slide space 20.
export default function TestimonialSection() {
  const titleRef = useSplitTextReveal<HTMLHeadingElement>("blur-fade");
  const blockRef = useRevealElements<HTMLDivElement>();
  const { dotsRef, dotsEl, onSwiper } = useSwiperControls();

  return (
    <div className="section-testimonial-7 tf-spacing-1 sw-layout">
      <div className="tf-container">
        <div className="heading-section-4 text-center mb_42">
          <div className="tag text-label text-uppercase wow fadeInUp text_white mb_16">TESTIMONIAL</div>
          <h3 className="title split-text effect-blur-fade" ref={titleRef}>
            What People Are Saying
          </h3>
        </div>
      </div>
      <div data-ns-animate data-duration="1" ref={blockRef}>
        <Swiper
          className="swiper"
          slidesPerView={1}
          spaceBetween={15}
          speed={1000}
          observer
          pagination={{ el: dotsEl, clickable: true }}
          modules={[Pagination]}
          onSwiper={onSwiper}
          breakpoints={{
            575: { slidesPerView: 2, spaceBetween: 15 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            992: { slidesPerView: 3, spaceBetween: 20 },
            1200: { slidesPerView: 4, spaceBetween: 20 },
          }}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="testimonial-item style-6">
                <div>
                  <ul className="ratings d-flex mb_10 gap_4 mb_24">
                    {Array.from({ length: 5 }).map((_, starIndex) => (
                      <li key={starIndex}>
                        <i className="icon-Star" />
                      </li>
                    ))}
                  </ul>
                  <p className="text-body-default text_white">{item.quote}</p>
                </div>
                <div className="author d-flex gap_16 align-items-center">
                  <div className="avatar">
                    <Image width={60} height={60} src={item.avatar} alt="avatar" />
                  </div>
                  <div>
                    <a href="#" className="h6 d-block link text_white mb_8">
                      {item.author}
                    </a>
                    <span className="text-caption-1 text_on-suface-1">{item.role}</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div
            className="sw-dots style-white position-relative z-5 sw-pagination-layout text-center mt_24"
            ref={dotsRef}
          />
        </Swiper>
      </div>
    </div>
  );
}
