"use client";

import Image from "next/image";
import { useSplitTextReveal } from "@/hooks/useSplitTextReveal";
import { purchaseHref } from "@/data/landing/menu";

const floatingImages = [
  { item: "item-1", hide: "md-hide", anim: "fadeInLeft", delay: "", src: "item-footer-1.jpg", w: 340, h: 202 },
  { item: "item-2", hide: "lg-hide", anim: "fadeInLeft", delay: "0.2s", src: "item-footer-2.jpg", w: 340, h: 191 },
  { item: "item-3", hide: "md-hide", anim: "fadeInLeft", delay: "0.4s", src: "item-footer-3.png", w: 340, h: 161 },
  { item: "item-4", hide: "md-hide", anim: "fadeInRight", delay: "", src: "item-footer-4.jpg", w: 361, h: 185 },
  { item: "item-5", hide: "lg-hide", anim: "fadeInRight", delay: "0.2s", src: "item-footer-5.jpg", w: 361, h: 153 },
  { item: "item-6", hide: "md-hide", anim: "fadeInRight", delay: "0.4s", src: "item-footer-6.jpg", w: 362, h: 149 },
];

export default function Footer() {
  const titleRef = useSplitTextReveal<HTMLHeadingElement>("right");

  return (
    <footer className="footer-landing">
      <div className="tf-container">
        <div className="content">
          <a href="#" className="footer-logo site-logo mb_40 wow zoomIn">
            <Image className="main-logo" alt="logo" width={228} height={55} src="/assets/images/logo/logo-3.svg" />
          </a>
          <h2 ref={titleRef} className="title text_white mb_32 split-text effect-right">
            AI-Powered Multipurpose <br />
            Website Template
          </h2>
          <ul className="list d-flex align-items-center justify-content-center flex-wrap mb_40">
            <li className="h6 align-items-center d-flex wow fadeInUp">
              <i className="icon-Check wow fadeInUp" />
              Optimized Performance
            </li>
            <li className="h6 align-items-center d-flex wow fadeInUp" data-wow-delay="0.2s">
              <i className="icon-Check wow fadeInUp" />
              Built-in Tools and Features
            </li>
            <li className="h6 align-items-center d-flex wow fadeInUp" data-wow-delay="0.4s">
              <i className="icon-Check wow fadeInUp" />
              Ongoing Support and Updates
            </li>
          </ul>
          <a
            href={purchaseHref}
            target="_blank"
            rel="noreferrer"
            className="tf-btn btn-bg-primary-3 btn-hover-animate-2 mx-auto wow fadeInUp"
            data-wow-delay="0.4s"
          >
            <span>Purchase Today</span>
            <span className="bg-effect" />
          </a>
        </div>
      </div>
      <div className="floating-images">
        {floatingImages.map((f) => (
          <div
            key={f.item}
            className={`item ${f.item} position-absolute floating-card ${f.hide} wow ${f.anim}`}
            {...(f.delay ? { "data-wow-delay": f.delay } : {})}
          >
            <Image src={`/assets/images/landing/${f.src}`} alt="item-footer" width={f.w} height={f.h} />
          </div>
        ))}
      </div>
    </footer>
  );
}
