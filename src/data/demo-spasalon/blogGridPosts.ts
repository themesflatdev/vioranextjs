export type BlogGridPost = {
  slug: string;
  title: string;
  image: string;
  tag: string;
};

// bloggrid.html's 8 real posts, in original order. Shared author/date in
// the source — kept verbatim. 4 titles here are the exact same wording as
// 4 bloglist.html posts, but each pairs with a different image/tag — a
// genuine content duplication across the theme's 2 blog-layout demos, not
// an error on our end. Slugs get a "-grid" suffix only where that title
// collision would otherwise clash with blogListPosts' slug.
export const blogGridAuthor = "Lindsey Dorwart";
export const blogGridDate = "July 5, 2025";

export const blogGridPosts: BlogGridPost[] = [
  {
    slug: "self-care-rituals",
    title: "5 Self-Care Rituals for Stressful Days",
    image: "/assets/images/demo-spasalon/blog-1.jpg",
    tag: "spa body",
  },
  {
    slug: "monthly-facials-grid",
    title: "Why Monthly Facials Keep Your Skin Radiant",
    image: "/assets/images/demo-spasalon/blog-2.jpg",
    tag: "Spa Salon",
  },
  {
    slug: "full-body-scrubs-grid",
    title: "Full Body Scrubs Reveal Smooth, Glowing Skin",
    image: "/assets/images/demo-spasalon/blog-3.jpg",
    tag: "Beauty",
  },
  {
    slug: "hot-stone-therapy-grid",
    title: "Hot Stone Therapy Relieves Stress and Tension",
    image: "/assets/images/demo-spasalon/blog-4.jpg",
    tag: "Manual Therapy",
  },
  {
    slug: "regular-spa-visits-grid",
    title: "Regular Spa Visits Enhance Natural Inner Glow",
    image: "/assets/images/demo-spasalon/blog-6.jpg",
    tag: "Manual Therapy",
  },
  {
    slug: "detox-body-wraps-grid",
    title: "Detox Body Wraps Cleanse and Brighten Skin",
    image: "/assets/images/demo-spasalon/blog-7.jpg",
    tag: "spa body",
  },
  {
    slug: "routine-pedicures",
    title: "Routine Pedicures Improve Relaxation and Foot Care",
    image: "/assets/images/demo-spasalon/blog-2.jpg",
    tag: "Spa Salon",
  },
  {
    slug: "monthly-facials-maintain",
    title: "Monthly Facials Maintain Radiant, Healthy Skin",
    image: "/assets/images/demo-spasalon/blog-8.jpg",
    tag: "Manual Therapy",
  },
];
