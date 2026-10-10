import HeroSection from "@/components/homes/demo-carservices/HeroSection";
import MissionVisionSection from "@/components/homes/demo-carservices/MissionVisionSection";
import ServiceSection from "@/components/homes/demo-carservices/ServiceSection";
import CoreValuesSection from "@/components/homes/demo-carservices/CoreValuesSection";
import AboutSection from "@/components/homes/demo-carservices/AboutSection";
import NewsletterSection from "@/components/homes/demo-carservices/NewsletterSection";
import PricingSection from "@/components/homes/demo-carservices/PricingSection";
import BookingSection from "@/components/homes/demo-carservices/BookingSection";

export default function CarservicesHome() {
  return (
    <>
      <HeroSection />
      <div className="main-content">
        <MissionVisionSection />
        <ServiceSection />
        <CoreValuesSection />
        <AboutSection />
        <NewsletterSection />
        <PricingSection />
        <BookingSection />
      </div>
    </>
  );
}
