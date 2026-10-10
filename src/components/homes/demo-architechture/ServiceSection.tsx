"use client";

import { useRef } from "react";
import Image from "next/image";

type ServiceItem = {
  image: string;
  title: string;
  delay: string;
};

const services: ServiceItem[] = [
  { image: "/assets/images/demo-architechture/service-1.jpg", title: "Architectural Design", delay: "" },
  { image: "/assets/images/demo-architechture/service-2.jpg", title: "Construction Docs", delay: ".2s" },
  { image: "/assets/images/demo-architechture/service-3.jpg", title: "Project Management", delay: ".4s" },
  { image: "/assets/images/demo-architechture/service-4.jpg", title: "Interior Design", delay: ".6s" },
];

const DESCRIPTION = "Creating design concepts, floor plans, and building layouts.";

function ServiceCard({ item }: { item: ServiceItem }) {
  const cursorRef = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const cursor = cursorRef.current;
    if (!cursor) return;
    cursor.style.top = `${e.clientY - rect.top - 60}px`;
    cursor.style.left = `${e.clientX - rect.left - 60}px`;
    cursor.style.opacity = "1";
    cursor.style.transform = "scale(1)";
  };

  const handleLeave = () => {
    const cursor = cursorRef.current;
    if (!cursor) return;
    cursor.style.opacity = "0";
    cursor.style.transform = "scale(0.3)";
  };

  return (
    <div
      className="service-item style-10 hover-image-translate cursor-wrapper wow fadeInLeft"
      data-wow-delay={item.delay || undefined}
    >
      <a href="#" className="img-style mb_26 area-cursor-custom" onMouseMove={handleMove} onMouseLeave={handleLeave}>
        <Image src={item.image} width={424} height={559} alt="service" />
        <div className="custom-cursor text-button text-capitalize" ref={cursorRef}>
          Discovery
        </div>
      </a>
      <div className="content">
        <h4 className="fw-4 mb_12 text-uppercase line-clamp-1">
          <a href="#" className="hover-line-text">
            {item.title}
          </a>
        </h4>
        <p className="text-body-2 line-clamp-2">{DESCRIPTION}</p>
      </div>
    </div>
  );
}

export default function ServiceSection() {
  return (
    <div className="section-service-17 tf-spacing-1 bg-light-color">
      <div className="tf-container large">
        <div className="heading-section-6 mb_48">
          <div className="row align-items-center">
            <div className="col-7">
              <span className="tag-line lh-16 color-dark text-label text_primary letter-spacing-1 text-uppercase mb_18 wow fadeInUp">
                Our services
              </span>
              <h3 className="text-uppercase font-2 split-text effect-blur-fade">Our services</h3>
            </div>
            <div className="col-5">
              <a href="#" className="tf-btn-2 btn-switch-text border-dark ms-auto wow fadeInRight">
                <span>
                  <span className="btn-double-text" data-text="View All">
                    View All
                  </span>
                </span>
              </a>
            </div>
          </div>
          <div className="line" />
        </div>
        <div className="tf-grid-layout lg-col-4 sm-col-2 gap_24">
          {services.map((item) => (
            <ServiceCard item={item} key={item.title} />
          ))}
        </div>
      </div>
    </div>
  );
}
