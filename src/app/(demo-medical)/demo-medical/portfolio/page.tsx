import type { Metadata } from "next";
import PageHeaderBanner from "@/components/othersPages/demo-medical/PageHeaderBanner";
import PortfolioFilterGrid from "@/components/othersPages/demo-medical/PortfolioFilterGrid";
import BannerSection from "@/components/homes/demo-medical/BannerSection";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Browse a portfolio of completed projects from a pediatric medical clinic providing trusted healthcare for children and families.",
};

export default function PortfolioPage() {
  return (
    <>
      <PageHeaderBanner crumb="Our Portfolio" title="Our Portfolio" />
      <div className="main-content">
        <PortfolioFilterGrid />
        <BannerSection variant="inner" />
      </div>
    </>
  );
}
