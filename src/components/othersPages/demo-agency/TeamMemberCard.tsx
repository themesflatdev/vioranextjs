"use client";

import Image from "next/image";
import Link from "next/link";
import type { TeamMember } from "@/data/demo-agency/teamMembers";

const socialIcons = ["icon-FacebookLogo", "icon-x-logo", "icon-LinkedinLogo"];

// card-team style-6 — shared markup between about.html's section-team-7
// (4-member subset, 435x580 images) and our-team.html's section-team-6
// (all 6 members, 450x540 images).
export default function TeamMemberCard({
  member,
  width,
  height,
}: {
  member: TeamMember;
  width: number;
  height: number;
}) {
  const href = `/demo-agency/team-detail/${member.slug}`;

  return (
    <div className="card-team style-6 hover-image">
      <div className="img-style mb_28">
        <Image loading="lazy" width={width} height={height} src={member.image} alt="team" />
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
        <Link href={href} className="name text-white link h4 mb_8 hover-line-text d-inline-block">
          {member.name}
        </Link>
        <p className="text-body-default text_muted">{member.role}</p>
      </div>
    </div>
  );
}
