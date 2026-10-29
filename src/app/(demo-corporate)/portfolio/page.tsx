import type { Metadata } from "next";
import PortfolioSection from "@/components/othersPages/demo-corporate/PortfolioSection";
import CtaSection5 from "@/components/othersPages/demo-corporate/CtaSection5";
import PartnerMarquee from "@/components/othersPages/demo-corporate/PartnerMarquee";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Browse a portfolio of completed projects from a corporate consulting firm delivering business strategy and professional services.",
};

export default function PortfolioPage() {
  return (
    <div className="main-content">
      <PortfolioSection />
      <CtaSection5 />
      <PartnerMarquee />
    </div>
  );
}
