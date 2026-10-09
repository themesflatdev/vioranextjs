import PageTitleBreadcrumb from "@/components/othersPages/demo-insurance/PageTitleBreadcrumb";
import FaqsFullSection from "@/components/othersPages/demo-insurance/FaqsFullSection";
import RequestSection from "@/components/homes/demo-insurance/RequestSection";

export default function FaqsPage() {
  return (
    <>
      <PageTitleBreadcrumb breadcrumbLabel="FAQs" title="FAQs" />
      <div className="main-content">
        <FaqsFullSection />
        <RequestSection />
      </div>
    </>
  );
}
