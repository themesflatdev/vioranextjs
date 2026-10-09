import PageHeaderBanner from "@/components/othersPages/demo-medical/PageHeaderBanner";
import ServicesTabSection from "@/components/homes/demo-medical/ServicesTabSection";
import BenefitSection from "@/components/homes/demo-medical/BenefitSection";
import BookAppointmentSection from "@/components/homes/demo-medical/BookAppointmentSection";
import BannerSection from "@/components/homes/demo-medical/BannerSection";

export default function ServicePage() {
  return (
    <>
      <PageHeaderBanner crumb="Our Services" title="Our Services" />
      <div className="main-content">
        <ServicesTabSection variant="service" />
        <BenefitSection alignItems="end" />
        <BookAppointmentSection variant="inner" />
        <BannerSection variant="inner" />
      </div>
    </>
  );
}
