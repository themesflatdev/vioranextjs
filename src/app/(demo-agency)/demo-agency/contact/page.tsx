import type { Metadata } from "next";
import PageTitleBreadcrumb from "@/components/othersPages/demo-agency/PageTitleBreadcrumb";
import ShowcaseGallery from "@/components/common/ShowcaseGallery";
import ContactTeaser3 from "@/components/othersPages/demo-agency/ContactTeaser3";
import ContactMapSection from "@/components/othersPages/demo-agency/ContactMapSection";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with a creative digital agency specializing in branding, web design and marketing for inquiries, support or to start a project.",
};

export default function AgencyContactPage() {
  return (
    <>
      <PageTitleBreadcrumb breadcrumbLabel="Contact us" title="Contact Us" />
      <div className="main-content">
        <ShowcaseGallery
          imageBasePath="/assets/images/demo-agency"
          sub={undefined}
          title="Take A Closer Look At The People, Passion, And Purpose Behind Everything We Build"
          titleWhite
          spacingModifier={null}
          baseSpacingClass="tf-spacing-13"
          capitalize={false}
          animateTitle
          splitEffect="blur-fade"
        />
        <ContactTeaser3 />
        <ContactMapSection />
      </div>
    </>
  );
}
