"use client";

import Image from "next/image";
import { useState } from "react";
import { useAccordion } from "@/hooks/useAccordion";
import { useAnimateImgItem } from "@/hooks/useAnimateImgItem";
import { useInfiniteSlide } from "@/hooks/useInfiniteSlide";
import { useSplitTextReveal } from "@/hooks/useSplitTextReveal";

const steps = [
  { key: "process-1", title: "1. Conceptual Design" },
  { key: "process-2", title: "2. Schematic Design" },
  { key: "process-3", title: "3. Design Development" },
  { key: "process-4", title: "4. Construction Documentation" },
];

const desc =
  "A high-rise office building designed for functionality, energy efficiency, and professional workspaces.";

const banners = ["Work Together", "Start Now", "Design Smart", "Grow Faster", "Build Bold"];

function FirstPaneImages() {
  const img1 = useAnimateImgItem<HTMLImageElement>();
  const img2 = useAnimateImgItem<HTMLImageElement>();
  const img3 = useAnimateImgItem<HTMLImageElement>();
  const img4 = useAnimateImgItem<HTMLImageElement>();

  return (
    <div className="wrap-img d-flex gap_23">
      <div className="col-img d-grid gap_19">
        <Image
          ref={img1}
          className="tf-animateCLP-left"
          width={302}
          height={403}
          src="/assets/images/demo-architechture/process-1.jpg"
          alt="process"
        />
        <Image
          ref={img2}
          className="tf-animateCLP-up"
          width={302}
          height={226}
          src="/assets/images/demo-architechture/process-2.jpg"
          alt="process"
        />
      </div>
      <div className="col-img d-grid gap_19">
        <Image
          ref={img3}
          className="tf-animateCLP-left"
          width={302}
          height={403}
          src="/assets/images/demo-architechture/process-3.jpg"
          alt="process"
        />
        <Image
          ref={img4}
          className="tf-animateCLP-down"
          width={302}
          height={226}
          src="/assets/images/demo-architechture/process-4.jpg"
          alt="process"
        />
      </div>
    </div>
  );
}

function PlainPaneImages() {
  return (
    <div className="wrap-img d-flex gap_23">
      <div className="col-img d-grid gap_19">
        <Image width={302} height={403} src="/assets/images/demo-architechture/process-1.jpg" alt="process" />
        <Image width={302} height={226} src="/assets/images/demo-architechture/process-2.jpg" alt="process" />
      </div>
      <div className="col-img d-grid gap_19">
        <Image width={302} height={403} src="/assets/images/demo-architechture/process-3.jpg" alt="process" />
        <Image width={302} height={226} src="/assets/images/demo-architechture/process-4.jpg" alt="process" />
      </div>
    </div>
  );
}

export default function ProcessSection() {
  const titleRef = useSplitTextReveal<HTMLHeadingElement>("blur-fade");
  const [activeTab, setActiveTab] = useState(0);
  const { toggle, isOpen } = useAccordion<string>(steps[0].key);
  const marqueeRef = useInfiniteSlide<HTMLDivElement>({ speed: 100, direction: "left", clone: 2 });

  const handleItemClick = (index: number, key: string) => {
    setActiveTab(index);
    toggle(key);
  };

  return (
    <div className="section-process-9">
      <div className="wrap tf-spacing-1">
        <div className="tf-container large">
          <div className="content-inner widget-tabs flat-animate-tab">
            <div className="box-left">
              <div className="heading-section-6 mb_48">
                <span className="tag-line lh-16 text-label text_white letter-spacing-1 text-uppercase mb_20 wow fadeInUp">
                  Our process
                </span>
                <h3 ref={titleRef} className="text_white text-uppercase font-2 split-text effect-blur-fade">
                  Architectural Design: 4 Core Phases
                </h3>
                <div className="line line-white" />
              </div>
              <ul className="accordion-wrap d-grid gap_16 widget-menu-tab" id="accordion-process">
                {steps.map((step, index) => {
                  const open = isOpen(step.key);
                  return (
                    <li
                      key={step.key}
                      className={`accordion-item item-title action_click style-7 wow fadeInLeft${
                        activeTab === index ? " active" : ""
                      }`}
                    >
                      <a
                        href={`#accordion-${step.key}`}
                        className={`accordion-title action${open ? "" : " collapsed"}`}
                        aria-expanded={open}
                        aria-controls={`accordion-${step.key}`}
                        onClick={(e) => {
                          e.preventDefault();
                          handleItemClick(index, step.key);
                        }}
                      >
                        <div className="heading">
                          <h4 className="title text-uppercase fw-4 text_white">{step.title}</h4>
                          <span className="icon" />
                        </div>
                      </a>
                      <div
                        id={`accordion-${step.key}`}
                        className={`collapse-content${open ? " is-open" : ""}`}
                      >
                        <div className="accordion-faqs-content">
                          <p className="text-body-2 text_muted">{desc}</p>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="box-right widget-content-tab">
              {steps.map((step, index) => (
                <div key={step.key} className={`tab-pane${activeTab === index ? " active" : ""}`}>
                  {index === 0 ? <FirstPaneImages /> : <PlainPaneImages />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="wrap-banner-slide">
        <div ref={marqueeRef} className="infiniteslide" data-clone="2" data-style="left">
          {banners.map((text) => (
            <div key={text} className="banner-inner">
              <i className="icon-icon-1" />
              <h3 className="text_primary fw-6">{text}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
