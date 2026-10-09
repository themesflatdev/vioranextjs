import PageTitleBreadcrumb from "@/components/othersPages/demo-insurance/PageTitleBreadcrumb";
import TestimonialsGridSection from "@/components/othersPages/demo-insurance/TestimonialsGridSection";
import OverviewSection from "@/components/homes/demo-insurance/OverviewSection";
import FAQSection from "@/components/homes/demo-insurance/FAQSection";

export default function TestimonialsPage() {
  return (
    <>
      <PageTitleBreadcrumb breadcrumbLabel="Testimonials" title="Testimonials" />
      <div className="main-content">
        <TestimonialsGridSection />
        <OverviewSection />
        <FAQSection />
      </div>
    </>
  );
}
