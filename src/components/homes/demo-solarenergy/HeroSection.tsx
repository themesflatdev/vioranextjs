"use client";

import { useState } from "react";
import Image from "next/image";
import { useImageParallax } from "@/hooks/useImageParallax";
import { useSplitTextReveal } from "@/hooks/useSplitTextReveal";
import VideoModal from "@/components/common/VideoModal";

export default function HeroSection() {
  const parallaxRef = useImageParallax<HTMLDivElement>();
  const labelRef = useSplitTextReveal<HTMLDivElement>("up");
  const titleRef = useSplitTextReveal<HTMLDivElement>("right");
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <div ref={parallaxRef} className="hero-banner-17 position-relative z-5 parallax-container overflow-hidden">
      <div className="tf-container large">
        <div className="content d-grid">
          <div
            ref={labelRef}
            className="text-label letter-spacing-1 text_primary text-uppercase lh-16 split-text effect-up"
          >
            Clean, affordable solar power for every home.
          </div>
          <div ref={titleRef} className="title h1 split-text effect-right">
            Turn Sunlight Into Endless Power For Your Home
          </div>
          <div className="img-style widget-video parallax-image">
            <Image
              className="image-inner"
              width={1770}
              height={793}
              loading="eager"
              decoding="async"
              src="/assets/images/demo-solarenergy/hero-banner-1.jpg"
              alt="hero-banner"
            />
            <a
              href="https://www.youtube.com/watch?v=MLpWrANjFbI"
              className="popup-youtube"
              onClick={(e) => {
                e.preventDefault();
                setVideoOpen(true);
              }}
            >
              <div className="play-container">
                <div className="circle circle-1" />
                <div className="circle circle-2" />
                <div className="circle circle-3" />
                <div className="circle circle-4" />
                <div className="particle particle-1" />
                <div className="particle particle-2" />
                <div className="particle particle-3" />
                <div className="particle particle-4" />
                <div className="particle particle-5" />
                <div className="particle particle-6" />
                <div className="play-button">
                  <Image width={80} height={80} src="/assets/images/demo-solarenergy/icon-play-hero.svg" alt="" />
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
      <VideoModal youtubeId="MLpWrANjFbI" open={videoOpen} onClose={() => setVideoOpen(false)} />
    </div>
  );
}
