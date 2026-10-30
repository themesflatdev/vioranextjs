"use client";

import Image from "next/image";
import Link from "next/link";
import { blogCategories, blogTags, sidebarLatestPosts } from "@/data/demo-insurance/blogSidebar";
import { blogPosts } from "@/data/demo-insurance/blogPosts";

// blog-detail.html is a single shared demo article (per CLAUDE.md rule 4)
// — sidebar links that don't carry their own slug (search/latest-post)
// point to the first real post, same as the original HTML's flat
// "blogdetail.html" always did.
const DEMO_DETAIL_HREF = `/demo-insurance/blog-detail/${blogPosts[0].slug}`;

export default function BlogSidebar() {
  return (
    <div className="tf-sidebar w-unset">
      <div className="sidebar-item sidebar-author">
        <form action="#" className="form-search style-2 mb_30" onSubmit={(e) => e.preventDefault()}>
          <fieldset>
            <input type="text" placeholder="Search products..." name="text" aria-required="true" required />
          </fieldset>
          <div className="button-submit">
            <button type="submit">
              <i className="icon-MagnifyingGlass" />
            </button>
          </div>
        </form>
        <div className="author d-flex align-items-center gap_20 mb_20">
          <div className="avatar">
            <Image width={80} height={80} src="/assets/images/avatar/avatar-1.jpg" alt="avatar" />
          </div>
          <div className="content">
            <a href="#" className="mb_4 h5 link">
              Linda Parker
            </a>
            <p className="text-caption-1 text_on-suface-1">Senior Insurance Advisor at Viora</p>
          </div>
        </div>
        <ul className="tf-social style-2">
          <li><a href="#" className="icon-messenger-logo" /></li>
          <li><a href="#" className="icon-x-logo" /></li>
          <li><a href="#" className="icon-instagram-logo" /></li>
          <li><a href="#" className="icon-skype-logo" /></li>
          <li><a href="#" className="icon-telegram-logo" /></li>
        </ul>
      </div>

      <div className="sidebar-item sidebar-categories">
        <h6 className="sidebar-title text_primary mb_16">Categories</h6>
        <ul className="list-categories d-grid gap_8">
          {blogCategories.map((category) => (
            <li
              className="d-flex align-items-center justify-content-between text_primary text-body-default"
              key={category.name}
            >
              <a href="#" className="link-2">
                {category.name}
              </a>
              <div className="number">({category.count})</div>
            </li>
          ))}
        </ul>
      </div>

      <div className="sidebar-item sidebar-latest-post">
        <h6 className="sidebar-title text_primary mb_16">Latest Posts</h6>
        <ul>
          {sidebarLatestPosts.map((post) => (
            <li key={post.image}>
              <div className="latest-post v2 hover-image-rotate">
                <Link href={DEMO_DETAIL_HREF} className="img-style">
                  <Image width={120} height={120} src={post.image} alt="latest-post" />
                </Link>
                <div className="content">
                  <div className="h6 title mb_4">
                    <Link href={DEMO_DETAIL_HREF} className="link line-clamp-2 text_primary">
                      {post.title}
                    </Link>
                  </div>
                  <ul className="meta-post">
                    <li className="text-caption-1">
                      <div>
                        by <a href="#" className="link">{post.author}</a>
                      </div>
                    </li>
                    <li className="text-caption-1">{post.date}</li>
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="sidebar-item">
        <h6 className="sidebar-title text_primary mb_16">Subscribe Newsletter</h6>
        <form action="#" className="form-newsletter" onSubmit={(e) => e.preventDefault()}>
          <fieldset>
            <input type="text" placeholder="Email address" name="text" aria-required="true" required />
          </fieldset>
          <div className="button-submit">
            <button type="submit">
              <i className="icon-PaperPlaneTilt" />
            </button>
          </div>
        </form>
      </div>

      <div className="sidebar-item sidebar-tags">
        <h6 className="sidebar-title text_primary mb_16">Tags</h6>
        <ul className="tags-list">
          {blogTags.map((tag) => (
            <li key={tag}>
              <a href="#" className="tags-item text_primary text-label">
                {tag}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
