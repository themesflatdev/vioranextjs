"use client";

import Image from "next/image";
import { useAnimateImgItem } from "@/hooks/useAnimateImgItem";
import { useSplitTextReveal } from "@/hooks/useSplitTextReveal";

// section-resume — awards/recognition list is static demo content, only
// used on about-us.html, no shared data file needed.
const resumeItems = [
  {
    title: "Awwwards – Site of the Day",
    desc: "For outstanding creativity, usability, and visual design.",
    year: "2025",
  },
  {
    title: "CSS Design Awards – Best UI/UX",
    desc: "Recognized for intuitive and user-focused web experiences.",
    year: "2024",
  },
  {
    title: "Clutch Top B2B Agency 2024",
    desc: "Rated among the top digital agencies for client satisfaction.",
    year: "2023",
  },
  {
    title: "30+ Global Brands Served",
    desc: "Trusted by startups and enterprises across 10+ countries.",
    year: "2022",
  },
];

export default function ResumeSection() {
  const imgRef = useAnimateImgItem<HTMLDivElement>();
  const titleRef = useSplitTextReveal<HTMLHeadingElement>("right");
  const descRef = useSplitTextReveal<HTMLParagraphElement>("lines-transform");

  return (
    <div className="section-resume tf-spacing-1">
      <div className="wrap-resume">
        <div className="tf-container large">
          <div className="row">
            <div className="col-xl-5 col-lg-6">
              <div className="thumbs tf-animateCLP-left" ref={imgRef}>
                <Image
                  width={665}
                  height={665}
                  loading="lazy"
                  src="/assets/images/demo-corporate/resume-1.jpg"
                  alt="resume"
                />
              </div>
            </div>
            <div className="col-xl-7 col-lg-6">
              <div className="box-right">
                <div className="heading-section style-default mb_32">
                  <h2 className="title text_white" ref={titleRef}>
                    Recognized For Excellence In Design, Branding & Digital Innovation
                  </h2>
                  <p className="desc text-body-2 text_muted mt_4" ref={descRef}>
                    Our work has been honored by industry leaders and trusted by global brands. From
                    award-winning websites to impactful digital strategies, we&apos;re proud to be
                    recognized for turning bold ideas into exceptional experiences.
                  </p>
                </div>
                <div className="wrap-resume">
                  {resumeItems.map((item, index) => (
                    <div
                      className="wrap-resume-item wow fadeInDown"
                      data-wow-delay={`${0.1 + index * 0.05}s`}
                      key={item.title}
                    >
                      <span className="point" />
                      <div className="resume-item">
                        <div className="content">
                          <h5 className="text_white mb_4 text-capitalize">
                            <a href="#" className="link line-clamp-1">
                              {item.title}
                            </a>
                          </h5>
                          <span className="text-body-default text_muted line-clamp-1">{item.desc}</span>
                        </div>
                        <div className="date h5 text_white">{item.year}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
