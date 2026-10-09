export type BlogListPost = {
  slug: string;
  title: string;
  image: string;
  tag: string;
};

// bloglist.html's 5 real posts, in original order. Shared author/date in
// the source — kept verbatim. All 5 cards share one identical excerpt
// ("Sed ut perspiciatis...") in the original HTML, a real content bug —
// rewritten per CLAUDE.md's placeholder policy, one real excerpt per post.
export const blogListAuthor = "Rayna Philips";
export const blogListDate = "July 5, 2025";

export const blogListPosts: BlogListPost[] = [
  {
    slug: "monthly-facials",
    title: "Why Monthly Facials Keep Your Skin Radiant",
    image: "/assets/images/demo-spasalon/blog-2.jpg",
    tag: "SPA SALON",
  },
  {
    slug: "full-body-scrubs",
    title: "Full Body Scrubs Reveal Smooth, Glowing Skin",
    image: "/assets/images/demo-spasalon/blog-3.jpg",
    tag: "SPA SALON",
  },
  {
    slug: "hot-stone-therapy",
    title: "Hot Stone Therapy Relieves Stress and Tension",
    image: "/assets/images/demo-spasalon/blog-4.jpg",
    tag: "SPA SALON",
  },
  {
    slug: "regular-spa-visits",
    title: "Regular Spa Visits Enhance Natural Inner Glow",
    image: "/assets/images/demo-spasalon/blog-5.jpg",
    tag: "Manual Therapy",
  },
  {
    slug: "detox-body-wraps",
    title: "Detox Body Wraps Cleanse and Brighten Skin",
    image: "/assets/images/demo-spasalon/blog-2.jpg",
    tag: "SPA SALON",
  },
];

export const blogListExcerpts: Record<string, string> = {
  "monthly-facials":
    "A monthly facial keeps pores clear and skin hydrated, helping that healthy glow last well beyond your appointment.",
  "full-body-scrubs":
    "Full-body exfoliation sweeps away dull, dry skin, leaving your whole body feeling renewed and remarkably soft.",
  "hot-stone-therapy":
    "Warm stones melt away deep muscle tension, easing stress and leaving you with lasting, full-body relaxation.",
  "regular-spa-visits":
    "Making spa visits a habit, not a one-off treat, is what keeps your skin's natural glow consistent year-round.",
  "detox-body-wraps":
    "Detox wraps draw out impurities and lock in moisture, brightening skin tone after just one session.",
};
