"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { useSplitTextReveal } from "@/hooks/useSplitTextReveal";
import { useSwiperControls } from "@/hooks/useSwiperControls";
import { blogPosts } from "@/data/demo-insurance/blogPosts";

// These 4 titles don't match any of the 5 real blog-list.html posts (see
// blogPosts.ts) — blog-detail.html is a single shared demo article, so
// this falls back to the first real post, same convention used by
// blogGridPosts.ts for its own non-matching titles.
const DEMO_DETAIL_HREF = `/demo-insurance/blog-detail/${blogPosts[0].slug}`;

const posts = [
  {
    tag: "Innovation & Tech",
    title: "Advance secure claims handling now",
    author: "Mike Hanley",
    date: "June 12, 2025",
    image: "/assets/images/demo-insurance/blog-item-8.jpg",
  },
  {
    tag: "Culture & People",
    title: "Boost Trusted Coverage Systems Now",
    author: "Balla Daniella",
    date: "May 06, 2025",
    image: "/assets/images/demo-insurance/blog-item-9.jpg",
  },
  {
    tag: "Press Releases",
    title: "Deliver modern safety programs fast",
    author: "Kelemen Krisztina",
    date: "May 08, 2025",
    image: "/assets/images/demo-insurance/blog-item-10.jpg",
  },
  {
    tag: "Case Studies",
    title: "Build seamless claim support tools",
    author: "Kelemen Krisztina",
    date: "May 08, 2025",
    image: "/assets/images/demo-insurance/blog-item-11.jpg",
  },
];

// section-insights-1 on about-us.html — distinct from the home page's
// section-insights (different class, "hover-image-translate" cards, and
// its own breakpoints): base slidesPerView=mobile(1)/spaceBetween=space(15),
// 575=mobileSm(2)/space(15), 768=tablet(2)/space-md(20), 992=preview(3)/
// space-lg(20), 1200=screenXl(4)/spaceXl (falls back to space-lg=20).
export default function InsightsPreviewSection() {
  const { dotsRef, dotsEl, onSwiper } = useSwiperControls();
  const subRef = useSplitTextReveal<HTMLDivElement>("up");
  const titleRef = useSplitTextReveal<HTMLHeadingElement>("right");

  return (
    <div className="section-insights-1 sw-layout tf-spacing-1">
      <div className="heading-section style-default text-center mb_47">
        <div className="sub text-label text-uppercase" ref={subRef}>
          News & Insights
        </div>
        <h2 className="title" ref={titleRef}>
          Latest News & Insights
        </h2>
      </div>
      <Swiper
        className="swiper"
        slidesPerView={1}
        spaceBetween={15}
        speed={1000}
        pagination={{ el: dotsEl, clickable: true }}
        modules={[Pagination]}
        onSwiper={onSwiper}
        breakpoints={{
          575: { slidesPerView: 2, spaceBetween: 15 },
          768: { slidesPerView: 2, spaceBetween: 20 },
          992: { slidesPerView: 3, spaceBetween: 20 },
          1200: { slidesPerView: 4, spaceBetween: 20 },
        }}
      >
        {posts.map((post, index) => (
          <SwiperSlide className="wow fadeInLeft" data-wow-delay={`${index * 0.2}s`} key={post.title}>
            <div className="blog-item style-default hover-image-translate">
              <Link href={DEMO_DETAIL_HREF} className="img-style mb_23">
                <Image width={445} height={334} loading="lazy" src={post.image} alt="blog" />
                <div className="tag text-label">{post.tag}</div>
              </Link>
              <div className="content">
                <ul className="meta-post mb_12 font-3">
                  <li className="text-caption-1">
                    <div>
                      by <a href="#" className="link">{post.author}</a>
                    </div>
                  </li>
                  <li className="text-caption-1">{post.date}</li>
                </ul>
                <h5 className="title line-clamp-2">
                  <Link href={DEMO_DETAIL_HREF} className="link hover-line-text">
                    {post.title}
                  </Link>
                </h5>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="sw-dots style-1 sw-pagination-layout text-center mt_24" ref={dotsRef} />
      </Swiper>
    </div>
  );
}
