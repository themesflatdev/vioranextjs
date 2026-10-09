import PageTitleBreadcrumb from "@/components/othersPages/demo-agency/PageTitleBreadcrumb";
import AboutAgencyHero from "@/components/othersPages/demo-agency/AboutAgencyHero";
import ShowcaseGallery from "@/components/common/ShowcaseGallery";
import AboutTeamPreview from "@/components/othersPages/demo-agency/AboutTeamPreview";
import ServicesNumbered from "@/components/homes/demo-agency/ServicesNumbered";
import ResumeSection from "@/components/homes/demo-agency/ResumeSection";

export default function AgencyAboutPage() {
  return (
    <>
      <PageTitleBreadcrumb breadcrumbLabel="About Us" title="About Us" />
      <div className="main-content">
        <AboutAgencyHero />
        <ShowcaseGallery
          imageBasePath="/assets/images/demo-agency"
          sub={undefined}
          title="Take A Closer Look At The People, Passion, And Purpose Behind Everything We Build"
          titleWhite
          spacingModifier={null}
          capitalize={false}
          animateTitle
          splitEffect="blur-fade"
        />
        <AboutTeamPreview />
        <ServicesNumbered />
        <ResumeSection />
      </div>
    </>
  );
}
