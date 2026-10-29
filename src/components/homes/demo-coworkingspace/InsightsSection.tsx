"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { useSwiperControls } from "@/hooks/useSwiperControls";
import { insightPosts, BLOG_DETAIL_HREF } from "@/data/demo-coworkingspace/insights";

// carousel.js .sw-layout breakpoints: data-mobile=1/data-mobile-sm=2/
// data-tablet=2/data-preview=3, data-space=15/data-space-md=20/
// data-space-lg=40 → <575 1 slide space15, 575-767 2 slide space15,
// 768-991 2 slide space20, >=992 3 slide space40.
export default function InsightsSection() {
  const { dotsRef, dotsEl, onSwiper } = useSwiperControls();

  return (
    <div className="section-insights-5 sw-layout tf-spacing-1 pt-0">
      <div className="tf-container large">
        <div className="heading-section style-default text-center mb_47">
          <div className="sub text-label text-uppercase split-text effect-up">News & Insights</div>
          <h2 className="title split-text effect-right">Latest News & Insights</h2>
        </div>
        <Swiper
          className="swiper"
          slidesPerView={1}
          spaceBetween={15}
          observer
          pagination={{ el: dotsEl, clickable: true }}
          modules={[Pagination]}
          onSwiper={onSwiper}
          breakpoints={{
            575: { slidesPerView: 2, spaceBetween: 15 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            992: { slidesPerView: 3, spaceBetween: 40 },
          }}
        >
          {insightPosts.map((post) => (
            <SwiperSlide key={post.key} className="wow fadeInLeft" data-wow-delay={post.wowDelay}>
              <div className="blog-item style-default hover-image-translate">
                <Link href={BLOG_DETAIL_HREF} className="img-style mb_23 rounded-12">
                  <Image
                    loading="lazy"
                    width={post.width}
                    height={post.height}
                    src={post.image}
                    alt="blog"
                  />
                  <div className="tag text-label">{post.tag}</div>
                </Link>
                <div className="content">
                  <ul className="meta-post mb_12">
                    <li className="text-body-default">
                      <div>
                        by <Link href="#" className="link">{post.author}</Link>
                      </div>
                    </li>
                    <li className="text-body-default">{post.date}</li>
                  </ul>
                  <h4 className="title line-clamp-2">
                    <Link href={BLOG_DETAIL_HREF} className="link hover-line-text">
                      {post.title}
                    </Link>
                  </h4>
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
