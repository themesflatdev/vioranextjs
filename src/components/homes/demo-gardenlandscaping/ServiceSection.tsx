"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { useSwiperControls } from "@/hooks/useSwiperControls";
import { useSplitTextReveal } from "@/hooks/useSplitTextReveal";
import { serviceItems } from "@/data/demo-gardenlandscaping/home";

export default function ServiceSection() {
  const { dotsRef, onSwiper } = useSwiperControls();
  const titleRef = useSplitTextReveal<HTMLHeadingElement>("right");
  const descRef = useSplitTextReveal<HTMLParagraphElement>("lines-transform");

  return (
    <div className="section-service-12 tf-spacing-1">
      <div className="tf-container large sw-layout">
        <div className="heading-section text-center mb_48">
          <h3 className="mb_16 split-text effect-right" ref={titleRef}>
            What We Offer
          </h3>
          <p className="text-body-2 text_secondary split-text split-lines-transform" ref={descRef}>
            Tailored services to transform your outdoor spaces.
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
          pagination={{ el: dotsRef.current, clickable: true }}
          onSwiper={onSwiper}
          breakpoints={{
            575: { slidesPerView: 2, spaceBetween: 15 },
            768: { slidesPerView: 3, spaceBetween: 20 },
            992: { slidesPerView: 4, spaceBetween: 20.67 },
            1200: { slidesPerView: 4, spaceBetween: 20.67 },
          }}
        >
          {serviceItems.map((item) => (
            <SwiperSlide key={item.title}>
              <div className="service-item style-5 hover-image">
                <Link href="#" className="img-style">
                  <Image width={427} height={427} loading="lazy" src={item.image} alt="service" />
                </Link>
                <div className="content text-center">
                  <div className="icon mb_20">
                    <i className={item.icon} />
                  </div>
                  <h5 className="title mb_8">
                    <Link href="#" className="hover-line-text mb_8">
                      {item.title}
                    </Link>
                  </h5>
                  <p className="text-body-default text_secondary">{item.desc}</p>
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
