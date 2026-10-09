"use client";

import Image from "next/image";
import Link from "next/link";
import {
  blogCategories,
  blogListTags,
  sidebarLatestPosts,
  sidebarLatestPostAuthor,
  sidebarLatestPostDate,
  sidebarLatestPostFallbackSlug,
} from "@/data/demo-spasalon/blogSidebar";

const socialIcons = [
  "icon-messenger-logo",
  "icon-x-logo",
  "icon-instagram-logo",
  "icon-skype-logo",
  "icon-telegram-logo",
];

// Author role fixed from the source's leftover "Cardiologist at Viora" —
// same boilerplate issue as ServiceDetailSection/PortfolioDetailSection,
// kept the name "Linda parker" verbatim (shared placeholder across niches).
// `tags` defaults to bloglist.html's own list; bloggrid.html ships a
// different tag list despite sharing every other sidebar block verbatim.
export default function BlogSidebar({ tags = blogListTags }: { tags?: string[] }) {
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
            <a href="#" className="mb_4 h5 link letter-spacing-1">
              Linda parker
            </a>
            <p className="text-caption-1 text_on-suface-1">Spa Therapist at Viora</p>
          </div>
        </div>
        <ul className="tf-social style-2">
          {socialIcons.map((icon) => (
            <li key={icon}>
              <a href="#" className={icon} />
            </li>
          ))}
        </ul>
      </div>

      <div className="sidebar-item sidebar-categories">
        <h5 className="sidebar-title mb_16">Categories</h5>
        <ul className="list-categories d-grid gap_8">
          {blogCategories.map((category) => (
            <li
              className="d-flex align-items-center justify-content-between text_primary text-body-default"
              key={category.name}
            >
              <a href="#" className="link">
                {category.name}
              </a>
              <div className="number">({category.count})</div>
            </li>
          ))}
        </ul>
      </div>

      <div className="sidebar-item sidebar-latest-post">
        <h5 className="sidebar-title mb_16">Latest Posts</h5>
        <ul>
          {sidebarLatestPosts.map((post) => (
            <li key={post.title}>
              <div className="latest-post v2 hover-image-rotate">
                <Link href={`/demo-spasalon/blogdetail/${sidebarLatestPostFallbackSlug}`} className="img-style">
                  <Image src={post.image} width={120} height={120} alt="latest-post" />
                </Link>
                <div className="content">
                  <div className="h6 title mb_4">
                    <Link
                      href={`/demo-spasalon/blogdetail/${sidebarLatestPostFallbackSlug}`}
                      className="link line-clamp-2"
                    >
                      {post.title}
                    </Link>
                  </div>
                  <ul className="meta-post">
                    <li className="text-caption-1">
                      <div>
                        by{" "}
                        <a href="#" className="link">
                          {sidebarLatestPostAuthor}
                        </a>
                      </div>
                    </li>
                    <li className="text-caption-1">{sidebarLatestPostDate}</li>
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="sidebar-item">
        <h5 className="sidebar-title mb_16">Subscribe Newsletter</h5>
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
        <h5 className="sidebar-title mb_16">Tags</h5>
        <ul className="tags-list">
          {tags.map((tag) => (
            <li key={tag}>
              <a href="#" className="tags-item text-label">
                {tag}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
