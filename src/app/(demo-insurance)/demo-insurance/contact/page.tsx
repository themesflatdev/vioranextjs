import type { Metadata } from "next";
import PageTitleBreadcrumb from "@/components/othersPages/demo-insurance/PageTitleBreadcrumb";
import ContactSection from "@/components/othersPages/demo-insurance/ContactSection";
import ContactMapSection from "@/components/othersPages/demo-insurance/ContactMapSection";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with a trusted insurance provider offering life, health and business coverage for inquiries, support or to start a project.",
};

export default function ContactPage() {
  return (
    <>
      <PageTitleBreadcrumb breadcrumbLabel="Contact Us" title="Contact Us" />
      <div className="main-content">
        <ContactSection />
        <ContactMapSection />
      </div>
    </>
  );
}
