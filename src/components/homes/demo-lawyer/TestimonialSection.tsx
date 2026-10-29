"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation } from "swiper/modules";
import { useSplitTextReveal } from "@/hooks/useSplitTextReveal";
import { useSwiperControls } from "@/hooks/useSwiperControls";
import { testimonials } from "@/data/demo-lawyer/testimonials";

// data-autoplay="" in the original HTML is falsy to carousel.js's
// `data("autoplay") == true || == "true"` check, and data-loop is absent —
// verified directly against the live HTML: the swiper never advances on its
// own and stays non-looping (confirmed via the live swiper instance params:
// autoplay.enabled=false, loop=false).
export default function TestimonialSection() {
  const subRef = useSplitTextReveal<HTMLDivElement>("up");
  const titleRef = useSplitTextReveal<HTMLHeadingElement>("right");
  const { prevRef, nextRef, prevEl, nextEl, onSwiper } = useSwiperControls();

  return (
    <div className="section-testimonial-17 sw-layout">
      <div className="tf-container">
        <div className="row">
          <div className="col-lg-6">
            <div className="box-left">
              <div className="heading-section mb_44">
                <div
                  ref={subRef}
                  className="sub text-label text-uppercase text_muted split-text effect-up mb_16 lh-16 wow fadeInUp"
                >
                  Real Experiences
                </div>
                <h2 ref={titleRef} className="title mb_16 split-text effect-right">
                  Uncover Stories From Our <span className="text_primary-color">Trusted Clients</span>
                </h2>
                <p className="desc text-body-2 wow fadeInUp" data-wow-delay=".2s">
                  Discover meaningful testimonials from clients who trusted us to handle their sensitive and
                  important legal challenges.
                </p>
              </div>
              <div className="d-flex align-items-center gap_28 wrap-review mb_44 wow fadeInUp" data-wow-delay=".2s">
                <Image src="/assets/images/demo-lawyer/gg-review.svg" alt="review" width={132} height={32} />
                <Image src="/assets/images/demo-lawyer/trustpilot.svg" alt="review" width={132} height={32} />
              </div>
              <Link
                href="#"
                className="tf-btn btn-hover-animate-2 btn-bg-secondary rounded-0 btn-px-28 wow fadeInUp"
                data-wow-delay=".4s"
              >
                <span>Read All Review</span>
                <span className="bg-effect" />
              </Link>
            </div>
          </div>
          <div className="col-lg-6">
            <Swiper
              className="swiper wow fadeInRight"
              modules={[EffectFade, Navigation]}
              effect="fade"
              fadeEffect={{ crossFade: true }}
              loop={false}
              autoplay={false}
              navigation={{ prevEl, nextEl }}
              onSwiper={onSwiper}
            >
              {testimonials.map((item) => (
                <SwiperSlide key={item.key}>
                  <div className="testimonial-item style-15 v2">
                    <div>
                      <div className="icon mb_20">
                        <i className="icon-Quote-2" />
                      </div>
                      <p className="h5 font-main fw-4">“{item.quote}”</p>
                    </div>
                    <div className="author">
                      <h6 className="mb_4">
                        <Link href="#" className="link">
                          {item.author}
                        </Link>
                      </h6>
                      <span className="text-body-default">{item.role}</span>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <div className="wrap-sw-button d-flex gap_12">
                <div className="sw-button style-7 nav-prev-layout" ref={prevRef}>
                  <i className="icon-ArrowLeft" />
                </div>
                <div className="sw-button style-7 nav-next-layout" ref={nextRef}>
                  <i className="icon-ArrowRight" />
                </div>
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
