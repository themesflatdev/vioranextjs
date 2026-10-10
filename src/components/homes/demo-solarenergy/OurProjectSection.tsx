"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useMobileSwiper } from "@/hooks/useMobileSwiper";
import { useSplitTextReveal } from "@/hooks/useSplitTextReveal";

type Project = {
  image: string;
  title: string;
};

const projects: Project[] = [
  { image: "/assets/images/demo-solarenergy/project-1.jpg", title: "Clean Energy for Every Home" },
  { image: "/assets/images/demo-solarenergy/project-2.jpg", title: "Sustainable Energy for a Brighter Future" },
  { image: "/assets/images/demo-solarenergy/project-3.jpg", title: "Clean Energy, Driven by Nature" },
];

// Mirrors assets/js/main.js `hoverActive` (`.item-hover` mouseenter swaps
// `.is-active`, first item active by default, never removed on mouseleave)
// combined with `.tf-sw-mobile` (real Swiper only below 575px, destroyed
// above it so the static 3-up CSS grid takes over). Custom cursor tracks
// the mouse across the whole `.wrap-thumbs` area (matches the original's
// `cursorCustom`) and hides (`.disable`) while hovering a `.process-title`.
export default function OurProjectSection() {
  const titleRef = useSplitTextReveal<HTMLHeadingElement>("blur-fade");
  const descRef = useSplitTextReveal<HTMLParagraphElement>("lines-transform");
  const swiperRef = useMobileSwiper<HTMLDivElement>({ screen: 575, preview: 1, spacing: 15 });
  const [activeIndex, setActiveIndex] = useState(0);
  const cursorRef = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const cursor = cursorRef.current;
    if (!cursor) return;
    cursor.style.top = `${e.clientY - rect.top - 60}px`;
    cursor.style.left = `${e.clientX - rect.left - 60}px`;
    cursor.style.opacity = "1";
    cursor.style.transform = "scale(1)";
  };

  const handleLeave = () => {
    const cursor = cursorRef.current;
    if (!cursor) return;
    cursor.style.opacity = "0";
    cursor.style.transform = "scale(0.3)";
  };

  const handleTitleEnter = () => cursorRef.current?.classList.add("disable");
  const handleTitleLeave = () => cursorRef.current?.classList.remove("disable");

  return (
    <div className="section-our-project-2 tf-spacing-1">
      <div className="tf-container large">
        <div className="heading-section-2 mb_44">
          <span className="sub text-label text_primary letter-spacing-1 text-uppercase mb_16 d-block lh-16 wow fadeInUp">
            OUR PROJECT
          </span>
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h2 ref={titleRef} className="text-capitalize split-text effect-blur-fade">
                Project Solar
              </h2>
            </div>
            <div className="col-lg-6">
              <div className="right">
                <p ref={descRef} className="text_secondary text-body-2 split-text split-lines-transform">
                  Project Solar is our commitment to greener logistics. By using solar-powered facilities and
                  renewable energy, we reduce emissions and move toward a cleaner, sustainable future.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="wrap-thumbs position-relative cursor-wrapper"
          onMouseMove={handleMove}
          onMouseLeave={handleLeave}
        >
          <div
            className="swiper tf-sw-mobile area-cursor-custom"
            data-screen="575"
            data-preview="1"
            data-space="15"
            ref={swiperRef}
          >
            <div className="swiper-wrapper wrap-box-hover-active">
              {projects.map((project, index) => (
                <div
                  key={project.image}
                  className={`project-item item-hover swiper-slide cursor-wrapper${
                    activeIndex === index ? " is-active" : ""
                  }`}
                  onMouseEnter={() => setActiveIndex(index)}
                >
                  <Link href="#" className="img-style area-cursor-custom">
                    <Image width={880} height={580} loading="lazy" src={project.image} alt="project" />
                  </Link>
                  <div className="content">
                    <h5 className="text_white text-capitalize">
                      <Link
                        href="#"
                        className="link line-clamp-1 process-title"
                        onMouseEnter={handleTitleEnter}
                        onMouseLeave={handleTitleLeave}
                      >
                        {project.title}
                      </Link>
                    </h5>
                  </div>
                </div>
              ))}
            </div>
            <div className="sw-dots style-1 sw-pagination-mb justify-content-center d-flex mt_24 d-md-none" />
            <div className="custom-cursor text-button fw-6" ref={cursorRef}>
              View
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
