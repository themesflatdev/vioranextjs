export type BlogPost = {
  title: string;
  date: string;
  image: string;
};

// Restaurant không có trang blog riêng — HTML gốc trỏ cả 6 link (ảnh +
// tiêu đề) sang ../demo-corporate/blog-detail.html, nên giữ nguyên quy ước
// mượn route blog-detail thật của corporate (xem DEMO_DETAIL_HREF trong
// InsightsSection.tsx), không bịa trang blog riêng cho restaurant.
export const blogPosts: BlogPost[] = [
  { title: "The Secret Behind Our Signature Dishes", date: "13 August", image: "/assets/images/demo-restaurant/blog-item-1.jpg" },
  { title: "How to Pair Food & Wine Like a Chef", date: "13 August", image: "/assets/images/demo-restaurant/blog-item-2.jpg" },
  { title: "Creating Memorable Dining Moments", date: "13 August", image: "/assets/images/demo-restaurant/blog-item-3.jpg" },
];
