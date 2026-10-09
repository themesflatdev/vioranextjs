import PageTitleBreadcrumb from "@/components/othersPages/demo-agency/PageTitleBreadcrumb";
import AgencyTeamGrid from "@/components/othersPages/demo-agency/AgencyTeamGrid";
import TestimonialSection from "@/components/homes/demo-agency/TestimonialSection";
import ContactTeaser3 from "@/components/othersPages/demo-agency/ContactTeaser3";

export default function AgencyOurTeamPage() {
  return (
    <>
      <PageTitleBreadcrumb breadcrumbLabel="our team" title="our team" />
      <div className="main-content">
        <AgencyTeamGrid />
        <TestimonialSection variant="dark" />
        <ContactTeaser3 />
      </div>
    </>
  );
}
