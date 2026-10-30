"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePagination } from "@/hooks/usePagination";
import Pagination from "@/components/common/Pagination";
import { blogListDisplayPosts, blogListTag } from "@/data/demo-medical/blogListPosts";

const PAGE_SIZE = 3;

export default function BlogListSection() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const { currentPage, totalPages, currentItems, goToPage } = usePagination(blogListDisplayPosts, PAGE_SIZE);

  const handlePageChange = (page: number) => {
    goToPage(page);
    wrapRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="wrap-blog" data-current-page={currentPage} ref={wrapRef}>
      {currentItems.map((post, index) => (
        <div
          className="blog-item style-2 v-list hover-image"
          data-wow-delay={`.${index + 1}s`}
          key={post.slug}
        >
          <Link href={`/demo-medical/blogdetail/${post.slug}`} className="img-style">
            <Image loading="lazy" width={940} height={424} src={post.image} alt="blog" />
            <div className="tag text-label">{blogListTag}</div>
          </Link>
          <div className="content">
            <ul className="meta-post mb_16">
              <li className="text-caption-1 fw-7">
                <div>
                  by <a href="#" className="link">{post.author}</a>
                </div>
              </li>
              <li className="text-caption-1 fw-7">{post.date}</li>
            </ul>
            <h4 className="mb_16 title">
              <Link href={`/demo-medical/blogdetail/${post.slug}`} className="h4 link hover-line-text">
                {post.title}
              </Link>
            </h4>
            <p className="text-body-default text_secondary mb_16">{post.excerpt}</p>
            <Link
              href={`/demo-medical/blogdetail/${post.slug}`}
              className="text-button hover-underline-link text_primary readmore"
              aria-label={`Read more: ${post.title}`}
            >
              Read More
            </Link>
            <div className="bg">
              <Image loading="lazy" width={345} height={280} src="/assets/images/shape/shape-card-6.svg" alt="shape-card" />
            </div>
            <a href="#" className="btn-arrow md-hide">
              <i className="icon-ArrowUpRight" />
            </a>
          </div>
        </div>
      ))}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
        className="style-2"
      />
    </div>
  );
}
