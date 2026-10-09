import HeroSection from "@/components/homes/demo-restaurant/HeroSection";
import AboutSection from "@/components/homes/demo-restaurant/AboutSection";
import TableAwaitsSection from "@/components/homes/demo-restaurant/TableAwaitsSection";
import ChooseDeliciousSection from "@/components/homes/demo-restaurant/ChooseDeliciousSection";
import DeliciousPopularSection from "@/components/homes/demo-restaurant/DeliciousPopularSection";
import TestimonialSection from "@/components/homes/demo-restaurant/TestimonialSection";
import DiscountSection from "@/components/homes/demo-restaurant/DiscountSection";
import InsightsSection from "@/components/homes/demo-restaurant/InsightsSection";

export default function RestaurantHome() {
  return (
    <>
      <HeroSection />
      <div className="main-content">
        <AboutSection />
        <TableAwaitsSection />
        <ChooseDeliciousSection />
        <DeliciousPopularSection />
        <TestimonialSection />
        <DiscountSection />
        <InsightsSection />
      </div>
    </>
  );
}
