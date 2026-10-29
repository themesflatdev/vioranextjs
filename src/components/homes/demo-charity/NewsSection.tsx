"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { useSwiperControls } from "@/hooks/useSwiperControls";
import { useSplitTextReveal } from "@/hooks/useSplitTextReveal";
import { useCountUp } from "@/hooks/useCountUp";
import { newsItems } from "@/data/demo-charity/home";

function NewsItem({ item, wowDelay }: { item: (typeof newsItems)[number]; wowDelay: string }) {
  const { value, ref } = useCountUp(item.target, item.duration, item.initial);

  return (
    <div className="news-item wow fadeInLeft" data-wow-delay={wowDelay}>
      <div className="img-style">
        <Image width={443} height={443} loading="lazy" src={item.image} alt="news" />
      </div>
      <div className="wrap-content">
        <div>
          <div className="number counter-item">
            <div className={`counter h2 mb_12 ${item.counterClass}`} ref={ref as React.RefObject<HTMLDivElement>}>
              <span className="numberCounter">{value}</span>
              <span className="sub-counter">{item.suffix}</span>
            </div>
          </div>
          <div className="content">
            <h6 className={`title ${item.titleClass}`}>{item.title}</h6>
            <div>
              {item.lines.map((line) => (
                <p className="text_primary text-body-default" key={line}>
                  {line}
                </p>
              ))}
            </div>
          </div>
        </div>
        <Link href="#" className="btn-arrow">
          <i className="icon-CaretRight" />
        </Link>
      </div>
    </div>
  );
}

export default function NewsSection() {
  const { dotsRef, dotsEl, onSwiper } = useSwiperControls();
  const titleRef = useSplitTextReveal<HTMLHeadingElement>("blur-fade");

  return (
    <div className="section-news sw-layout tf-spacing-1">
      <div className="tf-container">
        <div className="heading-section text-center mb_50">
          <h2 className="mb_16 split-text effect-blur-fade" ref={titleRef}>
            Initiatives That Transform Lives
          </h2>
          <p className="text-body-2 wow fadeInUp" data-wow-delay=".2s">
            Together, we can create lasting change for communities worldwide. Join us in delivering hope and
            essential support.
          </p>
        </div>
        <Swiper
          className="swiper"
          slidesPerView={1}
          spaceBetween={15}
          speed={1000}
          loop={false}
          observer
          observeParents
          modules={[Pagination]}
          pagination={{ el: dotsEl, clickable: true }}
          onSwiper={onSwiper}
          breakpoints={{
            575: { slidesPerView: 2, spaceBetween: 15 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            992: { slidesPerView: 2, spaceBetween: 30 },
            1200: { slidesPerView: 3, spaceBetween: 40 },
          }}
        >
          {newsItems.map((item) => (
            <SwiperSlide key={item.title}>
              <NewsItem item={item} wowDelay={item.wowDelay} />
            </SwiperSlide>
          ))}
          <div className="sw-dots style-1 sw-pagination-layout text-center mt_24" ref={dotsRef} />
        </Swiper>
      </div>
    </div>
  );
}
