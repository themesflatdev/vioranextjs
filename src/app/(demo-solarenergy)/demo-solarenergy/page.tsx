import AboutSection from "@/components/homes/demo-solarenergy/AboutSection";
import ScrollingBannerSection from "@/components/homes/demo-solarenergy/ScrollingBannerSection";
import ServiceSection from "@/components/homes/demo-solarenergy/ServiceSection";
import OurProjectSection from "@/components/homes/demo-solarenergy/OurProjectSection";
import EnergySolutionSection from "@/components/homes/demo-solarenergy/EnergySolutionSection";
import ProcessSection from "@/components/homes/demo-solarenergy/ProcessSection";
import InsightsSection from "@/components/homes/demo-solarenergy/InsightsSection";
import TestimonialSection from "@/components/homes/demo-solarenergy/TestimonialSection";
import BannerVideoSection from "@/components/homes/demo-solarenergy/BannerVideoSection";
import ContactSection from "@/components/homes/demo-solarenergy/ContactSection";

export default function SolarenergyHome() {
  return (
    <div className="main-content">
      <AboutSection />
      <ScrollingBannerSection />
      <ServiceSection />
      <OurProjectSection />
      <EnergySolutionSection />
      <ProcessSection />
      <InsightsSection />
      <TestimonialSection />
      <BannerVideoSection />
      <ContactSection />
    </div>
  );
}
