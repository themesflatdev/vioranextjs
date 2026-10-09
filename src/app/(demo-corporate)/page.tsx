import HeroSlider from "@/components/homes/demo-corporate/HeroSlider";
import AboutSection from "@/components/homes/demo-corporate/AboutSection";
import ServicesGrid from "@/components/homes/demo-corporate/ServicesGrid";
import CaseStudiesSection from "@/components/homes/demo-corporate/CaseStudiesSection";
import CTASection from "@/components/homes/demo-corporate/CTASection";
import TestimonialSection from "@/components/homes/demo-corporate/TestimonialSection";
import InsightsSection from "@/components/homes/demo-corporate/InsightsSection";
import NewsletterSection from "@/components/homes/demo-corporate/NewsletterSection";

export default function CorporateHome() {
  return (
    <>
      <HeroSlider />
      <div className="main-content">
        <AboutSection />
        <ServicesGrid />
        <CaseStudiesSection />
        <CTASection />
        <TestimonialSection />
        <InsightsSection />
        <NewsletterSection />
      </div>
    </>
  );
}
