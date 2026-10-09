import PageTitleBreadcrumb from "@/components/othersPages/demo-insurance/PageTitleBreadcrumb";
import PricingSwiperSection from "@/components/othersPages/demo-insurance/PricingSwiperSection";
import FAQSection from "@/components/homes/demo-insurance/FAQSection";

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
