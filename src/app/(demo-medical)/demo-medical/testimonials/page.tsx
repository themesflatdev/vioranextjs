import PageHeaderBanner from "@/components/othersPages/demo-medical/PageHeaderBanner";
import TestimonialGridSection from "@/components/othersPages/demo-medical/TestimonialGridSection";
import TestimonialSection from "@/components/homes/demo-medical/TestimonialSection";
import BookAppointmentSection from "@/components/homes/demo-medical/BookAppointmentSection";
import BannerSection from "@/components/homes/demo-medical/BannerSection";

export default function TestimonialsPage() {
  return (
    <>
      <PageHeaderBanner crumb="Testimonials" title="Testimonials" />
      <div className="main-content">
        <TestimonialGridSection />
        <TestimonialSection />
        <BookAppointmentSection variant="inner" bgLight />
        <BannerSection variant="inner" />
      </div>
    </>
  );
}
