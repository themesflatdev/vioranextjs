"use client";

import Image from "next/image";
import Link from "next/link";
import { useSplitTextReveal } from "@/hooks/useSplitTextReveal";
import { testimonials } from "@/data/demo-gardenlandscaping/home";

function Ratings() {
  return (
    <ul className="ratings d-flex">
      {Array.from({ length: 5 }).map((_, i) => (
        <li key={i}>
          <i className="icon-favorite_major" />
        </li>
      ))}
    </ul>
  );
}

function Author({ avatar, name, role }: { avatar: string; name: string; role: string }) {
  return (
    <div className="author">
      <div className="avatar">
        <Image width={68} height={68} src={avatar} alt="avatar" />
      </div>
      <div className="info">
        <Link href="#" className="h6 name text_primary link mb_4">
          {name}
        </Link>
        <div className="meta">
          <span className="text_secondary text-body-default">{role}</span>
          <Ratings />
        </div>
      </div>
    </div>
  );
}

export default function TestimonialSection() {
  const titleRef = useSplitTextReveal<HTMLHeadingElement>("right");

  return (
    <div className="section-testimonial-12 tf-spacing-1">
      <div className="tf-container">
        <div className="heading-section-5 mb_48">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h3 className="mb_16 split-text effect-right text_primary" ref={titleRef}>
                What Our Clients Say
              </h3>
              <p className="text-body-2 text_secondary wow fadeInUp" data-wow-delay="0.2s">
                Real experiences from clients who trusted our landscaping.
              </p>
            </div>
            <div className="col-lg-6">
              <div className="wrap-review d-flex gap_12 justify-content-lg-end wow fadeInRight" data-wow-delay="0.3s">
                <div className="review-item">
                  <Image width={103} height={59} src="/assets/images/demo-gardenlandscaping/review-1.png" alt="review" />
                </div>
                <div className="review-item">
                  <Image width={126} height={59} src="/assets/images/demo-gardenlandscaping/review-2.png" alt="review" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tf-grid-layout xl-col-3 md-col-2 gap_20">
          {testimonials.map((item) =>
            item.hasImg ? (
              <div className="testimonial-item style-11 has-img" key={item.name}>
                <div className="img-style">
                  <Image width={456} height={360} loading="lazy" src={item.image!} alt="testimonial" />
                </div>
                <Author avatar={item.avatar} name={item.name} role={item.role} />
              </div>
            ) : (
              <div className="testimonial-item style-11" key={item.name}>
                <p className="text-body-2 text_primary text">{item.quote}</p>
                <Author avatar={item.avatar} name={item.name} role={item.role} />
              </div>
            ),
          )}
        </div>
      </div>
    </div>
  );
}
