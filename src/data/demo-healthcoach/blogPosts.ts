export type BlogPost = {
  image: string;
  tag: string;
  date: string;
  title: string;
};

// Bài 2-4 trùng tiêu đề + 2 bài dùng chung ảnh blog-item-1/2.jpg — lỗi demo
// thật trong HTML gốc, giữ nguyên theo CLAUDE.md rule 4. Link đích (slug)
// được xử lý riêng trong component, lấy từ demo-corporate/blogPosts.ts.
export const blogPosts: BlogPost[] = [
  {
    image: "/assets/images/demo-healthcoach/blog-item-1.jpg",
    tag: "NutritionTips",
    date: "February 12, 2025",
    title: "Simple Habits to Boost Your Energy Naturally",
  },
  {
    image: "/assets/images/demo-healthcoach/blog-item-2.jpg",
    tag: "CareDaily",
    date: "February 12, 2025",
    title: "Why Your Diet Isn’t Working And What To Do Instead.",
  },
  {
    image: "/assets/images/demo-healthcoach/blog-item-1.jpg",
    tag: "NutritionTips",
    date: "February 12, 2025",
    title: "Why Your Diet Isn’t Working And What To Do Instead.",
  },
  {
    image: "/assets/images/demo-healthcoach/blog-item-2.jpg",
    tag: "CareDaily",
    date: "February 12, 2025",
    title: "Why Your Diet Isn’t Working And What To Do Instead.",
  },
];
