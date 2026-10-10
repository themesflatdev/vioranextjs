"use client";

import Image from "next/image";
import { useInfiniteSlide } from "@/hooks/useInfiniteSlide";

// Same intrinsic dimensions as demo-corporate/demo-medical PartnerMarquee —
// shared site-wide logo assets, CSS forces img height to 38px.
const partners = [
  { src: "/assets/images/logo/partner-1.svg", width: 110, height: 38 },
  { src: "/assets/images/logo/partner-2.svg", width: 120, height: 33 },
  { src: "/assets/images/logo/partner-3.svg", width: 147, height: 38 },
  { src: "/assets/images/logo/partner-4.svg", width: 120, height: 29 },
  { src: "/assets/images/logo/partner-5.svg", width: 110, height: 25 },
  { src: "/assets/images/logo/partner-6.svg", width: 130, height: 25 },
];

export default function PartnerSection() {
  const marqueeRef = useInfiniteSlide<HTMLDivElement>({ clone: 2, direction: "left" });

  return (
    <div className="tf-container tf-spacing-1 pb-0">
      <div className="wrap-partner">
        <h4 className="title text-center mb_32 split-text effect-up">
          Helping 100+ Leading Companies Get Better Results
        </h4>
        <div className="wrap-infiniteslide">
          <div ref={marqueeRef} className="infiniteslide" data-clone="2" data-style="left">
            {partners.map((partner) => (
              <div className="marquee-item" key={partner.src}>
                <Image
                  src={partner.src}
                  alt="partner"
                  width={partner.width}
                  height={partner.height}
                  style={{ height: "38px", width: "auto" }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
