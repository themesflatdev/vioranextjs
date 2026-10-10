"use client";

import Image from "next/image";
import { useScaleUpImage } from "@/hooks/useScaleUpImage";
import { useTextChangeColor } from "@/hooks/useTextChangeColor";
import { useInfiniteSlide } from "@/hooks/useInfiniteSlide";

const counters = [
  { value: "10+", label: "Years of Experience" },
  { value: "250k", label: "Deliveries Completed" },
  { value: "110k", label: "Global Partners" },
  { value: "24/7", label: "Customer Support" },
  { value: "1M+", label: "Kilometers Traveled Safely" },
  { value: "450+", label: "Warehouse Facilities" },
];

const marqueeItems = [
  { type: "text", value: "Quick Transport" },
  { type: "icon" },
  { type: "text", value: "Fast Delivery" },
  { type: "icon" },
  { type: "text", value: "Safe Moving" },
  { type: "icon" },
  { type: "text", value: "Secure Storage" },
  { type: "icon" },
  { type: "text", value: "Smart Logistics" },
  { type: "icon" },
];

export default function AboutSection() {
  const headingRef = useTextChangeColor<HTMLHeadingElement>();
  const scaleUpRef = useScaleUpImage<HTMLDivElement>();
  const marqueeRef = useInfiniteSlide<HTMLDivElement>({ clone: 2, direction: "left" });

  return (
    <div className="section-about-12 tf-spacing-1">
      <div className="tf-container">
        <div className="content">
          <div className="wrap-line-marker mb_20">
            <div className="tag wrap-line-marker lh-16 text-label text_primary text-uppercase letter-spacing-1 lh-16 wow fadeInUp">
              <span className="line-marker line-primary" /> About US
            </div>
          </div>
          <div className="scroll-effect style-3">
            <h2 className="text-capitalize text mb_28 text-change-color reveal-type" ref={headingRef}>
              At Viora Logistics, we believe moving and storage should be simple and stress-free. With years of
              experience, a dedicated team, and modern transport &amp; storage facilities, we provide tailored
              solutions for families and individuals.
            </h2>
          </div>
        </div>
        <div className="box-counter">
          <div className="left">
            <div className="img-style scale-up-img" ref={scaleUpRef}>
              <Image
                className="scale-up"
                width={635}
                height={540}
                src="/assets/images/demo-logistics/about-1.jpg"
                alt="about"
              />
            </div>
          </div>
          <div className="right">
            <div className="wrap-counter tf-grid-layout tf-col-2">
              {counters.map((counter) => (
                <div className="counter-item" key={counter.label}>
                  <h2 className="mb_8">{counter.value}</h2>
                  <p className="text-body-2 text_primary">{counter.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="wrap-infiniteslide">
        <div className="infiniteslide" data-clone="2" data-style="left" ref={marqueeRef}>
          {marqueeItems.map((item, index) =>
            item.type === "text" ? (
              <div className="marquee-item" key={index}>
                <div className="text">{item.value}</div>
              </div>
            ) : (
              <div className="marquee-item" key={index}>
                <div className="icon">
                  <i className="icon-icon-1" />
                </div>
              </div>
            ),
          )}
        </div>
      </div>
    </div>
  );
}
