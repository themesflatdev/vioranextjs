import type { Metadata } from "next";
import PageTitleBreadcrumb from "@/components/othersPages/demo-insurance/PageTitleBreadcrumb";
import WhyChooseSection from "@/components/homes/demo-insurance/WhyChooseSection";
import ServicesGridSection from "@/components/othersPages/demo-insurance/ServicesGridSection";
import RequestSection from "@/components/homes/demo-insurance/RequestSection";

export const metadata: Metadata = {
  title: "Services",
  description: "Explore the full range of services offered by a trusted insurance provider offering life, health and business coverage.",
};

export default function ServicesPage() {
  return (
    <>
      <PageTitleBreadcrumb breadcrumbLabel="Our Services" title="Our Services" />
      <div className="main-content">
        <WhyChooseSection />
        <ServicesGridSection />
        <RequestSection />
      </div>
    </>
  );
}
