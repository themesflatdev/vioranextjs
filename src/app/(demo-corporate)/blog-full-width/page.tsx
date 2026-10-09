"use client";

import BlogFullWidthGrid from "@/components/othersPages/demo-corporate/BlogFullWidthGrid";
import Pagination from "@/components/common/Pagination";
import { blogPosts } from "@/data/demo-corporate/blogPosts";
import { usePagination } from "@/hooks/usePagination";

const PAGE_SIZE = 8;

export default function BlogFullWidthPage() {
  const { currentPage, totalPages, currentItems, goToPage } = usePagination(
    blogPosts,
    PAGE_SIZE
  );

  return (
    <div className="main-content">
      <div className="blog-post tf-spacing-1">
        <div className="tf-container">
          <div className="heading-section style-default mb_60">
            <div className="sub text-label text-uppercase">Our Blog</div>
            <h2 className="title">Latest News</h2>
          </div>
          <div className="wrap-blog">
            <BlogFullWidthGrid posts={currentItems} />
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={goToPage}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
