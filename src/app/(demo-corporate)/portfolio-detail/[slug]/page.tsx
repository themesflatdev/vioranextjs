import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { portfolioItems } from "@/data/demo-corporate/portfolio";
import PortfolioDetailHero from "@/components/othersPages/demo-corporate/PortfolioDetailHero";
import PortfolioDetailBody from "@/components/othersPages/demo-corporate/PortfolioDetailBody";
import CtaSection5 from "@/components/othersPages/demo-corporate/CtaSection5";
import PartnerMarquee from "@/components/othersPages/demo-corporate/PartnerMarquee";

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

export default async function PortfolioDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = portfolioItems.find((p) => p.slug === slug);
  if (!item) notFound();

  return (
    <>
      <PortfolioDetailHero title={item.title} />
      <div className="main-content">
        <PortfolioDetailBody />
        <CtaSection5 />
        <PartnerMarquee />
      </div>
    </>
  );
}
