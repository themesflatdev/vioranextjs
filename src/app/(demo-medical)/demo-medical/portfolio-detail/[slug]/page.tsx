import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageHeaderBanner from "@/components/othersPages/demo-medical/PageHeaderBanner";
import PortfolioDetailSection from "@/components/othersPages/demo-medical/PortfolioDetailSection";
import BannerSection from "@/components/homes/demo-medical/BannerSection";
import { portfolioItems } from "@/data/demo-medical/portfolio";

export function generateStaticParams() {
  return portfolioItems.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = portfolioItems.find((p) => p.slug === slug);
  return { title: item ? item.title : "Not Found" };
}

export default async function PortfolioDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const exists = portfolioItems.some((item) => item.slug === slug);
  if (!exists) notFound();

  return (
    <>
      <PageHeaderBanner crumb="Our Portfolio" title="Portfolio Details" />
      <div className="main-content">
        <PortfolioDetailSection slug={slug} />
        <BannerSection variant="inner" />
      </div>
    </>
  );
}
