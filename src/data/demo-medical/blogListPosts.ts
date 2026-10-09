export type BlogListPost = {
  slug: string;
  title: string;
  image: string;
  excerpt: string;
};

// bloglist.html's 3 real posts share the same author/date/tag in the
// source (kept verbatim) but all 3 used one identical real-estate
// description ("Mixed-use developments are transforming once-overlooked
// districts into real estate hotbeds...") — content that leaked in from
// another theme demo. Rewritten per-post with real medical copy per the
// agreed placeholder policy.
export const blogListPosts: BlogListPost[] = [
  {
    slug: "key-medicare-deadlines-you-shouldnt-miss-this-year",
    title: "Key Medicare Deadlines You Shouldn't Miss This Year",
    image: "/assets/images/demo-medical/blog-item-1.jpg",
    excerpt:
      "Missing a Medicare enrollment deadline can mean late penalties and gaps in your coverage, so it helps to know exactly when each enrollment window opens and closes before you decide.",
  },
  {
    slug: "top-signs-you-shouldnt-ignore-and-when-to-see-a-doctor",
    title: "Top Signs You Shouldn't Ignore and When to See a Doctor",
    image: "/assets/images/demo-medical/blog-item-2.jpg",
    excerpt:
      "Persistent pain, sudden fatigue or unexplained changes should never be ignored. Learn when to book a visit with your doctor instead of waiting for symptoms to pass on their own.",
  },
  {
    slug: "hidden-medicare-costs-you-should-prepare-for-in-advance",
    title: "Hidden Medicare Costs You Should Prepare For in Advance",
    image: "/assets/images/demo-medical/blog-item-3.jpg",
    excerpt:
      "Premiums are only part of the story. Deductibles, copays and gaps in coverage can add up quickly, so it pays to understand the full cost of your plan before you need it.",
  },
];

export const blogListAuthor = "Kelemen Krisztina";
export const blogListDate = "May 08, 2025";
export const blogListTag = "HEALTH care";

// cloned for pagination demo — 2 extra "pages" reusing the 3 real images
// (rotated order) but with new title/author/date per card, same approach
// as demo-corporate/blogPosts.ts, so each page actually looks different
// when paginating instead of showing the same 3 cards verbatim. Each new
// slug gets its own /blogdetail/[slug] page (see blogPosts.ts). Excerpt is
// reused from the matching real post (content is still accurate, only the
// headline/byline changes). Suffix is "-list-N" (not just "-N") because
// bloggrid and bloglist share some of the same real post slugs — a plain
// "-2"/"-3" suffix from each file would collide and silently dedupe in
// generateStaticParams.
const clone2Copy = [
  "Why Preventive Screenings Matter More As You Age",
  "Navigating a New Diagnosis: Questions Worth Asking",
  "Caring for a Loved One After a Hospital Stay",
];
const clone2Author = "Harlow Quinn";
const clone2Date = "May 01, 2025";

const clone3Copy = [
  "Building a Medication Routine You Can Actually Stick To",
  "What Your Annual Physical Should Really Cover",
  "Recognizing Burnout Before It Becomes a Health Crisis",
];
const clone3Author = "Desmond Okafor";
const clone3Date = "April 24, 2025";

function cloneListPosts(suffix: string, titles: string[], author: string, date: string, order: number[]) {
  return order.map((sourceIndex, i) => {
    const source = blogListPosts[sourceIndex];
    return {
      ...source,
      slug: `${source.slug}${suffix}`,
      title: titles[i],
      author,
      date,
    };
  });
}

export type BlogListDisplayPost = BlogListPost & { author: string; date: string };

// Full pagination feed for /demo-medical/bloglist: 3 real posts (page 1,
// shared author/date) + 2 cloned pages (6 posts, each with their own
// author/date) = 9 total -> 3 pages of 3.
export const blogListDisplayPosts: BlogListDisplayPost[] = [
  ...blogListPosts.map((post) => ({ ...post, author: blogListAuthor, date: blogListDate })),
  ...cloneListPosts("-list-2", clone2Copy, clone2Author, clone2Date, [2, 1, 0]),
  ...cloneListPosts("-list-3", clone3Copy, clone3Author, clone3Date, [1, 0, 2]),
];
