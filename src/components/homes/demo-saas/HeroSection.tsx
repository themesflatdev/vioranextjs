"use client";

import Image from "next/image";
import TypingPlaceholderInput from "@/components/common/TypingPlaceholderInput";
import { useRevealElements } from "@/hooks/useRevealElements";

const trustAvatars = [
  { src: "/assets/images/avatar/group-avatar-4-1.jpg", delay: "0.1s" },
  { src: "/assets/images/avatar/group-avatar-4-2.jpg", delay: "0.2s" },
  { src: "/assets/images/avatar/group-avatar-4-3.jpg", delay: "0.3s" },
];

type FloatingItem = {
  key: string;
  className: string;
  direction: string;
  src: string;
  width: number;
  height: number;
};

const floatingItems: FloatingItem[] = [
  { key: "item-1", className: "item-1 position-absolute floating-card md-hide", direction: "left", src: "/assets/images/demo-saas/hero-2.png", width: 208, height: 209 },
  { key: "item-2", className: "item-2 position-absolute floating-card lg-hide", direction: "left", src: "/assets/images/demo-saas/hero-3.png", width: 201, height: 200 },
  { key: "item-3", className: "item-3 position-absolute floating-card md-hide", direction: "", src: "/assets/images/demo-saas/hero-4.png", width: 481, height: 270 },
  { key: "item-4", className: "item-4 position-absolute floating-card lg-hide", direction: "right", src: "/assets/images/demo-saas/hero-5.png", width: 220, height: 218 },
  { key: "item-5", className: "item-5 position-absolute floating-card md-hide", direction: "right", src: "/assets/images/demo-saas/hero-6.png", width: 201, height: 319 },
  { key: "item-6", className: "item-6 position-absolute floating-card md-hide", direction: "", src: "/assets/images/demo-saas/hero-7.png", width: 497, height: 299 },
];

function FloatingCard({ item }: { item: FloatingItem }) {
  const ref = useRevealElements<HTMLDivElement>();

  return (
    <div data-ns-animate data-duration="1" data-direction={item.direction} className={item.className} ref={ref}>
      <Image src={item.src} alt="saas-hero" width={item.width} height={item.height} />
    </div>
  );
}

export default function HeroSection() {
  const titleRef = useRevealElements<HTMLHeadingElement>();
  const descRef = useRevealElements<HTMLParagraphElement>();
  const formRef = useRevealElements<HTMLFormElement>();

  return (
    <div className="hero-banner-8">
      <div className="thumbs">
        <Image loading="lazy" width={1920} height={880} src="/assets/images/demo-saas/hero-1.jpg" alt="hero" />
      </div>
      <div className="content">
        <div className="tf-container">
          <h1 className="mb_16" data-ns-animate data-duration="1" ref={titleRef}>
            Supercharge Your Workflow
          </h1>
          <p className="text-body-2 mb_36" data-ns-animate data-duration="1" data-delay="0.2s" ref={descRef}>
            Automate tasks, analyze data, and scale faster all in one powerful platform.
          </p>
          <form
            className="form-newsletter style-7 mb_36"
            data-ns-animate
            data-duration="1"
            data-delay="0.4s"
            action="#"
            onSubmit={(e) => e.preventDefault()}
            ref={formRef}
          >
            <div className="position-relative input-animate-container">
              <TypingPlaceholderInput placeholders="Enter your email" />
              <button name="submit" type="submit" className="tf-btn btn-switch-text">
                <span>
                  <span className="btn-double-text text-body-1 fw-6" data-text="Try Chatbot For Free">
                    Try Chatbot For Free
                  </span>
                </span>
              </button>
            </div>
          </form>
          <div className="trust d-flex align-items-center justify-content-center gap_12">
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
            <p className="text-caption-1 text_white wow fadeInUp" data-wow-delay="0.2s">
              Over 50,000 users trust us.
            </p>
          </div>
        </div>
      </div>
      <div className="floating-images">
        {floatingItems.map((item) => (
          <FloatingCard item={item} key={item.key} />
        ))}
      </div>
    </div>
  );
}
