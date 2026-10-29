import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { portfolioItems } from "@/data/demo-agency/portfolio";
import PageTitleBreadcrumb from "@/components/othersPages/demo-agency/PageTitleBreadcrumb";
import PortfolioDetailBody from "@/components/othersPages/demo-agency/PortfolioDetailBody";
import ContactTeaser3 from "@/components/othersPages/demo-agency/ContactTeaser3";

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

export default async function AgencyPortfolioDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const index = portfolioItems.findIndex((item) => item.slug === slug);
  if (index === -1) notFound();

  const item = portfolioItems[index];
  const total = portfolioItems.length;
  const prevItem = portfolioItems[(index - 1 + total) % total];
  const nextItem = portfolioItems[(index + 1) % total];

  return (
    <>
      <PageTitleBreadcrumb breadcrumbLabel={item.title.toLowerCase()} title="Portfolio Details" />
      <div className="main-content">
        <div className="portfolio-detail-4 tf-spacing-1 pb-0">
          <div className="tf-container">
            <div className="thumb mb_58">
              <Image
                loading="lazy"
                width={1410}
                height={800}
                src="/assets/images/demo-agency/thumb-main-portfolio.jpg"
                alt="thumbs"
              />
            </div>
            <div className="row">
              <div className="col-md-2 md-hide">
                <ul className="tf-social flex-column">
                  <li>
                    <a href="#" className="icon-messenger-logo" />
                  </li>
                  <li>
                    <a href="#" className="icon-x-logo" />
                  </li>
                  <li>
                    <a href="#" className="icon-instagram-logo" />
                  </li>
                  <li>
                    <a href="#" className="icon-skype-logo" />
                  </li>
                  <li>
                    <a href="#" className="icon-telegram-logo" />
                  </li>
                </ul>
              </div>
              <div className="col-xl-8 col-md-10">
                <div className="content-inner">
                  <PortfolioDetailBody item={item} prevItem={prevItem} nextItem={nextItem} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <ContactTeaser3 variant="plain" />
      </div>
    </>
  );
}
