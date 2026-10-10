"use client";

import { useRef } from "react";
import Image from "next/image";
import { serviceItems, type ServiceItem } from "@/data/demo-coworkingspace/services";

// Mirrors assets/js/main.js `cursorCustom` for `.area-cursor-custom` — each
// card tracks the mouse within its own image area independently.
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
    <div className="service-item style-4 cursor-wrapper hover-image">
      <a
        href="#"
        className="img-style mb_28 area-cursor-custom"
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
      >
        <Image
          width={428}
          height={580}
          loading="lazy"
          src={`/assets/images/demo-coworkingspace/${item.image}`}
          alt="service"
        />
        <div className="custom-cursor h6 text-capitalize" ref={cursorRef}>
          View <br />
          Room
        </div>
      </a>
      <div className="content">
        <h4 className="mb_8">
          <a href="#" className="link hover-line-text">
            {item.title}
          </a>
        </h4>
        <p className="text-body-2 text_secondary">{item.desc}</p>
      </div>
    </div>
  );
}

export default function ServiceSection() {
  return (
    <div className="section-service-11 tf-spacing-1">
      <div className="tf-container large">
        <div className="heading-section text-center d-grid gap_16 mb_48">
          <div className="letter-spacing-1 text-label lh-16 text_secondary split-text effect-up">
            SPACES FOR YOU
          </div>
          <h2 className="split-text effect-right">Choose Your Perfect Room</h2>
          <p className="text-body-2 text_secondary wow fadeInUp" data-wow-delay="0.4s">
            Explore flexible room choices designed for freelancers, small teams, and growing
            startups.
          </p>
        </div>
        <div className="tf-grid-layout lg-col-4 sm-col-2 gap_20">
          {serviceItems.map((item) => (
            <ServiceCard item={item} key={item.title} />
          ))}
        </div>
      </div>
    </div>
  );
}
