"use client";

import Image from "next/image";
import { useSplitTextReveal } from "@/hooks/useSplitTextReveal";
import { useScrollTransform } from "@/hooks/useScrollTransform";
import { spaPackages } from "@/data/demo-spasalon/packages";

export default function PackagesSection() {
  const subRef = useSplitTextReveal<HTMLDivElement>("up");
  const titleRef = useSplitTextReveal<HTMLHeadingElement>("blur-fade");
  const itemRef = useScrollTransform<HTMLDivElement>({ direction: "left" });

  return (
    <div className="section-packages tf-spacing-1">
      <div className="tf-container medium">
        <div className="heading-section d-grid gap_12 text-center mb_40">
          <div className="sub text-label text-uppercase split-text effect-up text_primary-color lh-16" ref={subRef}>
            Our Packages
          </div>
          <h2 className="title split-text effect-blur-fade" ref={titleRef}>
            Spa Packages For You
          </h2>
        </div>
        <div className="wrap-packages">
          {spaPackages.map((pkg) => (
            <div className="package-item wow fadeInUp" key={pkg.key}>
              <div className="content d-flex align-items-center gap_20">
                <div className="img-style">
                  <Image width={100} height={100} loading="lazy" src={pkg.image} alt="package-item" />
                </div>
                <div>
                  <a href="#" className="link h4 title mb_8">
                    {pkg.title}
                  </a>
                  <p className="text-body-default text_secondary">{pkg.desc}</p>
                </div>
              </div>
              <div className="wrap-price">
                <h6 className="price text_white">{pkg.price}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="item position-absolute scroll-transform" ref={itemRef}>
        <Image src="/assets/images/demo-spasalon/spa-item-3.png" alt="spa-item" width={483} height={267} />
      </div>
    </div>
  );
}
