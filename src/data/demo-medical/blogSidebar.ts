export type BlogCategory = { name: string; count: number };
export type SidebarLatestPost = { image: string; title: string; slug: string };

export const blogCategories: BlogCategory[] = [
  { name: "Vitality Health Solutions", count: 112 },
  { name: "WellSpring Wellness Center", count: 32 },
  { name: "Harmony Family Health Medical", count: 42 },
  { name: "Evergreen Medical Center", count: 65 },
  { name: "PureLife Health Services", count: 13 },
];

export const blogTags: string[] = ["Therapy", "Wellness", "Meditation", "Clinics", "Mental Health", "Health"];

export const sidebarLatestPostAuthor = "Zaire Culhane";
export const sidebarLatestPostDate = "June 12, 2025";

// Displayed titles are the original HTML's shortened versions (kept
// verbatim, cut off mid-thought) — each links to its matching full
// canonical post by slug.
export const sidebarLatestPosts: SidebarLatestPost[] = [
  {
    image: "/assets/images/demo-medical/latest-post-1.jpg",
    title: "Signs You May Need to Change Your Medicare ",
    slug: "signs-you-may-need-to-change-your-medicare-coverage",
  },
  {
    image: "/assets/images/demo-medical/latest-post-2.jpg",
    title: "Medicare Options You Should Compare",
    slug: "medicare-options-you-should-compare-before-you-retire",
  },
  {
    image: "/assets/images/demo-medical/latest-post-3.jpg",
    title: "Medicare Benefits You Might Not Realize",
    slug: "medicare-benefits-you-might-not-realize-you-can-claim",
  },
  {
    image: "/assets/images/demo-medical/latest-post-4.jpg",
    title: "Top Medicare Mistakes You Should Avoid",
    slug: "top-medicare-mistakes-you-should-avoid-before-enrolling",
  },
];
