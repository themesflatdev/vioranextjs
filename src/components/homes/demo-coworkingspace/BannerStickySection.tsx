"use client";

import Image from "next/image";
import { useScrollTransform } from "@/hooks/useScrollTransform";

const items = [
  { n: 1, distance: "30%", width: 400, height: 300 },
  { n: 2, distance: "20%", width: 210, height: 280 },
  { n: 3, distance: "30%", width: 260, height: 260 },
  { n: 4, distance: "40%", width: 360, height: 240 },
];

function ImageCard({ n, distance, width, height }: (typeof items)[number]) {
  const ref = useScrollTransform<HTMLDivElement>({ direction: "up", distance });

  return (
    <div ref={ref} className={`image-card item item-${n} scroll-transform wow zoomIn`} data-distance={distance}>
      <Image
        width={width}
        height={height}
        loading="lazy"
        src={`/assets/images/demo-coworkingspace/banner-item-${n}.jpg`}
        alt="banner"
      />
    </div>
  );
}

export default function BannerStickySection() {
  return (
    <div className="tf-container large">
      <div className="section-banner-5 position-relative st-portfolio-area">
        <div className="sticky-section1">
          <div className="images-wrapper">
            <div className="title-section st-portfolio-heading">
              <div className="icon-wrapper" />
              <h1 className="split-text effect-right">Coworking Space</h1>
            </div>
            <div className="images-grid">
              {items.map((item) => (
                <ImageCard key={item.n} {...item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
