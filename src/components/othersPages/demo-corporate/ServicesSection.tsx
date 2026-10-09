"use client";

import Image from "next/image";
import { services } from "@/data/demo-corporate/services";
import { useStackElement } from "@/hooks/useStackElement";
import { useSplitTextReveal } from "@/hooks/useSplitTextReveal";
import ServiceItemRow from "./ServiceItemRow";

export default function ServicesSection() {
  const stackRef = useStackElement<HTMLDivElement>();
  const titleRef = useSplitTextReveal<HTMLHeadingElement>("right");

  return (
    <div className="section-service tf-spacing-1">
      <div className="tf-container">
        <div className="heading-section style-2 mb_48">
          <div className="heading d-flex align-items-center justify-content-between gap_16">
            <div className="d-grid gap_16">
              <div className="sub text-label text-uppercase lh-16 wow fadeInUp">Our Services</div>
              <h1 className="title" ref={titleRef}>
                Solutions That Drive Real Business Impact
              </h1>
            </div>
            <div className="btn_wrapper">
              <a href="#" className="tf-btn btn-hover-animate-2 wow fadeInRight btn-item btn-hover">
                <span className="h4">
                  Talk To <br />
                  An Expert
                </span>
              </a>
            </div>
          </div>
          <div className="bot d-flex align-items-center gap_12 wow fadeInUp">
            <Image
              width={240}
              height={100}
              src="/assets/images/demo-corporate/img-heading.jpg"
              alt="images"
            />
            <p className="text-body-2 text_secondary">
              From strategy to execution, our services are designed to help your
              organization grow smarter, scale faster, and lead with clarity.
            </p>
          </div>
        </div>
        <div className="stack-element" ref={stackRef}>
          <div className="stack-content-wrap">
            {services.map((item) => (
              <ServiceItemRow item={item} key={item.slug} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
