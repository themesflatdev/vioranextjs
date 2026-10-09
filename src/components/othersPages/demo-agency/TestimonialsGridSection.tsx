"use client";

import Image from "next/image";
import { useSplitTextReveal } from "@/hooks/useSplitTextReveal";
import { testimonialsFull } from "@/data/demo-agency/testimonialsFull";

const stars = [0, 1, 2, 3, 4];

// section-testimonial (grid variant) — static lg-col-3 grid, not a Swiper,
// per testimonials.html.
export default function TestimonialsGridSection() {
  const titleRef = useSplitTextReveal<HTMLHeadingElement>("blur-fade");
  const descRef = useSplitTextReveal<HTMLParagraphElement>("lines-transform");

  return (
    <div className="tf-container tf-spacing-1">
      <div className="heading-section-2 mb_47">
        <div className="row">
          <div className="col-lg-5">
            <h2 className="title text_white" ref={titleRef}>
              Client Testimonials
            </h2>
          </div>
          <div className="col-lg-7">
            <div className="right">
              <p className="text_muted text-body-2 text-lg-end" ref={descRef}>
                Our testimonials reflect real client experiences. From service quality to lasting
                results, <br className="xxl-hide" /> their voices showcase the value we give
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="tf-grid-layout lg-col-3 sm-col-2 gap_20">
        {testimonialsFull.map((testimonial) => (
          <div className="testimonial-item style-11 v3" key={testimonial.name}>
            <p className="text-body-2 text_white">&ldquo;{testimonial.quote}&rdquo;</p>
            <div className="author">
              <div className="avatar">
                <Image width={68} height={68} src={testimonial.avatar} alt="avatar" />
              </div>
              <div className="info">
                <a href="#" className="h6 name text_primary-color link mb_4">
                  {testimonial.name}
                </a>
                <div className="meta flex-wrap">
                  <span className="text_muted text-body-default">{testimonial.role}</span>
                  <ul className="ratings d-flex">
                    {stars.map((star) => (
                      <li key={star}>
                        <i className="icon-favorite_major" />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
