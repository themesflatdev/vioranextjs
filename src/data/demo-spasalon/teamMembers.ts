export type TeamMember = {
  slug: string;
  name: string;
  role: string;
  image: string;
};

// All 6 members share the role "Cosmetologist" in the source HTML (staffs.html).
export const teamMembers: TeamMember[] = [
  {
    slug: "maria-torres",
    name: "Maria Torres",
    role: "Cosmetologist",
    image: "/assets/images/demo-spasalon/team-1.jpg",
  },
  {
    slug: "dana-cho",
    name: "Dana Cho",
    role: "Cosmetologist",
    image: "/assets/images/demo-spasalon/team-2.jpg",
  },
  {
    slug: "amira-hassan",
    name: "Amira Hassan",
    role: "Cosmetologist",
    image: "/assets/images/demo-spasalon/team-3.jpg",
  },
  {
    slug: "feran-torres",
    name: "Feran Torres",
    role: "Cosmetologist",
    image: "/assets/images/demo-spasalon/team-4.jpg",
  },
  {
    slug: "ana-chloris",
    name: "Ana Chloris",
    role: "Cosmetologist",
    image: "/assets/images/demo-spasalon/team-5.jpg",
  },
  {
    slug: "christ-van",
    name: "Christ Van",
    role: "Cosmetologist",
    image: "/assets/images/demo-spasalon/team-6.jpg",
  },
];
