export type BlogCategory = {
  name: string;
  count: number;
};

export const blogCategories: BlogCategory[] = [
  { name: "Risk Assessment", count: 112 },
  { name: "Personal Accident", count: 32 },
  { name: "Critical Illness", count: 42 },
  { name: "Home Insurance", count: 65 },
  { name: "Business Insurance", count: 13 },
];

export const blogTags: string[] = [
  "Business Insurance",
  "Reinsurance",
  "Insurance Tips",
  "Coverage Guides",
  "Insurance Comparisons",
  "Health",
];

export type SidebarLatestPost = {
  image: string;
  title: string;
  author: string;
  date: string;
};

// This sidebar widget has its own dedicated content in blog-list.html —
// 4 items (not 3), different images/titles from blogPosts.ts, not a reuse
// of it (verified against the original HTML). Titles are already
// insurance-appropriate, kept as-is.
export const sidebarLatestPosts: SidebarLatestPost[] = [
  {
    image: "/assets/images/demo-insurance/latest-post-1.jpg",
    title: "raft tailored safety bundles today",
    author: "Zaire Culhane",
    date: "June 12, 2025",
  },
  {
    image: "/assets/images/demo-insurance/latest-post-2.jpg",
    title: "Engineer simplified claim routes",
    author: "Zaire Culhane",
    date: "June 12, 2025",
  },
  {
    image: "/assets/images/demo-insurance/latest-post-3.jpg",
    title: "Deliver refined policy choices fast",
    author: "Zaire Culhane",
    date: "June 12, 2025",
  },
  {
    image: "/assets/images/demo-insurance/latest-post-4.jpg",
    title: "Support flexible claim flows today",
    author: "Zaire Culhane",
    date: "June 12, 2025",
  },
];
