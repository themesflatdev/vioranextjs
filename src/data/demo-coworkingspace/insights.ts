export type InsightPost = {
  key: string;
  image: string;
  width: number;
  height: number;
  tag: string;
  author: string;
  date: string;
  title: string;
  wowDelay?: string;
};

// SỬA theo prompt: link ảnh + tiêu đề gốc trỏ
// "../demo-corporate/blog-detail.html" (niche này không có trang blog
// riêng) → trỏ route thật của corporate theo quy tắc mục 6 master-workflow.
export const BLOG_DETAIL_HREF = "/blog-detail/inside-the-enterprise";

export const insightPosts: InsightPost[] = [
  {
    key: "flexible-workspaces-productivity",
    image: "/assets/images/demo-coworkingspace/latestnews-1.jpg",
    width: 564,
    height: 422,
    tag: "Productivity",
    author: "Mike Hanley",
    date: "June 12, 2025",
    title: "How Flexible Workspaces Boost Productivity",
  },
  {
    key: "startups-coworking-communities",
    image: "/assets/images/demo-coworkingspace/latestnews-2.jpg",
    width: 445,
    height: 334,
    tag: "Startups",
    author: "Balla Daniella",
    date: "May 06, 2025",
    title: "Why Startups Choose Coworking Communities",
    wowDelay: "0.2s",
  },
  {
    key: "future-of-modern-coworking",
    image: "/assets/images/demo-coworkingspace/latestnews-3.jpg",
    width: 445,
    height: 334,
    tag: "Coworking",
    author: "Kelemen Krisztina",
    date: "May 08, 2025",
    title: "The Future of Modern Coworking Spaces for Professionals",
    wowDelay: "0.4s",
  },
];
