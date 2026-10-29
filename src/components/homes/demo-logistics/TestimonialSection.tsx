"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useSwiperControls } from "@/hooks/useSwiperControls";

const testimonials = [
  {
    image: "/assets/images/demo-logistics/testimonial-2.jpg",
    quote:
      "“Their logistics team handled our shipments with professionalism and precision. Everything arrived on time and in perfect condition.”",
    name: "Angel Donin",
    role: "Head of Idea",
  },
  {
    image: "/assets/images/demo-logistics/testimonial-3.jpg",
    quote:
      "“Excellent support and real-time tracking made the entire process stress-free. Highly recommended for long-term partnerships.”",
    name: "Sofia Marin",
    role: "Head of Idea",
  },
  {
    image: "/assets/images/demo-logistics/testimonial-4.jpg",
    quote:
      "“We trust them for both domestic and international deliveries. Reliable service and clear communication at every stage.”",
    name: "Kenji T.",
    role: "Manufacturer",
  },
  {
    image: "/assets/images/demo-logistics/testimonial-1.jpg",
    quote:
      "“Their logistics team handled our shipments with professionalism and precision. Everything arrived on time and in perfect condition.”",
    name: "Daniel Ortiz",
    role: "Head of Idea",
  },
];

export default function TestimonialSection() {
  const { prevRef, nextRef, prevEl, nextEl, onSwiper } = useSwiperControls();

  return (
    <div className="section-testimonial-14 sw-layout tf-spacing-1">
      <div className="tf-container">
        <div className="heading-section d-flex justify-content-between gap_16 flex-wrap align-items-end mb_48">
          <div>
            <div className="wrap-line-marker mb_16">
              <div className="wrap-line-marker text-label text_primary text-uppercase letter-spacing-1 wow fadeInUp">
                <span className="line-marker line-dark" />
                Testimonials
              </div>
            </div>
            <h2 className="title text_primary split-text effect-right">What Our Clients Say?</h2>
          </div>
          <div className="d-flex gap_12 wow fadeInRight">
            <div className="sw-button style-5 nav-prev-layout" ref={prevRef}>
              <i className="icon-CaretLeft" />
            </div>
            <div className="sw-button style-5 nav-next-layout" ref={nextRef}>
              <i className="icon-CaretRight" />
            </div>
          </div>
        </div>
      </div>
      <div className="tf-container large">
        <Swiper
          className="swiper wow fadeInUp"
          modules={[Navigation]}
          loop
          spaceBetween={15}
          slidesPerView={1}
          navigation={{ prevEl, nextEl }}
          onSwiper={onSwiper}
          breakpoints={{
            768: { slidesPerView: 1.1, spaceBetween: 20 },
            992: { slidesPerView: 1.3, spaceBetween: 30 },
            1200: { slidesPerView: 2, spaceBetween: 30 },
          }}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={`${item.name}-${index}`}>
              <div className="testimonial-item style-13">
                <div className="img-style">
                  <Image width={500} height={500} src={item.image} alt="testimonial" />
                </div>
                <div className="content">
                  <p className="desc fw-6 text_primary">{item.quote}</p>
                  <div className="author">
                    <h6>
                      <a href="#" className="link">
                        {item.name}
                      </a>
                    </h6>
                    <span className="text-caption-1 text_primary-color">{item.role}</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
