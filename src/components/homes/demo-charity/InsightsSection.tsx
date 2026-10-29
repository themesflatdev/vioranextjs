"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { useSwiperControls } from "@/hooks/useSwiperControls";
import { insightsPosts } from "@/data/demo-charity/home";

export default function InsightsSection() {
  const { dotsRef, dotsEl, onSwiper } = useSwiperControls();

  return (
    <div className="section-insights-5 sw-layout tf-spacing-1">
      <div className="tf-container">
        <div className="heading-section mb_40 text-center">
          <h2 className="mb_16 split-text effect-blur-fade">Charity Stories & Insights</h2>
          <p className="text-body-2 wow fadeInUp">
            Inspiring stories, impactful initiatives, and practical tips for making a difference.
          </p>
        </div>
        <Swiper
          className="swiper wow fadeInUp"
          slidesPerView={1}
          spaceBetween={15}
          speed={1000}
          loop={false}
          observer
          observeParents
          modules={[Pagination]}
          pagination={{ el: dotsEl, clickable: true }}
          onSwiper={onSwiper}
          breakpoints={{
            575: { slidesPerView: 2, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            992: { slidesPerView: 3, spaceBetween: 30 },
          }}
        >
          {insightsPosts.map((post) => (
            <SwiperSlide key={post.title}>
              <div className="blog-item style-5 hover-image">
                <div className="img-style mb_24">
                  <Image width={450} height={300} loading="lazy" src={post.image} alt="blog" />
                  <div className="date">
                    <span className="text-button text_white month">{post.month}</span>
                    <span className="h4 day">{post.day}</span>
                  </div>
                </div>
                <div className="content">
                  <div className="text-label text-uppercase text_secondary letter-spacing-1 mb_12 lh-16">
                    {post.category}
                  </div>
                  <h5 className="title mb_24">
                    <Link href="#" className="link line-clamp-2">
                      {post.title}
                    </Link>
                  </h5>
                  <Link href="#" className="hover-underline-link text-button text_secondary">
                    READ MORE
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className="sw-dots style-1 sw-pagination-layout text-center mt_24" ref={dotsRef} />
        </Swiper>
      </div>
    </div>
  );
}
