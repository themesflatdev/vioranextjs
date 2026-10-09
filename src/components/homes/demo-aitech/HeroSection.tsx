"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { useSplitTextReveal } from "@/hooks/useSplitTextReveal";
import TypingPlaceholderInput from "@/components/common/TypingPlaceholderInput";

const trustAvatars = [
  { src: "/assets/images/avatar/group-avatar-3-1.jpg", delay: "0.1s" },
  { src: "/assets/images/avatar/group-avatar-3-2.jpg", delay: "0.2s" },
  { src: "/assets/images/avatar/group-avatar-3-3.jpg", delay: "0.3s" },
  { src: "/assets/images/avatar/group-avatar-3-4.jpg", delay: "0.4s" },
];

export default function HeroSection() {
  const titleRef = useSplitTextReveal<HTMLDivElement>("words-scale");
  const descRef = useSplitTextReveal<HTMLParagraphElement>("lines-transform");
  const videoRef = useRef<HTMLVideoElement>(null);

  // React doesn't reliably set the `muted` IDL property from the JSX attribute
  // in time for autoplay to be allowed, so set it imperatively before play().
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = true;
    video.play().catch(() => {});
  }, []);

  return (
    <div className="hero-banner-6">
      <div className="parallax-video thumbs-video">
        <video className="video-inner" ref={videoRef} muted autoPlay loop playsInline>
          <source src="/assets/video/video-techai.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="content">
        <div className="tf-container">
          <div className="col-lg-7">
            <div className="title fw-6 font-2" ref={titleRef}>
              AI That Understands You
            </div>
            <form className="form-newsletter style-5" onSubmit={(e) => e.preventDefault()}>
              <p className="text_white text-body-2" ref={descRef}>
                Our natural language models help your systems speak, listen, and learn just like humans.
              </p>
              <div className="position-relative wow fadeInUp input-animate-container">
                <TypingPlaceholderInput placeholders="Enter your email" />
                <button name="submit" type="submit" className="tf-btn btn-hover-animate-2 btn-bg-primary-3">
                  <span className="text-body-1 fw-6">Try For Free</span>
                </button>
              </div>
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
                <p className="text-body-default text_white wow fadeInUp">Trusted by 50k+ users</p>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="item position-absolute wow fadeInRight slide-ttb-animated">
        <Image width={907} height={981} src="/assets/images/demo-aitech/hero-1.png" alt="AItech-hero" />
      </div>
    </div>
  );
}
