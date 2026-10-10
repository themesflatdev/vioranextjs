"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { useSplitTextReveal } from "@/hooks/useSplitTextReveal";
import { useSwiperControls } from "@/hooks/useSwiperControls";

const images = ["instagram-1.jpg", "instagram-2.jpg", "instagram-3.jpg", "instagram-4.jpg"];

// data-preview=4 data-tablet=3 data-mobile-sm=2 data-mobile=1, space 10 mọi mốc.
export default function InstagramSection() {
  const titleRef = useSplitTextReveal<HTMLHeadingElement>("blur-fade");
  const { dotsRef, onSwiper } = useSwiperControls();

  return (
    <div className="setion-instagrams-2 sw-layout">
      <h3 ref={titleRef} className="text-uppercase mb_20 text-center split-text effect-blur-fade">
        @Minnaro_studio{" "}
      </h3>
      <Swiper
        className="swiper"
        slidesPerView={1}
        spaceBetween={10}
        observer
        pagination={{ el: dotsRef.current, clickable: true }}
        modules={[Pagination]}
        onSwiper={onSwiper}
        breakpoints={{
          575: { slidesPerView: 2, spaceBetween: 10 },
          768: { slidesPerView: 3, spaceBetween: 10 },
          992: { slidesPerView: 4, spaceBetween: 10 },
        }}
        wrapperClass="swiper-wrapper wrap-ins"
      >
        {images.map((image) => (
          <SwiperSlide key={image}>
            <a href="#" className="ins-item">
              <div className="img-style">
                <Image
                  width={468}
                  height={468}
                  loading="lazy"
                  src={`/assets/images/demo-architechture/${image}`}
                  alt="ins"
                />
              </div>
              <div className="icon">
                <i className="icon-Eye" />
              </div>
            </a>
          </SwiperSlide>
        ))}
        <div
          className="sw-dots style-1 sw-pagination-layout justify-content-center text-center mt_24 d-flex d-lg-none"
          ref={dotsRef}
        />
      </Swiper>
    </div>
  );
}
