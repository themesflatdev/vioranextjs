import HeroSection from "@/components/homes/demo-healthcoach/HeroSection";
import AboutSection from "@/components/homes/demo-healthcoach/AboutSection";
import ProgramSection from "@/components/homes/demo-healthcoach/ProgramSection";
import CtaSection from "@/components/homes/demo-healthcoach/CtaSection";
import WhySection from "@/components/homes/demo-healthcoach/WhySection";
import BannerSection from "@/components/homes/demo-healthcoach/BannerSection";
import SupportSection from "@/components/homes/demo-healthcoach/SupportSection";
import TestimonialSection from "@/components/homes/demo-healthcoach/TestimonialSection";
import FaqsSection from "@/components/homes/demo-healthcoach/FaqsSection";
import InsightsSection from "@/components/homes/demo-healthcoach/InsightsSection";
import InstagramSection from "@/components/homes/demo-healthcoach/InstagramSection";

export default function HealthcoachHome() {
  return (
    <>
      <HeroSection />
      <div className="main-content">
        <AboutSection />
        <ProgramSection />
        <CtaSection />
        <WhySection />
        <BannerSection />
        <SupportSection />
        <TestimonialSection />
        <FaqsSection />
        <InsightsSection />
        <InstagramSection />
      </div>
    </>
  );
}
