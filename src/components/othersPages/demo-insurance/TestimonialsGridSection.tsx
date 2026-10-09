"use client";

import Image from "next/image";
import { useSplitTextReveal } from "@/hooks/useSplitTextReveal";
import { testimonialsFull } from "@/data/demo-insurance/testimonialsFull";

const stars = [0, 1, 2, 3, 4];

// section-testimonial on testimonials.html — static lg-col-3 grid (not a
// Swiper), centered heading above it.
export default function TestimonialsGridSection() {
  const subRef = useSplitTextReveal<HTMLDivElement>("up");
  const titleRef = useSplitTextReveal<HTMLHeadingElement>("right");

  return (
    <div className="tf-container tf-spacing-1">
      <div className="heading-section text-center mb_60">
        <div className="sub text-label text-uppercase mb_12" ref={subRef}>
          OUR Testimonial
        </div>
        <h2 className="title" ref={titleRef}>
          Kind Words From Our Clients
        </h2>
      </div>
      <div className="tf-grid-layout lg-col-3 sm-col-2 gap_20">
        {testimonialsFull.map((testimonial) => (
          <div className="testimonial-item style-11 v3" key={testimonial.name}>
            <p className="text-body-2 text_primary">&ldquo;{testimonial.quote}&rdquo;</p>
            <div className="author">
              <div className="avatar">
                <Image width={68} height={68} src={testimonial.avatar} alt="avatar" />
              </div>
              <div className="info">
                <a href="#" className="h6 name text_secondary-color link mb_4">
                  {testimonial.name}
                </a>
                <div className="meta flex-wrap">
                  <span className="text_secondary text-body-default">{testimonial.role}</span>
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
