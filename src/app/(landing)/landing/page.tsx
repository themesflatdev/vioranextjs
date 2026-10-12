import type { Metadata } from "next";
import HeroSection from "@/components/landing/HeroSection";
import OverviewSection from "@/components/landing/OverviewSection";
import DemosSection from "@/components/landing/DemosSection";
import MobileSection from "@/components/landing/MobileSection";
import TechSection from "@/components/landing/TechSection";
import ShowInnerSection from "@/components/landing/ShowInnerSection";
import BannerSection from "@/components/landing/BannerSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import SupportSection from "@/components/landing/SupportSection";

export const metadata: Metadata = {
  title: "Viora AI-powered Multipurpose Next.js Themes",
  description:
    "Viora is an AI-powered multipurpose Next.js theme designed for speed and versatility. Perfect for business, tech startups, portfolios, and more with clean, modern design. Easily customizable and optimized for performance across all devices",
  keywords: "AI, Next.js, Template, Theme, Website, Responsive, Multipurpose, Portfolio, Business, Design",
  authors: [{ name: "themesflat.com" }],
};

export default function LandingPage() {
  return (
    <>
      <HeroSection />
      <div className="main-content">
        <OverviewSection />
        <DemosSection />
        <MobileSection />
        <TechSection />
        <ShowInnerSection />
        <BannerSection />
        <FeaturesSection />
        <SupportSection />
      </div>
    </>
  );
}
