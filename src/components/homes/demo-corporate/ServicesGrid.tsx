"use client";

import Link from "next/link";
import { useSplitTextReveal } from "@/hooks/useSplitTextReveal";

const services = [
  {
    slug: "business-strategy",
    icon: "icon-stars-shapes",
    title: "Business Strategy",
    desc: "We help you define clear goals, assess market opportunities, and create actionable plans that drive sustainable growth.",
  },
  {
    slug: "web-development",
    icon: "icon-stars-shapes-2",
    title: "Web Development",
    desc: "Robust, responsive, and scalable websites built to elevate your brand and enhance user experience across all devices.",
  },
  {
    slug: "branding-identity",
    icon: "icon-stars-shapes-3",
    title: "Branding & Identity",
    desc: "Crafting visual identities that communicate trust, professionalism, and align perfectly with your business values.",
  },
  {
    slug: "digital-marketing",
    icon: "icon-stars-shapes-4",
    title: "Digital Marketing",
    desc: "From SEO to paid ads, we create data-driven campaigns that generate leads, boost visibility, and deliver measurable ROI.",
  },
];

export default function ServicesGrid() {
  const subRef = useSplitTextReveal<HTMLDivElement>("up");
  const titleRef = useSplitTextReveal<HTMLHeadingElement>("right");

  return (
    <div className="section-service-2 tf-spacing-1">
      <div className="tf-container">
        <div className="heading-section style-1 mb_60">
          <div className="row align-items-center">
            <div className="col-lg-7 d-grid gap_16">
              <div className="sub text-label text-uppercase text_white" ref={subRef}>Our Services</div>
              <h2 className="title text_white" ref={titleRef}>We Turn Vision Into Reality</h2>
            </div>
            <div className="col-lg-5">
              <div className="wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.1s">
                <Link href="/services" className="tf-btn btn-hover-animate-2 btn-bg-primary-3 ms-lg-auto">
                  <span>View More</span>
                  <span />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="tf-grid-layout lg-col-4 sm-col-2">
          {services.map((service, index) => (
            <div
              className="tf-box-icon style-2 wow fadeIn hover-effect-icon"
              data-wow-delay={`${(index + 1) * 0.1}s`}
              key={service.title}
            >
              <div className="icon">
                <i className={service.icon} />
              </div>
              <div className="content">
                <h5 className="mb_12 title">
                  <Link href={`/service-detail/${service.slug}`} className="mb_12 link text_white">
                    {service.title}
                  </Link>
                </h5>
                <p className="text-body-default text_muted">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
