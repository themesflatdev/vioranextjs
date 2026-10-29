"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { useSplitTextReveal } from "@/hooks/useSplitTextReveal";
import { useSwiperControls } from "@/hooks/useSwiperControls";
import { blogPosts } from "@/data/demo-lawyer/blogPosts";
import { originalPosts } from "@/data/demo-corporate/blogPosts";

// Original HTML links to "../demo-corporate/blog-detail.html" (no specific
// post) — routed to corporate's first real post instead of a hard-coded
// slug, per the prompt's instruction.
const blogDetailHref = `/blog-detail/${originalPosts[0].slug}`;

// Swiper breakpoints mirror carousel.js `.sw-layout`: data-screen-xl is
// absent here so the 1200 breakpoint falls back to preview=3 (unlike the
// corporate InsightsSection, which does set data-screen-xl=4).
export default function InsightsSection() {
  const { dotsRef, dotsEl, onSwiper } = useSwiperControls();
  const titleRef = useSplitTextReveal<HTMLHeadingElement>("right");

  return (
    <div className="section-insights-7 sw-layout tf-spacing-1">
      <div className="tf-container">
        <div className="heading-section style-default text-center mb_47">
          <div className="sub text-label text_muted text-uppercase split-text effect-up lh-16 wow fadeInUp">
            News & Insights
          </div>
          <h2 ref={titleRef} className="title split-text effect-right">
            Latest Legal <span className="text_primary-color">Updates</span>
          </h2>
          <p className="text-body-2 wow fadeInUp" data-wow-delay=".2s">
            Stay informed with insights and legal trends shaping decisions in today’s complex world.
          </p>
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
            992: { slidesPerView: 3, spaceBetween: 30 },
            1200: { slidesPerView: 3, spaceBetween: 30 },
          }}
        >
          {blogPosts.map((post, index) => (
            <SwiperSlide className="wow fadeInLeft" data-wow-delay={index === 0 ? undefined : `${index * 0.2}s`} key={post.image}>
              <div className="blog-item style-8 hover-image-translate">
                <Link href={blogDetailHref} className="img-style mb_23">
                  <Image loading="lazy" width={450} height={540} src={post.image} alt="blog" />
                  <div className="tag text-label position-absolute">{post.tag}</div>
                </Link>
                <div className="content">
                  <ul className="meta-post mb_12 font-3">
                    <li className="text-body-default">
                      <div className="text_muted">
                        by{" "}
                        <Link href="#" className="link text_primary">
                          {post.author}
                        </Link>
                      </div>
                    </li>
                    <li className="text-body-default">{post.date}</li>
                  </ul>
                  <h4 className="title line-clamp-2">
                    <Link href={blogDetailHref} className="link hover-line-text">
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
