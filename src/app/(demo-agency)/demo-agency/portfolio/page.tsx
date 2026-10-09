import PageTitleBreadcrumb from "@/components/othersPages/demo-agency/PageTitleBreadcrumb";
import PortfolioMasonrySection from "@/components/othersPages/demo-agency/PortfolioMasonrySection";
import ContactTeaser3 from "@/components/othersPages/demo-agency/ContactTeaser3";

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
