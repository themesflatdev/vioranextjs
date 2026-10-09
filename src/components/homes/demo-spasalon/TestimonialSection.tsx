"use client";

import Image from "next/image";
import { useSplitTextReveal } from "@/hooks/useSplitTextReveal";
import { spaTestimonials } from "@/data/demo-spasalon/testimonials";

export default function TestimonialSection() {
  const subRef = useSplitTextReveal<HTMLDivElement>("up");
  const titleRef = useSplitTextReveal<HTMLHeadingElement>("blur-fade");

  return (
    <div className="section-testimonial-9 tf-spacing-10">
      <div className="tf-container medium">
        <div className="heading-section d-flex align-items-end justify-content-between flex-wrap gap_16 mb_44">
          <div>
            {/* "Our Gallery" in the source HTML (copy-paste from the Gallery
                section) corrected to "Client Reviews" per CLAUDE.md rule 4
                content-fix policy. */}
            <div className="sub text-label text-uppercase split-text effect-up text_primary-color mb_12" ref={subRef}>
              Client Reviews
            </div>
            <h2 className="title split-text effect-blur-fade" ref={titleRef}>
              Kind Words From Our Clients
            </h2>
          </div>
          <div>
            <a href="#" className="hover-underline-link link text-button text_primary">
              Read All Reviews
            </a>
          </div>
        </div>
        <div className="tf-grid-layout md-col-2 gap_20 wow fadeInLeft">
          {spaTestimonials.slice(0, 2).map((testimonial) => (
            <div className="testimonial-item style-8 hover-image-2" key={testimonial.key}>
              <div className="img-style">
                <Image width={280} height={373} loading="lazy" src={testimonial.image} alt="testimonial" />
              </div>
              <div className="content">
                <div>
                  <ul className="ratings d-flex mb_10 mb_12">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <li key={index}>
                        <i className="icon-Star" />
                      </li>
                    ))}
                  </ul>
                  <p className="h6 fw-6 text_primary font-main text-capitalize">&quot;{testimonial.quote}&quot;</p>
                </div>
                <a href="#" className="h6 fw-6 text_primary link font-3">
                  {testimonial.name}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="item position-absolute">
        <Image src="/assets/images/demo-spasalon/spa-item-7.png" alt="item" width={113} height={362} />
      </div>
    </div>
  );
}
