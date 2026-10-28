"use client";

import Image from "next/image";
import Link from "next/link";
import { blogGridPosts } from "@/data/demo-insurance/blogGridPosts";
import { usePagination } from "@/hooks/usePagination";
import Pagination from "@/components/common/Pagination";

// blog-grid.html — 9 real items (lg-col-3), no sidebar, no excerpt. Links
// already correctly used "blog-detail.html" in the source (no typo here,
// unlike blog-list.html). The source's "1 2 3" pagination is decorative
// (href="#", no page-2.html exists anywhere in the theme) — all 9 items
// render on a single page there, so PAGE_SIZE must cover the full list.
export default function BlogGridSection() {
  const { currentPage, totalPages, currentItems, goToPage } = usePagination(blogGridPosts, blogGridPosts.length);

  return (
    <div className="blog-post-3 tf-spacing-1">
      <div className="tf-container">
        <div className="tf-grid-layout lg-col-3 sm-col-2">
          {currentItems.map((post) => {
            const href = `/demo-insurance/blog-detail/${post.slug}`;
            return (
              <div className="blog-item style-default hover-image-translate" key={post.title}>
                <Link href={href} className="img-style mb_23">
                  <Image loading="lazy" width={445} height={334} src={post.image} alt="blog" />
                  <div className="tag text-label">{post.tag}</div>
                </Link>
                <div className="content">
                  <ul className="meta-post mb_12 font-3">
                    <li className="text-caption-1">
                      <div>
                        by <a href="#" className="link">{post.author}</a>
                      </div>
                    </li>
                    <li className="text-caption-1">{post.date}</li>
                  </ul>
                  <h5 className="title line-clamp-2">
                    <Link href={href} className="link hover-line-text">
                      {post.title}
                    </Link>
                  </h5>
                </div>
              </div>
            );
          })}
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
