"use client";

import Image from "next/image";
import { useSplitTextReveal } from "@/hooks/useSplitTextReveal";

// 6 ô nhưng thực chất chỉ 3 người, LẶP LẠI 2 lần (giữ nguyên, lỗi demo gốc
// — thứ tự Jamie, Alex, Rebecca, Jamie, Alex, Rebecca đúng như HTML gốc).
const testimonials = [
  {
    quote:
      "Working with Viora has completely shifted how I take care of myself. I have more energy, better focus, and feel truly in control of my health.",
    name: "Jamie L",
    role: "Content Marketer",
    avatar: "/assets/images/avatar/avatar-16.jpg",
  },
  {
    quote:
      "Viora didn't just give me a plan — they gave me confidence. I feel stronger, calmer, and more balanced than ever before.",
    name: "Alex Johnson",
    role: "Content Marketer",
    avatar: "/assets/images/avatar/avatar-12.jpg",
  },
  {
    quote:
      "I've tried so many programs, but Viora is the first that actually stuck. Everything was personalized, realistic, and supportive.",
    name: "Rebecca M",
    role: "Marketing Consultant",
    avatar: "/assets/images/avatar/avatar-10.jpg",
  },
];

const grid = [...testimonials, ...testimonials];

export default function TestimonialGridSection() {
  const titleRef = useSplitTextReveal<HTMLHeadingElement>("left");

  return (
    <div className="section-testimonial tf-spacing-1">
      <div className="tf-container medium">
        <div className="heading-section-5 mb_60 text-center">
          <h2 className="title text_primary" ref={titleRef}>
            Our Client Happy Say About Us
          </h2>
        </div>
        <div className="tf-grid-layout lg-col-3 md-col-2 gap_30">
          {grid.map((item, index) => (
            <div className="testimonial-item style-7 v2" key={`${item.name}-${index}`}>
              <p className="text-body-2 text_primary">&quot;{item.quote}&quot;</p>
              <div className="author d-flex gap_12 align-items-center">
                <div className="avatar">
                  <Image width={48} height={48} src={item.avatar} alt="avatar" />
                </div>
                <div>
                  <a href="#" className="text-button d-block link text_primary-color font-main">
                    {item.name}
                  </a>
                  <span className="text-caption-1 text_on-suface-1">{item.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
