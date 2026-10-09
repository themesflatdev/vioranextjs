export type TeamMember = {
  slug: string;
  name: string;
  role: string;
  image: string;
};

// Full 6-member roster from our-team.html — about.html's section-team-7
// only shows the first 4 as a subset of this exact same list, same order.
// Thomas Tatum and Angelina Onana share the literal role "Web Developer"
// in the source (verified, not guessed) — a real content duplication,
// preserved per CLAUDE.md rule 4.
export const teamMembers: TeamMember[] = [
  { slug: "linda-parker", name: "Linda Parker", role: "Developer", image: "/assets/images/demo-agency/team-1.jpg" },
  { slug: "joseph-jessica", name: "Joseph Jessica", role: "Designer", image: "/assets/images/demo-agency/team-2.jpg" },
  { slug: "david-john", name: "David John", role: "Founder", image: "/assets/images/demo-agency/team-3.jpg" },
  { slug: "jessica-jung", name: "Jessica Jung", role: "Co-Founder", image: "/assets/images/demo-agency/team-4.jpg" },
  { slug: "thomas-tatum", name: "Thomas Tatum", role: "Web Developer", image: "/assets/images/demo-agency/team-5.jpg" },
  { slug: "angelina-onana", name: "Angelina Onana", role: "Web Developer", image: "/assets/images/demo-agency/team-6.jpg" },
];
