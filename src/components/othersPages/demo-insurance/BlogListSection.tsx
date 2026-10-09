"use client";

import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/data/demo-insurance/blogPosts";
import { usePagination } from "@/hooks/usePagination";
import Pagination from "@/components/common/Pagination";
import BlogSidebar from "./BlogSidebar";

// blog-list.html — every "blogdetail.html" link (missing the hyphen — a
// real typo, the file is actually "blog-detail.html") now points to the
// correct dynamic route instead. The source's "1 2 3" pagination was
// static/decorative — wired to the real usePagination hook instead, 5
// posts/page; with only 5 real posts that's a single page, so Pagination
// renders nothing (hides itself rather than show a lone "1").
export default function BlogListSection() {
  const { currentPage, totalPages, currentItems, goToPage } = usePagination(blogPosts, 5);

  return (
    <div className="blog-post-2 v3 tf-spacing-1">
      <div className="tf-container medium">
        <div className="row">
          <div className="col-lg-8">
            <div className="d-grid gap_30">
              {currentItems.map((post) => {
                const href = `/demo-insurance/blog-detail/${post.slug}`;
                return (
                  <div className="blog-item style-4 v-list hover-image" key={post.slug}>
                    <Link href={href} className="img-style">
                      <Image loading="lazy" width={410} height={308} src={post.image} alt="blog" />
                      <div className="tag text-label text-uppercase">{post.tag}</div>
                    </Link>
                    <div className="content">
                      <ul className="meta-post">
                        <li className="text-caption-1">
                          <div>
                            <a href="#" className="link">{post.author}</a>
                          </div>
                        </li>
                        <li className="text-caption-1">{post.date}</li>
                      </ul>
                      <h4 className="title line-clamp-3">
                        <Link href={href} className="link hover-line-text">
                          {post.title}
                        </Link>
                      </h4>
                      <p className="text-body-default text_secondary">{post.excerpt}</p>
                      <div>
                        <Link href={href} className="link hover-underline-link text-button text_secondary-color">
                          Read More
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="col-lg-4">
            <BlogSidebar />
          </div>
        </div>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={goToPage}
          className="style-1 justify-content-center"
        />
      </div>
    </div>
  );
}
