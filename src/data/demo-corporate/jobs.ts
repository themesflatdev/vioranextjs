export type Job = {
  slug: string;
  number: string;
  title: string;
  department: string;
};

// 5 open roles from carrer.html's "hiring" list — job 5's department is
// "Customer Experience" (verified against the source, not "Customer
// Success" as a naive guess from the job title might suggest).
export const jobs: Job[] = [
  { slug: "senior-product-manager", number: "01", title: "Senior Product Manager", department: "Product" },
  { slug: "full-stack-developer", number: "02", title: "Full-Stack Developer", department: "Engineering" },
  {
    slug: "strategy-insights-analyst",
    number: "03",
    title: "Strategy & Insights Analyst",
    department: "Business Strategy",
  },
  {
    slug: "brand-communications-specialist",
    number: "04",
    title: "Brand & Communications Specialist",
    department: "Marketing",
  },
  {
    slug: "customer-success-manager",
    number: "05",
    title: "Customer Success Manager",
    department: "Customer Experience",
  },
];
