import PageTitleBreadcrumb from "@/components/othersPages/demo-insurance/PageTitleBreadcrumb";
import ContactSection from "@/components/othersPages/demo-insurance/ContactSection";
import ContactMapSection from "@/components/othersPages/demo-insurance/ContactMapSection";

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
