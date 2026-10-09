import HeroSlider from "@/components/homes/demo-spasalon/HeroSlider";
import AboutSection from "@/components/homes/demo-spasalon/AboutSection";
import ServicesSection from "@/components/homes/demo-spasalon/ServicesSection";
import BookAppointmentSection from "@/components/homes/demo-spasalon/BookAppointmentSection";
import PackagesSection from "@/components/homes/demo-spasalon/PackagesSection";
import SpaExperienceSection from "@/components/homes/demo-spasalon/SpaExperienceSection";
import GallerySection from "@/components/homes/demo-spasalon/GallerySection";
import PricingSection from "@/components/homes/demo-spasalon/PricingSection";
import TestimonialSection from "@/components/homes/demo-spasalon/TestimonialSection";
import BookingSection from "@/components/homes/demo-spasalon/BookingSection";
import InsightsSection from "@/components/homes/demo-spasalon/InsightsSection";

export default function SpasalonHome() {
  return (
    <>
      <HeroSlider />
      <div className="main-content">
        <AboutSection />
        <ServicesSection />
        <BookAppointmentSection />
        <PackagesSection />
        <SpaExperienceSection />
        <GallerySection />
        <PricingSection />
        <TestimonialSection />
        <BookingSection />
        <InsightsSection />
      </div>
    </>
  );
}
