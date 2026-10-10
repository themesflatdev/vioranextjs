"use client";

import Image from "next/image";
import { useSplitTextReveal } from "@/hooks/useSplitTextReveal";
import { useAnimateImgItem } from "@/hooks/useAnimateImgItem";

export default function BannerSection() {
  const titleRef = useSplitTextReveal<HTMLHeadingElement>("right");
  const imgRef = useAnimateImgItem<HTMLDivElement>();

  return (
    <div className="section-banner-7 tf-spacing-1">
      <div className="tf-container">
        <div className="row">
          <div className="col-lg-7">
            <div className="box-content">
              <div className="heading">
                <h3 className="mb_8 text_white split-text effect-right" ref={titleRef}>
                  Creating Green Spaces That Inspire
                </h3>
                <p className="text-body-2 text_white wow fadeInUp" data-wow-delay=".2s">
                  Our landscaping team turns every outdoor space into a place you will love.
                </p>
              </div>
              <div className="contact wow fadeInUp" data-wow-delay=".2s">
                <h5 className="mb_20 text_white">Book Your Landscaping Consultation</h5>
                <div className="box-icon">
                  <div className="icon">
                    <i className="icon-PhoneCallFill" />
                  </div>
                  <div>
                    <div className="text-button text_white mb_8">Contact Us 24/7</div>
                    <h5 className="text_white">1-555-678-8888</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 hover-image-2">
            <div className="img-style tf-animateCLP-right" ref={imgRef}>
              <Image loading="lazy" width={570} height={480} src="/assets/images/demo-gardenlandscaping/banner-1.jpg" alt="banner" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
