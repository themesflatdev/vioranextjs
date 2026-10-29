import type { Metadata } from "next";
import PageTitleBreadcrumb from "@/components/othersPages/demo-agency/PageTitleBreadcrumb";
import FaqsAgencySection from "@/components/othersPages/demo-agency/FaqsAgencySection";
import ContactTeaser3 from "@/components/othersPages/demo-agency/ContactTeaser3";

export const metadata: Metadata = {
  title: "FAQs",
  description: "Answers to frequently asked questions about a creative digital agency specializing in branding, web design and marketing.",
};

export default function AgencyFaqsPage() {
  return (
    <>
      <PageTitleBreadcrumb breadcrumbLabel="FAQs" title="FAQs" />
      <div className="main-content">
        <FaqsAgencySection />
        <ContactTeaser3 />
      </div>
    </>
  );
}
