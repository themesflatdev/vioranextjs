export type Testimonial = {
  key: string;
  quote: string;
  author: string;
  role: string;
};

export const testimonials: Testimonial[] = [
  {
    key: "michael-johnson",
    quote:
      "Our experience with this law firm was outstanding. Their professionalism and constant support gave us confidence throughout every step, ensuring fair solutions and results exceeding expectations.",
    author: "Michael Johnson",
    role: "Business Owner, New York",
  },
  {
    // Original HTML: farming-niche copy leaked in here ("the land", farmers")
    // with role "Organic Farm Owner" — corrected to match the lawyer niche
    // per the prompt's instruction.
    key: "cheyenne-mango",
    quote:
      "The team's dedication and deep legal knowledge helped us resolve our corporate matter swiftly and professionally. We couldn't have asked for better representation.",
    author: "Cheyenne Mango",
    role: "Corporate Client",
  },
  {
    // Slide 3 is a verbatim duplicate of slide 2 in the original HTML (demo
    // content bug) — keep the corrected slide-2 copy repeated here too,
    // per CLAUDE.md rule 4 (preserve the original's repetition).
    key: "cheyenne-mango-2",
    quote:
      "The team's dedication and deep legal knowledge helped us resolve our corporate matter swiftly and professionally. We couldn't have asked for better representation.",
    author: "Cheyenne Mango",
    role: "Corporate Client",
  },
];
