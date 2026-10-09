import AboutUsHero from "@/components/othersPages/demo-corporate/AboutUsHero";
import AboutVideoSection from "@/components/othersPages/demo-corporate/AboutVideoSection";
import WhyChooseSection from "@/components/othersPages/demo-corporate/WhyChooseSection";
import OverviewSection from "@/components/othersPages/demo-corporate/OverviewSection";
import AboutServicesGrid from "@/components/othersPages/demo-corporate/AboutServicesGrid";
import ResumeSection from "@/components/othersPages/demo-corporate/ResumeSection";
import TeamGridSection from "@/components/othersPages/demo-corporate/TeamGridSection";
import PartnerMarquee from "@/components/othersPages/demo-corporate/PartnerMarquee";
import { teamMembers } from "@/data/demo-corporate/teamMembers";

export default function AboutUsPage() {
  return (
    <div className="main-content">
      <AboutUsHero />
      <AboutVideoSection />
      <WhyChooseSection />
      <OverviewSection />
      <AboutServicesGrid />
      <ResumeSection />
      <TeamGridSection members={teamMembers.slice(0, 3)} />
      <div className="tf-container tf-spacing-1">
        <PartnerMarquee bare />
      </div>
    </div>
  );
}
