export type Testimonial = {
  quote: string;
  author: string;
  role: string;
  avatar: string;
};

// Slide 4 lặp lại y hệt slide 1 (Jamie L, avatar-16) trong HTML gốc — lỗi
// demo thật, giữ nguyên theo CLAUDE.md rule 4.
export const testimonials: Testimonial[] = [
  {
    quote:
      "Working with Viora has completely shifted how I take care of myself. I have more energy, better focus, and feel truly in control of my health.",
    author: "Jamie L",
    role: "Content Marketer",
    avatar: "/assets/images/avatar/avatar-16.jpg",
  },
  {
    quote:
      "Viora didn’t just give me a plan — they gave me confidence. I feel stronger, calmer, and more balanced than ever before.",
    author: "Alex Johnson",
    role: "Content Marketer",
    avatar: "/assets/images/avatar/avatar-12.jpg",
  },
  {
    quote:
      "I’ve tried so many programs, but Viora is the first that actually stuck. Everything was personalized, realistic, and supportive.",
    author: "Rebecca M",
    role: "Marketing Consultant",
    avatar: "/assets/images/avatar/avatar-10.jpg",
  },
  {
    quote:
      "Working with Viora has completely shifted how I take care of myself. I have more energy, better focus, and feel truly in control of my health.",
    author: "Jamie L",
    role: "Content Marketer",
    avatar: "/assets/images/avatar/avatar-16.jpg",
  },
];
