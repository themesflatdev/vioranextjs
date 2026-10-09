export type Project = {
  image: string;
  title: string;
  category: string;
  slug: string;
};

// These 3 home-page teaser projects are the same 3 as the first 3 entries
// of data/demo-agency/portfolio.ts (same title+category+image, just a
// different filename prefix) — slugs point there instead of the source's
// dead "#" links.
export const projects: Project[] = [
  { image: "/assets/images/demo-agency/project-1.jpg", title: "Chicago, IL", category: "Web Design", slug: "chicago-il-web-design" },
  { image: "/assets/images/demo-agency/project-2.jpg", title: "Heart Shaped", category: "App Development", slug: "heart-shaped" },
  { image: "/assets/images/demo-agency/project-3.jpg", title: "Chicago, IL", category: "Ai SaaS", slug: "chicago-il-ai-saas" },
];
