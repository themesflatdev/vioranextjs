import type { Metadata } from "next";
import PageHeaderSpa from "@/components/othersPages/demo-spasalon/PageHeaderSpa";
import TestimonialsGridSection from "@/components/othersPages/demo-spasalon/TestimonialsGridSection";
import BookingSection from "@/components/homes/demo-spasalon/BookingSection";

export const metadata: Metadata = {
  title: "Testimonials",
  description: "Read client testimonials and reviews about a spa and salon offering massage, skincare and wellness treatments.",
};

// Source HTML's breadcrumb/h2 literally read "our Testimonials" (lowercase
// "our") — a real content quirk, preserved verbatim per CLAUDE.md rule 4.
export default function SpasalonTestimonialsPage() {
  return (
    <>
      <PageHeaderSpa crumb="our Testimonials" title="our Testimonials" />
      <div className="main-content">
        <TestimonialsGridSection />
        <BookingSection py0 />
      </div>
    </>
  );
}
