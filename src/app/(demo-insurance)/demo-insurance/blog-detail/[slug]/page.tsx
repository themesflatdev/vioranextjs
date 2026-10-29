import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageTitleBreadcrumb from "@/components/othersPages/demo-insurance/PageTitleBreadcrumb";
import BlogDetailFixedSocial from "@/components/othersPages/demo-insurance/BlogDetailFixedSocial";
import BlogDetailBody from "@/components/othersPages/demo-insurance/BlogDetailBody";
import { blogPosts } from "@/data/demo-insurance/blogPosts";

// blog-detail.html only ever demos 1 static article — only the 5 real
// blog-list.html posts get a detail page (blog-grid's extra titles fall
// back to one of these 5, see blogGridPosts.ts).
export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  return { title: post ? post.title : "Not Found" };
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const index = blogPosts.findIndex((post) => post.slug === slug);
  if (index === -1) notFound();

  const post = blogPosts[index];
  const prevPost = index > 0 ? blogPosts[index - 1] : null;
  const nextPost = index < blogPosts.length - 1 ? blogPosts[index + 1] : null;

  return (
    <>
      <PageTitleBreadcrumb breadcrumbLabel="Blog Details" title={post.title} />
      <div className="main-content">
        <div className="blog-post-detail tf-spacing-1">
          <div className="tf-container">
            <div className="row">
              <BlogDetailFixedSocial />
              <div className="col-xl-8 col-md-10">
                <BlogDetailBody title={post.title} prevPost={prevPost} nextPost={nextPost} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
