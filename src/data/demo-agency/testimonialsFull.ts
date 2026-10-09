export type TestimonialFull = {
  name: string;
  role: string;
  quote: string;
  avatar: string;
};

// testimonials.html — 6-item grid. Confirmed against the source: 5 of 6
// leaked insurance/real-estate copy ("coverage", "peace of mind", "my
// family... protected") and were rewritten for an agency per
// agency-pages-menu-only.md. Jerome Bell/Architect's quote had no
// insurance-specific language and fits an agency client as-is, so it's
// kept verbatim (role and quote unchanged) — names/avatars unchanged for
// every item.
export const testimonialsFull: TestimonialFull[] = [
  {
    name: "Savannah Nguyen",
    role: "Startup Founder",
    quote:
      "The team completely transformed our brand identity — professional, creative, and incredibly easy to work with from start to finish.",
    avatar: "/assets/images/avatar/avatar-24.jpg",
  },
  {
    name: "Bessie Cooper",
    role: "Marketing Director",
    quote:
      "From the first call to the final launch, communication was smooth and the results exceeded what we imagined for our website.",
    avatar: "/assets/images/avatar/avatar-23.jpg",
  },
  {
    name: "Jerome Bell",
    role: "Architect",
    quote:
      "Professional, approachable, and always available to help. They explained everything clearly and made me feel confident in my choice",
    avatar: "/assets/images/avatar/avatar-27.jpg",
  },
  {
    name: "Theresa Webb",
    role: "Product Manager",
    quote:
      "They took the time to understand our product and delivered a UI that our users genuinely love using every day.",
    avatar: "/assets/images/avatar/avatar-28.jpg",
  },
  {
    name: "Jessica Jung",
    role: "E-commerce Founder",
    quote:
      "Our online sales grew noticeably after the redesign — the new site just converts so much better than before.",
    avatar: "/assets/images/avatar/avatar-26.jpg",
  },
  {
    name: "Ferran Lopez",
    role: "Marketing Manager",
    quote:
      "Reliable, responsive, and always ahead of deadlines. It's rare to find a creative partner this easy to work with.",
    avatar: "/assets/images/avatar/group-avatar-5-2.jpg",
  },
];
