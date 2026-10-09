"use client";

import Image from "next/image";
import { useInfiniteSlide } from "@/hooks/useInfiniteSlide";
import { useSplitTextReveal } from "@/hooks/useSplitTextReveal";
import { testimonials } from "@/data/demo-aicontentwriter/testimonials";

function TestimonialColumn({ className, direction }: { className?: string; direction: "up" | "down" }) {
  const ref = useInfiniteSlide<HTMLDivElement>({ speed: 50, direction, clone: 2 });

  return (
    <div className={`infiniteslide${className ? ` ${className}` : ""}`} data-clone="2" data-style={direction} ref={ref}>
      {testimonials.map((item, index) => (
        <div className="testimonial-item style-5" key={index}>
          <p className="text-body-2 mb_16">{item.quote}</p>
          <div className="author d-flex gap_12">
            <div className="avatar">
              <Image width={48} height={48} src={item.avatar} alt="avatar" />
            </div>
            <div>
              <a href="#" className="text-button d-block link text_primary">
                {item.author}
              </a>
              <span className="text-caption-1 text_o">{item.role}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function TestimonialSection() {
  const subRef = useSplitTextReveal<HTMLDivElement>("up");
  const titleRef = useSplitTextReveal<HTMLHeadingElement>("right");
  const descRef = useSplitTextReveal<HTMLParagraphElement>("lines-transform");

  return (
    <div className="section-testimonial-6">
      <div className="tf-container">
        <div className="heading-section style-default text-center mb_48">
          <div className="sub text-label text_primary-color text-uppercase" ref={subRef}>
            Testimonials
          </div>
          <h2 className="title" ref={titleRef}>
            What People Are Saying
          </h2>
          <p className="text-body-2" ref={descRef}>
            Join thousands of users creating faster, better content with AI.
          </p>
        </div>
        <div className="wrap-testimonials tf-grid-layout lg-col-3 md-col-2 gap_20">
          <TestimonialColumn direction="up" />
          <TestimonialColumn className="md-hide" direction="down" />
          <TestimonialColumn className="lg-hide" direction="up" />
        </div>
      </div>
    </div>
  );
}
