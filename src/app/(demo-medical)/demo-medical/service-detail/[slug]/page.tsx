import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageHeaderBanner from "@/components/othersPages/demo-medical/PageHeaderBanner";
import ServiceDetailSection from "@/components/othersPages/demo-medical/ServiceDetailSection";
import BannerSection from "@/components/homes/demo-medical/BannerSection";
import { medicalServices } from "@/data/demo-medical/services";

export function generateStaticParams() {
  return medicalServices.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = medicalServices.find((item) => item.slug === slug);
  return { title: service ? service.name : "Not Found" };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = medicalServices.find((item) => item.slug === slug);
  if (!service) notFound();

  return (
    <>
      <PageHeaderBanner crumb="Service Details" title="Service Details" />
      <div className="main-content">
        <ServiceDetailSection serviceName={service.name} />
        <BannerSection variant="inner" />
      </div>
    </>
  );
}
