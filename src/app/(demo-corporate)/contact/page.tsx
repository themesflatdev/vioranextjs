import type { Metadata } from "next";
import ShowcaseGallery from "@/components/common/ShowcaseGallery";
import ContactSection from "@/components/othersPages/demo-corporate/ContactSection";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with a corporate consulting firm delivering business strategy and professional services for inquiries, support or to start a project.",
};

export default function ContactPage() {
  return (
    <div className="main-content">
      <ShowcaseGallery />
      <ContactSection />
    </div>
  );
}
