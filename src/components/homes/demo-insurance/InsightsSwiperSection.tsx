"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { useSplitTextReveal } from "@/hooks/useSplitTextReveal";
import { useSwiperControls } from "@/hooks/useSwiperControls";
import { blogPosts } from "@/data/demo-insurance/blogPosts";

// These 3 titles don't match any of the 5 real blog-list.html posts (see
// blogPosts.ts) — blog-detail.html is a single shared demo article, so
// this falls back to the first real post, same convention used by
// blogGridPosts.ts for its own non-matching titles.
const DEMO_DETAIL_HREF = `/demo-insurance/blog-detail/${blogPosts[0].slug}`;

const posts = [
  {
    tag: "Innovation & Tech",
    title: "How to Choose the Right Insurance Plan",
    author: "Mike Hanley",
    date: "June 12, 2025",
    image: "/assets/images/demo-insurance/blog-item-1.jpg",
  },
  {
    tag: "Culture & People",
    title: "Choosing the Right Health Plan for You",
    author: "Balla Daniella",
    date: "May 06, 2025",
    image: "/assets/images/demo-insurance/blog-item-2.jpg",
  },
  {
    tag: "Press Releases",
    title: "Business Coverage: What You Should Know",
    author: "Kelemen Krisztina",
    date: "May 08, 2025",
    image: "/assets/images/demo-insurance/blog-item-3.jpg",
  },
];

// Mirrors assets/js/carousel.js `.sw-layout` generic init: base
// slidesPerView=mobile(1)/spaceBetween=space(15), 575=mobileSm(2)/space(15),
// 768=tablet(2)/space-md(24), 992=preview(3)/space-lg(40), 1200=screenXl
// (falls back to preview=3)/spaceXl (falls back to space-lg=40).
export default function InsightsSwiperSection() {
  const { dotsRef, onSwiper } = useSwiperControls();
  const subRef = useSplitTextReveal<HTMLDivElement>("up");
  const titleRef = useSplitTextReveal<HTMLHeadingElement>("blur-fade");

  return (
    <div className="section-insights sw-layout tf-spacing-4">
      <div className="tf-container">
        <div className="heading-section style-default text-center mb_47">
          <div className="sub text-label text-uppercase" ref={subRef}>
            News & Insights
          </div>
          <h2 className="title" ref={titleRef}>
            Insights & Updates
          </h2>
        </div>
        <Swiper
          className="swiper wow fadeInUp"
          slidesPerView={1}
          spaceBetween={15}
          speed={1000}
          pagination={{ el: dotsRef.current, clickable: true }}
          modules={[Pagination]}
          onSwiper={onSwiper}
          breakpoints={{
            575: { slidesPerView: 2, spaceBetween: 15 },
            768: { slidesPerView: 2, spaceBetween: 24 },
            992: { slidesPerView: 3, spaceBetween: 40 },
            1200: { slidesPerView: 3, spaceBetween: 40 },
          }}
        >
          {posts.map((post) => (
            <SwiperSlide key={post.title}>
              <div className="blog-item style-1 hover-image">
                <Link href={DEMO_DETAIL_HREF} className="img-style mb_24">
                  <Image width={445} height={334} loading="lazy" src={post.image} alt="blog" />
                </Link>
                <div className="content">
                  <div className="tag text-label mb_12">{post.tag}</div>
                  <h5 className="title h5 mb_11 font-main">
                    <Link href={DEMO_DETAIL_HREF} className="hover-line-text">
                      {post.title}
                    </Link>
                  </h5>
                  <ul className="meta-post mb_12 font-4">
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
          <div
            className="sw-dots style-3 sw-pagination-layout justify-content-center d-flex mt_24 d-xl-none"
            ref={dotsRef}
          />
        </Swiper>
      </div>
    </div>
  );
}
