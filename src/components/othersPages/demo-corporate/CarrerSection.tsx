"use client";

import Image from "next/image";
import Link from "next/link";
import { useSectionTrigger } from "@/hooks/useSectionTrigger";
import { useSplitTextReveal } from "@/hooks/useSplitTextReveal";
import { jobs } from "@/data/demo-corporate/jobs";

const groupAvatars = [
  "/assets/images/avatar/group-avatar-large-1.jpg",
  "/assets/images/avatar/group-avatar-large-2.jpg",
  "/assets/images/avatar/group-avatar-large-3.jpg",
];

// section-carrer — heading typo "Oin The Team..." fixed to "Join The Team..."
// (real typo in carrer.html, per corporate-pages-remaining.md). Uncover
// reveal reuses the same effectSectionTriger mechanism as service-detail.
export default function CarrerSection() {
  const sectionRef = useSectionTrigger<HTMLDivElement>();
  const titleRef = useSplitTextReveal<HTMLHeadingElement>("lines-rotation-x");
  const hiringTitleRef = useSplitTextReveal<HTMLHeadingElement>("right");
  const hiringDescRef = useSplitTextReveal<HTMLParagraphElement>("lines-transform");

  return (
    <div className="section-carrer tf-spacing-1">
      <div className="tf-container">
        <div className="heading-section style-2 mb_60">
          <div className="heading d-flex align-items-md-center justify-content-between gap_16">
            <div className="d-grid gap_16 left">
              <div className="sub text-label text-uppercase wow fadeInUp">Carrer</div>
              <h1 className="title" ref={titleRef}>
                Join The Team Behind Industry-Changing Work
              </h1>
            </div>
            <div className="group-avatar">
              {groupAvatars.map((src, index) => (
                <Image
                  key={src}
                  className="wow fadeInRight"
                  data-wow-delay={`${(index + 1) * 0.1}s`}
                  width={220}
                  height={220}
                  src={src}
                  alt="avatar"
                />
              ))}
            </div>
          </div>
          <div className="bot d-flex align-items-center gap_12 wow fadeInUp">
            <Image width={240} height={100} src="/assets/images/demo-corporate/img-heading.jpg" alt="images" />
            <p className="text-body-2 text_secondary">
              Join a team where innovation meets impact — and where your work truly matters.
            </p>
          </div>
        </div>
        <div className="thumbs mb_60 section-triger overflow-hidden position-relative" ref={sectionRef}>
          <Image
            className="image-inner"
            loading="lazy"
            width={1410}
            height={680}
            src="/assets/images/demo-corporate/carrer-1.jpg"
            alt="carrer"
          />
          <div className="uncover">
            <div className="uncover_slice" />
            <div className="uncover_slice" />
            <div className="uncover_slice" />
          </div>
        </div>
        <div className="desc d-flex mb_60">
          <h3 className="text-nowrap">Why Work With Us?</h3>
          <div className="wrap-text">
            <p className="text-body-2 text_secondary">
              At Viora, we don&apos;t just build solutions — we build futures.
            </p>
            <p className="text-body-2 text_secondary">
              We&apos;re a team of thinkers, doers, and lifelong learners committed to helping
              businesses grow smarter. Whether you&apos;re in tech, strategy, design, or
              operations, your work here directly shapes how organizations around the world
              operate and evolve.
            </p>
          </div>
        </div>
      </div>
      <div className="hiring">
        <div className="wrap-box tf-spacing-1">
          <div className="content-inner">
            <div className="heading d-flex align-items-center justify-content-between mb_44">
              <h2 className="title text_white" ref={hiringTitleRef}>
                We&apos;re Currently
                <br />
                Hiring
              </h2>
              <p className="text_white text-body-2" ref={hiringDescRef}>
                We&apos;re looking for passionate, curious, and driven individuals to join our
                growing team. Whether you&apos;re a strategist, engineer, creative, or operator —
                if you&apos;re ready to make real impact and grow alongside industry leaders,
                we&apos;d love to hear from you.
              </p>
            </div>
            <div className="wrap-box-number">
              {jobs.map((job) => (
                <div className="tf-box-number" key={job.slug}>
                  <div className="content">
                    <div className="heading">
                      <div className="number h1 font-6">{job.number}</div>
                      <div>
                        <Link href={`/carrer-detail/${job.slug}`} className="title mb_8 font-2 h4 link text_white">
                          {job.title}
                        </Link>
                        <p className="text_primary-color text-body-default">{job.department}</p>
                      </div>
                    </div>
                  </div>
                  <div className="wrap-btn">
                    <p className="h6 font-2 text_muted fw-5 text-nowrap">(02 Open Roles)</p>
                    <Link href={`/carrer-detail/${job.slug}`} className="btn-arrow">
                      <i className="icon-ArrowUpRight" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
