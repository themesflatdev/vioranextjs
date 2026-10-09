export type Testimonial = {
  quote: string;
  author: string;
  // All 3 say "Logistics" even though this is the corporate niche — a real
  // content bug in the original HTML, preserved per CLAUDE.md rule 4.
  category: string;
  image: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "“We’ve never experienced such a patient-focused approach. Kudos to the staff for being informative, patient, and consistently supportive.”",
    author: "Laura Chen",
    category: "Logistics",
    image: "/assets/images/demo-corporate/testimonial-1.jpg",
  },
  {
    quote:
      "“Writing used to drain my energy. Now I feel more focused because the AI handles the heavy lifting and lets me refine”",
    author: "Jamie L",
    category: "Logistics",
    image: "/assets/images/demo-corporate/testimonial-5.jpg",
  },
  {
    quote:
      "“They quickly understood our challenges and delivered real impact. Costs dropped, and internal operations became smoother than ever before.”",
    author: "Thomas V",
    category: "Logistics",
    image: "/assets/images/demo-corporate/testimonial-6.jpg",
  },
];
