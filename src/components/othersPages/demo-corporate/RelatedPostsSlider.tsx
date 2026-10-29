"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { originalPosts } from "@/data/demo-corporate/blogPosts";
import { useSwiperControls } from "@/hooks/useSwiperControls";

// blog-detail.html always shows the same 3 related posts (blog-item-5/6/7 —
// The Future of Work / Branded Impact / What We've Learned) regardless of
// which article is open, since the original is a single static demo page.
// Kept static per CLAUDE.md rule 4.
const relatedPosts = originalPosts.slice(5, 8);

// Mirrors assets/js/carousel.js `.sw-layout` init for this swiper's data
// attributes (data-preview="3" data-tablet="2" data-mobile-sm="2"
// data-mobile="1" data-space-lg="20" data-space-md="20" data-space="15",
// no data-screen-xl so 1200px stays at the data-preview value): slidesPerView
// 1 below 575px, 2 from 575px, 2 from 768px (spaceBetween 20), 3 from 992px
// and 1200px up (spaceBetween 20).
export default function RelatedPostsSlider() {
  const { dotsRef, dotsEl, onSwiper } = useSwiperControls();

  return (
    <div className="tf-container sw-layout tf-spacing-1 pt-0">
      <div className="heading-section style-default mb_48 justify-content-center text-center">
        <div className="sub text-label text-uppercase">News &amp; Insights</div>
        <h2 className="title">Latest News &amp; Insights</h2>
      </div>
      <Swiper
        className="swiper"
        modules={[Pagination]}
        slidesPerView={1}
        spaceBetween={15}
        speed={1000}
        pagination={{ el: dotsEl, clickable: true }}
        onSwiper={onSwiper}
        breakpoints={{
          575: { slidesPerView: 2, spaceBetween: 15 },
          768: { slidesPerView: 2, spaceBetween: 20 },
          992: { slidesPerView: 3, spaceBetween: 20 },
          1200: { slidesPerView: 3, spaceBetween: 20 },
        }}
      >
        {relatedPosts.map((post) => (
          <SwiperSlide key={post.id}>
            <div className="blog-item hover-image">
              <Link href={`/blog-detail/${post.slug}`} className="img-style mb_20">
                <Image
                  loading="lazy"
                  width={post.width}
                  height={post.height}
                  src={post.image}
                  alt="blog"
                />
              </Link>
              <div className="content">
                <Link href={`/blog-detail/${post.slug}`} className="title h4 mb_12 link">
                  {post.title}
                </Link>
                <ul className="meta-post">
                  <li className="text-caption-1">
                    <div>
                      by <a href="#" className="link">{post.author}</a>
                    </div>
                  </li>
                  <li className="text-caption-1">{post.date}</li>
                </ul>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="sw-dots style-1 sw-pagination-layout text-center mt_24" ref={dotsRef} />
      </Swiper>
    </div>
  );
}
