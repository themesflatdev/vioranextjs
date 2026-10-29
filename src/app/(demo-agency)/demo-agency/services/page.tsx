import type { Metadata } from "next";
import PageTitleBreadcrumb from "@/components/othersPages/demo-agency/PageTitleBreadcrumb";
import ServicesNumbered from "@/components/homes/demo-agency/ServicesNumbered";
import TestimonialSection from "@/components/homes/demo-agency/TestimonialSection";
import ContactTeaser3 from "@/components/othersPages/demo-agency/ContactTeaser3";

export const metadata: Metadata = {
  title: "Services",
  description: "Explore the full range of services offered by a creative digital agency specializing in branding, web design and marketing.",
};

export default function AgencyServicesPage() {
  return (
    <>
      <PageTitleBreadcrumb breadcrumbLabel="Services" title="Services" />
      <div className="main-content">
        <div className="tf-spacing-1 pb-0">
          <ServicesNumbered />
        </div>
        <TestimonialSection variant="solid" />
        <ContactTeaser3 variant="plain" />
      </div>
    </>
  );
}
