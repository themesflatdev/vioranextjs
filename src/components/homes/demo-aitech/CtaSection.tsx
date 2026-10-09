"use client";

import Image from "next/image";
import { useSplitTextReveal } from "@/hooks/useSplitTextReveal";

const trustAvatars = [
  { src: "/assets/images/avatar/group-avatar-3-1.jpg", delay: "0.1s" },
  { src: "/assets/images/avatar/group-avatar-3-2.jpg", delay: "0.2s" },
  { src: "/assets/images/avatar/group-avatar-3-3.jpg", delay: "0.3s" },
  { src: "/assets/images/avatar/group-avatar-3-4.jpg", delay: "0.4s" },
];

export default function CtaSection() {
  const titleRef = useSplitTextReveal<HTMLHeadingElement>("lines-rotation-x");
  const descRef = useSplitTextReveal<HTMLParagraphElement>("lines-transform");

  return (
    <div className="section-cta-2 tf-spacing-10 pt-0">
      <div className="tf-container">
        <div className="content-inner">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="heading">
                <h2 className="mb_16 title text_primary text-capitalize" ref={titleRef}>
                  Let&rsquo;s build something intelligent together.
                </h2>
                <div className="trust d-flex align-items-center gap_12 wow fadeInUp">
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
                  <p className="text-body-default text_primary wow fadeInUp">Trusted by 50k+ users</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="content">
                <p className="text-body-2 mb_32 text_primary" ref={descRef}>
                  Tell us about your goals and we&rsquo;ll design, train, and deploy the right AI solution for
                  your business.
                </p>
                <a href="#" className="tf-btn btn-hover-animate-2 btn-bg-primary-3 btn-bg-dark w-full wow fadeInUp">
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
