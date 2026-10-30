"use client";

import Image from "next/image";
import Link from "next/link";
import {
  blogCategories,
  blogTags,
  sidebarLatestPosts,
} from "@/data/demo-corporate/blogSidebar";
import { originalPosts } from "@/data/demo-corporate/blogPosts";

// blog-detail.html is a single shared demo article (see CLAUDE.md rule 4) —
// sidebar links that don't carry their own slug (search/latest-post) point
// to that one canonical demo post, same as the original HTML always did.
const DEMO_DETAIL_HREF = `/blog-detail/${originalPosts[0].slug}`;

export default function BlogSidebar() {
  return (
    <div className="tf-sidebar">
      <div className="sidebar-item sidebar-author">
        <form action="#" className="form-search mb_30" onSubmit={(e) => e.preventDefault()}>
          <fieldset>
            <input
              type="text"
              placeholder="Search products..."
              name="text"
              aria-required="true"
              required
            />
          </fieldset>
          <div className="button-submit">
            <button type="submit">
              <i className="icon-MagnifyingGlass" />
            </button>
          </div>
        </form>
        <div className="author d-flex align-items-center gap_20 mb_20">
          <div className="avatar">
            <Image
              width={80}
              height={80}
              src="/assets/images/avatar/avatar-1.jpg"
              alt="avatar"
            />
          </div>
          <div className="content">
            <a href="#" className="mb_4 h5 link letter-spacing-1">
              Tony Nguyen
            </a>
            <p className="text-caption-1 text_on-suface-1">
              Content writer at Viora
            </p>
          </div>
        </div>
        <ul className="tf-social style-2 mb_16">
          <li><a href="#" className="icon-messenger-logo" /></li>
          <li><a href="#" className="icon-x-logo" /></li>
          <li><a href="#" className="icon-instagram-logo" /></li>
          <li><a href="#" className="icon-skype-logo" /></li>
          <li><a href="#" className="icon-telegram-logo" /></li>
        </ul>
        <a href="#" className="tf-btn btn-hover-animate-2">
          <span>Buy Theme</span>
          <span className="bg-effect" />
        </a>
      </div>

      <div className="sidebar-item sidebar-categories">
        <h5 className="sidebar-title letter-spacing-1 mb_16">Categories</h5>
        <ul className="list-categories d-grid gap_8">
          {blogCategories.map((category) => (
            <li
              key={category.name}
              className="d-flex align-items-center justify-content-between text-body-default"
            >
              <a href="#" className="link">{category.name}</a>
              <div className="number">({category.count})</div>
            </li>
          ))}
        </ul>
      </div>

      <div className="sidebar-item sidebar-latest-post">
        <h5 className="sidebar-title letter-spacing-1 mb_16">Latest Posts</h5>
        <ul>
          {sidebarLatestPosts.map((post) => (
            <li key={post.image}>
              <div className="latest-post hover-image-rotate">
                <Link href={DEMO_DETAIL_HREF} className="img-style">
                  <Image
                    width={120}
                    height={120}
                    src={post.image}
                    alt="latest-post"
                  />
                </Link>
                <div className="content">
                  <div className="h6 title mb_4">
                    <Link href={DEMO_DETAIL_HREF} className="link line-clamp-2">
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
        <h5 className="sidebar-title letter-spacing-1 mb_16">
          Subscribe Newsletter
        </h5>
        <form action="#" className="form-newsletter" onSubmit={(e) => e.preventDefault()}>
          <fieldset>
            <input
              type="text"
              placeholder="Email address"
              name="text"
              aria-required="true"
              required
            />
          </fieldset>
          <div className="button-submit">
            <button type="submit">
              <i className="icon-PaperPlaneTilt" />
            </button>
          </div>
        </form>
      </div>

      <div className="sidebar-item sidebar-tags">
        <h5 className="sidebar-title letter-spacing-1 mb_16">Tags</h5>
        <ul className="tags-list">
          {blogTags.map((tag) => (
            <li key={tag}>
              <a href="#" className="tags-item text-label">{tag}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
