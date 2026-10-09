"use client";

import Image from "next/image";
import { useSplitTextReveal } from "@/hooks/useSplitTextReveal";

const trustAvatars = [
  { src: "/assets/images/avatar/group-avatar-1-1.jpg", delay: ".1s" },
  { src: "/assets/images/avatar/group-avatar-1-2.jpg", delay: ".2s" },
  { src: "/assets/images/avatar/group-avatar-1-3.jpg", delay: ".3s" },
];

export default function CtaSection() {
  const descRef = useSplitTextReveal<HTMLParagraphElement>("lines-transform");

  return (
    <div className="section-cta-2">
      <div className="tf-container">
        <div className="content-inner">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="heading">
                <div className="trust d-flex align-items-center gap_12 mb_16 wow fadeInLeft">
                  <div className="group">
                    {trustAvatars.map((avatar) => (
                      <Image
                        className="wow fadeInLeft"
                        data-wow-delay={avatar.delay}
                        width={48}
                        height={48}
                        src={avatar.src}
                        alt="avatar"
                        key={avatar.src}
                      />
                    ))}
                  </div>
                  <p className="text-caption-1 text-body-default text_white wow fadeInUp" data-wow-delay="0.2s">
                    Trusted by 50k+ users
                  </p>
                </div>
                <h2 className="title text_white">Create Stunning Content in Seconds</h2>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="content">
                <p className="text-body-2 mb_32 text_white" ref={descRef}>
                  Say goodbye to writer&rsquo;s block. Generate blog posts, product descriptions, social media
                  captions, and more
                </p>
                <a href="#" className="tf-btn btn-hover-animate btn-bg-white w-full wow fadeInUp">
                  <span>Get Started</span>
                  <span />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
