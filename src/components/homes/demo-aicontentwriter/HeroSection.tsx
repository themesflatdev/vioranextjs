"use client";

import Image from "next/image";
import TypingPlaceholderInput from "@/components/common/TypingPlaceholderInput";
import { useRevealElements } from "@/hooks/useRevealElements";
import { useSplitTextReveal } from "@/hooks/useSplitTextReveal";

const trustAvatars = [
  { src: "/assets/images/avatar/group-avatar-1-1.jpg", delay: ".1s" },
  { src: "/assets/images/avatar/group-avatar-1-2.jpg", delay: ".2s" },
  { src: "/assets/images/avatar/group-avatar-1-3.jpg", delay: ".3s" },
];

export default function HeroSection() {
  const titleRef = useSplitTextReveal<HTMLHeadingElement>("left");
  const descRef = useSplitTextReveal<HTMLParagraphElement>("lines-rotation-x");
  const heroImageRef = useRevealElements<HTMLDivElement>();

  return (
    <div className="hero-banner-7">
      <div className="tf-container">
        <div className="row">
          <div className="col-xl-6">
            <h1 ref={titleRef}>Write Smarter With AI</h1>
          </div>
          <div className="col-xl-6">
            <div className="content">
              <p className="text-body-2 mb_32" ref={descRef}>
                Create high-quality blog posts, product descriptions, and marketing copy in seconds — powered by
                advanced AI trained for content that converts.
              </p>
              <form className="form-newsletter style-6 mb_30 wow fadeInUp" data-wow-delay="0.2s" onSubmit={(e) => e.preventDefault()}>
                <div className="position-relative input-animate-container">
                  <TypingPlaceholderInput placeholders="Enter your email" type="text" />
                  <button name="submit" type="submit" className="tf-btn btn-hover-animate">
                    <span className="text-body-1 fw-6">Try For Free</span>
                  </button>
                </div>
              </form>
              <div className="trust d-flex align-items-center gap_12" data-wow-delay="0.3s">
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
                <p className="text-caption-1 text-body-default wow fadeInUp" data-wow-delay="0.2s">
                  Trusted by 50k+ users
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="thumbs" data-ns-animate data-duration="1" ref={heroImageRef}>
          <Image width={1410} height={705} priority src="/assets/images/demo-aicontentwriter/hero.jpg" alt="AIcontent-hero" />
        </div>
      </div>
    </div>
  );
}
