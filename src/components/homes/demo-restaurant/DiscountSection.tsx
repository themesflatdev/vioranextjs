"use client";

import Image from "next/image";
import { useSplitTextReveal } from "@/hooks/useSplitTextReveal";
import { discountItems } from "@/data/demo-restaurant/discountItems";

export default function DiscountSection() {
  const title1Ref = useSplitTextReveal<HTMLAnchorElement>("blur-fade");
  const desc1Ref = useSplitTextReveal<HTMLParagraphElement>("lines-transform");
  const title2Ref = useSplitTextReveal<HTMLAnchorElement>("blur-fade");
  const desc2Ref = useSplitTextReveal<HTMLParagraphElement>("lines-transform");

  const titleRefs = [title1Ref, title2Ref];
  const descRefs = [desc1Ref, desc2Ref];

  return (
    <div className="section-discount">
      <div className="tf-grid-layout lg-col-2">
        {discountItems.map((item, index) => (
          <div className="menu-restaurant-item style-banner" key={item.title}>
            <div className="img-style">
              <Image loading="lazy" width={930} height={980} src={item.image} alt="menu-discount" />
            </div>
            <div className="content">
              <a href="#" className="link h1 title" ref={titleRefs[index]}>
                {item.title}
              </a>
              <div className="bot">
                <p className="text-body-2 mb_28 text_white" ref={descRefs[index]}>
                  {item.desc}
                </p>
                <a href="#" className="tf-btn btn-bg-white btn-switch-text wow fadeInUp">
                  <span>
                    <span className="btn-double-text" data-text="Order now">
                      Order now
                    </span>
                  </span>
                </a>
              </div>
            </div>
            <div className="discount wow zoomIn" data-wow-duration="2s">
              <div className="bg">
                <Image width={157} height={157} src="/assets/images/demo-restaurant/discount-1.png" alt="discount" />
              </div>
              <div className="discount-content">
                <div className="discount-number text_white fw-6">25%</div>
                <div className="fw-7 text_white text">DISCOUNT!</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
