"use client";

import Image from "next/image";
import { useAtropos } from "@/hooks/useAtropos";
import { useSplitTextReveal } from "@/hooks/useSplitTextReveal";

export default function HeroSection() {
  const atroposRef = useAtropos<HTMLDivElement>();
  const titleRef = useSplitTextReveal<HTMLHeadingElement>("right");
  const descRef = useSplitTextReveal<HTMLParagraphElement>("lines-rotation-x");

  return (
    <div className="hero-banner-5 position-relative">
      <div className="tf-container medium">
        <div className="row">
          <div className="col-md-7">
            <div className="content">
              <h1 className="title mb_28" ref={titleRef}>
                Where Flavor Meets Moments.
              </h1>
              <p className="text-body-default text_placehover" ref={descRef}>
                Experience unforgettable moments through exceptional food, crafted with care and passion
              </p>
              <a href="#" className="tf-btn btn-switch-text wow fadeInUp">
                <span>
                  <span className="btn-double-text" data-text="Explore Our Menu">
                    Explore Our Menu
                  </span>
                </span>
              </a>
            </div>
          </div>
          <div className="col-md-5">
            <div
              className="atropos my-atropos thumbs tf-animateCLP-right slide-btt-animated"
              ref={atroposRef}
            >
              <div className="atropos-scale">
                <div className="atropos-rotate">
                  <div className="atropos-inner">
                    <Image width={841} height={882} src="/assets/images/demo-restaurant/hero-1.png" alt="restaurant-hero" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="item slide-ltr-animated">
        <Image width={326} height={355} src="/assets/images/demo-restaurant/hero-2.png" alt="hero" />
      </div>
    </div>
  );
}
