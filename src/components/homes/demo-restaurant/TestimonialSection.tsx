"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { useScrollTransform } from "@/hooks/useScrollTransform";
import { useSwiperControls } from "@/hooks/useSwiperControls";
import { testimonial } from "@/data/demo-restaurant/testimonials";

export default function TestimonialSection() {
  const { dotsRef, onSwiper } = useSwiperControls();
  const item1Ref = useScrollTransform<HTMLDivElement>({ direction: "left", distance: "10%" });
  const item2Ref = useScrollTransform<HTMLDivElement>({ direction: "left", distance: "30%" });
  const item3Ref = useScrollTransform<HTMLDivElement>({ direction: "left", distance: "50%" });
  const item4Ref = useScrollTransform<HTMLDivElement>({ direction: "left", distance: "40%" });
  const leafRef = useScrollTransform<HTMLDivElement>({ direction: "up", distance: "10%" });

  return (
    <div className="section-testimonial-4 sw-layout tf-spacing-9">
      <div className="tf-container medium">
        <div className="heading-section-3 mb_40">
          <div className="sub v2 text-label text-uppercase text_white lh-16 justify-content-center wow fadeInUp">
            Testimonials
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <Swiper
              className="swiper wow fadeInUp"
              modules={[Pagination]}
              speed={1000}
              observer
              observeParents
              slidesPerView={1}
              spaceBetween={20}
              pagination={{ el: dotsRef.current, clickable: true }}
              onSwiper={onSwiper}
            >
              {Array.from({ length: 3 }).map((_, index) => (
                <SwiperSlide key={index}>
                  <div className="testimonial-item style-3">
                    <p className="h4 desc text-center fw-4">{testimonial.quote}</p>
                    <div className="author text-center">
                      <div className="avatar mb_24">
                        <Image width={80} height={80} loading="lazy" src={testimonial.avatar} alt="avatar" />
                      </div>
                      <div>
                        <a className="text-button text_white mb_4 link">{testimonial.author}</a>
                        <div className="text-caption-1">{testimonial.role}</div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <div className="sw-dots style-white sw-pagination-layout text-center" ref={dotsRef} />
            </Swiper>
          </div>
        </div>
      </div>
      <div className="item-1 position-absolute scroll-transform" ref={item1Ref}>
        <Image width={124} height={167} src="/assets/images/demo-restaurant/item-restaurant-6.png" alt="item" />
      </div>
      <div className="item-2 position-absolute scroll-transform" ref={item2Ref}>
        <Image width={163} height={148} src="/assets/images/demo-restaurant/item-restaurant-7.png" alt="item" />
      </div>
      <div className="item-3 position-absolute scroll-transform" ref={item3Ref}>
        <Image width={94} height={106} src="/assets/images/demo-restaurant/item-restaurant-8.png" alt="item" />
      </div>
      <div className="item-4 position-absolute scroll-transform" ref={item4Ref}>
        <Image width={217} height={317} src="/assets/images/demo-restaurant/item-restaurant-9.png" alt="item" />
      </div>
      <div className="leaf position-absolute sm-hide scroll-transform" ref={leafRef}>
        <Image width={321} height={524} src="/assets/images/demo-restaurant/leaf-4.png" alt="leaf" />
      </div>
    </div>
  );
}
