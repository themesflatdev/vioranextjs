export type TeamMember = {
  slug: string;
  name: string;
  role: string;
  image: string;
};

// Full 6-member roster from our-team.html — about-us.html's section-team
// only shows the first 3 (Maria Torres, David Cho, Amira Hassan) as a
// subset of this exact same list, same order.
//
// Position 5 in the source HTML is a copy-paste bug: it repeats "Amira
// Hassan - Head of Strategy" verbatim (already used at position 3)
// instead of a distinct 6th person. Confirmed with user — replaced with
// "Daniel Reyes - Director of Claims", reusing the otherwise-orphaned
// team-5.jpg photo.
export const teamMembers: TeamMember[] = [
  {
    slug: "maria-torres",
    name: "Maria Torres",
    role: "Chief Executive Officer",
    image: "/assets/images/demo-insurance/team-1.jpg",
  },
  {
    slug: "david-cho",
    name: "David Cho",
    role: "Chief Technology Officer",
    image: "/assets/images/demo-insurance/team-2.jpg",
  },
  {
    slug: "amira-hassan",
    name: "Amira Hassan",
    role: "Head of Strategy",
    image: "/assets/images/demo-insurance/team-3.jpg",
  },
  {
    slug: "sofia-almeida",
    name: "Sofia Almeida",
    role: "Director of Product",
    image: "/assets/images/demo-insurance/team-4.jpg",
  },
  {
    slug: "daniel-reyes",
    name: "Daniel Reyes",
    role: "Director of Claims",
    image: "/assets/images/demo-insurance/team-5.jpg",
  },
  {
    slug: "isabelle-laurent",
    name: "Isabelle Laurent",
    role: "Head of People",
    image: "/assets/images/demo-insurance/team-6.jpg",
  },
];
