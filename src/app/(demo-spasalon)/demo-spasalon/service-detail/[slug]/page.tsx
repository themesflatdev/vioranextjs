import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageHeaderSpa from "@/components/othersPages/demo-spasalon/PageHeaderSpa";
import ServiceDetailSection from "@/components/othersPages/demo-spasalon/ServiceDetailSection";
import { spaServices } from "@/data/demo-spasalon/services";

export function generateStaticParams() {
  return spaServices.map((service) => ({ slug: service.key }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = spaServices.find((item) => item.key === slug);
  return { title: service ? service.title : "Not Found" };
}

export default async function SpasalonServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = spaServices.find((item) => item.key === slug);
  if (!service) notFound();

  return (
    <>
      <PageHeaderSpa crumb={service.title} title={service.title} />
      <div className="main-content">
        <ServiceDetailSection serviceName={service.title} />
      </div>
    </>
  );
}
