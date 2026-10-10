import HeroSection from "@/components/homes/demo-construction/HeroSection";
import FeatureSection from "@/components/homes/demo-construction/FeatureSection";
import AboutSection from "@/components/homes/demo-construction/AboutSection";
import ServiceSection from "@/components/homes/demo-construction/ServiceSection";
import ProcessSection from "@/components/homes/demo-construction/ProcessSection";
import BannerSection from "@/components/homes/demo-construction/BannerSection";
import TeamSection from "@/components/homes/demo-construction/TeamSection";
import TestimonialSection from "@/components/homes/demo-construction/TestimonialSection";
import WorkTogetherSection from "@/components/homes/demo-construction/WorkTogetherSection";
import InsightsSection from "@/components/homes/demo-construction/InsightsSection";

export default function ConstructionHome() {
  return (
    <>
      <HeroSection />
      <div className="main-content">
        <FeatureSection />
        <AboutSection />
        <ServiceSection />
        <ProcessSection />
        <BannerSection />
        <TeamSection />
        <TestimonialSection />
        <WorkTogetherSection />
        <InsightsSection />
      </div>
    </>
  );
}
