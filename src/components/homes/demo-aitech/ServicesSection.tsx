"use client";

import Image from "next/image";
import { useRevealElements } from "@/hooks/useRevealElements";
import { useSplitTextReveal } from "@/hooks/useSplitTextReveal";
import { services, type ServiceItem } from "@/data/demo-aitech/services";

const trustAvatars = [
  { src: "/assets/images/avatar/group-avatar-3-1.jpg", delay: "0.1s" },
  { src: "/assets/images/avatar/group-avatar-3-2.jpg", delay: "0.2s" },
  { src: "/assets/images/avatar/group-avatar-3-3.jpg", delay: "0.3s" },
  { src: "/assets/images/avatar/group-avatar-3-4.jpg", delay: "0.4s" },
];

function ServiceCard({ item }: { item: ServiceItem }) {
  const revealRef = useRevealElements<HTMLDivElement>();

  return (
    <div className="project-item style-1 hover-image" data-ns-animate data-duration="1" data-delay={item.delay ?? ""} ref={revealRef}>
      <a href="#" className="img-style mb_40">
        <Image loading="lazy" width={443} height={443} src={item.image} alt="AI-project" />
      </a>
      <div className="content">
        <a href="#" className="title link h4 font-3 mb_8">
          {item.title}
        </a>
        <p className="text-body-default">{item.desc}</p>
      </div>
    </div>
  );
}

export default function ServicesSection() {
  const subRef = useSplitTextReveal<HTMLDivElement>("up");
  const titleRef = useSplitTextReveal<HTMLHeadingElement>("blur-fade");
  const descRef = useSplitTextReveal<HTMLParagraphElement>("lines-transform");

  return (
    <div className="section-service-6 tf-spacing-10">
      <div className="tf-container">
        <div className="wrap-heading">
          <div className="heading-section d-flex align-items-center justify-content-between gap_16 flex-wrap mb_60">
            <div className="d-grid gap_16">
              <div className="sub text-label text_primary-color text-uppercase" ref={subRef}>
                Our Services
              </div>
              <h2 className="title" ref={titleRef}>
                Our Core Services
              </h2>
              <p className="text-body-2" ref={descRef}>
                Delivering AI solutions that make a real difference.
              </p>
            </div>
            <div className="box-right wow fadeInRight">
              <div className="trust d-flex align-items-center gap_12 mb_32">
                <div className="group">
                  {trustAvatars.map((avatar) => (
                    <Image
                      className="wow fadeInLeft"
                      data-wow-delay={avatar.delay}
                      width={48}
                      height={48}
                      src={avatar.src}
                      alt="avatar"
                      key={avatar.src}
                    />
                  ))}
                </div>
                <p className="text-body-default text_white wow fadeInUp">Trusted by 50k+ users</p>
              </div>
              <a href="#" className="tf-btn btn-hover-animate-2 btn-bg-primary-3 w-full">
                <span>Get in Touch</span>
                <span />
              </a>
            </div>
          </div>
        </div>
        <div className="tf-grid-layout md-col-3">
          {services.map((item) => (
            <ServiceCard item={item} key={item.title} />
          ))}
        </div>
      </div>
    </div>
  );
}
