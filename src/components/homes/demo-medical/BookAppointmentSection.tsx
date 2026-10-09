"use client";

import { useState } from "react";
import Image from "next/image";
import { useAnimateImgItem } from "@/hooks/useAnimateImgItem";
import { useScaleUpImage } from "@/hooks/useScaleUpImage";
import { useSplitTextReveal } from "@/hooks/useSplitTextReveal";
import NiceSelect from "@/components/common/NiceSelect";
import { serviceOptions } from "@/data/demo-medical/serviceOptions";

type BookAppointmentSectionProps = {
  // "home" (default) = trang chủ: ảnh dùng scale-up-img (scrub), nút submit
  // btn-switch-text/btn-double-text. "inner" = trang con: ảnh KHÔNG scale-up
  // (chỉ tf-animateCLP-left, bọc thêm .hover-image-2), nút submit
  // btn-hover-animate (xác nhận từng dòng với about.html, không suy từ trang chủ).
  variant?: "home" | "inner";
  // bg-light-color trên section + bg-white trên form — có ở doctor-detail,
  // testimonials, pricing, workinghours, faqs; KHÔNG có ở about, our-doctor
  // (xác nhận từng trang, không giả định).
  bgLight?: boolean;
};

export default function BookAppointmentSection({ variant = "home", bgLight = false }: BookAppointmentSectionProps) {
  const titleRef = useSplitTextReveal<HTMLHeadingElement>("left");
  const animateRef = useAnimateImgItem<HTMLDivElement>();
  const scaleRef = useScaleUpImage<HTMLDivElement>();
  const [service, setService] = useState("");

  const image = (
    <Image
      className={variant === "home" ? "scale-up" : undefined}
      loading="lazy"
      width={800}
      height={588}
      src="/assets/images/demo-medical/book-consultation-1.jpg"
      alt="book-consultation"
    />
  );

  return (
    <div className={`section-book-appointment tf-spacing-1${bgLight ? " bg-light-color" : ""}`}>
      <div className="tf-container medium">
        <div className="heading-section-5 text-center mb_40">
          <div className="tag text-label text-uppercase wow fadeInUp mb_16">BOOK YOUR CONSULTATION NOW</div>
          <h2 className="title" ref={titleRef}>
            Schedule Appointment Today
          </h2>
        </div>
        <div className="wrap">
          {variant === "home" ? (
            <div>
              <div
                className="thumbs scale-up-img tf-animateCLP-left"
                ref={(el) => {
                  animateRef.current = el;
                  scaleRef.current = el;
                }}
              >
                {image}
              </div>
            </div>
          ) : (
            <div className="hover-image-2">
              <div className="thumbs img-style tf-animateCLP-left" ref={animateRef}>
                {image}
              </div>
            </div>
          )}
          <form
            className={`form-book-appointment d-grid gap_20 wow fadeInRight${bgLight ? " bg-white" : ""}`}
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="text-center">
              <h4 className="mb_4 font-main">Book Appointment</h4>
              <p className="text-body-default text_secondary">
                Schedule a consultation to start your journey to better health.
              </p>
            </div>
            <fieldset>
              <input id="fullName" type="text" placeholder="Your Name" name="text" aria-required="true" required />
            </fieldset>
            <fieldset>
              <input id="phone" type="number" placeholder="Phone Number" name="text" aria-required="true" required />
            </fieldset>
            <NiceSelect options={serviceOptions} value={service} onChange={setService} />
            <fieldset>
              <textarea id="comment" rows={4} placeholder="Your message" aria-required="true" required />
            </fieldset>
            {variant === "home" ? (
              <button type="submit" className="tf-btn btn-switch-text btn-bg-1 btn-px-28 w-full">
                <span>
                  <span className="btn-double-text" data-text="Book Appointment">
                    Book Appointment
                  </span>
                </span>
              </button>
            ) : (
              <button type="submit" className="tf-btn btn-hover-animate btn-bg-primary-2 btn-bg-1 btn-px-28 w-full">
                <span>Book Appointment</span>
                <span className="bg-effect" />
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
