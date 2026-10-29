import type { Metadata } from "next";
import PageTitleBreadcrumb from "@/components/othersPages/demo-agency/PageTitleBreadcrumb";
import TestimonialsGridSection from "@/components/othersPages/demo-agency/TestimonialsGridSection";
import TestimonialSection from "@/components/homes/demo-agency/TestimonialSection";
import ContactTeaser3 from "@/components/othersPages/demo-agency/ContactTeaser3";

export const metadata: Metadata = {
  title: "Testimonials",
  description: "Read client testimonials and reviews about a creative digital agency specializing in branding, web design and marketing.",
};

export default function AgencyTestimonialsPage() {
  return (
    <>
      <PageTitleBreadcrumb breadcrumbLabel="Testimonials" title="Testimonials" />
      <div className="main-content">
        <TestimonialsGridSection />
        <TestimonialSection variant="dark" />
        <ContactTeaser3 />
      </div>
    </>
  );
}
