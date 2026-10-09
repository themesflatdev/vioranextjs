import HeroBanner from "@/components/homes/demo-agency/HeroBanner";
import AboutSection from "@/components/homes/demo-agency/AboutSection";
import ServicesNumbered from "@/components/homes/demo-agency/ServicesNumbered";
import OurProjectSection from "@/components/homes/demo-agency/OurProjectSection";
import ResumeSection from "@/components/homes/demo-agency/ResumeSection";
import TestimonialSection from "@/components/homes/demo-agency/TestimonialSection";

export default function AgencyHome() {
  return (
    <>
      <HeroBanner />
      <div className="main-content position-relative z-5 bg-white">
        <AboutSection />
        <ServicesNumbered />
        <OurProjectSection />
        <ResumeSection />
        <TestimonialSection />
      </div>
    </>
  );
}
