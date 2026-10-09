import type { BlogPost } from "@/data/demo-corporate/blogPosts";
import BlogPostCard from "./BlogPostCard";

export default function BlogFullWidthGrid({ posts }: { posts: BlogPost[] }) {
  const largePosts = posts.filter((post) => post.size === "large");
  const normalPosts = posts.filter((post) => post.size === "normal");

  return (
    <>
      <div className="row-blog d-flex flex-column flex-md-row gap_10">
        {largePosts.map((post) => (
          <BlogPostCard key={post.id} post={post} />
        ))}
      </div>
      <div className="tf-grid-layout md-col-3">
        {normalPosts.map((post) => (
          <BlogPostCard key={post.id} post={post} />
        ))}
      </div>
    </>
  );
}
