import HeroBanner from "@/components/homes/demo-insurance/HeroBanner";
import AboutSection from "@/components/homes/demo-insurance/AboutSection";
import ServicesSwiperSection from "@/components/homes/demo-insurance/ServicesSwiperSection";
import WhyChooseSection from "@/components/homes/demo-insurance/WhyChooseSection";
import OverviewSection from "@/components/homes/demo-insurance/OverviewSection";
import InsightsSwiperSection from "@/components/homes/demo-insurance/InsightsSwiperSection";
import RequestSection from "@/components/homes/demo-insurance/RequestSection";
import NewsletterSection from "@/components/homes/demo-insurance/NewsletterSection";
import FAQSection from "@/components/homes/demo-insurance/FAQSection";

export default function InsuranceHome() {
  return (
    <>
      <HeroBanner />
      <div className="main-content">
        <AboutSection />
        <ServicesSwiperSection />
        <WhyChooseSection />
        <OverviewSection />
        <InsightsSwiperSection />
        <RequestSection />
        <NewsletterSection />
        <FAQSection />
      </div>
    </>
  );
}
