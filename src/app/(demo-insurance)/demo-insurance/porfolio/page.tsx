import PageTitleBreadcrumb from "@/components/othersPages/demo-insurance/PageTitleBreadcrumb";
import PortfolioGridSection from "@/components/othersPages/demo-insurance/PortfolioGridSection";
import FAQSection from "@/components/homes/demo-insurance/FAQSection";

export default function PorfolioPage() {
  return (
    <>
      <PageTitleBreadcrumb breadcrumbLabel="portfolio" title="Portfolio" />
      <div className="main-content">
        <PortfolioGridSection />
        <FAQSection />
      </div>
    </>
  );
}
