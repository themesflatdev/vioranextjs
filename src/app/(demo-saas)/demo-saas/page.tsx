import HeroSection from "@/components/homes/demo-saas/HeroSection";
import FeatureSection from "@/components/homes/demo-saas/FeatureSection";
import ServiceSection from "@/components/homes/demo-saas/ServiceSection";
import AboutSection from "@/components/homes/demo-saas/AboutSection";
import PricingSection from "@/components/homes/demo-saas/PricingSection";
import TestimonialSection from "@/components/homes/demo-saas/TestimonialSection";
import FaqsSection from "@/components/homes/demo-saas/FaqsSection";
import CtaSection from "@/components/homes/demo-saas/CtaSection";

export default function SaasHome() {
  return (
    <>
      <HeroSection />
      <div className="main-content">
        <FeatureSection />
        <ServiceSection />
        <AboutSection />
        <PricingSection />
        <TestimonialSection />
        <FaqsSection />
        <CtaSection />
      </div>
    </>
  );
}
