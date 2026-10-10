"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { useSwiperControls } from "@/hooks/useSwiperControls";
import { testimonials } from "@/data/demo-charity/home";

function Ratings() {
  return (
    <ul className="ratings d-flex mb_10">
      {Array.from({ length: 5 }).map((_, i) => (
        <li key={i}>
          <i className="icon-favorite_major" />
        </li>
      ))}
    </ul>
  );
}

export default function TestimonialSection() {
  const { dotsRef, onSwiper } = useSwiperControls();

  return (
    <div className="section-testimonial-13 tf-spacing-1 sw-layout">
      <div className="tf-container w-1840">
        <div className="heading-section-5 mb_44">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <h2 className="split-text effect-blur-fade">Kind Words From Our Clients</h2>
            </div>
            <div className="col-lg-4">
              <Link href="#" className="tf-btn style-border ms-lg-auto btn-switch-text wow fadeInRight">
                <span>
                  <span className="btn-double-text" data-text="View All">
                    View All
                  </span>
                </span>
              </Link>
            </div>
          </div>
        </div>
        <Swiper
          className="swiper wow fadeInUp"
          slidesPerView={1}
          spaceBetween={10}
          speed={1000}
          loop={false}
          observer
          observeParents
          modules={[Pagination]}
          pagination={{ el: dotsRef.current, clickable: true }}
          onSwiper={onSwiper}
          breakpoints={{
            575: { slidesPerView: 2, spaceBetween: 10 },
            768: { slidesPerView: 2, spaceBetween: 10 },
            992: { slidesPerView: 3, spaceBetween: 10 },
            1200: { slidesPerView: 4, spaceBetween: 10 },
          }}
        >
          {testimonials.map((item) =>
            item.type === "image" ? (
              <SwiperSlide key={item.name}>
                <div className="testimonial-item style-12 v2">
                  <div className="img-style position-relative">
                    <Image width={413} height={413} loading="lazy" src={item.image} alt="testimonial" />
                    <div className="author justify-content-between">
                      <div>
                        <h6 className="mb_4 text_white">
                          <Link href="#" className="link">
                            {item.name}
                          </Link>
                        </h6>
                        <p className="text-caption-1 text_white">{item.role}</p>
                      </div>
                      <Ratings />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ) : (
              <SwiperSlide key={item.name}>
                <div className="testimonial-item style-12">
                  <div className="d-grid gap_16">
                    <div className="icon">
                      <i className="icon-quote" />
                    </div>
                    <p className="text-body-2 text_primary">{item.quote}</p>
                    <Ratings />
                  </div>
                  <div className="author">
                    <div className="avatar">
                      <Image width={48} height={48} src={item.avatar} alt="avatar" />
                    </div>
                    <div>
                      <h6 className="mb_4">
                        <Link href="#" className="link">
                          {item.name}
                        </Link>
                      </h6>
                      <p className="text-caption-1">{item.role}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ),
          )}
          <div className="sw-dots style-1 sw-pagination-layout text-center mt_24" ref={dotsRef} />
        </Swiper>
      </div>
    </div>
  );
}
