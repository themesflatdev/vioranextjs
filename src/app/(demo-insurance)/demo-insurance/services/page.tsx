import PageTitleBreadcrumb from "@/components/othersPages/demo-insurance/PageTitleBreadcrumb";
import WhyChooseSection from "@/components/homes/demo-insurance/WhyChooseSection";
import ServicesGridSection from "@/components/othersPages/demo-insurance/ServicesGridSection";
import RequestSection from "@/components/homes/demo-insurance/RequestSection";

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
