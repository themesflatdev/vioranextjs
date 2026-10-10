"use client";

import Image from "next/image";
import Link from "next/link";
import { useScaleUpImage } from "@/hooks/useScaleUpImage";
import { useSplitTextReveal } from "@/hooks/useSplitTextReveal";

export default function AboutSection11() {
  const imgRef = useScaleUpImage<HTMLDivElement>();
  const titleRef = useSplitTextReveal<HTMLHeadingElement>("right");
  const descRef = useSplitTextReveal<HTMLParagraphElement>("lines-transform");

  return (
    <div className="section-about-11 tf-spacing-1">
      <div className="tf-container">
        <div className="box-about-2">
          <div className="img-style scale-up-img" ref={imgRef}>
            <Image className="scale-up" width={650} height={487} loading="lazy" src="/assets/images/demo-gardenlandscaping/about-4.jpg" alt="about" />
          </div>
          <div className="content">
            <div className="heading mb_32">
              <h3 className="mb_16 split-text effect-right" ref={titleRef}>
                Inspired By Nature
              </h3>
              <p className="text-body-2 text_secondary split-text split-lines-transform" ref={descRef}>
                Crafting outdoor spaces that inspire beauty, comfort, and connection with nature.
              </p>
            </div>
            <div className="list d-grid gap_24 mb_32 wow fadeInUp" data-wow-delay=".2s">
              <div>
                <div className="title d-flex align-items-center mb_8 gap_12">
                  <i className="icon-CheckCircleFill" />
                  <h5>Passionate About Landscaping.</h5>
                </div>
                <p className="text-body-default text_secondary">
                  We combine creativity, expertise, and sustainable practices to design outdoor spaces that truly
                  stand out.
                </p>
              </div>
              <div>
                <div className="title d-flex align-items-center mb_8 gap_12">
                  <i className="icon-CheckCircleFill" />
                  <h5>Tailored To Your Lifestyle</h5>
                </div>
                <p className="text-body-default text_secondary">
                  We combine creativity, expertise, and sustainable practices to design outdoor spaces that truly
                  stand out.
                </p>
              </div>
            </div>
            <Link href="#" className="tf-btn btn-hover-animate btn-bg-primary-2 wow fadeInUp" data-wow-delay=".4s">
              <span>About Us</span>
              <span />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
