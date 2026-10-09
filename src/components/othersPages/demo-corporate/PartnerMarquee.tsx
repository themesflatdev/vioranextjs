"use client";

import Image from "next/image";
import { useInfiniteSlide } from "@/hooks/useInfiniteSlide";

// intrinsic SVG dimensions — CSS forces img height to 38px (see
// .wrap-partner .marquee-item img in _sections.scss), width scales with
// style width:"auto" below.
const partners = [
  { src: "/assets/images/logo/partner-1.svg", width: 110, height: 38 },
  { src: "/assets/images/logo/partner-2.svg", width: 120, height: 33 },
  { src: "/assets/images/logo/partner-3.svg", width: 147, height: 38 },
  { src: "/assets/images/logo/partner-4.svg", width: 120, height: 29 },
  { src: "/assets/images/logo/partner-5.svg", width: 110, height: 25 },
  { src: "/assets/images/logo/partner-6.svg", width: 130, height: 25 },
];

type PartnerMarqueeProps = {
  // /our-team and /team-detail add "pt-0" in the original markup
  // (immediately follows a section with its own bottom spacing).
  noTopPadding?: boolean;
  // /about-us wraps this in an outer `.tf-container.tf-spacing-1` and the
  // marquee div itself carries no spacing class ("wrap-partner " bare) —
  // a real structural difference from every other page's usage, confirmed
  // against about-us.html. Set true to omit "tf-spacing-1" here so the
  // parent's own spacing/container applies instead.
  bare?: boolean;
};

// wrap-partner — reused as-is by /portfolio, /portfolio-detail, /services
// and /service-detail (bare "tf-spacing-1").
export default function PartnerMarquee({ noTopPadding = false, bare = false }: PartnerMarqueeProps) {
  const marqueeRef = useInfiniteSlide<HTMLDivElement>({ speed: 50, direction: "left", clone: 2 });

  const className = bare ? "wrap-partner" : `wrap-partner tf-spacing-1${noTopPadding ? " pt-0" : ""}`;

  return (
    <div className={className}>
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
  );
}
