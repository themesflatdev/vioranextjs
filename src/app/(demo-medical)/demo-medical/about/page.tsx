import type { Metadata } from "next";
import PageHeaderBanner from "@/components/othersPages/demo-medical/PageHeaderBanner";
import BenefitSection from "@/components/homes/demo-medical/BenefitSection";
import WhyChooseSection from "@/components/homes/demo-medical/WhyChooseSection";
import DoctorsSection from "@/components/homes/demo-medical/DoctorsSection";
import BannerSection from "@/components/homes/demo-medical/BannerSection";
import BookAppointmentSection from "@/components/homes/demo-medical/BookAppointmentSection";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn the story and mission behind a pediatric medical clinic providing trusted healthcare for children and families.",
};

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
