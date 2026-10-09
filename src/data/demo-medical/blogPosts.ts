import { blogGridPosts, blogGridDisplayPosts } from "./blogGridPosts";
import { blogListAuthor, blogListDate, blogListDisplayPosts } from "./blogListPosts";

export type BlogPost = {
  tag: string;
  title: string;
  image: string;
  slug: string;
};

export const blogPosts: BlogPost[] = [
  {
    tag: "HEALTHCARE",
    title: "Top Signs You Shouldn't Ignore and When to See a Doctor",
    image: "/assets/images/demo-medical/blog-item-15.jpg",
    slug: "top-signs-you-shouldnt-ignore-and-when-to-see-a-doctor",
  },
  {
    tag: "WELLNESS",
    title: "Nutrition Tips Recommended by Our Medical Experts",
    image: "/assets/images/demo-medical/blog-item-16.jpg",
    slug: "nutrition-tips-recommended-by-our-medical-experts",
  },
];

export type CanonicalBlogPost = { slug: string; title: string };

// Single source of truth for all 8 "real" blog posts across bloggrid,
// bloglist, and their shared sidebar/homepage — used for
// generateStaticParams and prev/next ordering on /blogdetail/[slug].
// Posts #2 and #8 are the same ones already in `blogPosts` above (the
// homepage Insights section) — titles kept identical on purpose.
export const canonicalBlogPosts: CanonicalBlogPost[] = [
  {
    slug: "key-medicare-deadlines-you-shouldnt-miss-this-year",
    title: "Key Medicare Deadlines You Shouldn't Miss This Year",
  },
  {
    slug: "top-signs-you-shouldnt-ignore-and-when-to-see-a-doctor",
    title: "Top Signs You Shouldn't Ignore and When to See a Doctor",
  },
  {
    slug: "top-medicare-mistakes-you-should-avoid-before-enrolling",
    title: "Top Medicare Mistakes You Should Avoid Before Enrolling",
  },
  {
    slug: "signs-you-may-need-to-change-your-medicare-coverage",
    title: "Signs You May Need to Change Your Medicare Coverage",
  },
  {
    slug: "medicare-options-you-should-compare-before-you-retire",
    title: "Medicare Options You Should Compare Before You Retire",
  },
  {
    slug: "medicare-benefits-you-might-not-realize-you-can-claim",
    title: "Medicare Benefits You Might Not Realize You Can Claim",
  },
  {
    slug: "hidden-medicare-costs-you-should-prepare-for-in-advance",
    title: "Hidden Medicare Costs You Should Prepare For in Advance",
  },
  {
    slug: "nutrition-tips-recommended-by-our-medical-experts",
    title: "Nutrition Tips Recommended by Our Medical Experts",
  },
];

// Every slug /blogdetail/[slug] must render — the 8 real canonical posts
// plus every cloned pagination-demo card from bloggrid/bloglist (so
// clicking into any page of either list, not just page 1, always lands on
// a real page instead of 404ing).
export const allBlogDetailSlugs: string[] = [
  ...canonicalBlogPosts.map((post) => post.slug),
  ...blogGridDisplayPosts.slice(blogGridPosts.length).map((post) => post.slug),
  ...blogListDisplayPosts.slice(3).map((post) => post.slug),
];

export type BlogDetailMeta = { title: string; author: string; date: string; isCanonical: boolean };

// Posts 1-6 (bloggrid) carry their own author/date; post 7
// (hidden-medicare-costs..., from bloglist) shares bloglist's single
// author/date; post 8 ("Nutrition Tips...") has no author/date anywhere in
// the original HTML, so it falls back to the blogdetail.html demo's own
// static values. Cloned pagination-demo slugs (bloggrid-/bloglist-cloned
// "-2"/"-3" suffixes) carry their own title/author/date already baked into
// blogGridDisplayPosts/blogListDisplayPosts.
export function resolveBlogDetailMeta(slug: string): BlogDetailMeta | null {
  const canonical = canonicalBlogPosts.find((post) => post.slug === slug);
  if (canonical) {
    const gridMatch = blogGridPosts.find((post) => post.slug === slug);
    if (gridMatch) return { title: canonical.title, author: gridMatch.author, date: gridMatch.date, isCanonical: true };
    const listMatch = blogListDisplayPosts.slice(0, 3).find((post) => post.slug === slug);
    if (listMatch) return { title: canonical.title, author: blogListAuthor, date: blogListDate, isCanonical: true };
    return { title: canonical.title, author: "Jordyn Culhane", date: "May 18, 2025", isCanonical: true };
  }
  const gridClone = blogGridDisplayPosts.find((post) => post.slug === slug);
  if (gridClone) return { title: gridClone.title, author: gridClone.author, date: gridClone.date, isCanonical: false };
  const listClone = blogListDisplayPosts.find((post) => post.slug === slug);
  if (listClone) return { title: listClone.title, author: listClone.author, date: listClone.date, isCanonical: false };
  return null;
}
