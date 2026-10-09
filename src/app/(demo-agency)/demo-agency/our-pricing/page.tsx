import PageTitleBreadcrumb from "@/components/othersPages/demo-agency/PageTitleBreadcrumb";
import AgencyPricingSection from "@/components/othersPages/demo-agency/AgencyPricingSection";
import TestimonialSection from "@/components/homes/demo-agency/TestimonialSection";
import ContactTeaser3 from "@/components/othersPages/demo-agency/ContactTeaser3";

export default function AgencyOurPricingPage() {
  return (
    <>
      <PageTitleBreadcrumb breadcrumbLabel="Our Pricing" title="Our Pricing" />
      <div className="main-content">
        <AgencyPricingSection />
        <TestimonialSection variant="dark" />
        <ContactTeaser3 />
      </div>
    </>
  );
}
