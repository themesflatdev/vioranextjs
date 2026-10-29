"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { useScrollTransform } from "@/hooks/useScrollTransform";
import { useSplitTextReveal } from "@/hooks/useSplitTextReveal";
import { useSwiperControls } from "@/hooks/useSwiperControls";
import { blogPosts } from "@/data/demo-restaurant/blogPosts";
import { originalPosts } from "@/data/demo-corporate/blogPosts";

const DEMO_DETAIL_HREF = `/blog-detail/${originalPosts[0].slug}`;

export default function InsightsSection() {
  const { dotsRef, dotsEl, onSwiper } = useSwiperControls();
  const titleRef = useSplitTextReveal<HTMLHeadingElement>("blur-fade");
  const itemRef = useScrollTransform<HTMLDivElement>({ direction: "left", distance: "10%" });
  const leafRef = useScrollTransform<HTMLDivElement>({ direction: "up", distance: "20%" });

  return (
    <div className="section-insights-2 sw-layout tf-spacing-1">
      <div className="tf-container medium">
        <div className="heading-section-3 text-center d-grid gap_14 mb_40">
          <div className="sub v2 text-label text-uppercase text_white lh-16 justify-content-center">Blog</div>
          <h3 className="title" ref={titleRef}>
            Recent Articles
          </h3>
        </div>
        <Swiper
          className="swiper"
          slidesPerView={1}
          spaceBetween={15}
          speed={1000}
          observer
          observeParents
          modules={[Pagination]}
          pagination={{ el: dotsEl, clickable: true }}
          onSwiper={onSwiper}
          breakpoints={{
            575: { slidesPerView: 2, spaceBetween: 15 },
            768: { slidesPerView: 2, spaceBetween: 24 },
            992: { slidesPerView: 3, spaceBetween: 30 },
          }}
        >
          {blogPosts.map((post, index) => (
            <SwiperSlide className="wow fadeInLeft" data-wow-delay={index === 0 ? "" : index === 1 ? ".2s" : ".3s"} key={post.title}>
              <div className="blog-item style-1 hover-image">
                <Link href={DEMO_DETAIL_HREF} className="img-style mb_24">
                  <Image loading="lazy" width={410} height={274} src={post.image} alt="blog" />
                </Link>
                <div className="content">
                  <div className="date text_white text-label text-uppercase mb_12 lh-16">{post.date}</div>
                  <Link href={DEMO_DETAIL_HREF} className="title h5 mb_11 link hover-line-text">
                    {post.title}
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className="sw-dots style-white sw-pagination-layout mt_24 text-center" ref={dotsRef} />
        </Swiper>
      </div>
      <div className="item position-absolute scroll-transform" ref={itemRef}>
        <Image width={291} height={598} src="/assets/images/demo-restaurant/item-restaurant-10.png" alt="item" />
      </div>
      <div className="leaf position-absolute scroll-transform" ref={leafRef}>
        <Image width={268} height={468} src="/assets/images/demo-restaurant/leaf-2.png" alt="item" />
      </div>
    </div>
  );
}
