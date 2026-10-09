export type BlogCategory = {
  name: string;
  count: number;
};

export const blogCategories: BlogCategory[] = [
  { name: "Business Consulting", count: 112 },
  { name: "Finance Consulting", count: 32 },
  { name: "Investment Tips", count: 42 },
  { name: "Tax Solutions", count: 65 },
  { name: "Risk Management", count: 13 },
];

export const blogTags: string[] = [
  "Finance",
  "Growth",
  "Strategy",
  "Risk",
  "Tax",
  "Investment",
  "Business",
  "Market",
  "Consulting",
];

export type SidebarLatestPost = {
  image: string;
  title: string;
  author: string;
  date: string;
};

// This section has its own dedicated content in blog-with-sidebar.html —
// different images/titles from src/data/demo-corporate/blogPosts.ts, not a
// reuse of it (verified against the original HTML).
export const sidebarLatestPosts: SidebarLatestPost[] = [
  {
    image: "/assets/images/demo-corporate/latest-post-1.jpg",
    title: "How to Build a Strong Corporate Brand in 2025",
    author: "Zaire Culhane",
    date: "June 12, 2025",
  },
  {
    image: "/assets/images/demo-corporate/latest-post-2.jpg",
    title: "Top 7 Mistakes Corporate Teams Make",
    author: "Zaire Culhane",
    date: "June 12, 2025",
  },
  {
    image: "/assets/images/demo-corporate/latest-post-3.jpg",
    title: "Why Corporate Culture Still Beats Strategy",
    author: "Zaire Culhane",
    date: "June 12, 2025",
  },
  {
    image: "/assets/images/demo-corporate/latest-post-4.jpg",
    title: "The Future of Corporate Communication",
    author: "Zaire Culhane",
    date: "June 12, 2025",
  },
];
