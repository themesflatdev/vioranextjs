"use client";

import Image from "next/image";
import Link from "next/link";
import { useSplitTextReveal } from "@/hooks/useSplitTextReveal";
import type { TeamMember } from "@/data/demo-insurance/teamMembers";

const socialIcons = ["icon-FacebookLogo", "icon-x-logo", "icon-instagram-logo"];

function TeamCard({ member, delay }: { member: TeamMember; delay: string }) {
  const href = `/demo-insurance/team-detail/${member.slug}`;

  return (
    <div className="card-team style-1 wow fadeInLeft" data-wow-delay={delay}>
      <div className="img-style">
        <Image loading="lazy" width={428} height={428} src={member.image} alt="team" />
        <ul className="tf-social style-3 d-grid gap_12">
          {socialIcons.map((icon) => (
            <li key={icon}>
              <a href="#" className={icon} />
            </li>
          ))}
        </ul>
        <Link href={href} className="overlay-link" />
      </div>
      <div className="info">
        <Link href={href} className="name text_white link h5 font-5 mb_2">
          {member.name}
        </Link>
        <p className="text-caption-1 text_white">{member.role}</p>
      </div>
    </div>
  );
}

// section-team on our-team.html — centered heading sits ABOVE the grid
// (unlike about-us.html's section-team, which mixes a "box" heading cell
// into the grid itself). All 6 members, lg-col-3/sm-col-2, delay cycles
// every 3 cards (0s/0.2s/0.4s) same as the source markup.
export default function TeamGridSection({ members }: { members: TeamMember[] }) {
  const subRef = useSplitTextReveal<HTMLDivElement>("up");
  const titleRef = useSplitTextReveal<HTMLHeadingElement>("right");

  return (
    <div className="tf-container medium tf-spacing-1">
      <div className="heading-section text-center mb_60">
        <div className="sub text-label text-uppercase mb_12" ref={subRef}>
          OUR TEAM
        </div>
        <h2 className="title" ref={titleRef}>
          Meet Our Expert
        </h2>
      </div>
      <div className="tf-grid-layout lg-col-3 sm-col-2 gap_30">
        {members.map((member, index) => (
          <TeamCard member={member} delay={`${(index % 3) * 0.2}s`} key={member.slug} />
        ))}
      </div>
    </div>
  );
}
