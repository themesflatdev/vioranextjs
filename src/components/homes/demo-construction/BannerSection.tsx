"use client";

import { useRevealElements } from "@/hooks/useRevealElements";

// Gốc có `data-ns-animate` thật trên `.box-content` (prompt mô tả sai là
// không có) -> dùng useRevealElements (GSAP blur+direction reveal) đúng
// thực tế HTML gốc, không bỏ qua animation.
export default function BannerSection() {
  const boxRef = useRevealElements<HTMLDivElement>();

  return (
    <div className="section-banner-4">
      <div className="banner">
        <div
          className="bg-banner"
          data-speed="0.7"
          data-background="/assets/images/demo-construction/banner-1.jpg"
          style={{ backgroundImage: "url(/assets/images/demo-construction/banner-1.jpg)" }}
        />
      </div>
      <div className="tf-container position-relative tf-spacing-1">
        <div
          className="box-content"
          ref={boxRef}
          data-ns-animate=""
          data-duration="1"
          data-direction="left"
        >
          <div className="heading">
            <h3 className="text-uppercase text_white mb_12">Building Strength Creating Futures.</h3>
            <p className="text-body-default text_white">
              From concept to completion we deliver innovative reliable and sustainable construction
              solutions for residential and commercial projects
            </p>
          </div>
          <a href="#" className="tf-btn btn-hover-animate-2 btn-bg-primary-2 rounded-0">
            <span>Get A Free Quote</span>
            <span className="bg-effect" />
          </a>
          <span className="dot dot-top-left" />
          <span className="dot dot-top-right" />
          <span className="dot dot-bot-left" />
          <span className="dot dot-bot-right" />
        </div>
      </div>
    </div>
  );
}
