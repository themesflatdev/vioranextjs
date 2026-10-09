export type Testimonial = {
  quote: string;
  author: string;
  role: string;
  avatar: string;
};

// "Tatiana George" xuất hiện 2 lần với avatar khác nhau (avatar-21/avatar-22)
// — lỗi demo thật trong HTML gốc, giữ nguyên theo CLAUDE.md rule 4.
export const testimonials: Testimonial[] = [
  {
    quote: "This tool saved us hours every week. Everything feels faster and easier now",
    author: "Tatiana Workman",
    role: "Marketing Manager",
    avatar: "/assets/images/avatar/avatar-19.jpg",
  },
  {
    quote: "I love how clean and intuitive the interface is. Our team adopted it in a day",
    author: "Terry Workman",
    role: "Product Designer",
    avatar: "/assets/images/avatar/avatar-20.jpg",
  },
  {
    quote: "We scaled from 3 to 30 users with zero hassle. Support was fantastic.",
    author: "Tatiana George",
    role: "COO at a SaaS startup",
    avatar: "/assets/images/avatar/avatar-21.jpg",
  },
  {
    quote: "Finally, software that just works — no learning curve, no clutter.",
    author: "Tatiana George",
    role: "COO at a SaaS startup",
    avatar: "/assets/images/avatar/avatar-22.jpg",
  },
];
