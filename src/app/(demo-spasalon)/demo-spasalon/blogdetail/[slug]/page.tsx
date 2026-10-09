import { notFound } from "next/navigation";
import PageHeaderSpa from "@/components/othersPages/demo-spasalon/PageHeaderSpa";
import BlogDetailBody from "@/components/othersPages/demo-spasalon/BlogDetailBody";
import { allBlogDetailSlugs, resolveBlogDetailMeta } from "@/data/demo-spasalon/blogPosts";

export function generateStaticParams() {
  return allBlogDetailSlugs.map((slug) => ({ slug }));
}

export default async function SpasalonBlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const meta = resolveBlogDetailMeta(slug);
  if (!meta) notFound();

  return (
    <>
      <PageHeaderSpa crumb={meta.title} title={meta.title} />
      <div className="main-content">
        <BlogDetailBody slug={slug} />
      </div>
    </>
  );
}
