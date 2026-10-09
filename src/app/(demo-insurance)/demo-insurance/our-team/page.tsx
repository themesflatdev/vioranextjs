import PageTitleBreadcrumb from "@/components/othersPages/demo-insurance/PageTitleBreadcrumb";
import TeamGridSection from "@/components/othersPages/demo-insurance/TeamGridSection";
import FAQSection from "@/components/homes/demo-insurance/FAQSection";
import { teamMembers } from "@/data/demo-insurance/teamMembers";

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
