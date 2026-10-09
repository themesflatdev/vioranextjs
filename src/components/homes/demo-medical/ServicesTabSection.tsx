"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSplitTextReveal } from "@/hooks/useSplitTextReveal";
import { medicalServices } from "@/data/demo-medical/services";

type ServicesTabSectionProps = {
  // "home" (default): bg-primary-color, title text_white "Medical Services",
  // icon-ArrowRight3, box-service (no v2), no wow on tab-slide/tab-content.
  // "service" = /service page: tf-spacing-1 (no bg-primary-color), title
  // "Explore Our Main Service" (not white), icon-ArrowRight, box-service v2,
  // wow fadeInLeft on tab-slide + tab-content. Confirmed line-by-line against
  // service.html vs index.html, not assumed from one another.
  variant?: "home" | "service";
};

// All 7 panes share identical content (sub/title/desc/image) — a real
// content bug in the original HTML (demo copy never customized per tab),
// preserved verbatim per CLAUDE.md rule 4. Only the active pane shown changes.
export default function ServicesTabSection({ variant = "home" }: ServicesTabSectionProps) {
  const [activeId, setActiveId] = useState("pediatrics");
  const titleRef = useSplitTextReveal<HTMLHeadingElement>("left");
  const isHome = variant === "home";

  return (
    <div
      className={`section-service-5 flat-animate-tab${isHome ? " tf-spacing-6 bg-primary-color" : " tf-spacing-1"}`}
    >
      <div className="tf-container medium">
        <div className={`heading-section-5 text-center${isHome ? " mb_48" : " mb_40"}`}>
          <div className="tag text-label text-uppercase wow fadeInUp mb_16">Our Services</div>
          <h2 className={`title${isHome ? " text_white" : ""}`} ref={titleRef}>
            {isHome ? "Medical Services" : "Explore Our Main Service"}
          </h2>
        </div>
        <div className="d-flex gap_30 wrap">
          <div className={`tab-slide style-3 d-flex${isHome ? "" : " wow fadeInLeft"}`}>
            <ul className="menu-tab d-flex flex-column" role="tablist">
              {medicalServices.map((service) => (
                <li
                  className={`nav-tab-item${activeId === service.id ? " active" : ""}`}
                  role="presentation"
                  key={service.id}
                >
                  <a
                    href={`#${service.id}`}
                    className={`tab-link d-flex justify-content-between align-items-center${
                      activeId === service.id ? " active" : ""
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveId(service.id);
                    }}
                  >
                    <span className="text-button">{service.name}</span>
                    <i className={isHome ? "icon-ArrowRight3" : "icon-ArrowRight"} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div
            className={`tab-content${isHome ? "" : " wow fadeInLeft"}`}
            {...(isHome ? {} : { "data-wow-delay": ".1s" })}
          >
            {medicalServices.map((service) => (
              <div
                className={`tab-pane${activeId === service.id ? " active show" : ""}`}
                id={service.id}
                role="tabpanel"
                key={service.id}
              >
                <div className={`box-service${isHome ? "" : " v2"} hover-image-2`}>
                  <div className="tf-grid-layout sm-col-2 gap-0">
                    <div className="img-style">
                      <Image loading="lazy" width={480} height={480} src="/assets/images/demo-medical/service-9.jpg" alt="service" />
                    </div>
                    <div className="content-inner position-relative flex-column d-flex justify-content-center">
                      <div className="content">
                        <div className="heading mb_28">
                          <div className="sub text-label text-uppercase mb_12 text_primary lh-16">Cardiology</div>
                          <Link href="/demo-medical/service-detail/cardiology" className="title h4 link">
                            Trusted Advanced Care for Heart Health
                          </Link>
                        </div>
                        <p className="text_secondary text-body-2">
                          At our medical center, our experienced cardiologists offer comprehensive,
                          personalized heart care to diagnose, treat, and manage a wide range of
                          cardiovascular.
                        </p>
                      </div>
                      <div className="bg">
                        <Image loading="lazy" width={480} height={480} src="/assets/images/shape/shape-card-2.png" alt="shape-card" />
                      </div>
                      <Link href="/demo-medical/service-detail/cardiology" className="btn-arrow">
                        <i className="icon-ArrowUpRight" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
