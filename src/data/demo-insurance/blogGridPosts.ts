import { blogPosts } from "./blogPosts";

export type BlogGridPost = {
  title: string;
  tag: string;
  author: string;
  date: string;
  image: string;
  slug: string;
};

// blog-grid.html's own 9-item grid — a separate listing from blog-list.html
// (verified against the source: different images/tags, NOT a reuse of
// blogPosts.ts), so this is its own data file per CLAUDE.md rule 7.
//
// Two of the 9 titles ("Form innovative protect plans today", "Enable
// smarter risk shielding tech") happen to be identical text to 2 of the 5
// real blog-list posts (but with different images/tags on this grid — a
// real content coincidence, not the same entry) — those 2 link to their
// matching real post. blog-detail.html is a single shared demo article
// (per CLAUDE.md rule 4) and this task only built 5 real detail pages
// (blogPosts.ts), so the other 7 titles with no match fall back to the
// first real post, same convention as every other "no slug" blog link.
const FALLBACK_SLUG = blogPosts[0].slug;

function resolveSlug(title: string): string {
  const match = blogPosts.find((post) => post.title === title);
  return match ? match.slug : FALLBACK_SLUG;
}

const raw: Omit<BlogGridPost, "slug">[] = [
  {
    title: "Empower smart coverage solutions now",
    tag: "Life Insurance",
    author: "Mike Hanley",
    date: "June 12, 2025",
    image: "/assets/images/demo-insurance/blog-item-8.jpg",
  },
  {
    title: "Optimize risk planning for clients",
    tag: "Health Insurance",
    author: "Mike Hanley",
    date: "June 12, 2025",
    image: "/assets/images/demo-insurance/blog-item-9.jpg",
  },
  {
    title: "Enhance policy service workflows",
    tag: "Critical Illness",
    author: "Mike Hanley",
    date: "June 12, 2025",
    image: "/assets/images/demo-insurance/blog-item-10.jpg",
  },
  {
    title: "Strengthen client risk planning now",
    tag: "Life Insurance",
    author: "Mike Hanley",
    date: "June 12, 2025",
    image: "/assets/images/demo-insurance/blog-item-17.jpg",
  },
  {
    title: "Deliver refined policy choices fast",
    tag: "Health Insurance",
    author: "Mike Hanley",
    date: "June 12, 2025",
    image: "/assets/images/demo-insurance/blog-item-13.jpg",
  },
  {
    title: "Form innovative protect plans today",
    tag: "Critical Illness",
    author: "Mike Hanley",
    date: "June 12, 2025",
    image: "/assets/images/demo-insurance/blog-item-18.jpg",
  },
  {
    title: "Enable smarter risk shielding tech",
    tag: "Life Insurance",
    author: "Mike Hanley",
    date: "June 12, 2025",
    image: "/assets/images/demo-insurance/blog-item-16.jpg",
  },
  {
    title: "Improve rapid claim response paths",
    tag: "Health Insurance",
    author: "Mike Hanley",
    date: "June 12, 2025",
    image: "/assets/images/demo-insurance/blog-item-19.jpg",
  },
  {
    title: "Support flexible claim flows today",
    tag: "Critical Illness",
    author: "Mike Hanley",
    date: "June 12, 2025",
    image: "/assets/images/demo-insurance/blog-item-20.jpg",
  },
];

export const blogGridPosts: BlogGridPost[] = raw.map((post) => ({
  ...post,
  slug: resolveSlug(post.title),
}));
