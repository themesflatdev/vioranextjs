import type { Metadata } from "next";
import ServicesSection from "@/components/othersPages/demo-corporate/ServicesSection";
import PricingTabSection from "@/components/othersPages/demo-corporate/PricingTabSection";
import CtaSection5 from "@/components/othersPages/demo-corporate/CtaSection5";
import PartnerMarquee from "@/components/othersPages/demo-corporate/PartnerMarquee";

export const metadata: Metadata = {
  title: "Services",
  description: "Explore the full range of services offered by a corporate consulting firm delivering business strategy and professional services.",
};

export default function ServicesPage() {
  return (
    <div className="main-content">
      <ServicesSection />
      <PricingTabSection />
      <CtaSection5 />
      <PartnerMarquee />
    </div>
  );
}
