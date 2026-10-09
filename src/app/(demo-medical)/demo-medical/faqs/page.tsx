import PageHeaderBanner from "@/components/othersPages/demo-medical/PageHeaderBanner";
import FaqsSection from "@/components/othersPages/demo-medical/FaqsSection";
import BookAppointmentSection from "@/components/homes/demo-medical/BookAppointmentSection";
import BannerSection from "@/components/homes/demo-medical/BannerSection";

export default function FaqsPage() {
  return (
    <>
      <PageHeaderBanner crumb="FAQs" title="FAQs" />
      <div className="main-content">
        <FaqsSection />
        <BookAppointmentSection variant="inner" bgLight />
        <BannerSection variant="inner" />
      </div>
    </>
  );
}
