import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageHeaderSpa from "@/components/othersPages/demo-spasalon/PageHeaderSpa";
import PortfolioDetailSection from "@/components/othersPages/demo-spasalon/PortfolioDetailSection";
import { portfolioItems } from "@/data/demo-spasalon/portfolio";

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

export default async function SpasalonPortfolioDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const index = portfolioItems.findIndex((item) => item.slug === slug);
  if (index === -1) notFound();

  const item = portfolioItems[index];
  const prev = index > 0 ? portfolioItems[index - 1] : null;
  const next = index < portfolioItems.length - 1 ? portfolioItems[index + 1] : null;

  return (
    <>
      <PageHeaderSpa crumb={item.title} title={item.title} />
      <div className="main-content">
        <PortfolioDetailSection item={item} prev={prev} next={next} />
      </div>
    </>
  );
}
