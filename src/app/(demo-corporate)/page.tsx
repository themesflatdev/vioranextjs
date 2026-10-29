import HeroSlider from "@/components/homes/demo-corporate/HeroSlider";
import AboutSection from "@/components/homes/demo-corporate/AboutSection";
import ServicesGrid from "@/components/homes/demo-corporate/ServicesGrid";
import CaseStudiesSection from "@/components/homes/demo-corporate/CaseStudiesSection";
import CTASection from "@/components/homes/demo-corporate/CTASection";
import TestimonialSection from "@/components/homes/demo-corporate/TestimonialSection";
import InsightsSection from "@/components/homes/demo-corporate/InsightsSection";
import NewsletterSection from "@/components/homes/demo-corporate/NewsletterSection";

// No page-level metadata here on purpose: this page.tsx sits in the exact
// same route segment as (demo-corporate)/layout.tsx (route "/"), and
// Next.js does not apply a layout's title.template to a title set by a
// page.tsx in that same segment (only to nested child segments) — so this
// relies on the layout's `title.default`/`description`, which already say
// exactly "Corporate - Viora" / the same business sentence.
export default function CorporateHome() {
  return (
    <>
      <HeroSlider />
      <div className="main-content">
        <AboutSection />
        <ServicesGrid />
        <CaseStudiesSection />
        <CTASection />
        <TestimonialSection />
        <InsightsSection />
        <NewsletterSection />
      </div>
    </>
  );
}
