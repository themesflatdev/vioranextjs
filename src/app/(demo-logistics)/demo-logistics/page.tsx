import HeroSection from "@/components/homes/demo-logistics/HeroSection";
import AboutSection from "@/components/homes/demo-logistics/AboutSection";
import ServiceSection from "@/components/homes/demo-logistics/ServiceSection";
import ProcessSection from "@/components/homes/demo-logistics/ProcessSection";
import TestimonialSection from "@/components/homes/demo-logistics/TestimonialSection";
import FaqSection from "@/components/homes/demo-logistics/FaqSection";
import BannerVideoSection from "@/components/homes/demo-logistics/BannerVideoSection";

export default function LogisticsHome() {
  return (
    <>
      <HeroSection />
      <div className="main-content">
        <AboutSection />
        <ServiceSection />
        <ProcessSection />
        <TestimonialSection />
        <FaqSection />
        <BannerVideoSection />
      </div>
    </>
  );
}
