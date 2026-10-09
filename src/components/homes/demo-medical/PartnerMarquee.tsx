"use client";

import Image from "next/image";
import { useInfiniteSlide } from "@/hooks/useInfiniteSlide";

// Same intrinsic dimensions as demo-corporate/PartnerMarquee.tsx — shared
// site-wide logo assets, CSS forces img height to 38px.
const partners = [
  { src: "/assets/images/logo/partner-1.svg", width: 110, height: 38 },
  { src: "/assets/images/logo/partner-2.svg", width: 120, height: 33 },
  { src: "/assets/images/logo/partner-3.svg", width: 147, height: 38 },
  { src: "/assets/images/logo/partner-4.svg", width: 120, height: 29 },
  { src: "/assets/images/logo/partner-5.svg", width: 110, height: 25 },
  { src: "/assets/images/logo/partner-6.svg", width: 130, height: 25 },
];

export default function PartnerMarquee() {
  const marqueeRef = useInfiniteSlide<HTMLDivElement>({ speed: 50, direction: "left", clone: 2 });

  return (
    <div className="tf-container tf-spacing-8">
      <div className="wrap-partner">
        <div className="wrap-infiniteslide">
          <div className="infiniteslide" data-clone="2" data-style="left" ref={marqueeRef}>
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
