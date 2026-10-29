"use client";

import Image from "next/image";
import Link from "next/link";
import { useSplitTextReveal } from "@/hooks/useSplitTextReveal";
import { useScrollTransform } from "@/hooks/useScrollTransform";

const boxIcons = [
  { icon: "icon-MoonStars", title: "Tranquil Atmosphere" },
  { icon: "icon-Sparkle", title: "Expert Therapists" },
  { icon: "icon-Leaf fw-6", title: "Premium Natural Products" },
  { icon: "icon-Champagne", title: "Private Treatment Rooms" },
];

export default function SpaExperienceSection() {
  const subRef = useSplitTextReveal<HTMLDivElement>("up");
  const titleRef = useSplitTextReveal<HTMLHeadingElement>("blur-fade");
  const descRef = useSplitTextReveal<HTMLParagraphElement>("lines-transform");
  const itemRef = useScrollTransform<HTMLDivElement>({ direction: "right" });

  return (
    <div className="section-spa-experience tf-spacing-1">
      <div className="tf-container medium">
        <div className="row align-items-center">
          <div className="col-lg-5">
            <div className="thumbs">
              <Image
                className="tf-animateCLP-left"
                width={520}
                height={670}
                loading="lazy"
                src="/assets/images/demo-spasalon/spa-care-time-1.jpg"
                alt="care-time"
              />
              <span className="shape-linear-circle position-absolute wow fadeIn" data-wow-delay="0.6s" />
            </div>
          </div>
          <div className="col-lg-7">
            <div className="content">
              <div className="heading-section d-grid gap_12 mb_40">
                <div className="sub text-label text-uppercase split-text effect-up text_primary-color" ref={subRef}>
                  Self Care Time
                </div>
                <h2 className="title split-text effect-blur-fade" ref={titleRef}>
                  The Spa Experience
                </h2>
                <p className="text-body-2 desc mt_4 split-text split-lines-transform" ref={descRef}>
                  Thoughtfully designed for your comfort, every visit brings care, calm, and connection. What
                  You&rsquo;ll Experience at Our Spa
                </p>
              </div>
              <div className="tf-grid-layout tf-col-2 mb_40 wow fadeInUp" data-wow-delay="0.4s">
                {boxIcons.map((box) => (
                  <div className="box-icon" key={box.title}>
                    <div className="icon">
                      <i className={box.icon} />
                    </div>
                    <h5>{box.title}</h5>
                  </div>
                ))}
              </div>
              <Link href="/demo-spasalon/about" className="tf-btn btn-switch-text wow fadeInUp" data-wow-delay="0.6s">
                <span>
                  <span className="btn-double-text" data-text="About Us">
                    About Us
                  </span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="item position-absolute lg-hide scroll-transform" data-wow-delay="0.4s" ref={itemRef}>
        <Image src="/assets/images/demo-spasalon/spa-item-4.png" alt="" width={447} height={363} />
      </div>
    </div>
  );
}
