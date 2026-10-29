import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { originalPosts } from "@/data/demo-corporate/blogPosts";
import BlogDetailFixedSocial from "@/components/othersPages/demo-corporate/BlogDetailFixedSocial";
import BlogDetailBody from "@/components/othersPages/demo-corporate/BlogDetailBody";
import RelatedPostsSlider from "@/components/othersPages/demo-corporate/RelatedPostsSlider";

// blog-detail.html only ever demos 1 static article — only the 8 original
// posts get a detail page; cloned pagination-demo posts (see blogPosts.ts)
// are intentionally not included here.
export function generateStaticParams() {
  return originalPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = originalPosts.find((p) => p.slug === slug);
  return { title: post ? post.title : "Not Found" };
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const index = originalPosts.findIndex((post) => post.slug === slug);
  if (index === -1) notFound();

  const post = originalPosts[index];
  const total = originalPosts.length;
  const prevPost = originalPosts[(index - 1 + total) % total];
  const nextPost = originalPosts[(index + 1) % total];

  return (
    <div className="main-content">
      <div className="blog-post-detail tf-spacing-1">
        <div className="tf-container">
          <div className="heading-section style-default mb_80">
            <div className="sub text-label text-uppercase">Our Blog</div>
            <h2 className="title">Latest News</h2>
          </div>

          <div className="thumbs-main mb_60">
            <Image
              loading="lazy"
              width={1410}
              height={980}
              src="/assets/images/demo-corporate/thumbs-main-post.jpg"
              alt="thumbs"
            />
          </div>

          <div className="row">
            <BlogDetailFixedSocial />
            <div className="col-xl-8 col-md-10">
              <BlogDetailBody title={post.title} prevPost={prevPost} nextPost={nextPost} />
            </div>
          </div>
        </div>
      </div>

      <RelatedPostsSlider />
    </div>
  );
}
