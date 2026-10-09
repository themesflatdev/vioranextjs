"use client";

import Image from "next/image";
import Link from "next/link";
import { useSplitTextReveal } from "@/hooks/useSplitTextReveal";
import { services } from "@/data/demo-lawyer/services";

export default function ServicesSection() {
  const titleRef = useSplitTextReveal<HTMLHeadingElement>("right");

  return (
    <div className="section-service-16">
      <div className="tf-container large">
        <div className="heading-section-5 mb_60">
          <div className="row align-items-end">
            <div className="col-lg-5">
              <div className="sub text-label text-uppercase text_muted mb_12 lh-16 letter-spacing-1 mb_16 wow fadeInUp">
                Our Services
              </div>
              <h2 ref={titleRef} className="title text_white split-text effect-right">
                Comprehensive Legal Solutions For <span className="text_primary-color">Every Need</span>
              </h2>
            </div>
            <div className="col-lg-7">
              <div className="right">
                <p className="text-body-2 mb_20 text_muted wow fadeInUp">
                  We provide trusted legal services carefully designed to protect your rights, resolve disputes
                  efficiently.
                </p>
                <div className="wow fadeInUp" data-wow-delay="0.2s">
                  <Link href="#" className="hover-underline-link py-1 text-button text_white">
                    View All Services
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tf-grid-layout lg-col-4 sm-col-2">
          {services.map((service) => (
            <div
              key={service.title}
              className="service-item style-9 hover-image wow fadeInLeft"
              data-wow-delay={service.delay || undefined}
            >
              <Link href="#" className="img-style mb_26">
                <Image loading="lazy" width={412} height={308} src={service.image} alt="service" />
              </Link>
              <div className="content">
                <h4 className="title text_white mb_12 line-clamp-2">
                  <Link href="#" className="hover-line-text">
                    {service.title}
                  </Link>
                </h4>
                <p className="text_muted text-body-2 mb_20 line-clamp-2">{service.desc}</p>
                <Link href="#" className="hover-underline-link text_white text-button btn_link">
                  View Services
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
