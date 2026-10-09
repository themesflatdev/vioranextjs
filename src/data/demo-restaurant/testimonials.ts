export type Testimonial = {
  quote: string;
  author: string;
  role: string;
  avatar: string;
};

// HTML gốc lặp lại ĐÚNG 1 testimonial này 3 lần (3 swiper-slide giống hệt
// nhau) — lỗi demo thật, giữ nguyên theo CLAUDE.md rule 4.
export const testimonial: Testimonial = {
  quote:
    "From romantic dinners to family celebrations, our guests keep coming back for more than just the food they return for the warmth, the service, and the unforgettable atmosphere.",
  author: "Jocelyn Philips",
  role: "Food Blogger",
  avatar: "/assets/images/avatar/avatar-5.jpg",
};
