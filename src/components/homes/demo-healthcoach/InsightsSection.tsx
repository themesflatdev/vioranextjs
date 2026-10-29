"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useSplitTextReveal } from "@/hooks/useSplitTextReveal";
import { useSwiperControls } from "@/hooks/useSwiperControls";
import { blogPosts } from "@/data/demo-healthcoach/blogPosts";
import { originalPosts } from "@/data/demo-corporate/blogPosts";

// Gốc trỏ ../demo-corporate/blog-detail.html (không slug) -> đổi thành
// /blog-detail/{slug bài đầu tiên của corporate}, lấy động từ
// demo-corporate/blogPosts.ts, không hard-code.
const blogDetailHref = `/blog-detail/${originalPosts[0].slug}`;

// Swiper breakpoints mirror carousel.js data-preview=2/data-tablet=2/
// data-mobile=1/space-lg=30/space-md=20/space=15. Nav prev/next nằm ở
// heading (ngoài .swiper), không dots.
export default function InsightsSection() {
  const subRef = useSplitTextReveal<HTMLDivElement>("up");
  const titleRef = useSplitTextReveal<HTMLHeadingElement>("scale");
  const { prevRef, nextRef, prevEl, nextEl, onSwiper } = useSwiperControls();

  return (
    <div className="section-insights sw-layout">
      <div className="tf-container medium">
        <div className="heading-section d-flex justify-content-between gap_16 flex-wrap align-items-center mb_48">
          <div>
            <div className="sub text-label text-uppercase text_primary-color split-text effect-up mb_16" ref={subRef}>
              Latest News
            </div>
            <h2 className="title text_primary-color split-text effect-scale" ref={titleRef}>
              Tips And Insights
            </h2>
          </div>
          <div className="d-flex gap_12 wow fadeInRight">
            <div className="sw-button style-3 nav-prev-layout" ref={prevRef}>
              <i className="icon-CaretLeft" />
            </div>
            <div className="sw-button style-3 nav-next-layout" ref={nextRef}>
              <i className="icon-CaretRight" />
            </div>
          </div>
        </div>
        <Swiper
          className="swiper wow fadeInUp"
          slidesPerView={1}
          spaceBetween={15}
          speed={1000}
          observer
          navigation={{ prevEl, nextEl }}
          modules={[Navigation]}
          onSwiper={onSwiper}
          breakpoints={{
            768: { slidesPerView: 2, spaceBetween: 20 },
            992: { slidesPerView: 2, spaceBetween: 30 },
            1200: { slidesPerView: 2, spaceBetween: 30 },
          }}
        >
          {blogPosts.map((post, index) => (
            <SwiperSlide key={index}>
              <div className="blog-item style-3 hover-image">
                <Link href={blogDetailHref} className="img-style">
                  <Image loading="lazy" width={630} height={440} src={post.image} alt="blog" />
                </Link>
                <div className="content">
                  <h4 className="mb_11 title">
                    <Link href={blogDetailHref} className="hover-line-text text_white font-main fw-6">
                      {post.title}
                    </Link>
                  </h4>
                  <ul className="meta-post">
                    <li className="text-label">
                      <div>
                        <a href="#" className="link text-uppercase text-label lh-16">
                          {post.tag}
                        </a>
                      </div>
                    </li>
                    <li className="text-label text-uppercase">{post.date}</li>
                  </ul>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
