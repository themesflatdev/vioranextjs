"use client";

import Image from "next/image";
import { useSplitTextReveal } from "@/hooks/useSplitTextReveal";
import { useScrollTransform } from "@/hooks/useScrollTransform";

export default function AboutSection() {
  const subRef = useSplitTextReveal<HTMLDivElement>("up");
  const titleRef = useSplitTextReveal<HTMLHeadingElement>("blur-fade");
  const itemRef = useScrollTransform<HTMLDivElement>({ direction: "right", distance: "20%" });

  return (
    <div className="section-about-6 tf-spacing-1">
      <div className="tf-container medium">
        <div className="row align-items-center">
          <div className="col-lg-5">
            <div className="thumbs">
              <Image
                className="tf-animateCLP-left"
                width={520}
                height={670}
                loading="lazy"
                src="/assets/images/demo-spasalon/spa-about-1.jpg"
                alt="spa-about"
              />
              <span className="shape-linear-circle wow fadeIn" data-wow-delay="0.6s" />
            </div>
          </div>
          <div className="col-lg-7">
            <div className="content">
              <div className="heading-section d-grid gap_12 mb_40">
                <div className="sub text-label text-uppercase split-text effect-up text_primary-color lh-16" ref={subRef}>
                  About Us
                </div>
                <h2 className="title split-text effect-blur-fade" ref={titleRef}>
                  Your Sanctuary Of Wellness And Beauty
                </h2>
                <p className="desc text-body-2 mt_4 wow fadeInUp" data-wow-delay="0.4s">
                  At our spa, we believe true beauty begins with inner peace. Our experienced therapists, tranquil
                  atmosphere, and carefully crafted treatments are designed to restore balance to your body and mind.
                  Come unwind, recharge, and let us take care of you — because you deserve it.
                </p>
              </div>
              <a href="#" className="tf-btn btn-switch-text wow fadeInUp" data-wow-delay="0.6s">
                <span>
                  <span className="btn-double-text" data-text="About Us">
                    About Us
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="item position-absolute md-hide scroll-transform" data-wow-delay="0.4s" ref={itemRef}>
        <Image width={388} height={354} loading="lazy" src="/assets/images/demo-spasalon/spa-item-1.png" alt="spa-item" />
      </div>
    </div>
  );
}
