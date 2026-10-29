import type { Metadata } from "next";
import PageHeaderSpa from "@/components/othersPages/demo-spasalon/PageHeaderSpa";
import PricingSection from "@/components/homes/demo-spasalon/PricingSection";
import PackagesSection from "@/components/homes/demo-spasalon/PackagesSection";
import BookingSection from "@/components/homes/demo-spasalon/BookingSection";

export const metadata: Metadata = {
  title: "Packages",
  description: "Explore our spa and salon treatment packages.",
};

// Source HTML's breadcrumb/h2 literally read "our Packages" (lowercase
// "our") — a real content quirk, preserved verbatim per CLAUDE.md rule 4.
export default function SpasalonPackagesPage() {
  return (
    <>
      <PageHeaderSpa crumb="our Packages" title="our Packages" />
      <div className="main-content">
        <PricingSection />
        <PackagesSection />
        <BookingSection py0 />
      </div>
    </>
  );
}
