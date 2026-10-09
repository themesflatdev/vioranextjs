export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  tag: string;
  author: string;
  date: string;
  image: string;
};

// blog-list.html's 5 real posts. Titles/tags were already insurance-
// appropriate in the source; the excerpt under each was unwritten
// Lorem Ipsum placeholder ("Sed ut perspiciatis...") rather than a content
// choice to preserve — confirmed with user and replaced with real copy
// matching each title, same treatment as service-detail's placeholder text.
export const blogPosts: BlogPost[] = [
  {
    slug: "generate-better-protect-options-now",
    title: "Generate better protect options now",
    excerpt:
      "Discover flexible life insurance options designed to protect your family's future, no matter what tomorrow brings.",
    tag: "Life Insurance",
    author: "Rayna Philips",
    date: "July 5, 2025",
    image: "/assets/images/demo-insurance/blog-item-12.jpg",
  },
  {
    slug: "enable-smarter-risk-shielding-tech",
    title: "Enable smarter risk shielding tech",
    excerpt:
      "See how modern tools are making it easier to assess risk and choose the right health coverage for you and your family.",
    tag: "Health Insurance",
    author: "Rayna Philips",
    date: "July 5, 2025",
    image: "/assets/images/demo-insurance/blog-item-13.jpg",
  },
  {
    slug: "form-innovative-protect-plans-today",
    title: "Form innovative protect plans today",
    excerpt:
      "Learn how our underwriting process creates fair, personalized plans built around your unique situation.",
    tag: "Underwriting",
    author: "Rayna Philips",
    date: "July 5, 2025",
    image: "/assets/images/demo-insurance/blog-item-14.jpg",
  },
  {
    slug: "promote-clear-policy-guidance-tools",
    title: "Promote clear policy guidance tools",
    excerpt:
      "Get practical tips on reading your policy, understanding your coverage, and avoiding common insurance mistakes.",
    tag: "Insurance Tips",
    author: "Rayna Philips",
    date: "July 5, 2025",
    image: "/assets/images/demo-insurance/blog-item-15.jpg",
  },
  {
    slug: "introduce-modern-protect-features",
    title: "Introduce modern protect features",
    excerpt:
      "Explore new critical illness coverage features designed to give you faster support when you need it most.",
    tag: "Critical Illness",
    author: "Rayna Philips",
    date: "July 5, 2025",
    image: "/assets/images/demo-insurance/blog-item-16.jpg",
  },
];
