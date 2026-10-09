"use client";

import { useState } from "react";
import Image from "next/image";
import { useAnimateImgItem } from "@/hooks/useAnimateImgItem";
import { useSplitTextReveal } from "@/hooks/useSplitTextReveal";
import { programContent, programTabs } from "@/data/demo-healthcoach/programs";

function ProgramPane({ id, active }: { id: string; active: boolean }) {
  const thumbRef = useAnimateImgItem<HTMLDivElement>();

  return (
    <div className={`tab-pane${active ? " active show" : ""}`} id={id} role="presentation">
      <div className="wrap">
        <div className="hover-image-2">
          <div className="thumbs img-style tf-animateCLP-up text-center" ref={thumbRef}>
            <Image width={434} height={579} loading="lazy" src={programContent.image} alt="health-about" />
          </div>
        </div>
        <div className="content-2">
          <div className="tag text-button text_primary-color mb_24 wow fadeInUp">{programContent.tag}</div>
          <h3 className="text_primary-color mb_12">{programContent.title}</h3>
          <p className="text-body-2 mb_24">{programContent.desc}</p>
          <div>
            <a href="#" className="text-button hover-underline-link text_primary-color">
              View Details
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProgramSection() {
  const [activeTab, setActiveTab] = useState("strength");
  const subRef = useSplitTextReveal<HTMLDivElement>("up");
  const titleRef = useSplitTextReveal<HTMLHeadingElement>("scale");

  return (
    <div className="section-program">
      <div className="tf-container medium">
        <div className="box-program flat-animate-tab">
          <div className="content-1">
            <div className="heading-section mb_48">
              <div className="sub text-label text-uppercase text_primary-color split-text effect-up mb_16" ref={subRef}>
                HEALTH IN MOTION
              </div>
              <h2 className="title text_primary-color split-text effect-scale" ref={titleRef}>
                My Fitness Programs
              </h2>
            </div>
            <div className="tab-slide d-flex">
              <ul className="menu-tab mb_48" role="tablist">
                {programTabs.map((tab) => (
                  <li className={`nav-tab-item${activeTab === tab.id ? " active" : ""}`} role="presentation" key={tab.id}>
                    <a
                      href={`#${tab.id}`}
                      className={`tab-link${activeTab === tab.id ? " active" : ""}`}
                      onClick={(e) => {
                        e.preventDefault();
                        setActiveTab(tab.id);
                      }}
                    >
                      <span className="hover-line-text h5 link text_primary">{tab.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <a href="#" className="tf-btn btn-hover-animate-2 btn-bg-secondary-2 btn-px-28 wow fadeInUp" data-wow-delay="0.8s">
              <span>Book Now</span>
              <span />
            </a>
          </div>
          <div className="tab-content">
            {programTabs.map((tab) => (
              <ProgramPane id={tab.id} active={activeTab === tab.id} key={tab.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
