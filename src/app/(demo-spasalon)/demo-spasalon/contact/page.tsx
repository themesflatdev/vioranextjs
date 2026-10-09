import PageHeaderSpa from "@/components/othersPages/demo-spasalon/PageHeaderSpa";
import ContactSection from "@/components/othersPages/demo-spasalon/ContactSection";
import ContactMapSection from "@/components/othersPages/demo-spasalon/ContactMapSection";

export default function SpasalonContactPage() {
  return (
    <>
      <PageHeaderSpa crumb="Contact Us" title="Contact Us" />
      <div className="main-content">
        <ContactSection />
        <ContactMapSection />
      </div>
    </>
  );
}
