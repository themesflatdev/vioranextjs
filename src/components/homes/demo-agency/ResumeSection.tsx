"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { useInfiniteSlide } from "@/hooks/useInfiniteSlide";
import { useSplitTextReveal } from "@/hooks/useSplitTextReveal";

type ResumeItem = {
  tab: string;
  title: string;
  desc: string;
  date: string;
  delay: string;
};

const resumeItems: ResumeItem[] = [
  {
    tab: "tab1",
    title: "Awwwards – Site of the Day",
    desc: "For outstanding creativity, usability, and visual design.",
    date: "2025",
    delay: "0.1s",
  },
  {
    tab: "tab2",
    title: "CSS Design Awards – Best UI/UX",
    desc: "Recognized for intuitive and user-focused web experiences.",
    date: "2024",
    delay: "0.15s",
  },
  {
    tab: "tab3",
    title: "Clutch Top B2B Agency 2024",
    desc: "Rated among the top digital agencies for client satisfaction.",
    date: "2023",
    delay: "0.2s",
  },
  {
    tab: "tab4",
    title: "30+ Global Brands Served",
    desc: "Trusted by startups and enterprises across 10+ countries.",
    date: "2022",
    delay: "0.25s",
  },
];

const banners = ["Work Together", "Start Now", "Design Smart", "Grow Faster", "Build Bold"];

// Mirrors assets/js/main.js `hoverTabs`: hovering a `.item` after a 100ms
// delay swaps the active tab/content (data-tab -> #tabId), and leaving the
// whole `.tabs-hover-wrap` resets back to the first tab.
export default function ResumeSection() {
  const [activeTab, setActiveTab] = useState("tab1");
  const hoverTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const titleRef = useSplitTextReveal<HTMLHeadingElement>("blur-fade");
  const descRef = useSplitTextReveal<HTMLParagraphElement>("lines-transform");
  const marqueeRef = useInfiniteSlide<HTMLDivElement>({ speed: 50, direction: "left", clone: 2 });

  const handleEnter = (tab: string) => {
    hoverTimer.current = setTimeout(() => setActiveTab(tab), 100);
  };

  const handleLeave = () => {
    if (hoverTimer.current) clearTimeout(hoverTimer.current);
  };

  const handleWrapperLeave = () => {
    if (hoverTimer.current) clearTimeout(hoverTimer.current);
    setActiveTab("tab1");
  };

  return (
    <div className="section-resume-2">
      <div className="wrap-content-resume tf-spacing-1">
        <div
          className="tf-container large tabs-hover-wrap tab-effect-left"
          onMouseLeave={handleWrapperLeave}
        >
          <div className="row">
            <div className="col-xl-5 col-lg-6">
              <div className="tab-content-wrap">
                {resumeItems.map((item) => (
                  <div
                    key={item.tab}
                    id={item.tab}
                    className={`thumbs tab-content${activeTab === item.tab ? " active" : ""}`}
                  >
                    <Image
                      width={665}
                      height={665}
                      loading="lazy"
                      src="/assets/images/demo-agency/resume-2.jpg"
                      alt="resume"
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="col-xl-7 col-lg-6">
              <div className="box-right">
                <div className="heading-section style-default mb_32">
                  <h2 className="title text_white text-capitalize" ref={titleRef}>
                    Recognized for Excellence in Design, Branding &amp; Digital Innovation
                  </h2>
                  <p className="desc text-body-2 text_muted mt_4" ref={descRef}>
                    Our work has been honored by industry leaders and trusted by global brands. From
                    award-winning websites to impactful digital strategies, we&rsquo;re proud to be
                    recognized for turning bold ideas into exceptional experiences.
                  </p>
                </div>
                <div className="wrap-resume">
                  {resumeItems.map((item) => (
                    <div
                      key={item.tab}
                      className="wrap-resume-item item wow fadeInDown"
                      data-tab={item.tab}
                      data-wow-duration="1s"
                      data-wow-delay={item.delay}
                      onMouseEnter={() => handleEnter(item.tab)}
                      onMouseLeave={handleLeave}
                    >
                      <span className="point" />
                      <div className="resume-item">
                        <div className="content">
                          <h5 className="text_white mb_4 text-capitalize">
                            <a href="#" className="link">
                              {item.title}
                            </a>
                          </h5>
                          <span className="text-body-default text_muted line-clamp-1">{item.desc}</span>
                        </div>
                        <div className="date h5 text_white">{item.date}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="wrap-banner-slide">
        <div className="infiniteslide" data-clone="2" data-style="left" ref={marqueeRef}>
          {banners.map((text) => (
            <div className="banner-inner" key={text}>
              <i className="icon-icon-1" />
              <h3 className="text_primary">{text}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
