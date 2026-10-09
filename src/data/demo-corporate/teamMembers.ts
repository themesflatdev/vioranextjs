export type TeamMember = {
  slug: string;
  name: string;
  role: string;
  image: string;
};

// Full 7-member roster from our-team.html — about-us.html's section-team
// only shows the first 3 (Maria Torres, David Cho, Amira Hassan) as a
// subset of this exact same list, same order.
export const teamMembers: TeamMember[] = [
  {
    slug: "maria-torres",
    name: "Maria Torres",
    role: "Chief Executive Officer",
    image: "/assets/images/demo-corporate/team-1.jpg",
  },
  {
    slug: "david-cho",
    name: "David Cho",
    role: "Chief Technology Officer",
    image: "/assets/images/demo-corporate/team-2.jpg",
  },
  {
    slug: "amira-hassan",
    name: "Amira Hassan",
    role: "Head of Strategy",
    image: "/assets/images/demo-corporate/team-3.jpg",
  },
  {
    slug: "sofia-almeida",
    name: "Sofia Almeida",
    role: "Director of Product",
    image: "/assets/images/demo-corporate/team-4.jpg",
  },
  {
    slug: "elena-park",
    name: "Elena Park",
    role: "Chief Marketing Officer",
    image: "/assets/images/demo-corporate/team-5.jpg",
  },
  {
    slug: "kenji-sato",
    name: "Kenji Sato",
    role: "Director of Engineering",
    image: "/assets/images/demo-corporate/team-6.jpg",
  },
  {
    slug: "isabelle-laurent",
    name: "Isabelle Laurent",
    role: "Head of People",
    image: "/assets/images/demo-corporate/team-7.jpg",
  },
];
