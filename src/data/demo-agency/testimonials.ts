export type Testimonial = {
  quote: string;
  author: string;
  // 2 of 3 say "Logistics" even though this is the agency niche — a real
  // content bug in the original HTML, preserved per CLAUDE.md rule 4.
  category: string;
  image: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "My experience with property management services has exceeded expectations. They efficiently manage properties with a professional and attentive approach in every situation.",
    author: "Cheyenne Mango",
    category: "CEO Avitex",
    image: "/assets/images/demo-agency/testimonial-2.jpg",
  },
  {
    quote:
      "I was skeptical about using AI for writing at first, but this platform completely changed my mind. It's intuitive, adapts to my style, and gives me control without the stress",
    author: "Carla S",
    category: "Logistics",
    image: "/assets/images/demo-agency/testimonial-2.jpg",
  },
  {
    quote:
      "As a non-native English speaker, this tool has been a lifesaver. It helps me express ideas clearly, professionally, and in a tone that fits my audience. I use it for emails, landing pages",
    author: "Daniel K",
    category: "Logistics",
    image: "/assets/images/demo-agency/testimonial-2.jpg",
  },
];
