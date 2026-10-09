import { notFound } from "next/navigation";
import PageHeaderBanner from "@/components/othersPages/demo-medical/PageHeaderBanner";
import DoctorDetailsSection from "@/components/othersPages/demo-medical/DoctorDetailsSection";
import BookAppointmentSection from "@/components/homes/demo-medical/BookAppointmentSection";
import BannerSection from "@/components/homes/demo-medical/BannerSection";
import { doctorsAll } from "@/data/demo-medical/doctors";

export function generateStaticParams() {
  return doctorsAll.map((doctor) => ({ slug: doctor.slug }));
}

export default async function DoctorDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const doctor = doctorsAll.find((item) => item.slug === slug);
  if (!doctor) notFound();

  return (
    <>
      <PageHeaderBanner crumb="Doctor details" title="Our Doctors" />
      <div className="main-content">
        <DoctorDetailsSection variant="detail" name={doctor.name} role={doctor.role} />
        <BookAppointmentSection variant="inner" bgLight />
        <BannerSection variant="inner" />
      </div>
    </>
  );
}
