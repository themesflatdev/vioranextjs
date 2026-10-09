"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { useAtropos } from "@/hooks/useAtropos";
import { useSplitTextReveal } from "@/hooks/useSplitTextReveal";
import { processSteps } from "@/data/demo-aitech/process";

// Mirrors assets/js/main.js `hoverTabs`: hovering a `.item` after a 100ms
// delay (cancelled on mouseleave) swaps the active tab/content unless it's
// already active; leaving the whole `.tabs-hover-wrap` clears the active
// item entirely (none hovered) and falls back to showing the first
// tab-content, exactly like `$tabContents.first().addClass("active")`.
export default function ProcessSection() {
  const [activeTab, setActiveTab] = useState<string | null>(null);
  const hoverTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const subRef = useSplitTextReveal<HTMLDivElement>("up");
  const titleRef = useSplitTextReveal<HTMLHeadingElement>("blur-fade");
  const descRef = useSplitTextReveal<HTMLParagraphElement>("lines-transform");

  const atropos1 = useAtropos<HTMLDivElement>();
  const atropos2 = useAtropos<HTMLDivElement>();
  const atropos3 = useAtropos<HTMLDivElement>();
  const atroposRefs = [atropos1, atropos2, atropos3];

  const activeContentId = activeTab ?? processSteps[0].tab;

  const handleEnter = (tab: string) => {
    hoverTimer.current = setTimeout(() => {
      if (activeTab !== tab) setActiveTab(tab);
    }, 100);
  };

  const handleLeaveItem = () => {
    if (hoverTimer.current) clearTimeout(hoverTimer.current);
  };

  const handleWrapperLeave = () => {
    if (hoverTimer.current) clearTimeout(hoverTimer.current);
    setActiveTab(null);
  };

  return (
    <div className="section-process-2">
      <div className="tf-container">
        <div className="wrap">
          <div className="row tabs-hover-wrap tab-effect-blur align-items-center" onMouseLeave={handleWrapperLeave}>
            <div className="col-lg-6">
              <div className="heading-section style-default d-grid gap_12 mb_48">
                <div className="sub text-label-2 lh-20 text_primary-color text-uppercase" ref={subRef}>
                  Our Process
                </div>
                <h2 className="title" ref={titleRef}>
                  How It Works
                </h2>
                <p className="text-body-2" ref={descRef}>
                  We guide you through every phase of AI transformation with clarity, strategy, and hands-on
                  support from start to finish.
                </p>
              </div>
              <div className="box">
                {processSteps.map((step) => (
                  <div
                    className={`box-process item wow fadeInLeft${activeTab === step.tab ? " active" : ""}`}
                    data-tab={step.tab}
                    key={step.tab}
                    onMouseEnter={() => handleEnter(step.tab)}
                    onMouseLeave={handleLeaveItem}
                  >
                    <h3 className="number font-main">
                      <span>{step.number}</span>
                    </h3>
                    <div className="content">
                      <h5 className="mb_8">{step.title}</h5>
                      <p className="text-body-default line-clamp-2">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="tab-content-wrap">
                {processSteps.map((step, index) => (
                  <div
                    id={step.tab}
                    className={`tab-content${activeContentId === step.tab ? " active" : ""}`}
                    key={step.tab}
                  >
                    <div className="atropos my-atropos" ref={atroposRefs[index]}>
                      <div className="atropos-scale">
                        <div className="atropos-rotate">
                          <div className="atropos-inner">
                            <div className="img-style text-center">
                              <Image loading="lazy" width={595} height={595} src={step.image} alt="process" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
