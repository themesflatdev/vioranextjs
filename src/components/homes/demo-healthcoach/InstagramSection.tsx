"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { useSplitTextReveal } from "@/hooks/useSplitTextReveal";
import { useSwiperControls } from "@/hooks/useSwiperControls";
import { instaPosts } from "@/data/demo-healthcoach/instaPosts";

// Swiper breakpoints mirror carousel.js data-preview=5/data-tablet=4/
// data-mobile-sm=3/data-mobile=2/space-lg=30/space-md=20/space=15: <575px
// 2 slide space 15, 575-767px 3 slide space 15, 768-991px 4 slide space 20,
// >=992px 5 slide space 30. "setion-instagrams" (thiếu 'c') là tên class
// thật trong HTML gốc — giữ nguyên.
export default function InstagramSection() {
  const subRef = useSplitTextReveal<HTMLDivElement>("up");
  const titleRef = useSplitTextReveal<HTMLHeadingElement>("scale");
  const { dotsRef, dotsEl, onSwiper } = useSwiperControls();

  return (
    <div className="tf-container w-1840 tf-spacing-1 pb-0 sw-layout">
      <div className="setion-instagrams tf-spacing-1">
        <div className="heading-section text-center mb_48">
          <div className="sub text-label text_white text-uppercase lh-16 mb_16 split-text effect-up" ref={subRef}>
            @Viora_HealthCoach
          </div>
          <h2 className="title text_white split-text effect-scale" ref={titleRef}>
            Follow Us On Instagram
          </h2>
        </div>
        <div className="tf-container medium">
          <Swiper
            className="swiper"
            slidesPerView={2}
            spaceBetween={15}
            speed={1000}
            observer
            pagination={{ el: dotsEl, clickable: true }}
            modules={[Pagination]}
            onSwiper={onSwiper}
            breakpoints={{
              575: { slidesPerView: 3, spaceBetween: 15 },
              768: { slidesPerView: 4, spaceBetween: 20 },
              992: { slidesPerView: 5, spaceBetween: 30 },
              1200: { slidesPerView: 5, spaceBetween: 30 },
            }}
          >
            {instaPosts.map((src, index) => (
              <SwiperSlide key={index}>
                <a href="#" className="ins-item">
                  <div className="img-style">
                    <Image width={234} height={234} loading="lazy" src={src} alt="ins" />
                    <i className="icon-instagram-logo" />
                  </div>
                </a>
              </SwiperSlide>
            ))}
            <div className="sw-dots style-white sw-pagination-layout justify-content-center text-center mt_24 d-flex" ref={dotsRef} />
          </Swiper>
        </div>
      </div>
    </div>
  );
}
