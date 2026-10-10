import HeroSlider from "@/components/homes/demo-coworkingspace/HeroSlider";
import PartnerSection from "@/components/homes/demo-coworkingspace/PartnerSection";
import AboutSection from "@/components/homes/demo-coworkingspace/AboutSection";
import BannerStickySection from "@/components/homes/demo-coworkingspace/BannerStickySection";
import ServiceSection from "@/components/homes/demo-coworkingspace/ServiceSection";
import VideoBannerSection from "@/components/homes/demo-coworkingspace/VideoBannerSection";
import AmenitiesSection from "@/components/homes/demo-coworkingspace/AmenitiesSection";
import PricingSection from "@/components/homes/demo-coworkingspace/PricingSection";
import TestimonialSection from "@/components/homes/demo-coworkingspace/TestimonialSection";
import FaqSection from "@/components/homes/demo-coworkingspace/FaqSection";
import InsightsSection from "@/components/homes/demo-coworkingspace/InsightsSection";

export default function CoworkingspaceHome() {
  return (
    <>
      <HeroSlider />
      <PartnerSection />
      <div className="main-content">
        <AboutSection />
        <BannerStickySection />
        <ServiceSection />
        <VideoBannerSection />
        <AmenitiesSection />
        <PricingSection />
        <TestimonialSection />
        <FaqSection />
        <InsightsSection />
      </div>
    </>
  );
}
