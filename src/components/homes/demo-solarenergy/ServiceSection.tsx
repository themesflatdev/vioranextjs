"use client";

import { useSplitTextReveal } from "@/hooks/useSplitTextReveal";

const SERVICES = [
  { variant: "v1", icon: "icon-SunDim", title: "Solar Energy" },
  { variant: "v2", icon: "icon-Wind", title: "Wind Power" },
  { variant: "v3", icon: "icon-BatteryCharging", title: "Energy Storage" },
  { variant: "v4", icon: "icon-Lightning", title: "Smart Efficiency" },
];

const DESCRIPTION = "Advanced battery storage to ensure stability, efficiency, and 24/7 energy supply.";

export default function ServiceSection() {
  const titleRef = useSplitTextReveal<HTMLHeadingElement>("lines-rotation-x");

  return (
    <div className="section-service-15 tf-spacing-1">
      <div className="tf-container">
        <div className="heading-section mb_80">
          <span className="sub text-label text_primary letter-spacing-1 text-uppercase mb_16 d-block wow fadeInUp">
            Our Services
          </span>
          <h2 ref={titleRef} className="text-capitalize split-text split-lines-rotation-x">
            We deliver innovative solar &amp; wind solutions for sustainable, efficient, long-term value.
          </h2>
        </div>
        <div className="tf-grid-layout sm-col-2 gap_30 wow fadeInUp">
          {SERVICES.map((service) => (
            <div key={service.variant} className={`service-item style-7 ${service.variant}`}>
              <div className="content">
                <div className="heading">
                  <div className="icon">
                    <i className={service.icon} />
                  </div>
                  <div className="overflow-hidden">
                    <h3 className="title">
                      <a href="#" className="hover-line-text">
                        {service.title}
                      </a>
                    </h3>
                    <p className="text-body-2">{DESCRIPTION}</p>
                  </div>
                </div>
                <a href="#" className="btn_link text-body-2 d-flex align-items-center gap_4 hover-line-text">
                  Learn More <i className="icon-CaretRight" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
