import type { Metadata } from "next";
import PageTitleBreadcrumb from "@/components/othersPages/demo-agency/PageTitleBreadcrumb";
import AgencyTeamGrid from "@/components/othersPages/demo-agency/AgencyTeamGrid";
import TestimonialSection from "@/components/homes/demo-agency/TestimonialSection";
import ContactTeaser3 from "@/components/othersPages/demo-agency/ContactTeaser3";

export const metadata: Metadata = {
  title: "Our Team",
  description: "Meet the team behind a creative digital agency specializing in branding, web design and marketing.",
};

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
