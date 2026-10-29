import type { Metadata } from "next";
import PageHeaderBanner from "@/components/othersPages/demo-medical/PageHeaderBanner";
import PricingSection from "@/components/othersPages/demo-medical/PricingSection";
import BookAppointmentSection from "@/components/homes/demo-medical/BookAppointmentSection";
import BannerSection from "@/components/homes/demo-medical/BannerSection";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Explore pricing plans and packages offered by a pediatric medical clinic providing trusted healthcare for children and families.",
};

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
