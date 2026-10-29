import ParallaxHeroWrap from "@/components/homes/demo-gardenlandscaping/ParallaxHeroWrap";
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
  return (
    <>
      <ParallaxHeroWrap>
        <HeroSection />
      </ParallaxHeroWrap>
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
