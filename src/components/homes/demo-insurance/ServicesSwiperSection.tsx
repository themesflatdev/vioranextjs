"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { useSplitTextReveal } from "@/hooks/useSplitTextReveal";
import { useSwiperControls } from "@/hooks/useSwiperControls";
import { serviceDesc } from "@/data/demo-insurance/services";

// Images here are the home page's OWN mapping from index.html (service-1
// through service-4) — DIFFERENT from services.html's mapping for the
// same 4 titles (see data/demo-insurance/services.ts), preserved as-is
// per page. All 4 share the exact same description — confirmed with user
// to keep as-is, not a mistake to fix.
const services = [
  { slug: "health-insurance", title: "Health Insurance", image: "/assets/images/demo-insurance/service-1.jpg" },
  { slug: "life-insurance", title: "Life Insurance", image: "/assets/images/demo-insurance/service-2.jpg" },
  { slug: "property-insurance", title: "Property Insurance", image: "/assets/images/demo-insurance/service-3.jpg" },
  { slug: "business-insurance", title: "Business Insurance", image: "/assets/images/demo-insurance/service-4.jpg" },
];

// Mirrors assets/js/carousel.js `.sw-layout` generic init: base
// slidesPerView=mobile(1)/spaceBetween=space(10), 575=mobileSm(2),
// 768=tablet(3), 992=preview(3), 1200=screenXl(4) — spaceBetween stays 10
// throughout since data-space/-md/-lg are all "10" in the source markup.
export default function ServicesSwiperSection() {
  const { dotsRef, onSwiper } = useSwiperControls();
  const subRef = useSplitTextReveal<HTMLDivElement>("up");
  const titleRef = useSplitTextReveal<HTMLHeadingElement>("blur-fade");

  return (
    <div className="section-service-4 tf-spacing-1 sw-layout">
      <div className="tf-container">
        <div className="heading-section style-1 mb_60">
          <div className="row align-items-center">
            <div className="col-lg-7 d-grid gap_16">
              <div className="sub text-label text-uppercase" ref={subRef}>
                Our Services
              </div>
              <h2 className="title" ref={titleRef}>
                Our Insurance Services
              </h2>
            </div>
            <div className="col-lg-5">
              <Link
                href="/demo-insurance/services"
                className="tf-btn btn-hover-animate-2 ms-lg-auto wow fadeInRight"
              >
                <span>Explore All Plans</span>
                <span />
              </Link>
            </div>
          </div>
        </div>
        <Swiper
          className="swiper wow fadeInRight"
          slidesPerView={1}
          spaceBetween={10}
          speed={1000}
          pagination={{ el: dotsRef.current, clickable: true }}
          modules={[Pagination]}
          onSwiper={onSwiper}
          breakpoints={{
            575: { slidesPerView: 2, spaceBetween: 10 },
            768: { slidesPerView: 3, spaceBetween: 10 },
            992: { slidesPerView: 3, spaceBetween: 10 },
            1200: { slidesPerView: 4, spaceBetween: 10 },
          }}
        >
          {services.map((service) => {
            const href = `/demo-insurance/service-detail/${service.slug}`;
            return (
              <SwiperSlide key={service.title}>
                <div className="service-item style-1">
                  <Link href={href} className="img-style">
                    <Image width={345} height={460} loading="lazy" src={service.image} alt="service" />
                  </Link>
                  <div className="content">
                    <Link href={href} className="fw-5 text_white title link mb_12 h5">
                      {service.title}
                    </Link>
                    <div className="wrap">
                      <p className="font-3 text-body-default text_white desc mb_12">{serviceDesc}</p>
                      <Link href={href} className="text-caption-1 text_primary-color fw-4 hover-underline-link">
                        Explore Plans
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
          <div
            className="sw-dots style-3 sw-pagination-layout justify-content-center d-flex mt_24 d-xl-none"
            ref={dotsRef}
          />
        </Swiper>
      </div>
    </div>
  );
}
