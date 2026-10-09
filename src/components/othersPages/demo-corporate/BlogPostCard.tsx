import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/data/demo-corporate/blogPosts";

type BlogPostCardProps = {
  post: BlogPost;
  // blog-full-width.html uses mb_20 on .img-style, blog-with-sidebar.html
  // uses mb_19 for the same element — a real 1px difference in the
  // original CSS utility classes, preserved via this prop.
  imageSpacing?: "mb_20" | "mb_19";
};

export default function BlogPostCard({ post, imageSpacing = "mb_20" }: BlogPostCardProps) {
  const href = `/blog-detail/${post.slug}`;

  return (
    <div className="blog-item hover-image">
      <Link href={href} className={`img-style ${imageSpacing}`}>
        <Image
          loading="lazy"
          width={post.width}
          height={post.height}
          src={post.image}
          alt="blog"
        />
      </Link>
      <div className="content">
        <Link href={href} className="title h4 mb_11 link">
          {post.title}
        </Link>
        <ul className="meta-post">
          <li className="text-caption-1">
            <div>
              by <a href="#" className="link">{post.author}</a>
            </div>
          </li>
          <li className="text-caption-1">{post.date}</li>
        </ul>
      </div>
    </div>
  );
}
