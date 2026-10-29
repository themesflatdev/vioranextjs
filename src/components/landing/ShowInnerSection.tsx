"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { useSplitTextReveal } from "@/hooks/useSplitTextReveal";
import { useSwiperControls } from "@/hooks/useSwiperControls";

type InnerPage = { title: string; href: string; image: string };

// 4 unique cards, repeated twice (8 slides total) — exactly as in the
// original HTML (not a bug, the source markup literally duplicates them).
const innerPages: InnerPage[] = [
  { title: "About Us", href: "/about-us", image: "/assets/images/landing/demo-pageinner-1.jpg" },
  { title: "Our Teams", href: "/our-team", image: "/assets/images/landing/demo-pageinner-2.jpg" },
  { title: "Our Services", href: "/services", image: "/assets/images/landing/demo-pageinner-3.jpg" },
  { title: "Services Details", href: "/service-detail/business-strategy", image: "/assets/images/landing/demo-pageinner-4.jpg" },
];
const slides = [...innerPages, ...innerPages];

// Mirrors assets/js/carousel.js `.sw-layout` init for this swiper's data
// attributes (data-autoplay="true" data-preview="4" data-tablet="2"
// data-mobile="1" data-mobile-sm="2" data-space-lg="30" data-space-md="20"
// data-space="15", no data-screen-xl so 1200px stays at data-preview):
// slidesPerView 1 below 575px, 2 from 575/768px, 4 from 992/1200px;
// autoplay delay 4000ms, disableOnInteraction false; no loop.
export default function ShowInnerSection() {
  const titleRef = useSplitTextReveal<HTMLHeadingElement>("right");
  const descRef = useSplitTextReveal<HTMLParagraphElement>("lines-transform");
  const { dotsRef, dotsEl, onSwiper } = useSwiperControls();

  return (
    <div className="section-show-inner sw-layout tf-spacing-17">
      <div className="heading-section text-center mb_52 d-grid gap_12">
        <h2 ref={titleRef} className="title text_primary split-text effect-right">
          Pre-Built Inner Pages
        </h2>
        <p ref={descRef} className="text_secondary text-body-2 split-text split-lines-transform">
          Complete your website pages in few clicks with our premade pages and template.
        </p>
      </div>
      <Swiper
        className="swiper"
        modules={[Autoplay, Pagination]}
        slidesPerView={1}
        spaceBetween={15}
        speed={1000}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ el: dotsEl, clickable: true }}
        onSwiper={onSwiper}
        breakpoints={{
          575: { slidesPerView: 2, spaceBetween: 15 },
          768: { slidesPerView: 2, spaceBetween: 20 },
          992: { slidesPerView: 4, spaceBetween: 30 },
          1200: { slidesPerView: 4, spaceBetween: 30 },
        }}
      >
        {slides.map((page, i) => (
          <SwiperSlide key={i}>
            <div className="demo-card hover-image-2">
              <div className="img-style">
                <Image width={402} height={496} loading="lazy" src={page.image} alt="demo" />
                <div className="wrap-button">
                  <Link href={page.href} className="tf-btn btn-hover-animate-2 mx-auto">
                    <span>View Page</span>
                    <span className="bg-effect" />
                  </Link>
                </div>
              </div>
              <Link href={page.href} className="overlay-link" />
              <div className="content justify-content-center">
                <Link href={page.href} className="title link h5 text_primary">
                  {page.title}
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="sw-dots style-2 sw-pagination-layout text-center mt_24" ref={dotsRef} />
      </Swiper>
    </div>
  );
}
