"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, FreeMode, Thumbs } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { useScaleUpImage } from "@/hooks/useScaleUpImage";
import { testimonials } from "@/data/demo-coworkingspace/testimonials";

function TestimonialSlideThumb({ scaleUp, image }: { scaleUp?: boolean; image: string }) {
  const scaleUpRef = useScaleUpImage<HTMLDivElement>();

  if (scaleUp) {
    return (
      <div className="thumb scale-up-img" ref={scaleUpRef}>
        <Image
          className="scale-up"
          src={image}
          alt="testimonial"
          width={1920}
          height={720}
          priority
        />
      </div>
    );
  }

  return (
    <div className="thumb">
      <Image src={image} alt="testimonial" width={1920} height={720} />
    </div>
  );
}

export default function TestimonialSection() {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="section-testimonial-11">
      <Swiper
        className="swiper sw-single"
        modules={[EffectFade, Autoplay, Thumbs]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={1500}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        thumbs={{ swiper: thumbsSwiper }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      >
        {testimonials.map((item) => (
          <SwiperSlide key={item.key}>
            <div className="testimonial-item style-10">
              <TestimonialSlideThumb scaleUp={item.scaleUp} image={item.thumbImage} />
              <div className="tf-container large">
                <div className="box-content">
                  <p className="text-body-2 text_primary text">{item.quote}</p>
                  <div className="author">
                    <div className="avatar">
                      <Image
                        width={68}
                        height={68}
                        src="/assets/images/avatar/avatar-24.jpg"
                        alt="avatar"
                      />
                    </div>
                    <div className="info">
                      <Link href="#" className="h5 text_primary link mb_4">
                        {item.name}
                      </Link>
                      <div className="meta">
                        <span className="text_secondary">{item.role}</span>
                        <ul className="ratings d-flex">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <li key={i}>
                              <i className="icon-favorite_major" />
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="wrap-progress-bars">
          <div className="tf-container large">
            <div className="progress-bars">
              {testimonials.map((item, index) => (
                <div
                  key={item.key}
                  className={`progress-bar${
                    index === activeIndex ? " active" : index < activeIndex ? " viewed" : ""
                  }`}
                >
                  <div className="progress-fill" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Swiper>

      <div className="wrap-nav">
        <Swiper
          className="swiper sw-thumbs-pagi"
          modules={[FreeMode, Thumbs]}
          onSwiper={setThumbsSwiper}
          spaceBetween={12}
          slidesPerView={4}
          freeMode
          watchSlidesProgress
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.key}>
              <div className="slide-inner">
                <div className="thumbs-pagi">
                  <Image width={64} height={64} src={item.thumbPagi} alt="" />
                </div>
                <div className="content">
                  <span className="text-label d-block text-nowrap line-clamp-1">{item.name}</span>
                  <span className="text-caption-2 line-clamp-1">{item.role}</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
