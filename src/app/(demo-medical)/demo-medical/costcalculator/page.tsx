import PageHeaderBanner from "@/components/othersPages/demo-medical/PageHeaderBanner";
import CostCalculatorSection from "@/components/othersPages/demo-medical/CostCalculatorSection";
import BannerSection from "@/components/homes/demo-medical/BannerSection";

export default function CostCalculatorPage() {
  return (
    <>
      <PageHeaderBanner crumb="Cost Calculator" title="Cost Calculator" />
      <div className="main-content">
        <CostCalculatorSection />
        <BannerSection variant="inner" />
      </div>
    </>
  );
}
