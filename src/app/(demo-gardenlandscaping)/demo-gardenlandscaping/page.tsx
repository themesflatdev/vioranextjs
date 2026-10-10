"use client";

import Image from "next/image";
import { NormalHeader } from "@/components/layout/demo-gardenlandscaping/HeaderSection";
import { useImageParallax } from "@/hooks/useImageParallax";
import HeroSection from "@/components/homes/demo-gardenlandscaping/HeroSection";
import AboutSection10 from "@/components/homes/demo-gardenlandscaping/AboutSection10";
import BenefitSection from "@/components/homes/demo-gardenlandscaping/BenefitSection";
import AboutSection11 from "@/components/homes/demo-gardenlandscaping/AboutSection11";
import ProcessSection from "@/components/homes/demo-gardenlandscaping/ProcessSection";
import ServiceSection from "@/components/homes/demo-gardenlandscaping/ServiceSection";
import ProjectSection from "@/components/homes/demo-gardenlandscaping/ProjectSection";
import TestimonialSection from "@/components/homes/demo-gardenlandscaping/TestimonialSection";
import BannerSection from "@/components/homes/demo-gardenlandscaping/BannerSection";

export default function GardenlandscapingHome() {
  const parallaxRef = useImageParallax<HTMLDivElement>();

  return (
    <>
      <div className="wrap-header-hero parallax-container" ref={parallaxRef}>
        <div className="thumbs parallax-image">
          <Image
            className="image-inner"
            width={1920}
            height={840}
            loading="eager"
            src="/assets/images/demo-gardenlandscaping/hero-1.jpg"
            alt="hero"
          />
        </div>
        <NormalHeader />
        <HeroSection />
      </div>
      <div className="main-content">
        <AboutSection10 />
        <BenefitSection />
        <AboutSection11 />
        <ProcessSection />
        <ServiceSection />
        <ProjectSection />
        <TestimonialSection />
        <BannerSection />
      </div>
    </>
  );
}
