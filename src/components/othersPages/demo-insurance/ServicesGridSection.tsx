"use client";

import Image from "next/image";
import Link from "next/link";
import { useSplitTextReveal } from "@/hooks/useSplitTextReveal";
import { services, serviceDesc } from "@/data/demo-insurance/services";

// section-service-4 v2 on services.html — STATIC lg-col-4 grid, not a
// Swiper (the "sw-layout" class here is inert: carousel.js's init bails
// out as soon as it finds no .swiper element inside, and this markup has
// none). All 8 services, same AI-driven description on every card.
export default function ServicesGridSection() {
  const subRef = useSplitTextReveal<HTMLDivElement>("up");
  const titleRef = useSplitTextReveal<HTMLHeadingElement>("blur-fade");

  return (
    <div className="section-service-4 v2 tf-spacing-1 sw-layout">
      <div className="tf-container">
        <div className="heading-section mb_60">
          <div className="text-label letter-spacing-1 text-uppercase mb_12" ref={subRef}>
            Our Services
          </div>
          <h2 className="title" ref={titleRef}>
            Our Insurance Services
          </h2>
        </div>
        <div className="tf-grid-layout lg-col-4 sm-col-2">
          {services.map((service) => {
            const href = `/demo-insurance/service-detail/${service.slug}`;
            return (
              <div className="service-item style-1" key={service.slug}>
                <Link href={href} className="img-style">
                  <Image width={345} height={460} loading="lazy" src={service.image} alt="service" />
                </Link>
                <div className="content">
                  <Link href={href} className="fw-5 text_white title link mb_12 h5 line-clamp-1">
                    {service.title}
                  </Link>
                  <div className="wrap">
                    <p className="font-3 text-body-default text_white desc mb_12 line-clamp-3">{serviceDesc}</p>
                    <Link href={href} className="text-caption-1 text_primary-color fw-4 hover-underline-link">
                      Explore Plans
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
