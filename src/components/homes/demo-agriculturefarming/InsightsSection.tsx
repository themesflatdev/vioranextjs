"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { useSplitTextReveal } from "@/hooks/useSplitTextReveal";
import { useSwiperControls } from "@/hooks/useSwiperControls";

const posts = [
  { image: "blog-1.jpg", date: "June 12, 2025", tag: "HEALTHY", title: "5 Clear Signs Your Produce Is Truly Organic and Safe", delay: "" },
  { image: "blog-1.jpg", date: "June 12, 2025", tag: "HEALTHY", title: "5 Clear Signs Your Produce Is Truly Organic and Safe", delay: "0.2s" },
  { image: "blog-2.jpg", date: "June 18, 2025", tag: "FARMING", title: "Traceable Farming Builds Real Trust with Consumers", delay: "0.4s" },
];

export default function InsightsSection() {
  const titleRef = useSplitTextReveal<HTMLHeadingElement>("scale");
  const { dotsRef, dotsEl, onSwiper } = useSwiperControls();

  return (
    <div className="section-insight-7 sw-layout tf-spacing-1">
      <div className="tf-container">
        <div className="heading-section mb_48 text-center mb_48">
          <div className="sub text-label text-uppercase text_primary-color split-text effect-up mb_16 lh-16">
            Latest News
          </div>
          <h2 ref={titleRef} className="title split-text effect-scale mb_16">
            Insights From The Farm
          </h2>
          <p className="text-body-2 wow fadeInUp" data-wow-delay="0.2s">
            Fresh insights on clean eating and sustainable living.
          </p>
        </div>
        <Swiper
          className="swiper"
          modules={[Pagination]}
          speed={1000}
          spaceBetween={15}
          slidesPerView={1}
          pagination={{ el: dotsEl, clickable: true }}
          onSwiper={onSwiper}
          breakpoints={{
            575: { slidesPerView: 2, spaceBetween: 15 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            992: { slidesPerView: 3, spaceBetween: 30 },
            1200: { slidesPerView: 3, spaceBetween: 30 },
          }}
        >
          {posts.map((post, index) => (
            <SwiperSlide key={index} className="wow fadeInLeft" data-wow-delay={post.delay || undefined}>
              <div className="blog-item style-7 hover-image">
                <div className="img-style mb_24">
                  <Image
                    width={402}
                    height={301}
                    src={`/assets/images/demo-agriculturefarming/${post.image}`}
                    alt="blog"
                  />
                </div>
                <div className="content">
                  <ul className="meta-post mb_12">
                    <li className="text-caption-1">
                      <div className="text_muted text-caption-1">{post.date}</div>
                    </li>
                    <li className="text-button">
                      <Link href="#" className="link">
                        {post.tag}
                      </Link>
                    </li>
                  </ul>
                  <h5 className="text-capitalize">
                    <Link href="#" className="link line-clamp-2">
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
    </div>
  );
}
