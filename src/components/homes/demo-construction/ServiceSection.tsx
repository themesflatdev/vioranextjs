"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { useSplitTextReveal } from "@/hooks/useSplitTextReveal";
import { useSwiperControls } from "@/hooks/useSwiperControls";

type ServiceItem = {
  image: string;
  icon: string;
  title: string;
  desc: string;
};

// Slide 5 lặp y hệt slide 2 (service-item-2.jpg, icon-construction-2,
// "Renovation & Remodeling") — đúng HTML gốc, giữ nguyên.
const services: ServiceItem[] = [
  {
    image: "/assets/images/demo-construction/service-item-1.jpg",
    icon: "icon-construction-1",
    title: "General Contracting",
    desc: "Complete management for any project.",
  },
  {
    image: "/assets/images/demo-construction/service-item-2.jpg",
    icon: "icon-construction-2",
    title: "Renovation & Remodeling",
    desc: "Modern upgrades for any space.",
  },
  {
    image: "/assets/images/demo-construction/service-item-3.jpg",
    icon: "icon-construction-3",
    title: "Architectural Drafting",
    desc: "Creating blueprints to turn visions into reality.",
  },
  {
    image: "/assets/images/demo-construction/service-item-4.jpg",
    icon: "icon-construction-4",
    title: "Eco Friendly Construction",
    desc: "Eco-friendly and energy-saving builds.",
  },
  {
    image: "/assets/images/demo-construction/service-item-2.jpg",
    icon: "icon-construction-2",
    title: "Renovation & Remodeling",
    desc: "Modern upgrades for any space.",
  },
];

export default function ServiceSection() {
  const subRef = useSplitTextReveal<HTMLDivElement>("left");
  const titleRef = useSplitTextReveal<HTMLHeadingElement>("blur-fade");
  const descRef = useSplitTextReveal<HTMLParagraphElement>("lines-transform");
  const { prevRef, nextRef, dotsRef, prevEl, nextEl, dotsEl, onSwiper } = useSwiperControls();

  return (
    <div className="section-service-9 tf-spacing-1 sw-layout">
      <div className="tf-container large">
        <div className="heading-section-2 mb_48">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div
                className="text-label text-uppercase text_primary-color mb_15 split-text effect-left lh-16"
                ref={subRef}
              >
                Our Services
              </div>
              <h2 className="title text_white split-text effect-blur-fade" ref={titleRef}>
                Building the Future Together
              </h2>
            </div>
            <div className="col-lg-6">
              <div className="right">
                <p className="text_muted text-body-2 split-text split-lines-transform" ref={descRef}>
                  Delivering innovative, reliable, and sustainable construction solutions that transform
                  visions into reality, ensuring every project stands strong for generations to come.
                </p>
              </div>
            </div>
          </div>
        </div>

        <Swiper
          className="swiper position-relative"
          modules={[Navigation, Pagination]}
          speed={1000}
          slidesPerView={1}
          spaceBetween={10}
          navigation={{ prevEl, nextEl }}
          pagination={{ el: dotsEl, clickable: true }}
          onSwiper={onSwiper}
          breakpoints={{
            575: { slidesPerView: 2, spaceBetween: 10 },
            768: { slidesPerView: 2, spaceBetween: 10 },
            992: { slidesPerView: 3, spaceBetween: 10 },
            1200: { slidesPerView: 4, spaceBetween: 10 },
          }}
        >
          {services.map((service, index) => (
            <SwiperSlide key={index}>
              <div className="service-item style-3 hover-image-translate hover-effect-icon">
                <a href="#" className="img-style mb_28">
                  <Image
                    width={435}
                    height={580}
                    loading="eager"
                    src={service.image}
                    alt="service"
                  />
                  <div className="icon">
                    <i className={service.icon} />
                  </div>
                </a>
                <div className="content">
                  <h4 className="mb_8">
                    <a href="#" className="text_white hover-line-text link">
                      {service.title}
                    </a>
                  </h4>
                  <p className="text-body-default text_muted">{service.desc}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className="wrap-sw-button">
            <div className="sw-button style-4 lg-hide nav-prev-layout" ref={prevRef}>
              <i className="icon-CaretLeft" />
            </div>
            <div className="sw-button style-4 lg-hide nav-next-layout" ref={nextRef}>
              <i className="icon-CaretRight" />
            </div>
          </div>
          <div className="sw-dots style-white sw-pagination-layout text-center mt_24 d-lg-none" ref={dotsRef} />
        </Swiper>
      </div>
    </div>
  );
}
