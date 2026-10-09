import { notFound } from "next/navigation";
import { services } from "@/data/demo-corporate/services";
import ServiceDetailHero from "@/components/othersPages/demo-corporate/ServiceDetailHero";
import ExpectedOutcomesSection from "@/components/othersPages/demo-corporate/ExpectedOutcomesSection";
import ProcessTabsSection from "@/components/othersPages/demo-corporate/ProcessTabsSection";
import PricingTabSection from "@/components/othersPages/demo-corporate/PricingTabSection";
import CtaSection5 from "@/components/othersPages/demo-corporate/CtaSection5";
import PartnerMarquee from "@/components/othersPages/demo-corporate/PartnerMarquee";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  return (
    <div className="main-content">
      <ServiceDetailHero sub={service.title} />
      <ExpectedOutcomesSection />
      <ProcessTabsSection />
      <PricingTabSection />
      <CtaSection5 />
      <PartnerMarquee />
    </div>
  );
}
