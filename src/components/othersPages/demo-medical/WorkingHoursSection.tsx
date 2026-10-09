"use client";

import { useState } from "react";
import Image from "next/image";
import { useSplitTextReveal } from "@/hooks/useSplitTextReveal";

const tabs = [
  { id: "all", label: "View All" },
  { id: "bodySurgery", label: "Body Surgery" },
  { id: "dentalCare", label: "Dental Care" },
  { id: "cardiology", label: "Cardiology" },
];

// Cả 4 pane đều dùng chung 1 ảnh calendar.png — lỗi demo gốc, giữ nguyên
// (đổi tab chỉ đổi pane đang hiện, nội dung vẫn y hệt).
export default function WorkingHoursSection() {
  const [activeId, setActiveId] = useState("bodySurgery");
  const titleRef = useSplitTextReveal<HTMLHeadingElement>("left");

  return (
    <div className="section-workinghours flat-animate-tab tf-spacing-1">
      <div className="tf-container medium">
        <div className="heading-section-5 mb_60 text-center">
          <div className="tag text-label text-uppercase wow fadeInUp mb_20">Working hours</div>
          <h2 className="title" ref={titleRef}>
            Find The Hours That Suits For You
          </h2>
        </div>
        <div className="tab-slide style-6 d-flex justify-content-center mb_48">
          <ul className="menu-tab d-flex align-items-center gap_14 overflow-x-auto" role="tablist">
            {tabs.map((tab) => (
              <li className="nav-tab-item" role="presentation" key={tab.id}>
                <a
                  href={`#${tab.id}`}
                  className={`tab-link text-button${activeId === tab.id ? " active" : ""}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveId(tab.id);
                  }}
                >
                  {tab.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="tab-content wow fadeInLeft" data-wow-delay=".1s">
          {tabs.map((tab) => (
            <div
              className={`tab-pane${activeId === tab.id ? " active show" : ""}`}
              id={tab.id}
              role="tabpanel"
              key={tab.id}
            >
              <div className="calendar">
                <Image width={1290} height={936} loading="lazy" src="/assets/images/demo-medical/calendar.png" alt="calendar" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
