import { notFound } from "next/navigation";
import PageHeaderBanner from "@/components/othersPages/demo-medical/PageHeaderBanner";
import BlogDetailBody from "@/components/othersPages/demo-medical/BlogDetailBody";
import BannerSection from "@/components/homes/demo-medical/BannerSection";
import { allBlogDetailSlugs, resolveBlogDetailMeta } from "@/data/demo-medical/blogPosts";

export function generateStaticParams() {
  return allBlogDetailSlugs.map((slug) => ({ slug }));
}

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!resolveBlogDetailMeta(slug)) notFound();

  return (
    <>
      <PageHeaderBanner crumb="Blog Details" title="Blog Details" />
      <div className="main-content">
        <BlogDetailBody slug={slug} />
        <BannerSection variant="inner" />
      </div>
    </>
  );
}
