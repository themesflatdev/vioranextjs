import type { Metadata } from "next";
import PageTitleBreadcrumb from "@/components/othersPages/demo-insurance/PageTitleBreadcrumb";
import TestimonialsGridSection from "@/components/othersPages/demo-insurance/TestimonialsGridSection";
import OverviewSection from "@/components/homes/demo-insurance/OverviewSection";
import FAQSection from "@/components/homes/demo-insurance/FAQSection";

export const metadata: Metadata = {
  title: "Testimonials",
  description: "Read client testimonials and reviews about a trusted insurance provider offering life, health and business coverage.",
};

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
