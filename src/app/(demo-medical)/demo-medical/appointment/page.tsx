import type { Metadata } from "next";
import PageHeaderBanner from "@/components/othersPages/demo-medical/PageHeaderBanner";
import AppointmentSection from "@/components/othersPages/demo-medical/AppointmentSection";
import BannerSection from "@/components/homes/demo-medical/BannerSection";

export const metadata: Metadata = {
  title: "Book an Appointment",
  description: "Schedule an appointment with a pediatric medical clinic providing trusted healthcare for children and families.",
};

export default function AppointmentPage() {
  return (
    <>
      <PageHeaderBanner crumb="Make An Appointment" title="Make An Appointment" />
      <div className="main-content">
        <AppointmentSection />
        <BannerSection variant="inner" />
      </div>
    </>
  );
}
