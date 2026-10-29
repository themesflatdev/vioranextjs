import type { Metadata } from "next";
import PageHeaderSpa from "@/components/othersPages/demo-spasalon/PageHeaderSpa";
import ContactSection from "@/components/othersPages/demo-spasalon/ContactSection";
import ContactMapSection from "@/components/othersPages/demo-spasalon/ContactMapSection";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with a spa and salon offering massage, skincare and wellness treatments for inquiries, support or to start a project.",
};

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
