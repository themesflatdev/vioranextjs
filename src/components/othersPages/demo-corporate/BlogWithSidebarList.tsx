import type { BlogPost } from "@/data/demo-corporate/blogPosts";
import BlogPostCard from "./BlogPostCard";

// blog-with-sidebar.html layout: 1 featured post (large image) directly in
// .wrap-blog, followed by a 2-col grid of the remaining posts — different
// from blog-full-width's 2-large-row layout, so this takes a flat slice of
// `posts` and treats the first item as the featured one.
export default function BlogWithSidebarList({ posts }: { posts: BlogPost[] }) {
  const [featured, ...rest] = posts;

  if (!featured) return null;

  return (
    <>
      <BlogPostCard post={featured} imageSpacing="mb_19" />
      <div className="tf-grid-layout md-col-2 gap_10">
        {rest.map((post) => (
          <BlogPostCard key={post.id} post={post} imageSpacing="mb_19" />
        ))}
      </div>
    </>
  );
}
