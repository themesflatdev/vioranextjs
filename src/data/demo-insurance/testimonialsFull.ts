export type TestimonialFull = {
  name: string;
  role: string;
  quote: string;
  avatar: string;
};

// testimonials.html — 6-item grid. Content is genuinely insurance-flavored
// ("coverage", "peace of mind", family/health/property protection) — this
// is the niche this copy was originally written for (the same content
// leaked into demo-agency's testimonials.html and had to be rewritten
// there; here it's already correct). Kept 100% verbatim per user
// confirmation, including the double period typo in Jessica Jung's quote.
export const testimonialsFull: TestimonialFull[] = [
  {
    name: "Savannah Nguyen",
    role: "Homeowner",
    quote:
      "Dedicated, professional, and attentive to every need with care. Their advice saved me money while giving me full peace of mind for the future.",
    avatar: "/assets/images/avatar/avatar-24.jpg",
  },
  {
    name: "Bessie Cooper",
    role: "Villa Owner",
    quote:
      "Efficient, compassionate, and highly attentive to every single detail. They ensured my family has the best coverage possible without any unnecessary hassle.",
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
    role: "Homeowner",
    quote:
      "Experienced, patient, and genuinely supportive throughout the entire process. I finally feel completely secure knowing that my health and family are well protected.",
    avatar: "/assets/images/avatar/avatar-28.jpg",
  },
  {
    name: "Jessica Jung",
    role: "Homeowner",
    quote:
      "Dedicated, professional, and attentive to every need with care. Their advice saved me money while giving me full peace of mind for the future..",
    avatar: "/assets/images/avatar/avatar-26.jpg",
  },
  {
    name: "Ferran Lopez",
    role: "Homeowner",
    quote:
      "Attentive, knowledgeable, and genuinely caring in every interaction. Their guidance gave me complete peace of mind knowing I am fully covered.",
    avatar: "/assets/images/avatar/group-avatar-5-2.jpg",
  },
];
