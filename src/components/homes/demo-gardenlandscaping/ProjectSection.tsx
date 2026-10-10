"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useStackElements } from "@/hooks/useStackElements";
import { useScaleUpImage } from "@/hooks/useScaleUpImage";
import { projectTabs, projectItemsLayout, projectContent } from "@/data/demo-gardenlandscaping/home";

function ProjectElement({ item }: { item: (typeof projectItemsLayout)[number] }) {
  const imgRef = useScaleUpImage<HTMLAnchorElement>();

  const content = (
    <div className={`content${item.contentFirst ? "" : " ms-lg-auto"}`}>
      <div className="heading">
        <h4 className="mb_12">
          <Link href="#" className="link">
            {projectContent.title}
          </Link>
        </h4>
        <p className="text-body-2 text_secondary">{projectContent.desc}</p>
      </div>
      <ul className="info">
        {projectContent.info.map((info) => (
          <li key={info.label}>
            <div className="info-item">
              <div className="text-label text_secondary text-uppercase letter-spacing-1 mb_8">{info.label}</div>
              <h6>{info.value}</h6>
            </div>
          </li>
        ))}
      </ul>
      <Link href="#" className="tf-btn style-border btn-hover-animate-border">
        <span>View Project</span>
        <span className="bg-effect" />
      </Link>
    </div>
  );

  const image = (
    <Link href="#" className="img-style scale-up-img" ref={imgRef}>
      <Image className="scale-up" width={690} height={518} loading="lazy" src={item.image} alt="project" />
    </Link>
  );

  return (
    <div className="element">
      <div className="project-item style-2">
        <div className="row align-items-center">
          {item.contentFirst ? (
            <>
              <div className="col-lg-6">{content}</div>
              <div className="col-lg-6">{image}</div>
            </>
          ) : (
            <>
              <div className="col-lg-6">{image}</div>
              <div className="col-lg-6">{content}</div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function ProjectPane({ id, active }: { id: string; active: boolean }) {
  const stackRef = useStackElements<HTMLDivElement>();

  return (
    <div
      className={`tab-pane stack-element${active ? " active show" : ""}`}
      id={id}
      role="presentation"
      ref={stackRef}
    >
      <div className="wrap-project stack-content-wrap">
        {projectItemsLayout.map((item, index) => (
          <ProjectElement item={item} key={index} />
        ))}
      </div>
    </div>
  );
}

export default function ProjectSection() {
  const [activeTab, setActiveTab] = useState("event");

  // The pin positions `useStackElements` computes depend on the pane's
  // current height, which is 0 while it's display:none — forcing each
  // pane's key to include its own active state (below) makes React
  // unmount/remount it on every activation flip, so the hook's effect
  // re-runs fresh against the now-correct (visible or hidden) layout
  // instead of stale measurements from whenever it first mounted.
  useEffect(() => {
    const timer = window.setTimeout(() => ScrollTrigger.refresh(), 50);
    return () => window.clearTimeout(timer);
  }, [activeTab]);

  return (
    <div className="section-project-1 flat-animate-tab tf-spacing-1">
      <div className="tf-container">
        <div className="heading-section text-center mb_48">
          <h3 className="mb_14">Feature Work</h3>
          <p className="text-body-2 text_secondary">A showcase of our finest garden creations.</p>
        </div>

        <div className="tab-slide style-7 d-flex justify-content-center mb_48">
          <ul className="menu-tab d-flex align-items-center gap_16 overflow-x-auto" role="tablist">
            {projectTabs.map((tab) => (
              <li
                className={`nav-tab-item${activeTab === tab.id ? " active" : ""}`}
                role="presentation"
                key={tab.id}
              >
                <a
                  href={`#${tab.id}`}
                  className={`tab-link h6 font-main${activeTab === tab.id ? " active" : ""}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveTab(tab.id);
                  }}
                >
                  {tab.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="tab-content">
          {projectTabs.map((tab) => (
            <ProjectPane id={tab.id} active={activeTab === tab.id} key={`${tab.id}-${activeTab === tab.id}`} />
          ))}
        </div>
      </div>
    </div>
  );
}
