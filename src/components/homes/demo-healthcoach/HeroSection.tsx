"use client";

import Image from "next/image";
import { useAnimateImgItem } from "@/hooks/useAnimateImgItem";
import { useSplitTextReveal } from "@/hooks/useSplitTextReveal";

const trustAvatars = [
  { src: "/assets/images/avatar/group-avatar-1-1.jpg", delay: "0.1s" },
  { src: "/assets/images/avatar/group-avatar-1-2.jpg", delay: "0.2s" },
  { src: "/assets/images/avatar/group-avatar-1-3.jpg", delay: "0.3s" },
];

export default function HeroSection() {
  const titleRef = useSplitTextReveal<HTMLHeadingElement>("lines-rotation-x");
  const descRef = useSplitTextReveal<HTMLParagraphElement>("lines-transform");
  const thumbRef = useAnimateImgItem<HTMLDivElement>();

  return (
    <div className="hero-banner-9">
      <div className="tf-container w-1840">
        <div className="wrap-content tf-grid-layout lg-col-2 align-items-center gap-0">
          <div className="box">
            <div className="heading mb_40">
              <h2 className="title text_secondary-color mb_20 split-text split-lines-rotation-x" ref={titleRef}>
                Unlock Your Fullest Best Self With Expert Health Coaching
              </h2>
              <p className="text-body-2 text_white split-text split-lines-transform" ref={descRef}>
                We create personalized plans for your health journey, combining nutrition, and habits to help you
                feel great inside.
              </p>
            </div>
            <a href="#" className="tf-btn style-3 btn-bg-secondary btn-hover-animation-switch mb_40 wow fadeInUp" data-wow-delay="0.4s">
              <span>
                <i className="icon-ArrowRight2 arr-1" />
                <span className="btn-text text_primary-color">Book A Free Consultation</span>
                <i className="icon-ArrowRight2 arr-2" />
              </span>
              <span className="bg-effect" />
            </a>
            <div className="trust d-flex align-items-center gap_12">
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
              <p className="text-body-default text_white wow fadeInUp" data-wow-delay="0.2s">
                Trusted by 50k+ users
              </p>
            </div>
          </div>
          <div className="thumbs tf-animateCLP-right" ref={thumbRef}>
            <Image width={920} height={680} priority src="/assets/images/demo-healthcoach/hero-1.jpg" alt="health-coach-hero" />
          </div>
        </div>
      </div>
    </div>
  );
}
