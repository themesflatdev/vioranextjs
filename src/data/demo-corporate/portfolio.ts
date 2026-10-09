export type PortfolioItem = {
  slug: string;
  title: string;
  category: string;
  image: string;
  width: number;
  height: number;
};

// Titles are the literal (whitespace-collapsed) link text from
// portfolio.html — project name immediately followed by client name with
// no separator, a real content quirk of the original demo, kept as-is.
export const portfolioItems: PortfolioItem[] = [
  {
    slug: "enterprise-identity-revamp-nexora-group",
    title: "Enterprise Identity Revamp Nexora Group",
    category: "Branding",
    image: "/assets/images/demo-corporate/portfolio-item-1.jpg",
    width: 965,
    height: 580,
  },
  {
    slug: "smart-workflow-integration-delta-logistics",
    title: "Smart Workflow Integration Delta Logistics",
    category: "DigitalShift",
    image: "/assets/images/demo-corporate/portfolio-item-2.jpg",
    width: 965,
    height: 580,
  },
  {
    slug: "digital-presence-overhaul-orion-capital",
    title: "Digital Presence Overhaul Orion Capital",
    category: "Manufacturing",
    image: "/assets/images/demo-corporate/portfolio-item-3.jpg",
    width: 965,
    height: 580,
  },
  {
    slug: "cross-platform-dashboard-vanta-energy",
    title: "Cross-Platform Dashboard Vanta Energy",
    category: "Manufacturing",
    image: "/assets/images/demo-corporate/portfolio-item-4.jpg",
    width: 965,
    height: 580,
  },
  {
    slug: "corporate-communications-kit-atria-pharma",
    title: "Corporate Communications Kit Atria Pharma",
    category: "Logistics",
    image: "/assets/images/demo-corporate/portfolio-item-5.jpg",
    width: 965,
    height: 580,
  },
];
