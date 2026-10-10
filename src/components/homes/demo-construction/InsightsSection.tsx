"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { useSplitTextReveal } from "@/hooks/useSplitTextReveal";
import { useSwiperControls } from "@/hooks/useSwiperControls";

type BlogPost = {
  image: string;
  tag: string;
  title: string;
  author: string;
  date: string;
  wowDelay?: string;
};

// SỬA theo prompt mục "SỬA so với HTML gốc":
// 1. tag thẻ 1 "Archicture" (lỗi gõ) -> "Architecture".
// 2. tác giả thẻ 2 trùng tên thẻ 1 ("Lindsey Dorwart") -> "Marcus Bellamy".
// Link ảnh+tiêu đề cả 3 thẻ trỏ /blog-detail/inside-the-enterprise (route
// thật của corporate) thay vì ../demo-corporate/blog-detail.html.
const posts: BlogPost[] = [
  {
    image: "/assets/images/demo-construction/blog-1.jpg",
    tag: "Architecture",
    title: "Modern Building Trends Shaping the Industry Today",
    author: "Lindsey Dorwart",
    date: "July 5, 2025",
  },
  {
    image: "/assets/images/demo-construction/blog-2.jpg",
    tag: "Worker",
    title: "Sustainable Building Materials for Future Construction",
    author: "Marcus Bellamy",
    date: "July 5, 2025",
    wowDelay: "0.2s",
  },
  {
    image: "/assets/images/demo-construction/blog-3.jpg",
    tag: "Construction",
    title: "Successful Renovation Tips for Every Homeowner",
    author: "Rayna Philips",
    date: "July 5, 2025",
    wowDelay: "0.4s",
  },
];

export default function InsightsSection() {
  const subRef = useSplitTextReveal<HTMLDivElement>("left");
  const titleRef = useSplitTextReveal<HTMLHeadingElement>("blur-fade");
  const { dotsRef, onSwiper } = useSwiperControls();

  return (
    <div className="section-insights-4 sw-layout tf-spacing-1">
      <div className="tf-container">
        <div className="heading-section d-grid gap_16 text-center mb_48">
          <div className="sub text-label text_primary-color text-uppercase split-text effect-left" ref={subRef}>
            Latest News
          </div>
          <h2 className="title split-text effect-blur-fade" ref={titleRef}>
            Construction Blog Updates
          </h2>
        </div>
        <Swiper
          className="swiper"
          modules={[Pagination]}
          speed={1000}
          slidesPerView={1}
          spaceBetween={15}
          pagination={{ el: dotsRef.current, clickable: true }}
          onSwiper={onSwiper}
          breakpoints={{
            575: { slidesPerView: 2, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            992: { slidesPerView: 3, spaceBetween: 40 },
            1200: { slidesPerView: 3, spaceBetween: 40 },
          }}
        >
          {posts.map((post) => (
            <SwiperSlide className="wow fadeInLeft" data-wow-delay={post.wowDelay} key={post.title}>
              <div className="blog-item style-4 v2 hover-image">
                <Link href="/blog-detail/inside-the-enterprise" className="img-style mb_24 rounded-0">
                  <Image width={443} height={332} loading="lazy" src={post.image} alt="blog" />
                </Link>
                <div className="content">
                  <div className="tag text-label">{post.tag}</div>
                  <h4 className="title">
                    <Link href="/blog-detail/inside-the-enterprise" className="link hover-line-text">
                      {post.title}
                    </Link>
                  </h4>
                  <ul className="meta-post">
                    <li className="text-body-default">
                      <div>
                        <a href="#" className="link">
                          {post.author}
                        </a>
                      </div>
                    </li>
                    <li className="text-body-default">{post.date}</li>
                  </ul>
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
