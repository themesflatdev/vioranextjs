import type { Metadata } from "next";
import PageHeaderBanner from "@/components/othersPages/demo-medical/PageHeaderBanner";
import DoctorDetailsSection from "@/components/othersPages/demo-medical/DoctorDetailsSection";
import DoctorsSection from "@/components/homes/demo-medical/DoctorsSection";
import BookAppointmentSection from "@/components/homes/demo-medical/BookAppointmentSection";
import BannerSection from "@/components/homes/demo-medical/BannerSection";

export const metadata: Metadata = {
  title: "Our Doctors",
  description: "Meet our team of qualified doctors and specialists.",
};

export default function OurDoctorPage() {
  return (
    <>
      <PageHeaderBanner crumb="OUR DOCTORS" title="Our Doctors" />
      <div className="main-content">
        <DoctorDetailsSection variant="lead" />
        <DoctorsSection variant="all" />
        <BookAppointmentSection variant="inner" />
        <BannerSection variant="inner" />
      </div>
    </>
  );
}
