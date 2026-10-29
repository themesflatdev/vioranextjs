import type { Metadata } from "next";
import PageTitleBreadcrumb from "@/components/othersPages/demo-insurance/PageTitleBreadcrumb";
import PricingSwiperSection from "@/components/othersPages/demo-insurance/PricingSwiperSection";
import FAQSection from "@/components/homes/demo-insurance/FAQSection";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Explore pricing plans and packages offered by a trusted insurance provider offering life, health and business coverage.",
};

export default function PricingPage() {
  return (
    <>
      <PageTitleBreadcrumb breadcrumbLabel="Pricing" title="Pricing" />
      <div className="main-content">
        <PricingSwiperSection />
        <FAQSection />
      </div>
    </>
  );
}
