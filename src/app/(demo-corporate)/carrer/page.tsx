import type { Metadata } from "next";
import CarrerSection from "@/components/othersPages/demo-corporate/CarrerSection";
import ShowcaseGallery from "@/components/common/ShowcaseGallery";
import CtaSection5 from "@/components/othersPages/demo-corporate/CtaSection5";
import PartnerMarquee from "@/components/othersPages/demo-corporate/PartnerMarquee";

export const metadata: Metadata = {
  title: "Careers",
  description: "Explore career opportunities and open positions at a corporate consulting firm delivering business strategy and professional services.",
};

export default function CarrerPage() {
  return (
    <div className="main-content">
      <CarrerSection />
      <ShowcaseGallery
        sub={undefined}
        title="Take A Closer Look At The People, Passion, And Purpose Behind Everything We Build"
        spacingModifier="pt-0"
        capitalize={false}
        animateTitle
      />
      <CtaSection5 />
      <div className="tf-container tf-spacing-1">
        <PartnerMarquee bare />
      </div>
    </div>
  );
}
