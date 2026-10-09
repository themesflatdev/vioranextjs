"use client";

import Image from "next/image";
import Link from "next/link";
import { useSplitTextReveal } from "@/hooks/useSplitTextReveal";
import { useScrollTransform } from "@/hooks/useScrollTransform";
import { spaServices, spaServiceDescription } from "@/data/demo-spasalon/services";

export default function ServicesSection() {
  const subRef = useSplitTextReveal<HTMLDivElement>("up");
  const titleRef = useSplitTextReveal<HTMLHeadingElement>("blur-fade");
  const descRef = useSplitTextReveal<HTMLParagraphElement>("lines-transform");
  const itemRef = useScrollTransform<HTMLDivElement>({ direction: "up" });

  return (
    <div className="section-service-7 tf-spacing-10">
      <div className="tf-container medium">
        <div className="heading-section d-grid gap_12 mb_40">
          <div className="sub text-label text-uppercase split-text effect-up text_primary-color" ref={subRef}>
            Our Services
          </div>
          {/* "Rstore" typo in the source HTML corrected to "Restore". */}
          <h2 className="title split-text effect-blur-fade" ref={titleRef}>
            Treatments That Truly Restore.
          </h2>
          <p className="text-body-2 text_secondary mt_4 split-text split-lines-transform" ref={descRef}>
            Indulge in personalized treatments designed to relax, renew, and restore your natural glow.
          </p>
        </div>
        <div>
          {spaServices.map((service) => (
            <div className="tf-box-icon style-6 wow fadeInRight" key={service.key}>
              <div className="content-inner">
                <div className="icon">
                  <i className={service.icon} />
                </div>
                <div className="content">
                  <Link href={`/demo-spasalon/service-detail/${service.key}`} className="h4 mb_16 title link">
                    {service.title}
                  </Link>
                  <p className="text-body-default">{spaServiceDescription}</p>
                </div>
              </div>
              <div className="wrap-img hover-image">
                <Link href={`/demo-spasalon/service-detail/${service.key}`} className="img-style">
                  <Image width={360} height={132} loading="lazy" src={service.image} alt="service-spa" />
                </Link>
                <Link href={`/demo-spasalon/service-detail/${service.key}`} className="btn-arrow">
                  <i className="icon-ArrowUpRight" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="item position-absolute scroll-transform" ref={itemRef}>
        <Image src="/assets/images/demo-spasalon/spa-item-2.png" alt="spa-item" width={212} height={426} />
      </div>
    </div>
  );
}
