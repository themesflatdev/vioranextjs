"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePagination } from "@/hooks/usePagination";
import Pagination from "@/components/common/Pagination";
import { blogGridDisplayPosts } from "@/data/demo-medical/blogGridPosts";

const PAGE_SIZE = 6;

export default function BlogGridList() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const { currentPage, totalPages, currentItems, goToPage } = usePagination(blogGridDisplayPosts, PAGE_SIZE);

  const handlePageChange = (page: number) => {
    goToPage(page);
    wrapRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="wrap-blog" data-current-page={currentPage} ref={wrapRef}>
      <div className="tf-grid-layout md-col-3">
        {currentItems.map((post) => (
          <div className="blog-item style-default v2 hover-image" key={post.slug}>
            <Link href={`/demo-medical/blogdetail/${post.slug}`} className="img-style mb_23">
              <Image loading="lazy" width={445} height={334} src={post.image} alt="blog" />
              <div className="tag text-label">{post.tag}</div>
            </Link>
            <div className="content">
              <ul className="meta-post mb_12 font-3">
                <li className="text-caption-1 fw-7">
                  <div>
                    by <a href="#" className="link">{post.author}</a>
                  </div>
                </li>
                <li className="text-caption-1 fw-7">{post.date}</li>
              </ul>
              <Link href={`/demo-medical/blogdetail/${post.slug}`} className="title h5 mb_11 link hover-line-text">
                {post.title}
              </Link>
            </div>
          </div>
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
        className="style-2 justify-content-center"
      />
    </div>
  );
}
