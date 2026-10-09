"use client";

import Link from "next/link";
import { useSplitTextReveal } from "@/hooks/useSplitTextReveal";
import { services } from "@/data/demo-corporate/services";

// icon-box variant of section-service (different markup from /services'
// alternating image rows) — reuses services.ts title/description, only the
// icon set is specific to this layout.
const icons = ["icon-stars-shapes", "icon-stars-shapes-2", "icon-stars-shapes-3", "icon-stars-shapes-4"];

export default function AboutServicesGrid() {
  const titleRef = useSplitTextReveal<HTMLHeadingElement>("right");

  return (
    <div className="section-service tf-spacing-1">
      <div className="tf-container">
        <div className="heading-section style-1 mb_60">
          <div className="row align-items-center">
            <div className="col-lg-7 d-grid gap_16">
              <div className="sub text-label text-uppercase">Our Services</div>
              <h2 className="title" ref={titleRef}>
                We Turn Vision Into Reality
              </h2>
            </div>
            <div className="col-lg-5">
              <Link href="/services" className="tf-btn btn-hover-animate-2 ms-lg-auto wow fadeInRight">
                <span>View More</span>
                <span />
              </Link>
            </div>
          </div>
        </div>
        <div className="tf-grid-layout lg-col-4 md-col-2">
          {services.map((service, index) => (
            <div className="tf-box-icon style-2 wow fadeIn" data-wow-delay={`${index * 0.2}s`} key={service.slug}>
              <div className="icon">
                <i className={icons[index]} />
              </div>
              <div className="content">
                <h5 className="mb_12 title">
                  <Link href={`/service-detail/${service.slug}`} className="mb_12 link">
                    {service.title}
                  </Link>
                </h5>
                <p className="text-body-default">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
