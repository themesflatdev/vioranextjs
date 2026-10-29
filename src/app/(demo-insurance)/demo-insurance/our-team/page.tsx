import type { Metadata } from "next";
import PageTitleBreadcrumb from "@/components/othersPages/demo-insurance/PageTitleBreadcrumb";
import TeamGridSection from "@/components/othersPages/demo-insurance/TeamGridSection";
import FAQSection from "@/components/homes/demo-insurance/FAQSection";
import { teamMembers } from "@/data/demo-insurance/teamMembers";

export const metadata: Metadata = {
  title: "Our Team",
  description: "Meet the team behind a trusted insurance provider offering life, health and business coverage.",
};

export default function OurTeamPage() {
  return (
    <>
      <PageTitleBreadcrumb breadcrumbLabel="Our Team" title="Our Team" />
      <div className="main-content">
        <TeamGridSection members={teamMembers} />
        <FAQSection />
      </div>
    </>
  );
}
