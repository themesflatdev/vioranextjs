export type Testimonial = {
  quote: string;
  author: string;
  role: string;
  avatar: string;
};

// HTML gốc lặp lại CHÍNH XÁC 9 testimonial này ở cả 3 cột marquee (3 lần) —
// lỗi demo thật (Alex Johnson xuất hiện 3 lần với avatar khác nhau,
// avatar-10 dùng 2 lần), giữ nguyên theo CLAUDE.md rule 4.
export const testimonials: Testimonial[] = [
  {
    quote:
      "As a non-native English speaker, this tool has been a lifesaver. It helps me express ideas clearly, professionally, and in a tone that fits my audience. I use it for emails, landing pages, and even proposals.",
    author: "Rebecca M",
    role: "Marketing Consultant",
    avatar: "/assets/images/avatar/avatar-10.jpg",
  },
  {
    quote:
      "I used to spend hours crafting blog content from scratch. With this AI writer, I get a complete, structured draft in minutes, and it's already 80% usable.",
    author: "Emily N",
    role: "Blogger",
    avatar: "/assets/images/avatar/avatar-11.jpg",
  },
  {
    quote: "I was surprised at how natural and human the content feels. It saves me so much time on first drafts and revisions.",
    author: "Alex Johnson",
    role: "Content Marketer",
    avatar: "/assets/images/avatar/avatar-12.jpg",
  },
  {
    quote:
      "What impressed me most is the tone flexibility. Whether I need something fun, professional, or direct, the output always feels right for the audience and saves me lots of editing time",
    author: "Thomas V",
    role: "Copywriter",
    avatar: "/assets/images/avatar/avatar-13.jpg",
  },
  {
    quote: "Writing used to drain my energy. Now I feel more focused because the AI handles the heavy lifting and lets me refine",
    author: "Alex Johnson",
    role: "Content Marketer",
    avatar: "/assets/images/avatar/avatar-14.jpg",
  },
  {
    quote:
      "Our agency produces tons of content for clients across industries. This AI writer drastically improved our turnaround time, and the quality is on par with our human writers. It's not just a tool — it's a competitive advantage",
    author: "Carla S",
    role: "Creative Director",
    avatar: "/assets/images/avatar/avatar-15.jpg",
  },
  {
    quote: "This AI writer changed how I work. I can now generate content ideas and full drafts in minutes instead of hours.",
    author: "Jamie L",
    role: "Content Marketer",
    avatar: "/assets/images/avatar/avatar-16.jpg",
  },
  {
    quote:
      "I was skeptical about using AI for writing at first, but this platform completely changed my mind. It's intuitive, adapts to my style, and gives me control without the stress of starting from scratch. It's now a core part of my writing process.",
    author: "Alex Johnson",
    role: "Content Marketer",
    avatar: "/assets/images/avatar/avatar-17.jpg",
  },
  {
    quote:
      "We needed unique descriptions for hundreds of products. The AI helped us maintain consistency, improve SEO, and saved our team countless editing hours",
    author: "Daniel K",
    role: "Shopify Store Manager",
    avatar: "/assets/images/avatar/avatar-10.jpg",
  },
];
