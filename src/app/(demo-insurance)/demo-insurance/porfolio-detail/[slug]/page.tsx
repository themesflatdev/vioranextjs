import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageTitleBreadcrumb from "@/components/othersPages/demo-insurance/PageTitleBreadcrumb";
import PortfolioDetailBody from "@/components/othersPages/demo-insurance/PortfolioDetailBody";
import FAQSection from "@/components/homes/demo-insurance/FAQSection";
import { portfolioItems } from "@/data/demo-insurance/portfolio";

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

export default async function PorfolioDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = portfolioItems.find((p) => p.slug === slug);
  if (!item) notFound();

  return (
    <>
      <PageTitleBreadcrumb breadcrumbLabel="Portfolio details" title={item.title} />
      <div className="main-content">
        <PortfolioDetailBody />
        <FAQSection />
      </div>
    </>
  );
}
