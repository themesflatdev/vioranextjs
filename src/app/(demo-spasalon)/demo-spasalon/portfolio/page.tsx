import type { Metadata } from "next";
import PageHeaderSpa from "@/components/othersPages/demo-spasalon/PageHeaderSpa";
import PortfolioGridSection from "@/components/othersPages/demo-spasalon/PortfolioGridSection";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Browse a portfolio of completed projects from a spa and salon offering massage, skincare and wellness treatments.",
};

// Source HTML's breadcrumb/h2 are both literally all-lowercase "our
// portfolio" — a real content quirk, preserved verbatim per CLAUDE.md rule 4.
export default function SpasalonPortfolioPage() {
  return (
    <>
      <PageHeaderSpa crumb="our portfolio" title="our portfolio" />
      <div className="main-content">
        <PortfolioGridSection />
      </div>
    </>
  );
}
