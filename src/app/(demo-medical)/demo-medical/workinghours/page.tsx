import PageHeaderBanner from "@/components/othersPages/demo-medical/PageHeaderBanner";
import WorkingHoursSection from "@/components/othersPages/demo-medical/WorkingHoursSection";
import BookAppointmentSection from "@/components/homes/demo-medical/BookAppointmentSection";
import BannerSection from "@/components/homes/demo-medical/BannerSection";

export default function WorkingHoursPage() {
  return (
    <>
      <PageHeaderBanner crumb="Working hours" title="Working Hours" />
      <div className="main-content">
        <WorkingHoursSection />
        <BookAppointmentSection variant="inner" bgLight />
        <BannerSection variant="inner" />
      </div>
    </>
  );
}
