"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSplitTextReveal } from "@/hooks/useSplitTextReveal";
import { demoFilters, demoWowDelay, landingDemos } from "@/data/landing/demos";

// No Isotope here (landing prompt: "KHÔNG dùng thư viện isotope: làm bằng
// React state"). Isotope's `fitRows` absolutely-positions hidden/shown items
// in JS; this reimplementation keeps every card mounted and toggles a
// `.is-hidden` class that collapses width/opacity/scale via CSS transition
// (src/styles/_landing.scss `.section-demos .fillters-wrap .item-fillter`) —
// flexbox reflows the remaining visible cards automatically.
export default function DemosSection() {
  const titleRef = useSplitTextReveal<HTMLHeadingElement>("right");
  const [activeFilter, setActiveFilter] = useState("*");

  return (
    <div id="demos" className="section-demos tf-spacing-16 section">
      <div className="tf-container">
        <div className="heading-section text-center mb_40">
          <Image
            className="mb_16"
            src="/assets/images/landing/number-demos.png"
            alt="number-demos"
            width={518}
            height={232}
          />
          <h3 ref={titleRef} className="title mb_16 text_primary mb_16 split-text effect-right">
            An Extensive Collection Of 20+ Stunning Agency Website Templates
          </h3>
          <p className="text-body-2 text_secondary wow fadeInUp" data-wow-delay="0.2s">
            Best-in-class designs to get started. Install any demo or template with a single click. Mix and match
            section templates to create unique sites.
          </p>
        </div>

        <div className="tf-filters gap_4 mb_40 overflow-x-auto mx-auto wow fadeInUp" data-wow-delay="0.4s">
          {demoFilters.map((f) => (
            <button
              key={f.filter}
              type="button"
              className={`btn-fillter text-button${activeFilter === f.filter ? " active" : ""}`}
              onClick={() => setActiveFilter(f.filter)}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="fillters-wrap fillter-col-3 wow fadeInUp" data-wow-delay="0.4s">
          {landingDemos.map((demo, i) => {
            const isHidden = activeFilter !== "*" && demo.filter !== activeFilter;
            return (
              <div
                key={demo.href}
                className={`demo-card hover-image-2 item-fillter ${demo.filter} wow flipInX${isHidden ? " is-hidden" : ""}`}
                data-wow-delay={demoWowDelay(i)}
              >
                <div className="img-style">
                  <Image width={402} height={496} loading="lazy" src={demo.image} alt="demo" />
                  <div className="wrap-button">
                    <Link href={demo.href} className="tf-btn btn-hover-animate-2 mx-auto">
                      <span>View Homepage</span>
                      <span className="bg-effect" />
                    </Link>
                  </div>
                </div>
                <Link href={demo.href} className="overlay-link" />
                <div className="content">
                  <Link href={demo.href} className="title link h5">
                    {demo.name}
                  </Link>
                  <div className={`tag ${demo.tagClass} text-button`}>{demo.tagLabel}</div>
                </div>
              </div>
            );
          })}
          <div
            className={`demo-card soon item-fillter wow flipInX${activeFilter !== "*" ? " is-hidden" : ""}`}
            data-wow-delay="0.3s"
          >
            <div className="img-style">
              <Image width={402} height={496} loading="lazy" src="/assets/images/landing/demo-8.jpg" alt="demo" />
              <h3 className="sub text_white">Coming soon</h3>
            </div>
            <Link href="#" className="overlay-link" />
            <div className="content">
              <Link href="#" className="title link">
                Coming soon
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
