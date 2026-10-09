export type Testimonial = {
  quote: string;
  author: string;
  role: string;
  avatar: string;
};

// HTML gốc có 2 testimonial (1) và (3) cùng tên "Aisha Malik, CEO at
// FlowEdge" nhưng avatar khác nhau (avatar-6.jpg vs avatar-8.jpg) — lỗi demo
// thật, giữ nguyên theo CLAUDE.md rule 4.
export const testimonials: Testimonial[] = [
  {
    quote:
      "Their AI integration cut our manual workload by over 50%. It felt like adding a superpower to our team",
    author: "Aisha Malik",
    role: "CEO at FlowEdge",
    avatar: "/assets/images/avatar/avatar-6.jpg",
  },
  {
    quote: "AI has never felt this seamless. We plugged it in, and things just started working smarter.",
    author: "Tony Nguyen",
    role: "Head of Operations at Avitex",
    avatar: "/assets/images/avatar/avatar-7.jpg",
  },
  {
    quote:
      "As a growing tech company, we needed more than just hype — we needed AI that delivers measurable impact. Their team took the time to understand our systems, trained a custom model, and integrated it without interrupting our workflow. In under two months, we reduced operational costs and improved customer satisfaction scores by 23%. Truly transformational",
    author: "Aisha Malik",
    role: "CEO at FlowEdge",
    avatar: "/assets/images/avatar/avatar-8.jpg",
  },
  {
    quote:
      "Before working with this team, we struggled to turn our data into action. Within weeks, they deployed a model that gave us real-time insights and automated reports that used to take hours.",
    author: "Sarah Nguyen",
    role: "Product Manager at NexaTech",
    avatar: "/assets/images/avatar/avatar-9.jpg",
  },
];
