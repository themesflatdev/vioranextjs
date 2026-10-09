import PageHeaderBanner from "@/components/othersPages/demo-medical/PageHeaderBanner";
import ContactSection from "@/components/othersPages/demo-medical/ContactSection";
import ContactMapSection from "@/components/othersPages/demo-medical/ContactMapSection";
import BannerSection from "@/components/homes/demo-medical/BannerSection";

export default function ContactPage() {
  return (
    <>
      <PageHeaderBanner crumb="Contact us" title="Contact Us" />
      <div className="main-content">
        <ContactSection />
        <ContactMapSection />
        <BannerSection variant="inner" />
      </div>
    </>
  );
}
