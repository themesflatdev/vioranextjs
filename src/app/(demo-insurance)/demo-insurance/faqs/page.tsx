import type { Metadata } from "next";
import PageTitleBreadcrumb from "@/components/othersPages/demo-insurance/PageTitleBreadcrumb";
import FaqsFullSection from "@/components/othersPages/demo-insurance/FaqsFullSection";
import RequestSection from "@/components/homes/demo-insurance/RequestSection";

export const metadata: Metadata = {
  title: "FAQs",
  description: "Answers to frequently asked questions about a trusted insurance provider offering life, health and business coverage.",
};

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
