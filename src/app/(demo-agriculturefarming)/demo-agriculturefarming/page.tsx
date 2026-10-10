import HeroSection from "@/components/homes/demo-agriculturefarming/HeroSection";
import AboutSection from "@/components/homes/demo-agriculturefarming/AboutSection";
import ServiceSection from "@/components/homes/demo-agriculturefarming/ServiceSection";
import AgricultureIntroSection from "@/components/homes/demo-agriculturefarming/AgricultureIntroSection";
import BenefitSection from "@/components/homes/demo-agriculturefarming/BenefitSection";
import FarmingVideoSection from "@/components/homes/demo-agriculturefarming/FarmingVideoSection";
import TestimonialSection from "@/components/homes/demo-agriculturefarming/TestimonialSection";
import BannerSection from "@/components/homes/demo-agriculturefarming/BannerSection";
import InsightsSection from "@/components/homes/demo-agriculturefarming/InsightsSection";

export default function AgriculturefarmingHome() {
  return (
    <>
      <HeroSection />
      <div className="main-content">
        <AboutSection />
        <ServiceSection />
        <AgricultureIntroSection />
        <BenefitSection />
        <FarmingVideoSection />
        <TestimonialSection />
        <BannerSection />
        <InsightsSection />
      </div>
    </>
  );
}
