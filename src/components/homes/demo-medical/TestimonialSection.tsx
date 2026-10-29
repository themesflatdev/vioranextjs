"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { testimonials } from "@/data/demo-medical/testimonials";
import { useSwiperControls } from "@/hooks/useSwiperControls";

export default function TestimonialSection() {
  const { prevRef, nextRef, dotsRef, prevEl, nextEl, dotsEl, onSwiper } = useSwiperControls();

  return (
    <div className="section-testimonial-3 sw-layout tf-spacing-7">
      <div className="tf-container position-relative">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <Swiper
              className="swiper wow fadeInUp"
              modules={[Navigation, Pagination]}
              loop
              speed={1000}
              slidesPerView={1}
              navigation={{ prevEl, nextEl }}
              pagination={{ el: dotsEl, clickable: true }}
              onSwiper={onSwiper}
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={`${testimonial.author}-${index}`}>
                  <div className="testimonial-item style-2 text-center">
                    <ul className="ratings d-flex mb_10 gap_4 justify-content-center mb_24">
                      {Array.from({ length: 5 }).map((_, starIndex) => (
                        <li key={starIndex}>
                          <i className="icon-Star" />
                        </li>
                      ))}
                    </ul>
                    <p className="h4 font-2 fw-4 mb_24 desc">&quot;{testimonial.quote}&quot;</p>
                    {index === 0 ? (
                      <ul className="d-flex gap_1 align-items-center justify-content-center">
                        <li className="h6 font-2">{testimonial.author}</li>
                        <li className="text_primary text-title fw-5">{"//"}</li>
                        <li className="text-body-default font-2 text_primary font-main">{testimonial.role}</li>
                      </ul>
                    ) : (
                      <ul className="d-flex gap_4 align-items-center justify-content-center">
                        <li className="h6 font-2">{testimonial.author}</li>
                        <li className="text_primary text-title fw-5">{"//"}</li>
                        <li className="text-body-2 font-2 text_primary">{testimonial.role}</li>
                      </ul>
                    )}
                  </div>
                </SwiperSlide>
              ))}
              <div className="wrap-sw-button d-flex gap_12">
                <div className="sw-button style-2 nav-prev-layout" ref={prevRef}>
                  <i className="icon-CaretLeft" />
                </div>
                <div className="sw-button style-2 nav-next-layout" ref={nextRef}>
                  <i className="icon-CaretRight" />
                </div>
              </div>
              <div className="sw-dots style-1 sw-pagination-layout text-center mt_24 d-xl-none" ref={dotsRef} />
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
