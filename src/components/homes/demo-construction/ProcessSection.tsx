"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { useSplitTextReveal } from "@/hooks/useSplitTextReveal";

type ProcessItem = {
  tab: string;
  number: string;
  title: string;
  desc: string;
  image: string;
};

const processItems: ProcessItem[] = [
  {
    tab: "tab1",
    number: "01",
    title: "Consultation",
    desc: "Understanding your needs, budget, and clear project vision right from the start.",
    image: "/assets/images/demo-construction/thumb-process.jpg",
  },
  {
    tab: "tab2",
    number: "02",
    title: "Design & Engineering",
    desc: "Creating detailed plans for safe, efficient, and cost-effective construction builds.",
    image: "/assets/images/demo-construction/thumb-process-2.jpg",
  },
  {
    tab: "tab3",
    number: "03",
    title: "Construction & Management",
    desc: "Executing every stage with strict quality control and clear client communication.",
    image: "/assets/images/demo-construction/thumb-process-3.jpg",
  },
  {
    tab: "tab4",
    number: "04",
    title: "Final Delivery & Support",
    desc: "Completing on time and ensuring lasting value with reliable ongoing support.",
    image: "/assets/images/demo-construction/thumb-process-4.jpg",
  },
];

// Mirrors assets/js/main.js `hoverTabs`: no item active initially (only the
// first tab-content active); hovering an `.item` after a 100ms delay (reset
// if the cursor leaves before it fires) swaps the active item/content;
// leaving the whole `.tabs-hover-wrap` resets back to the first tab.
export default function ProcessSection() {
  const [activeTab, setActiveTab] = useState<string | null>(null);
  const hoverTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const subRef = useSplitTextReveal<HTMLDivElement>("left");
  const titleRef = useSplitTextReveal<HTMLHeadingElement>("blur-fade");

  const activeContentTab = activeTab ?? "tab1";

  const handleEnter = (tab: string) => {
    hoverTimer.current = setTimeout(() => setActiveTab(tab), 100);
  };

  const handleLeave = () => {
    if (hoverTimer.current) clearTimeout(hoverTimer.current);
  };

  const handleWrapperLeave = () => {
    if (hoverTimer.current) clearTimeout(hoverTimer.current);
    setActiveTab(null);
  };

  return (
    <div className="section-process-4 tf-spacing-1">
      <div className="tf-container tabs-hover-wrap tab-effect-blur" onMouseLeave={handleWrapperLeave}>
        <div className="heading-section d-grid gap_14 text-center mb_48">
          <div className="sub text-label text-uppercase split-text effect-left text_primary-color lh-16" ref={subRef}>
            Our Process
          </div>
          <h2 className="title split-text effect-blur-fade" ref={titleRef}>
            From Plan to Perfection
          </h2>
        </div>
        <div className="tf-grid-layout lg-col-2 column-gap-0 align-items-center">
          <div className="box-process">
            {processItems.map((item) => (
              <div
                key={item.tab}
                className={`process-item item${activeTab === item.tab ? " active" : ""}`}
                data-tab={item.tab}
                onMouseEnter={() => handleEnter(item.tab)}
                onMouseLeave={handleLeave}
              >
                <h3 className="number">{item.number}</h3>
                <div className="content">
                  <h4 className="mb_8 text-uppercase">{item.title}</h4>
                  <p className="text-body-default line-clamp-2 text_secondary">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="tab-content-wrap">
            {processItems.map((item) => (
              <div
                key={item.tab}
                id={item.tab}
                className={`thumbs tab-content${activeContentTab === item.tab ? " active" : ""}`}
              >
                <Image width={705} height={705} loading="lazy" src={item.image} alt="process" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
