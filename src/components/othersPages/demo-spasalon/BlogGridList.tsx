"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePagination } from "@/hooks/usePagination";
import Pagination from "@/components/common/Pagination";
import { blogGridPosts, blogGridAuthor, blogGridDate } from "@/data/demo-spasalon/blogGridPosts";
import { blogGridTags } from "@/data/demo-spasalon/blogSidebar";
import BlogSidebar from "./BlogSidebar";

const PAGE_SIZE = 6;

// Same full-width pagination nesting as BlogListSection (see its own note).
export default function BlogGridList() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const { currentPage, totalPages, currentItems, goToPage } = usePagination(blogGridPosts, PAGE_SIZE);

  const handlePageChange = (page: number) => {
    goToPage(page);
    wrapRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="blog-post-2 v3 tf-spacing-1">
      <div className="tf-container medium" ref={wrapRef}>
        <div className="row">
          <div className="col-lg-8">
            <div className="tf-grid-layout md-col-2 gap_30">
              {currentItems.map((post) => (
                <div className="blog-item style-4 hover-image" key={post.slug}>
                  <Link href={`/demo-spasalon/blogdetail/${post.slug}`} className="img-style mb_26">
                    <Image loading="lazy" width={410} height={308} src={post.image} alt="blog" />
                  </Link>
                  <div className="content">
                    <div className="tag text-label">{post.tag}</div>
                    <h5 className="title">
                      <Link href={`/demo-spasalon/blogdetail/${post.slug}`} className="link hover-line-text">
                        {post.title}
                      </Link>
                    </h5>
                    <ul className="meta-post">
                      <li className="text-caption-1">
                        <div>
                          <a href="#" className="link">
                            {blogGridAuthor}
                          </a>
                        </div>
                      </li>
                      <li className="text-caption-1">{blogGridDate}</li>
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-4">
            <BlogSidebar tags={blogGridTags} />
          </div>
        </div>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
          className="style-2 justify-content-center"
        />
      </div>
    </div>
  );
}
