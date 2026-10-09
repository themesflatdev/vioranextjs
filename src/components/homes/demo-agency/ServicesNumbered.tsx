"use client";

import Image from "next/image";
import Link from "next/link";
import { useSplitTextReveal } from "@/hooks/useSplitTextReveal";
import { services } from "@/data/demo-agency/services";

// The HTML source leaves the arrow button as href="#" — but
// demo-corporate's CarrerSection (same .tf-box-number pattern) already
// wires its arrow to the detail route, so this is linked the same way
// for consistency rather than kept as a dead "#".
export default function ServicesNumbered() {
  const titleRef = useSplitTextReveal<HTMLHeadingElement>("blur-fade");
  const descRef = useSplitTextReveal<HTMLParagraphElement>("lines-transform");

  return (
    <div className="section-service-3 tf-spacing-1">
      <div className="tf-container large">
        <div className="heading-section-2 mb_44">
          <div className="row">
            <div className="col-lg-6">
              <h2 className="title text_white" ref={titleRef}>
                Our Services
              </h2>
            </div>
            <div className="col-lg-6">
              <div className="right">
                <p className="text_muted text-body-2" ref={descRef}>
                  We provide creative solutions to grow your brand. From strategy to design and
                  marketing, we deliver impactful results that matter.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="wrap-box-number">
          {services.map((service, index) => (
            <div
              className="tf-box-number wow fadeInRight"
              data-wow-delay={`${(index + 1) * 0.1}s`}
              key={service.slug}
            >
              <div className="content">
                <div className="heading">
                  <div className="number h1">{service.number}</div>
                  <div>
                    <Link
                      href={`/demo-agency/service-detail/${service.slug}`}
                      className="title mb_8 h4 link text_white font-3"
                    >
                      {service.title}
                    </Link>
                    <p className="text_muted text-body-default line-clamp-2">{service.desc}</p>
                  </div>
                </div>
                <div className="image">
                  <Image loading="lazy" width={420} height={315} src={service.image} alt="img-hover" />
                </div>
              </div>
              <div className="wrap-btn">
                <Link href={`/demo-agency/service-detail/${service.slug}`} className="btn-arrow">
                  <i className="icon-ArrowUpRight" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
