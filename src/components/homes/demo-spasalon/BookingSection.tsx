"use client";

import Image from "next/image";
import { useSplitTextReveal } from "@/hooks/useSplitTextReveal";
import { useScrollTransform } from "@/hooks/useScrollTransform";

// `py0` matches the variant used when this section is embedded on inner
// pages (about/staffs/member-detail/packages/calender/testimonials/faqs):
// `.section-booking.py-0 > .tf-container.medium.pt-0.tf-spacing-1` instead
// of the home page's `.section-booking.tf-spacing-1 > .tf-container.medium`.
export default function BookingSection({ py0 = false }: { py0?: boolean }) {
  const subRef = useSplitTextReveal<HTMLDivElement>("up");
  const titleRef = useSplitTextReveal<HTMLHeadingElement>("blur-fade");
  const itemRef = useScrollTransform<HTMLDivElement>({ direction: "left" });

  return (
    <div className={`section-booking${py0 ? " py-0" : " tf-spacing-1"}`}>
      <div className={`tf-container medium${py0 ? " pt-0 tf-spacing-1" : ""}`}>
        <div className="row align-items-center">
          <div className="col-lg-7 text-center">
            <div className="content">
              <div className="heading-section d-grid text-center gap_12 mb_16">
                <div className="sub text-label text-uppercase split-text effect-up text_primary-color lh-16" ref={subRef}>
                  Spa Center
                </div>
                <h2 className="title split-text effect-blur-fade" ref={titleRef}>
                  Book Your Visit
                </h2>
              </div>
              <div className="info mb_40">
                <h5 className="text_primary font-main fw-6 mb_16 wow fadeInUp" data-wow-delay="0.2s">
                  Want To Schedule A Treatment Or Ask Us Something?
                </h5>
                <p className="text-body-2 wow fadeInUp" data-wow-delay="0.4s">
                  Call us at <span className="h5 text_primary font-main fw-6">1-333-345-6868</span> or simply
                  complete our quick online form we&rsquo;ll get back to you soon.
                </p>
              </div>
              <a href="/demo-spasalon/booking" className="tf-btn btn-switch-text mx-auto wow fadeInUp" data-wow-delay="0.6s">
                <span>
                  <span className="btn-double-text" data-text="Schedule Your Appointment">
                    Schedule Your Appointment
                  </span>
                </span>
              </a>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="thumbs">
              <Image width={520} height={670} loading="lazy" src="/assets/images/demo-spasalon/spa-care-time-1.jpg" alt="care-time" />
              <span className="shape-linear-circle position-absolute wow fadeIn" data-wow-delay="0.6s" />
            </div>
          </div>
        </div>
      </div>
      <div className="item position-absolute lg-hide scroll-transform" ref={itemRef}>
        <Image src="/assets/images/demo-spasalon/spa-item-8.png" alt="item" width={334} height={304} />
      </div>
    </div>
  );
}
