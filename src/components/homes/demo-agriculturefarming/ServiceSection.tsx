"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { useSplitTextReveal } from "@/hooks/useSplitTextReveal";
import { useSwiperControls } from "@/hooks/useSwiperControls";

const services = [
  { image: "service-1.jpg", title: "Organic Farming", delay: ".0s" },
  { image: "service-2.jpg", title: "Crop Management", delay: ".2s" },
  { image: "service-3.jpg", title: "Fresh Produce", delay: ".4s" },
  { image: "service-4.jpg", title: "Farm Consulting", delay: ".6s" },
];

export default function ServiceSection() {
  const titleRef = useSplitTextReveal<HTMLHeadingElement>("scale");
  const { dotsRef, onSwiper } = useSwiperControls();

  return (
    <div className="section-service-15 sw-layout">
      <div className="tf-container large">
        <div className="heading-section-5 mb_48">
          <div className="row align-items-end">
            <div className="col-lg-7">
              <div className="sub text-label text-uppercase text_primary-color split-text effect-up mb_12">
                Our Services
              </div>
              <h2 ref={titleRef} className="title split-text effect-scale">
                Organic Farming Solutions For Every Local Community
              </h2>
            </div>
            <div className="col-lg-5">
              <div className="right">
                <p className="text-body-2 mb_23 wow fadeInUp">
                  Discover our commitment to sustainable agriculture with modern techniques, eco-friendly practices,
                  and farm products. We provide solutions that help communities grow healthier and businesses
                  thrive.
                </p>
                <div className="wow fadeInUp" data-wow-delay=".2s">
                  <Link href="#" className="hover-underline-link py-1 text-button text_primary">
                    View All Services
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Swiper
          className="swiper"
          modules={[Pagination]}
          speed={1000}
          spaceBetween={15}
          slidesPerView={1}
          pagination={{ el: dotsRef.current, clickable: true }}
          onSwiper={onSwiper}
          breakpoints={{
            575: { slidesPerView: 2, spaceBetween: 15 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            992: { slidesPerView: 3, spaceBetween: 20 },
            1200: { slidesPerView: 4, spaceBetween: 30 },
          }}
        >
          {services.map((service) => (
            <SwiperSlide key={service.image}>
              <div className="service-item style-8 hover-image-2 wow fadeInUp" data-wow-delay={service.delay}>
                <div className="img-style">
                  <Image
                    width={420}
                    height={560}
                    src={`/assets/images/demo-agriculturefarming/${service.image}`}
                    alt="service"
                  />
                </div>
                <div className="content">
                  <h5 className="title">
                    <Link href="#" className="hover-line-text">
                      {service.title}
                    </Link>
                  </h5>
                  <Link href="#" className="btn-arrow">
                    <i className="icon-ArrowUpRight" />
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
