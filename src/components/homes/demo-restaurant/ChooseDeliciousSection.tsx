"use client";

import { useState } from "react";
import Image from "next/image";
import { useScrollTransform } from "@/hooks/useScrollTransform";
import { useSplitTextReveal } from "@/hooks/useSplitTextReveal";
import { menuItems, menuTabs } from "@/data/demo-restaurant/menuItems";

export default function ChooseDeliciousSection() {
  const [activeId, setActiveId] = useState("nonvage");
  const titleRef = useSplitTextReveal<HTMLHeadingElement>("blur-fade");
  const itemRef = useScrollTransform<HTMLDivElement>({ direction: "left", distance: "10%" });
  const leafRef = useScrollTransform<HTMLDivElement>({ direction: "up", distance: "20%" });

  return (
    <div className="section-choose-delicious flat-animate-tab tf-spacing-1">
      <div className="tf-container medium">
        <div className="heading-section-3 text-center mb_28 d-grid gap_12 mb_40">
          <div className="sub v2 text-label text-uppercase text_white lh-16 justify-content-center wow fadeInUp">
            Choose delicious
          </div>
          <h3 className="title" ref={titleRef}>
            Popular menu
          </h3>
        </div>
        <div className="tab-slide style-4 d-flex mb_40">
          <ul className="menu-tab d-flex justify-content-between wow fadeInUp" role="tablist">
            {menuTabs.map((tab) => (
              <li className={`nav-tab-item${activeId === tab.id ? " active" : ""}`} role="presentation" key={tab.id}>
                <a
                  href={`#${tab.id}`}
                  className={`tab-link d-flex justify-content-between align-items-center${
                    activeId === tab.id ? " active" : ""
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveId(tab.id);
                  }}
                >
                  <i className={tab.icon} />
                  <span className="text-button">{tab.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="tab-content wow fadeInUp">
          {menuTabs.map((tab) => (
            <div className={`tab-pane${activeId === tab.id ? " active show" : ""}`} id={tab.id} role="tabpanel" key={tab.id}>
              <div className="tf-grid-layout md-col-2 menu-restaurant">
                {menuItems.map((item) => (
                  <div className="menu-restaurant-item style-text" key={item.name}>
                    <div className="heading d-flex justify-content-between gap_16">
                      <a href="#" className="link h6 text-capitalize">
                        {item.name}
                      </a>
                      <h6 className="text_primary-color">{item.price}</h6>
                    </div>
                    <p className="text-body-default">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="item scroll-transform" ref={itemRef}>
        <Image width={380} height={893} src="/assets/images/demo-restaurant/item-restaurant-5.png" alt="item" />
      </div>
      <div className="leaf scroll-transform" ref={leafRef}>
        <Image width={442} height={538} src="/assets/images/demo-restaurant/leaf.png" alt="item" />
      </div>
    </div>
  );
}
