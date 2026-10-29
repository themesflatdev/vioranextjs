"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { useSplitTextReveal } from "@/hooks/useSplitTextReveal";
import { useSwiperControls } from "@/hooks/useSwiperControls";

const services = [
  {
    image: "/assets/images/demo-carservices/service-1.jpg",
    title: "Routine Check",
    desc: "Routine checks extending car life, ensuring smooth, safe, and worry-free driving for every daily journey.",
    delay: undefined,
  },
  {
    image: "/assets/images/demo-carservices/service-2.jpg",
    title: "Engine Diagnostics",
    desc: "Smart scans detect issues early, prevent costly repairs, improve efficiency, and keep performance reliable.",
    delay: "0.2s",
  },
  {
    image: "/assets/images/demo-carservices/service-3.jpg",
    title: "Tire & Brake Care",
    desc: "Professional service keeps tires strong and brakes safe, maximizing control, safety, and reliability on every trip.",
    delay: "0.4s",
  },
];

export default function ServiceSection() {
  const titleRef = useSplitTextReveal<HTMLHeadingElement>("blur-fade");
  const { dotsRef, dotsEl, onSwiper } = useSwiperControls();

  return (
    <div className="section-service-13 sw-layout">
      <div className="heading-section text-center mb_48">
        <h2 ref={titleRef} className="text_white mb_16 split-text effect-blur-fade">
          What We Do
        </h2>
        <p className="text_muted text-body-2 wow fadeInUp" data-wow-delay="0.2s">
          Expert maintenance and repair ensuring your car performs at its best on every road.
        </p>
      </div>
      <Swiper
        className="swiper"
        modules={[Pagination]}
        speed={1000}
        loop={false}
        pagination={{ el: dotsEl, clickable: true }}
        onSwiper={onSwiper}
        slidesPerView={1}
        spaceBetween={15}
        breakpoints={{
          575: { slidesPerView: 2, spaceBetween: 15 },
          768: { slidesPerView: 2, spaceBetween: 20 },
          992: { slidesPerView: 2, spaceBetween: 20 },
          1200: { slidesPerView: 3, spaceBetween: 20 },
        }}
      >
        {services.map((service) => (
          <SwiperSlide key={service.title}>
            <div className="service-item style-6 hover-image-translate wow fadeInLeft" data-wow-delay={service.delay}>
              <Link href="#" className="img-style">
                <Image width={614} height={778} src={service.image} alt="service" />
              </Link>
              <div className="content">
                <h3 className="mb_8">
                  <Link href="#" className="link">
                    {service.title}
                  </Link>
                </h3>
                <p className="text-body-2 text_white line-clamp-2">{service.desc}</p>
                <Link href="/portfolio" className="tf-btn btn-bg-stroke-dark btn-hover-animate-2">
                  <span>View More</span>
                  <span className="bg-effect" />
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="sw-dots style-white sw-pagination-layout text-center mt_24" ref={dotsRef} />
      </Swiper>
    </div>
  );
}
