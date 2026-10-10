import HeroSection from "@/components/homes/demo-charity/HeroSection";
import NewsSection from "@/components/homes/demo-charity/NewsSection";
import VolunteerBenefitsSection from "@/components/homes/demo-charity/VolunteerBenefitsSection";
import DonationSection from "@/components/homes/demo-charity/DonationSection";
import CampaignSection from "@/components/homes/demo-charity/CampaignSection";
import TestimonialSection from "@/components/homes/demo-charity/TestimonialSection";
import BannerSection from "@/components/homes/demo-charity/BannerSection";
import InsightsSection from "@/components/homes/demo-charity/InsightsSection";

export default function CharityHome() {
  return (
    <>
      <HeroSection />
      <div className="main-content">
        <NewsSection />
        <VolunteerBenefitsSection />
        <DonationSection />
        <CampaignSection />
        <TestimonialSection />
        <BannerSection />
        <InsightsSection />
      </div>
    </>
  );
}
