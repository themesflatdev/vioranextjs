import HeroSection from "@/components/homes/demo-architechture/HeroSection";
import AboutSection from "@/components/homes/demo-architechture/AboutSection";
import ProcessSection from "@/components/homes/demo-architechture/ProcessSection";
import PortfolioSection from "@/components/homes/demo-architechture/PortfolioSection";
import ServiceSection from "@/components/homes/demo-architechture/ServiceSection";
import BannerSection from "@/components/homes/demo-architechture/BannerSection";
import TeamSection from "@/components/homes/demo-architechture/TeamSection";
import InstagramSection from "@/components/homes/demo-architechture/InstagramSection";

export default function ArchitechtureHome() {
  return (
    <>
      <HeroSection />
      <div className="main-content">
        <AboutSection />
        <ProcessSection />
        <PortfolioSection />
        <ServiceSection />
        <BannerSection />
        <TeamSection />
        <InstagramSection />
      </div>
    </>
  );
}
