import PageHeaderSpa from "@/components/othersPages/demo-spasalon/PageHeaderSpa";
import FaqsSection from "@/components/othersPages/demo-spasalon/FaqsSection";
import BookingSection from "@/components/homes/demo-spasalon/BookingSection";

// Source HTML's breadcrumb/h2 literally read lowercase "faqs" — a real
// content quirk, preserved verbatim per CLAUDE.md rule 4 (same policy as
// the "our Packages"/"our Testimonials" pages).
export default function SpasalonFaqsPage() {
  return (
    <>
      <PageHeaderSpa crumb="faqs" title="faqs" />
      <div className="main-content">
        <FaqsSection />
        <BookingSection py0 />
      </div>
    </>
  );
}
