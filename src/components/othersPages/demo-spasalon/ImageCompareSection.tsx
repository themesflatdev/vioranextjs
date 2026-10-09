"use client";

import "image-compare-viewer/dist/image-compare-viewer.min.css";
import Image from "next/image";
import { useSplitTextReveal } from "@/hooks/useSplitTextReveal";
import { useImageCompare } from "@/hooks/useImageCompare";
import { useInfiniteSlide } from "@/hooks/useInfiniteSlide";

const marqueeItems = [
  "Rejuvenate your skin",
  "Relieve body tension",
  "Boost your confidence",
  "Feel more balanced",
  "Relax your mind",
];

export default function ImageCompareSection() {
  const subRef = useSplitTextReveal<HTMLDivElement>("up");
  const titleRef = useSplitTextReveal<HTMLHeadingElement>("blur-fade");
  const compareRef = useImageCompare<HTMLDivElement>();
  const marqueeRef = useInfiniteSlide<HTMLDivElement>({ direction: "left" });

  return (
    <div className="section-image-view tf-spacing-1">
      <div className="tf-container medium">
        <div className="heading-section d-grid gap_12 text-center mb_40">
          <div className="sub text-label text-uppercase split-text effect-up text_primary-color lh-16" ref={subRef}>
            Before &amp; After
          </div>
          <h2 className="title split-text effect-blur-fade" ref={titleRef}>
            The Beauty Journey
          </h2>
        </div>
        <div className="img-viewer-compare-wrap image-compare" id="image-compare" ref={compareRef}>
          <Image
            loading="eager"
            width={1290}
            height={865}
            src="/assets/images/demo-spasalon/banner-before.jpg"
            alt="Skincare"
          />
          <Image
            loading="eager"
            width={1290}
            height={865}
            src="/assets/images/demo-spasalon/banner-after.jpg"
            alt="Skincare"
          />
        </div>
      </div>
      <div className="wrap-marquee">
        <div className="infiniteslide" data-style="left" ref={marqueeRef}>
          {marqueeItems.map((item) => (
            <div className="marqee-inner h6 text_secondary-color" key={item}>
              <i className="icon-CheckCircle" />
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
