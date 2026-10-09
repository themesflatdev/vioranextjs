export type PortfolioItem = {
  slug: string;
  title: string;
  category: string;
  image: string;
  width: number;
  height: number;
  colClass: string;
};

// From portfolio.html's section-portfolio-5 masonry grid (3 rows of
// 8/4-col pairs). Items 1 and 3 share the literal title "Chicago, IL" in
// the source — a real content duplication (kept per CLAUDE.md rule 4) —
// so slugs combine title+category to stay unique for generateStaticParams.
export const portfolioItems: PortfolioItem[] = [
  {
    slug: "chicago-il-web-design",
    title: "Chicago, IL",
    category: "Web Design",
    image: "/assets/images/demo-agency/portfolio-item-1.jpg",
    width: 850,
    height: 580,
    colClass: "col-lg-8 col-md-6",
  },
  {
    slug: "heart-shaped",
    title: "Heart Shaped",
    category: "App Development",
    image: "/assets/images/demo-agency/portfolio-item-2.jpg",
    width: 410,
    height: 580,
    colClass: "col-lg-4 col-md-6",
  },
  {
    slug: "chicago-il-ai-saas",
    title: "Chicago, IL",
    category: "Ai SaaS",
    image: "/assets/images/demo-agency/portfolio-item-3.jpg",
    width: 410,
    height: 580,
    colClass: "col-lg-4 col-md-6",
  },
  {
    slug: "e-commerce",
    title: "E-Commerce",
    category: "Web Design",
    image: "/assets/images/demo-agency/portfolio-item-4.jpg",
    width: 850,
    height: 580,
    colClass: "col-lg-8 col-md-6",
  },
  {
    slug: "montreal-canada",
    title: "Montreal Canada",
    category: "UI/UX Design",
    image: "/assets/images/demo-agency/portfolio-item-5.jpg",
    width: 850,
    height: 580,
    colClass: "col-lg-8 col-md-6",
  },
  {
    slug: "portfolio-freelancer",
    title: "Portfolio Freelancer",
    category: "Develop",
    image: "/assets/images/demo-agency/portfolio-item-6.jpg",
    width: 410,
    height: 580,
    colClass: "col-lg-4 col-md-6",
  },
];
