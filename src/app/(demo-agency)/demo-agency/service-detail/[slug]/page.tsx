import { notFound } from "next/navigation";
import { services } from "@/data/demo-agency/services";
import PageTitleBreadcrumb from "@/components/othersPages/demo-agency/PageTitleBreadcrumb";
import ServiceDetailBody from "@/components/othersPages/demo-agency/ServiceDetailBody";
import ContactTeaser3 from "@/components/othersPages/demo-agency/ContactTeaser3";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export default async function AgencyServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  return (
    <>
      <PageTitleBreadcrumb breadcrumbLabel={service.title.toLowerCase()} title="Services Details" />
      <div className="main-content">
        <ServiceDetailBody />
        <ContactTeaser3 />
      </div>
    </>
  );
}
