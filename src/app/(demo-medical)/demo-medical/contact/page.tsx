import type { Metadata } from "next";
import PageHeaderBanner from "@/components/othersPages/demo-medical/PageHeaderBanner";
import ContactSection from "@/components/othersPages/demo-medical/ContactSection";
import ContactMapSection from "@/components/othersPages/demo-medical/ContactMapSection";
import BannerSection from "@/components/homes/demo-medical/BannerSection";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with a pediatric medical clinic providing trusted healthcare for children and families for inquiries, support or to start a project.",
};

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
