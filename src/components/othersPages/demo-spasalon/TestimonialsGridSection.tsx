"use client";

import Image from "next/image";
import { useSplitTextReveal } from "@/hooks/useSplitTextReveal";
import { spaTestimonials } from "@/data/demo-spasalon/testimonials";

// testimonials.html's own "v2" variant of section-testimonial-9: centered
// heading (no "Read All Reviews" link, no flex/justify-between), all 6
// items instead of the home page's 2. Sub/title copy casing kept verbatim
// ("Our testimonials" / "Kind Words from Our Clients" — lowercase, differs
// from the home page's "Client Reviews" / "Kind Words From Our Clients").
export default function TestimonialsGridSection() {
  const subRef = useSplitTextReveal<HTMLDivElement>("up");
  const titleRef = useSplitTextReveal<HTMLHeadingElement>("blur-fade");

  return (
    <div className="section-testimonial-9 v2 tf-spacing-10">
      <div className="tf-container medium">
        <div className="heading-section mb_40 text-center">
          <div className="sub text-label text-uppercase split-text effect-up text_primary-color mb_12" ref={subRef}>
            Our testimonials
          </div>
          <h2 className="title split-text effect-blur-fade" ref={titleRef}>
            Kind Words from Our Clients
          </h2>
        </div>
        <div className="tf-grid-layout md-col-2 gap_20 wow fadeInLeft">
          {spaTestimonials.map((testimonial) => (
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
