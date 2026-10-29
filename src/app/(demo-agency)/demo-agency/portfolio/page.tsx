import type { Metadata } from "next";
import PageTitleBreadcrumb from "@/components/othersPages/demo-agency/PageTitleBreadcrumb";
import PortfolioMasonrySection from "@/components/othersPages/demo-agency/PortfolioMasonrySection";
import ContactTeaser3 from "@/components/othersPages/demo-agency/ContactTeaser3";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Browse a portfolio of completed projects from a creative digital agency specializing in branding, web design and marketing.",
};

export default function AgencyPortfolioPage() {
  return (
    <>
      <PageTitleBreadcrumb breadcrumbLabel="Portfolio" title="Portfolio" />
      <div className="main-content">
        <PortfolioMasonrySection />
        <ContactTeaser3 />
      </div>
    </>
  );
}
