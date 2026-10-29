"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { blogHomeItems } from "@/data/demo-corporate/blogHome";
import { useSplitTextReveal } from "@/hooks/useSplitTextReveal";
import { useSwiperControls } from "@/hooks/useSwiperControls";

// Mirrors assets/js/carousel.js `.sw-layout` generic init reading the
// data-preview/data-screen-xl/data-tablet/data-mobile(-sm)/data-space(-md/-lg)
// attributes: slidesPerView 1 below 575px, 2 from 575px, 2 from 768px
// (tablet), 3 from 992px (preview), 4 from 1200px (screen-xl); spaceBetween
// 15 by default, 20 from 768px up.
export default function InsightsSection() {
  const { dotsRef, dotsEl, onSwiper } = useSwiperControls();
  const subRef = useSplitTextReveal<HTMLDivElement>("up");
  const titleRef = useSplitTextReveal<HTMLHeadingElement>("right");

  return (
    <div className="section-insights-1 sw-layout tf-spacing-1 pt-0">
      <div className="heading-section style-default text-center mb_47">
        <div className="sub text-label text-uppercase" ref={subRef}>News & Insights</div>
        <h2 className="title" ref={titleRef}>Latest News & Insights</h2>
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
          1200: { slidesPerView: 4, spaceBetween: 20 },
        }}
      >
        {blogHomeItems.map((item, index) => (
          <SwiperSlide className="wow fadeInLeft" data-wow-delay={`${index * 0.2}s`} key={item.image}>
            <div className="blog-item style-default hover-image-translate">
              <Link href="/blog-detail/inside-the-enterprise" className="img-style mb_23">
                <Image loading="lazy" width={445} height={334} src={item.image} alt="blog" />
                <div className="tag text-label">{item.tag}</div>
              </Link>
              <div className="content">
                <ul className="meta-post mb_12 font-3">
                  <li className="text-caption-1">
                    <div>
                      by <a href="#" className="link">{item.author}</a>
                    </div>
                  </li>
                  <li className="text-caption-1">{item.date}</li>
                </ul>
                <h5 className="title line-clamp-2">
                  <Link href="/blog-detail/inside-the-enterprise" className="link hover-line-text">
                    {item.title}
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
