import type { Metadata } from "next";
import PageTitleBreadcrumb from "@/components/othersPages/demo-insurance/PageTitleBreadcrumb";
import AboutSection from "@/components/homes/demo-insurance/AboutSection";
import ServicesSwiperSection from "@/components/homes/demo-insurance/ServicesSwiperSection";
import TeamPreviewSection from "@/components/othersPages/demo-insurance/TeamPreviewSection";
import OverviewSection from "@/components/homes/demo-insurance/OverviewSection";
import InsightsPreviewSection from "@/components/othersPages/demo-insurance/InsightsPreviewSection";
import { teamMembers } from "@/data/demo-insurance/teamMembers";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn the story and mission behind a trusted insurance provider offering life, health and business coverage.",
};

export default function AboutUsPage() {
  return (
    <>
      <PageTitleBreadcrumb breadcrumbLabel="About Us" title="About Us" />
      <div className="main-content">
        <AboutSection />
        <ServicesSwiperSection />
        <TeamPreviewSection members={teamMembers.slice(0, 3)} />
        <OverviewSection />
        <InsightsPreviewSection />
      </div>
    </>
  );
}
