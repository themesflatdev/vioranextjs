import PageHeaderBanner from "@/components/othersPages/demo-medical/PageHeaderBanner";
import BenefitSection from "@/components/homes/demo-medical/BenefitSection";
import WhyChooseSection from "@/components/homes/demo-medical/WhyChooseSection";
import DoctorsSection from "@/components/homes/demo-medical/DoctorsSection";
import BannerSection from "@/components/homes/demo-medical/BannerSection";
import BookAppointmentSection from "@/components/homes/demo-medical/BookAppointmentSection";

export default function AboutPage() {
  return (
    <>
      <PageHeaderBanner crumb="ABOUT US" title="About Us" />
      <div className="main-content">
        <BenefitSection variant="about" />
        <WhyChooseSection variant="about" />
        <DoctorsSection />
        <BannerSection variant="inner" />
        <BookAppointmentSection variant="inner" />
      </div>
    </>
  );
}
