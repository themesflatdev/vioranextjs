"use client";

import Image from "next/image";
import { useInfiniteSlide } from "@/hooks/useInfiniteSlide";
import { useScrollTransform } from "@/hooks/useScrollTransform";
import { useSplitTextReveal } from "@/hooks/useSplitTextReveal";
import { testimonials } from "@/data/demo-aitech/testimonials";

export default function TestimonialSection() {
  const subRef = useSplitTextReveal<HTMLDivElement>("up");
  const titleRef = useSplitTextReveal<HTMLHeadingElement>("blur-fade");
  const descRef = useSplitTextReveal<HTMLParagraphElement>("lines-transform");
  const marqueeRef = useInfiniteSlide<HTMLDivElement>({ speed: 50, direction: "up", clone: 2 });
  const itemRef = useScrollTransform<HTMLDivElement>({ direction: "left" });

  return (
    <div className="section-testimonial-5">
      <div className="tf-container">
        <div className="wrap">
          <div className="row">
            <div className="col-lg-6">
              <div className="heading-section d-grid gap_12">
                <div className="sub text-label-2 lh-20 text_primary-color text-uppercase" ref={subRef}>
                  Testimonial
                </div>
                <h3 className="title" ref={titleRef}>
                  What Our Clients Say
                </h3>
                <p className="text-body-2" ref={descRef}>
                  Trusted by innovators, startups, and enterprises transforming with AI.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="wrap-testimonial">
                <div className="infiniteslide" data-clone="2" data-style="up" ref={marqueeRef}>
                  {testimonials.map((item, index) => (
                    <div className="testimonial-item style-4" key={index}>
                      <p className="h5 fw-5 font-main mb_12">{item.quote}</p>
                      <div className="author d-flex gap_12">
                        <div className="avatar">
                          <Image width={48} height={48} src={item.avatar} alt="avatar" />
                        </div>
                        <div>
                          <a href="#" className="text-button d-block link">
                            {item.author}
                          </a>
                          <span className="text-caption-1">{item.role}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="item scroll-transform lg-hide" ref={itemRef}>
            <Image width={735} height={753} src="/assets/images/demo-aitech/item-1.png" alt="item-AI" />
          </div>
        </div>
      </div>
    </div>
  );
}
