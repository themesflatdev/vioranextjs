import HeroSection from "@/components/homes/demo-aitech/HeroSection";
import FeatureSection from "@/components/homes/demo-aitech/FeatureSection";
import BannerSection2 from "@/components/homes/demo-aitech/BannerSection2";
import ServicesSection from "@/components/homes/demo-aitech/ServicesSection";
import ProcessSection from "@/components/homes/demo-aitech/ProcessSection";
import PricingSection from "@/components/homes/demo-aitech/PricingSection";
import TestimonialSection from "@/components/homes/demo-aitech/TestimonialSection";
import FaqsSection from "@/components/homes/demo-aitech/FaqsSection";
import CtaSection from "@/components/homes/demo-aitech/CtaSection";

export default function AitechHome() {
  return (
    <>
      <HeroSection />
      <div className="main-content">
        <FeatureSection />
        <BannerSection2 />
        <ServicesSection />
        <ProcessSection />
        <PricingSection />
        <TestimonialSection />
        <FaqsSection />
        <CtaSection />
      </div>
    </>
  );
}
