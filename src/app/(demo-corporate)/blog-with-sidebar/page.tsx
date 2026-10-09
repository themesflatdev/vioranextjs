"use client";

import BlogWithSidebarList from "@/components/othersPages/demo-corporate/BlogWithSidebarList";
import BlogSidebar from "@/components/othersPages/demo-corporate/BlogSidebar";
import Pagination from "@/components/common/Pagination";
import { blogPosts } from "@/data/demo-corporate/blogPosts";
import { usePagination } from "@/hooks/usePagination";

const PAGE_SIZE = 5;

export default function BlogWithSidebarPage() {
  const { currentPage, totalPages, currentItems, goToPage } = usePagination(
    blogPosts,
    PAGE_SIZE
  );

  return (
    <div className="main-content">
      <div className="blog-post-2 tf-spacing-2">
        <div className="tf-container">
          <div className="heading-section style-default mb_60">
            <div className="sub text-label text-uppercase">Our Blog</div>
            <h2 className="title">Latest News</h2>
          </div>
          <div className="row">
            <div className="col-lg-8">
              <div className="wrap-blog">
                <BlogWithSidebarList posts={currentItems} />
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={goToPage}
                />
              </div>
            </div>
            <div className="col-lg-4">
              <BlogSidebar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
