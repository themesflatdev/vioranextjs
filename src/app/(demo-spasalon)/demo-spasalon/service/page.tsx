import PageHeaderSpa from "@/components/othersPages/demo-spasalon/PageHeaderSpa";
import SpaExperienceSection from "@/components/homes/demo-spasalon/SpaExperienceSection";
import ServicesSection from "@/components/homes/demo-spasalon/ServicesSection";
import BookingSection from "@/components/homes/demo-spasalon/BookingSection";

// Source HTML's breadcrumb/h2 differ in case ("our Services" vs. "Our
// Services") — a real content quirk, preserved verbatim per CLAUDE.md rule 4.
export default function SpasalonServicePage() {
  return (
    <>
      <PageHeaderSpa crumb="our Services" title="Our Services" />
      <div className="main-content">
        <SpaExperienceSection />
        <ServicesSection />
        <BookingSection py0 />
      </div>
    </>
  );
}
