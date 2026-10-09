import PageHeaderBanner from "@/components/othersPages/demo-medical/PageHeaderBanner";
import PortfolioFilterGrid from "@/components/othersPages/demo-medical/PortfolioFilterGrid";
import BannerSection from "@/components/homes/demo-medical/BannerSection";

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
