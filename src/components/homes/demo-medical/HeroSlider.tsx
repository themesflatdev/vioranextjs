"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, Pagination } from "swiper/modules";
import { useSwiperControls } from "@/hooks/useSwiperControls";

// All 3 slides share identical title/desc/button text — a real content bug
// in the original HTML (demo copy never customized per-slide), preserved
// verbatim per CLAUDE.md rule 4. Only the image layout differs per slide.
function SlideContent() {
  return (
    <div className="content">
      <div className="heading mb_40">
        <h2 className="title mb_16 effect-item effect-left delay-1">
          The Most Reliable Health Services Available
        </h2>
        <p className="text-body-2 text_secondary effect-item effect-left delay-2">
          We are deeply committed to providing patient-centered care that prioritizes your
          well-being, delivered with empathy.
        </p>
      </div>
      <div className="wrap-btn d-flex gap_12 flex-wrap effect-item effect-up delay-3">
        <Link href="/demo-medical/appointment" className="tf-btn btn-bg-primary-2 btn-switch-text">
          <span>
            <span className="btn-double-text" data-text="Make An Appointment">
              Make An Appointment
            </span>
          </span>
        </Link>
        <div className="contact d-flex align-items-center gap_17">
          <div className="icon">
            <i className="icon-PhoneCall" />
          </div>
          <div>
            <p className="text-caption-2 text_secondary mb_4">Have any question?</p>
            <h6 className="font-main">1-555-678-8888</h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HeroSlider() {
  const { prevRef, nextRef, dotsRef, onSwiper } = useSwiperControls();

  return (
    <div className="tf-slider-2 position-relative sw-layout">
      <Swiper
        className="swiper effect-content-slide"
        modules={[EffectFade, Navigation, Pagination]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={1000}
        slidesPerView={1}
        loop={false}
        navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
        pagination={{ el: dotsRef.current, clickable: true }}
        onSwiper={onSwiper}
      >
        <SwiperSlide>
          <div className="hero-banner-4">
            <div className="tf-container h-100">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <SlideContent />
                </div>
                <div className="col-lg-6">
                  <div className="thumbs effect-item effect-right delay-4">
                    <Image width={594} height={633} src="/assets/images/demo-medical/medical-hero-1.jpg" alt="medical-hero" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="hero-banner-4">
            <div className="tf-container h-100">
              <div className="row align-items-lg-center h-100">
                <div className="col-lg-6">
                  <SlideContent />
                </div>
                <div className="col-lg-6">
                  <div className="thumbs-2 effect-item effect-right delay-4">
                    <Image width={477} height={491} src="/assets/images/demo-medical/medical-hero-2.png" alt="medical-hero" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="hero-banner-4">
            <div className="tf-container h-100">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <SlideContent />
                </div>
                <div className="col-lg-6">
                  <div className="thumbs-3">
                    <Image
                      className="person-1 effect-item effect-right delay-4"
                      width={689}
                      height={723}
                      src="/assets/images/demo-medical/medical-hero-3.png"
                      alt="medical-hero"
                    />
                    <Image
                      className="person-2 effect-item effect-right delay-5"
                      width={566}
                      height={640}
                      src="/assets/images/demo-medical/medical-hero-4.png"
                      alt="medical-hero"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <div className="sw-button style-2 nav-prev-layout xl-hide" ref={prevRef}>
          <i className="icon-CaretLeft" />
        </div>
        <div className="sw-button style-2 nav-next-layout xl-hide" ref={nextRef}>
          <i className="icon-CaretRight" />
        </div>
        <div className="sw-dots style-1 sw-pagination-layout text-center" ref={dotsRef} />
      </Swiper>
    </div>
  );
}
