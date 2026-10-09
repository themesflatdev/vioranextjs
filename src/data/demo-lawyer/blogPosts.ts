export type BlogPost = {
  image: string;
  tag: string;
  author: string;
  date: string;
  title: string;
};

export const blogPosts: BlogPost[] = [
  {
    image: "/assets/images/demo-lawyer/blog-1.jpg",
    tag: "Property Law",
    author: "Sarah Mitchell",
    date: "June 12, 2025",
    title: "Navigating Property Law Disputes Effectively.",
  },
  {
    image: "/assets/images/demo-lawyer/blog-2.jpg",
    tag: "Corporate Law",
    author: "David Harrison",
    date: "June 12, 2025",
    title: "Corporate Legal Trends Businesses Should Know.",
  },
  {
    image: "/assets/images/demo-lawyer/blog-3.jpg",
    tag: "Civil Law",
    author: "Emily Carter",
    date: "June 12, 2025",
    title: "Understanding Civil Rights In Modern Society.",
  },
];
