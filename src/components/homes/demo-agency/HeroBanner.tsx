"use client";

import Image from "next/image";
import Link from "next/link";
import { useImageParallax } from "@/hooks/useImageParallax";
import { useScrollTransform } from "@/hooks/useScrollTransform";
import { useSplitTextReveal } from "@/hooks/useSplitTextReveal";

export default function HeroBanner() {
  const parallaxRef = useImageParallax<HTMLDivElement>();
  const shapeRef = useScrollTransform<HTMLDivElement>({ rotate: 180 });
  const subtitleRef = useSplitTextReveal<HTMLHeadingElement>("right");
  const titleRef = useSplitTextReveal<HTMLDivElement>("up");

  return (
    <div className="hero-banner-2 parallax-container" ref={parallaxRef}>
      <div className="thumbs parallax-image">
        <Image
          className="image-inner"
          width={1920}
          height={840}
          priority
          src="/assets/images/demo-agency/agency-hero-1.jpg"
          alt="agency-hero"
        />
      </div>
      <div className="content">
        <div className="tf-container large">
          <div className="row align-items-end">
            <div className="col-lg-9 position-relative">
              <h5 className="text_primary-color mb_20 hero-text font-2" ref={subtitleRef}>
                Build Bold, Beautiful Websites With A Purpose.
              </h5>
              <div className="text-display-1 text_white fw-6 title font-2" ref={titleRef}>
                Brand Builders
              </div>
              <div className="shape sm-hide" ref={shapeRef}>
                <Image width={100} height={100} src="/assets/images/shape/agency-shape-1.svg" alt="shape" />
              </div>
            </div>
            <div className="col-lg-3">
              <Link
                href="/demo-agency/contact"
                className="tf-btn rounded-icon btn-hover-rounded-icon hover-1 ms-lg-auto wow fadeInUp"
              >
                <div className="btn_inner">
                  <div className="btn_text">
                    <span>Get in touch</span>
                  </div>
                  <div className="btn_icon">
                    <span>
                      <i className="icon-ArrowUpRight" />
                      <i className="icon-ArrowUpRight" />
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
