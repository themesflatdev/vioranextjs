"use client";

import Image from "next/image";
import { useSplitTextReveal } from "@/hooks/useSplitTextReveal";
import { purchaseHref } from "@/data/landing/menu";

const floatingImages = [
  { item: "item-1", hide: "lg-hide", anim: "fadeInDown", delay: "", src: "item-page-title-1.png", w: 342, h: 278 },
  { item: "item-2", hide: "xl-hide", anim: "fadeInLeft", delay: "0.2s", src: "item-page-title-2.png", w: 409, h: 244 },
  { item: "item-3", hide: "lg-hide", anim: "fadeInUp", delay: "0.4s", src: "item-page-title-3.png", w: 579, h: 325 },
  { item: "item-4", hide: "lg-hide", anim: "fadeInDown", delay: "", src: "item-page-title-4.png", w: 300, h: 231 },
  { item: "item-5", hide: "xl-hide", anim: "fadeInRight", delay: "0.2s", src: "item-page-title-5.png", w: 440, h: 262 },
  { item: "item-6", hide: "lg-hide", anim: "fadeInUp", delay: "0.4s", src: "item-page-title-6.png", w: 532, h: 310 },
];

export default function HeroSection() {
  const titleRef = useSplitTextReveal<HTMLHeadingElement>("lines-rotation-x");

  return (
    <div className="hero-landing">
      <div className="tf-container text-center">
        <div className="content">
          <h1 ref={titleRef} className="title mb_32 split-text split-lines-rotation-x">
            AI-Powered Multipurpose Next.js Website Template
          </h1>
          <ul className="list d-flex align-items-center justify-content-center flex-wrap mb_40">
            <li className="h6 align-items-center d-flex wow fadeInUp">
              <i className="icon-Check" />
              Optimized Performance
            </li>
            <li className="h6 align-items-center d-flex wow fadeInUp" data-wow-delay="0.2s">
              <i className="icon-Check" />
              Built-in Tools And Features
            </li>
            <li className="h6 align-items-center d-flex wow fadeInUp" data-wow-delay="0.3s">
              <i className="icon-Check" />
              Ongoing Support And Updates
            </li>
          </ul>
          <div className="wrap-btn d-flex gap_28 justify-content-center wow fadeInUp" data-wow-delay="0.4s">
            <a href={purchaseHref} target="_blank" rel="noreferrer" className="tf-btn btn-bg-white-3 btn-hover-animate-2">
              <span>Purchase Now</span>
              <span className="bg-effect" />
            </a>
            <a href="#" className="tf-btn btn-bg-white-3 btn-hover-animate-2">
              <span>View Demo</span>
              <span className="bg-effect" />
            </a>
          </div>
        </div>
      </div>
      <div className="floating-images">
        {floatingImages.map((f) => (
          <div
            key={f.item}
            className={`${f.item} position-absolute ${f.hide} wow ${f.anim}`}
            {...(f.delay ? { "data-wow-delay": f.delay } : {})}
          >
            <Image
              className="floating-card"
              src={`/assets/images/landing/${f.src}`}
              alt="item-page"
              width={f.w}
              height={f.h}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
