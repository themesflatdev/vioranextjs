"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { useSwiperControls } from "@/hooks/useSwiperControls";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  avatar: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    quote: "Their tailored solar design helped me capture maximum sunlight and achieve amazing savings.",
    name: "Angel Donin",
    role: "Head of Idea",
    avatar: "/assets/images/avatar/avatar-10.jpg",
  },
  {
    quote: "The customized system optimized energy efficiency, allowing me to reduce costs and boost savings.",
    name: "Leo Botosh",
    role: "SEO Expert",
    avatar: "/assets/images/avatar/avatar-31.jpg",
  },
  {
    quote:
      "Since installing solar panels, my electricity bills have been cut in half. Beyond savings, I feel proud contributing to clean energy for my family.",
    name: "John Nguyen",
    role: "Homeowner",
    avatar: "/assets/images/avatar/avatar-32.jpg",
  },
  {
    quote:
      "Switching to solar power was the best investment for my shop. Reliable energy, lower costs, and customers love our commitment to sustainability.",
    name: "Emily Johnson",
    role: "Entrepreneur",
    avatar: "/assets/images/avatar/avatar-33.jpg",
  },
];

export default function TestimonialSection() {
  const { dotsRef, onSwiper } = useSwiperControls();

  return (
    <div className="section-testimonial-15 sw-layout tf-spacing-1">
      <div className="tf-container slider-layout-right">
        <div className="wrap">
          <div className="left">
            <div className="heading-section mb_80">
              <span className="sub text-label text_primary letter-spacing-1 text-uppercase mb_16 d-block wow fadeInUp">
                Testimonials
              </span>
              <h2 className="text-capitalize">Trusted by 10,000+ happy users worldwide</h2>
            </div>
            <div className="trust d-flex align-items-center gap_12 wow fadeInUp" data-wow-delay="0.2s">
              <div className="group">
                <Image
                  className="wow fadeInLeft"
                  data-wow-delay="0.1s"
                  width={48}
                  height={48}
                  src="/assets/images/avatar/group-avatar-5-1.jpg"
                  alt="avatar"
                />
                <Image
                  className="wow fadeInLeft"
                  data-wow-delay="0.2s"
                  width={48}
                  height={48}
                  src="/assets/images/avatar/group-avatar-5-2.jpg"
                  alt="avatar"
                />
                <Image
                  className="wow fadeInLeft"
                  data-wow-delay="0.3s"
                  width={48}
                  height={48}
                  src="/assets/images/avatar/group-avatar-5-3.jpg"
                  alt="avatar"
                />
              </div>
              <div>
                <span className="d-block text-button text_primary">Or Call Us:</span>
                <span className="text-button text_primary">1-555-678-8888</span>
              </div>
            </div>
          </div>
          <div className="right">
            <Swiper
              modules={[Pagination]}
              slidesPerView={1}
              spaceBetween={15}
              breakpoints={{
                575: { slidesPerView: 2, spaceBetween: 20 },
                768: { slidesPerView: 2, spaceBetween: 20 },
                992: { slidesPerView: 2.4, spaceBetween: 20 },
                1200: { slidesPerView: 3.16, spaceBetween: 20 },
              }}
              pagination={{ el: dotsRef.current, clickable: true }}
              onSwiper={onSwiper}
            >
              {TESTIMONIALS.map((item) => (
                <SwiperSlide key={item.name}>
                  <div className="testimonial-item style-14">
                    <p className="text-body-2 text_primary">&ldquo;{item.quote}&rdquo;</p>
                    <div className="author d-flex align-items-center gap_12">
                      <div className="avatar">
                        <Image width={48} height={48} src={item.avatar} alt="avatar" />
                      </div>
                      <div>
                        <a href="#" className="text-button text_primary link">
                          {item.name}
                        </a>
                        <p className="text-caption-1">{item.role}</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <div
                ref={dotsRef}
                className="sw-dots style-1 sw-pagination-layout text-center d-lg-none justify-content-center d-flex mt_24"
              ></div>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
