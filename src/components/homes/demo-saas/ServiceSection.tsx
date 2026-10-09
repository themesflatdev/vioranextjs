"use client";

import Image from "next/image";
import { useRevealElements } from "@/hooks/useRevealElements";
import { useSplitTextReveal } from "@/hooks/useSplitTextReveal";
import { services } from "@/data/demo-saas/services";

export default function ServiceSection() {
  const titleRef = useSplitTextReveal<HTMLHeadingElement>("blur-fade");
  const descRef = useSplitTextReveal<HTMLParagraphElement>("lines-transform");
  const gridRef = useRevealElements<HTMLDivElement>();

  return (
    <div className="section-service-8 tf-spacing-1 pb-0">
      <div className="tf-container medium">
        <div className="heading-section-4 text-center d-grid gap_12 mb_24 mb_40">
          <div className="tag text-label text-uppercase wow fadeInUp text_white mx-auto">Our Services</div>
          <h3 className="title split-text effect-blur-fade" ref={titleRef}>
            Our Services
          </h3>
          <p className="desc text-body-2 text_placehover split-text split-lines-transform" ref={descRef}>
            Smart solutions built to grow your business.
          </p>
        </div>
        <div className="tf-grid-layout md-col-2 gap_30" data-ns-animate data-duration="1" ref={gridRef}>
          {services.map((service) => (
            <div className="service-item style-2" key={service.title}>
              <div className="content mb_32">
                <a href="#" className="h4 link mb_8">
                  {service.title}
                </a>
                <p className="text_placehover text-body-default">{service.desc}</p>
              </div>
              <div className="img-style">
                <Image loading="lazy" width={570} height={429} src={service.image} alt="service" />
              </div>
              <div className="shape position-absolute">
                <Image src="/assets/images/demo-saas/item-3.png" alt="item" width={631} height={597} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
