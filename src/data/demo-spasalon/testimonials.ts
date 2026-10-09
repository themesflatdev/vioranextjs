export type SpaTestimonial = {
  key: string;
  image: string;
  quote: string;
  name: string;
};

// Home page shows only the first 2 (spaTestimonials.slice(0, 2)) —
// testimonials.html shows all 6, same order.
export const spaTestimonials: SpaTestimonial[] = [
  {
    key: "lydia-gouse",
    image: "/assets/images/demo-spasalon/testimonial-3.jpg",
    quote: "The moment I stepped in, I felt calm. The massage was heavenly — I didn’t want to leave!",
    name: "Lydia Gouse",
  },
  {
    key: "madelyn-rhiel-madsen",
    image: "/assets/images/demo-spasalon/testimonial-4.jpg",
    quote: "This spa is my monthly ritual now. The therapists are so kind, and every detail is perfect.",
    name: "Madelyn Rhiel Madsen",
  },
  {
    key: "david-l",
    image: "/assets/images/demo-spasalon/testimonial-item-1.jpg",
    quote: "From start to finish, everything was perfect. My skin glowed instantly — I’ll definitely return!",
    name: "David L.",
  },
  {
    key: "anna-p",
    image: "/assets/images/demo-spasalon/testimonial-item-2.jpg",
    quote: "The staff was so kind and welcoming. I felt renewed inside and out after my treatment!",
    name: "Anna P.",
  },
  {
    key: "santhos-k",
    image: "/assets/images/demo-spasalon/testimonial-item-3.jpg",
    quote: "Every detail was handled with such care. The spa felt like a peaceful escape from life!",
    name: "Santhos K.",
  },
  {
    key: "james-r",
    image: "/assets/images/demo-spasalon/testimonial-item-4.jpg",
    quote: "The massage eased every ache in my body. I walked out with energy and a smile!",
    name: "James R.",
  },
];
