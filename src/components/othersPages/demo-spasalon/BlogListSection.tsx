import Image from "next/image";
import Link from "next/link";
import { blogListPosts, blogListAuthor, blogListDate, blogListExcerpts } from "@/data/demo-spasalon/blogListPosts";
import BlogSidebar from "./BlogSidebar";

// All 5 real posts render directly, matching bloglist.html's own single
// unpaginated list — no client pagination (5 items in one page left an
// empty-looking 2-item second "page").
export default function BlogListSection() {
  return (
    <div className="blog-post-2 v3 tf-spacing-1">
      <div className="tf-container medium">
        <div className="row">
          <div className="col-lg-8">
            <div className="d-grid gap_30">
              {blogListPosts.map((post) => (
                <div className="blog-item style-4 v-list hover-image" key={post.slug}>
                  <Link href={`/demo-spasalon/blogdetail/${post.slug}`} className="img-style">
                    <Image loading="lazy" width={410} height={308} src={post.image} alt="blog" />
                    <div className="tag text-label">{post.tag}</div>
                  </Link>
                  <div className="content">
                    <ul className="meta-post">
                      <li className="text-caption-1">
                        <div>
                          <a href="#" className="link">
                            {blogListAuthor}
                          </a>
                        </div>
                      </li>
                      <li className="text-caption-1">{blogListDate}</li>
                    </ul>
                    <h4 className="title line-clamp-3">
                      <Link href={`/demo-spasalon/blogdetail/${post.slug}`} className="link hover-line-text">
                        {post.title}
                      </Link>
                    </h4>
                    <p className="text-body-default">{blogListExcerpts[post.slug]}</p>
                    <div>
                      <Link
                        href={`/demo-spasalon/blogdetail/${post.slug}`}
                        className="link hover-underline-link text-button text_secondary-color"
                      >
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-4">
            <BlogSidebar />
          </div>
        </div>
      </div>
    </div>
  );
}
