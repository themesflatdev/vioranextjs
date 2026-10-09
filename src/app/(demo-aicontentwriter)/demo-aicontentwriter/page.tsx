import HeroSection from "@/components/homes/demo-aicontentwriter/HeroSection";
import FeatureSection from "@/components/homes/demo-aicontentwriter/FeatureSection";
import ProcessSection from "@/components/homes/demo-aicontentwriter/ProcessSection";
import IntegrationsSection from "@/components/homes/demo-aicontentwriter/IntegrationsSection";
import TestimonialSection from "@/components/homes/demo-aicontentwriter/TestimonialSection";
import PricingSection from "@/components/homes/demo-aicontentwriter/PricingSection";
import CtaSection from "@/components/homes/demo-aicontentwriter/CtaSection";
import FaqsSection from "@/components/homes/demo-aicontentwriter/FaqsSection";

export default function AicontentwriterHome() {
  return (
    <>
      <HeroSection />
      <div className="main-content">
        <FeatureSection />
        <ProcessSection />
        <IntegrationsSection />
        <TestimonialSection />
        <PricingSection />
        <CtaSection />
        <FaqsSection />
      </div>
    </>
  );
}
