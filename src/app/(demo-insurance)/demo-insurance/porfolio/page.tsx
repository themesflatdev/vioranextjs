import type { Metadata } from "next";
import PageTitleBreadcrumb from "@/components/othersPages/demo-insurance/PageTitleBreadcrumb";
import PortfolioGridSection from "@/components/othersPages/demo-insurance/PortfolioGridSection";
import FAQSection from "@/components/homes/demo-insurance/FAQSection";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Browse a portfolio of completed projects from a trusted insurance provider offering life, health and business coverage.",
};

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
