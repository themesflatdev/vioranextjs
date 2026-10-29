"use client";

import BlogWithSidebarList from "@/components/othersPages/demo-corporate/BlogWithSidebarList";
import BlogSidebar from "@/components/othersPages/demo-corporate/BlogSidebar";
import Pagination from "@/components/common/Pagination";
import { blogPosts } from "@/data/demo-corporate/blogPosts";
import { usePagination } from "@/hooks/usePagination";

const PAGE_SIZE = 5;

export default function BlogWithSidebarClient() {
  const { currentPage, totalPages, currentItems, goToPage } = usePagination(blogPosts, PAGE_SIZE);

  return (
    <div className="row">
      <div className="col-lg-8">
        <div className="wrap-blog">
          <BlogWithSidebarList posts={currentItems} />
          <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={goToPage} />
        </div>
      </div>
      <div className="col-lg-4">
        <BlogSidebar />
      </div>
    </div>
  );
}
