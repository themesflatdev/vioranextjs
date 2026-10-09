export type BlogHomeItem = {
  image: string;
  tag: string;
  author: string;
  date: string;
  title: string;
};

// Item 3 and 4 share the same author and date in the original HTML — a
// real content bug, preserved per CLAUDE.md rule 4.
export const blogHomeItems: BlogHomeItem[] = [
  {
    image: "/assets/images/demo-corporate/blog-item-8.jpg",
    tag: "Innovation & Tech",
    author: "Mike Hanley",
    date: "June 12, 2025",
    title: "Launching Our New Office in Singapore",
  },
  {
    image: "/assets/images/demo-corporate/blog-item-9.jpg",
    tag: "Culture & People",
    author: "Balla Daniella",
    date: "May 06, 2025",
    title: "CEO Talks Innovation at Tech Summit 2025",
  },
  {
    image: "/assets/images/demo-corporate/blog-item-10.jpg",
    tag: "Press Releases",
    author: "Kelemen Krisztina",
    date: "May 08, 2025",
    title: "New Client Onboarding Process Streamlined",
  },
  {
    image: "/assets/images/demo-corporate/blog-item-11.jpg",
    tag: "Case Studies",
    author: "Kelemen Krisztina",
    date: "May 08, 2025",
    title: "Partnering with GreenFuture to Promote Sustainability",
  },
];
