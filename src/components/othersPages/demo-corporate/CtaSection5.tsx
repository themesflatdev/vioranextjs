"use client";

import Image from "next/image";
import { useSplitTextReveal } from "@/hooks/useSplitTextReveal";

const avatars = [
  "/assets/images/avatar/group-avatar-1-1.jpg",
  "/assets/images/avatar/group-avatar-1-2.jpg",
  "/assets/images/avatar/group-avatar-1-3.jpg",
];

type CtaSection5Props = {
  // /carrer-detail overrides the wrapper (adds "tf-spacing-1 pt-0", per its
  // own HTML) and the description (the original leaks AI Content Writer
  // copy — "Say goodbye to writer's block..." — fixed there per
  // corporate-pages-remaining.md). Every other page reuses defaults as-is.
  containerClassName?: string;
  description?: string;
};

// section-cta-5 — reused as-is (default props) by /portfolio,
// /portfolio-detail, /services, /service-detail and /carrer (same HTML
// source markup, including the leaked "Say goodbye to writer's block" copy
// on /carrer, which corporate-pages-remaining.md says to keep as-is there).
export default function CtaSection5({
  containerClassName = "tf-container",
  description = "Say goodbye to writer’s block. Generate blog posts, product descriptions, social media captions, and more",
}: CtaSection5Props) {
  const titleRef = useSplitTextReveal<HTMLHeadingElement>("right");

  return (
    <div className={containerClassName}>
      <div className="section-cta-5 tf-spacing-6">
        <div className="content-inner">
          <div className="heading">
            <h2 className="mb_16 title" ref={titleRef}>
              Let&rsquo;s Build Something Intelligent Together.
            </h2>
            <div className="trust d-flex align-items-center gap_12 wow fadeInUp">
              <div className="group">
                {avatars.map((avatar) => (
                  <Image key={avatar} width={48} height={48} src={avatar} alt="avatar" />
                ))}
              </div>
              <p className="text-caption-1 text_primary">Trusted by 50k+ users</p>
            </div>
          </div>
          <div className="content">
            <p className="text-body-2 mb_32 text_secondary wow fadeInUp">{description}</p>
            <a
              href="#"
              className="tf-btn btn-hover-animate-2 btn-bg-secondary w-full wow fadeInUp"
              data-wow-delay="0.2s"
            >
              <span>Get Started</span>
              <span />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
