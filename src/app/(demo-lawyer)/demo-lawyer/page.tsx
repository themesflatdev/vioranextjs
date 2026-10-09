import HeroSlider from "@/components/homes/demo-lawyer/HeroSlider";
import AboutSection from "@/components/homes/demo-lawyer/AboutSection";
import ServicesSection from "@/components/homes/demo-lawyer/ServicesSection";
import ProcessSection from "@/components/homes/demo-lawyer/ProcessSection";
import PricingSection from "@/components/homes/demo-lawyer/PricingSection";
import BannerSection from "@/components/homes/demo-lawyer/BannerSection";
import TestimonialSection from "@/components/homes/demo-lawyer/TestimonialSection";
import InsightsSection from "@/components/homes/demo-lawyer/InsightsSection";
import ContactSection from "@/components/homes/demo-lawyer/ContactSection";

export default function LawyerHome() {
  return (
    <>
      <HeroSlider />
      <div className="main-content">
        <AboutSection />
        <ServicesSection />
        <ProcessSection />
        <PricingSection />
        <BannerSection />
        <TestimonialSection />
        <InsightsSection />
        <ContactSection />
      </div>
    </>
  );
}
