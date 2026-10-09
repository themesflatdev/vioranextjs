import HeroSlider from "@/components/homes/demo-medical/HeroSlider";
import AboutSection from "@/components/homes/demo-medical/AboutSection";
import ServicesTabSection from "@/components/homes/demo-medical/ServicesTabSection";
import WhyChooseSection from "@/components/homes/demo-medical/WhyChooseSection";
import BenefitSection from "@/components/homes/demo-medical/BenefitSection";
import TestimonialSection from "@/components/homes/demo-medical/TestimonialSection";
import DoctorsSection from "@/components/homes/demo-medical/DoctorsSection";
import BannerSection from "@/components/homes/demo-medical/BannerSection";
import BookAppointmentSection from "@/components/homes/demo-medical/BookAppointmentSection";
import InsightsSection from "@/components/homes/demo-medical/InsightsSection";
import PartnerMarquee from "@/components/homes/demo-medical/PartnerMarquee";

export default function MedicalHome() {
  return (
    <>
      <HeroSlider />
      <div className="main-content">
        <AboutSection />
        <ServicesTabSection />
        <WhyChooseSection />
        <BenefitSection />
        <TestimonialSection />
        <DoctorsSection />
        <BannerSection />
        <BookAppointmentSection />
        <InsightsSection />
        <PartnerMarquee />
      </div>
    </>
  );
}
