import PageHeaderBanner from "@/components/othersPages/demo-medical/PageHeaderBanner";
import PricingSection from "@/components/othersPages/demo-medical/PricingSection";
import BookAppointmentSection from "@/components/homes/demo-medical/BookAppointmentSection";
import BannerSection from "@/components/homes/demo-medical/BannerSection";

export default function PricingPage() {
  return (
    <>
      <PageHeaderBanner crumb="Pricing" title="Pricing" />
      <div className="main-content">
        <PricingSection />
        <BookAppointmentSection variant="inner" bgLight />
        <BannerSection variant="inner" />
      </div>
    </>
  );
}
