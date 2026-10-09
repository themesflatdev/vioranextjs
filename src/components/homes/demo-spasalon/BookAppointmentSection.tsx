"use client";

import Image from "next/image";
import { useSplitTextReveal } from "@/hooks/useSplitTextReveal";

export default function BookAppointmentSection() {
  const subRef = useSplitTextReveal<HTMLDivElement>("up");
  const titleRef = useSplitTextReveal<HTMLHeadingElement>("blur-fade");
  const descRef = useSplitTextReveal<HTMLParagraphElement>("lines-transform");

  return (
    <div className="section-book-appointment-2 tf-spacing-13">
      <div className="tf-container medium">
        <div className="row align-items-center">
          <div className="col-lg-5">
            <div className="content">
              <div className="heading-section d-grid gap_12 mb_40">
                <div className="sub text-label lh-16 text-uppercase text_primary-color split-text effect-up" ref={subRef}>
                  Natural Beauty
                </div>
                <h2 className="title text-capitalize split-text effect-blur-fade" ref={titleRef}>
                  You Deserve to Feel Beautiful. Wellness Begins Here.
                </h2>
                <p className="text-body-2 mt_4 split-text split-lines-transform" ref={descRef}>
                  We offer personalized, soothing spa treatments designed to restore balance, glow, and peace of
                  mind.
                </p>
              </div>
              <a href="#" className="tf-btn btn-switch-text wow fadeInUp" data-wow-delay="0.4s">
                <span>
                  <span className="btn-double-text" data-text="Book An Appointment">
                    Book An Appointment
                  </span>
                </span>
              </a>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="thumbs justify-content-lg-end">
              <Image
                width={440}
                height={567}
                loading="lazy"
                className="img-1 tf-animateCLP-left"
                src="/assets/images/demo-spasalon/spa-book-appointment-1.jpg"
                alt="spa-book"
              />
              <Image
                loading="lazy"
                width={250}
                height={322}
                className="img-2 tf-animateCLP-right"
                src="/assets/images/demo-spasalon/spa-book-appointment-2.jpg"
                alt="spa-book"
              />
              <span className="shape-linear-circle position-absolute wow fadeIn" data-wow-delay="0.6s" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
