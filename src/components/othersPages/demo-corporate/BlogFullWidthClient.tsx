"use client";

import BlogFullWidthGrid from "@/components/othersPages/demo-corporate/BlogFullWidthGrid";
import Pagination from "@/components/common/Pagination";
import { blogPosts } from "@/data/demo-corporate/blogPosts";
import { usePagination } from "@/hooks/usePagination";

const PAGE_SIZE = 8;

export default function BlogFullWidthClient() {
  const { currentPage, totalPages, currentItems, goToPage } = usePagination(blogPosts, PAGE_SIZE);

  return (
    <div className="wrap-blog">
      <BlogFullWidthGrid posts={currentItems} />
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={goToPage} />
    </div>
  );
}
