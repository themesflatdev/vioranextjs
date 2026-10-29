import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageTitleBreadcrumb from "@/components/othersPages/demo-insurance/PageTitleBreadcrumb";
import ServiceDetailBody from "@/components/othersPages/demo-insurance/ServiceDetailBody";
import { services } from "@/data/demo-insurance/services";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  return { title: service ? service.title : "Not Found" };
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
    <>
      <PageTitleBreadcrumb breadcrumbLabel="Service Details" title={service.title} />
      <div className="main-content">
        <ServiceDetailBody />
      </div>
    </>
  );
}
