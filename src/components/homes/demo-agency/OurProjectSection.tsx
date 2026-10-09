"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { useSplitTextReveal } from "@/hooks/useSplitTextReveal";
import { useSwiperControls } from "@/hooks/useSwiperControls";
import { projects, type Project } from "@/data/demo-agency/projects";

type ProjectCardProps = {
  project: Project;
  isActive: boolean;
  onMouseEnter?: () => void;
  onTitleEnter: () => void;
  onTitleLeave: () => void;
};

function ProjectCard({ project, isActive, onMouseEnter, onTitleEnter, onTitleLeave }: ProjectCardProps) {
  const href = `/demo-agency/portfolio-detail/${project.slug}`;

  return (
    <div
      className={`project-item item-hover swiper-slide${isActive ? " is-active" : ""}`}
      onMouseEnter={onMouseEnter}
    >
      <Link href={href} className="img-style mb_20">
        <Image width={880} height={580} loading="lazy" src={project.image} alt="process" />
      </Link>
      <div className="content">
        <Link
          href={href}
          className="h4 text_primary link mb_4 process-title"
          onMouseEnter={onTitleEnter}
          onMouseLeave={onTitleLeave}
        >
          {project.title}
        </Link>
        <p className="text-body-2 text_secondary">{project.category}</p>
      </div>
    </div>
  );
}

// Mirrors assets/js/main.js `hoverActive` (`.item-hover` mouseenter swaps
// `.is-active`, first item active by default) responsively combined with
// `.tf-sw-mobile` (real Swiper only below 767px per data-screen="767" —
// above it the theme destroys the Swiper instance and this becomes a
// plain flex row, letting CSS's `res(md, min)` hover-accordion take over).
// The custom cursor tracks the mouse across the whole `.wrap-thumbs` area
// (matches the original's `$area.offset()` always resolving to the first
// matched element) and hides (`.disable`) while hovering a `.process-title`
// link, exactly like `cursorCustom` in main.js.
export default function OurProjectSection() {
  const titleRef = useSplitTextReveal<HTMLHeadingElement>("blur-fade");
  const descRef = useSplitTextReveal<HTMLParagraphElement>("lines-transform");
  const isMobile = useMediaQuery("(max-width: 767px)");
  const [activeIndex, setActiveIndex] = useState(0);
  const cursorRef = useRef<HTMLDivElement>(null);
  const { dotsRef, onSwiper } = useSwiperControls();

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
    <div className="section-our-project tf-spacing-1">
      <div className="tf-container large">
        <div className="heading-section-2 mb_44">
          <div className="row">
            <div className="col-lg-6">
              <h2 className="title text_primary" ref={titleRef}>
                Our Project
              </h2>
            </div>
            <div className="col-lg-6">
              <div className="right">
                <p className="text_secondary text-body-2" ref={descRef}>
                  We provide creative solutions to grow your brand. From strategy to design and
                  marketing, we deliver impactful results that matter.
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
          <div className="swiper tf-sw-mobile">
            {isMobile ? (
              <Swiper
                modules={[Pagination]}
                slidesPerView={1}
                spaceBetween={15}
                pagination={{ el: dotsRef.current, clickable: true }}
                onSwiper={onSwiper}
                wrapperClass="wrap-box-hover-active"
              >
                {projects.map((project) => (
                  <SwiperSlide key={project.image}>
                    <ProjectCard
                      project={project}
                      isActive={false}
                      onTitleEnter={handleTitleEnter}
                      onTitleLeave={handleTitleLeave}
                    />
                  </SwiperSlide>
                ))}
                {isMobile && (
                  <div
                    className="sw-dots style-1 sw-pagination-mb justify-content-center d-flex mt_24 d-md-none"
                    ref={dotsRef}
                  />
                )}
              </Swiper>
            ) : (
              <div className="swiper-wrapper wrap-box-hover-active">
                {projects.map((project, index) => (
                  <ProjectCard
                    key={project.image}
                    project={project}
                    isActive={activeIndex === index}
                    onMouseEnter={() => setActiveIndex(index)}
                    onTitleEnter={handleTitleEnter}
                    onTitleLeave={handleTitleLeave}
                  />
                ))}
              </div>
            )}
          </div>
          <div className="custom-cursor text-button fw-6" ref={cursorRef}>
            View
          </div>
        </div>
      </div>
    </div>
  );
}
