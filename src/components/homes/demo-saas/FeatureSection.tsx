"use client";

import Image from "next/image";
import { useInfiniteSlide } from "@/hooks/useInfiniteSlide";
import { useRevealElements } from "@/hooks/useRevealElements";
import { useSplitTextReveal } from "@/hooks/useSplitTextReveal";
import { features } from "@/data/demo-saas/features";
import { partners } from "@/data/demo-saas/partners";

export default function FeatureSection() {
  const thumbsRef = useRevealElements<HTMLDivElement>();
  const partnerLabelRef = useSplitTextReveal<HTMLParagraphElement>("up");
  const marqueeRef = useInfiniteSlide<HTMLDivElement>({ speed: 50, direction: "left", clone: 2 });
  const marqueeItems = [...partners, ...partners];

  return (
    <div className="section-feature-3">
      <div className="tf-container medium tf-spacing-1">
        <div data-ns-animate data-duration="1" className="thumbs" ref={thumbsRef}>
          <Image loading="lazy" width={1250} height={686} src="/assets/images/demo-saas/about-1.jpg" alt="about" />
          <div className="item-1 position-absolute">
            <Image src="/assets/images/demo-saas/item-1.png" alt="item" width={896} height={927} />
          </div>
          <div className="item-2 position-absolute">
            <Image src="/assets/images/demo-saas/item-2.png" alt="item" width={697} height={726} />
          </div>
        </div>
      </div>
      <div className="tf-container">
        <div className="wrap-partner">
          <p
            className="text-label text_white text-uppercase text-center lh-16 mb_32 split-text effect-up"
            ref={partnerLabelRef}
          >
            50,000+ creative professionals and teams rely on us every day
          </p>
          <div className="wrap-infiniteslide">
            <div className="infiniteslide" data-clone="2" data-style="left" ref={marqueeRef}>
              {marqueeItems.map((partner, index) => (
                <div className="marquee-item" key={`${partner.src}-${index}`}>
                  <Image src={partner.src} alt="partner" width={partner.width} height={partner.height} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="wrap-box-icon tf-spacing-1">
        <div className="tf-container medium">
          <div className="tf-grid-layout lg-col-4 md-col-2 gap_30">
            {features.map((feature) => (
              <div className="tf-box-icon style-4 wow fadeInLeft" data-wow-delay={feature.delay} key={feature.title}>
                <div className="content">
                  <div className="icon mb_22">
                    <i className={feature.icon} />
                  </div>
                  <a href="#" className="h5 link mb_12">
                    {feature.title}
                  </a>
                  <p className="text_muted text-body-default">{feature.desc}</p>
                </div>
                <a href="#" className="btn-arrow link">
                  <div className="position-relative">
                    <span className="text text-button">Read More</span>
                    <i className="icon-ArrowRight" />
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
