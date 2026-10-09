"use client";

import Image from "next/image";
import Link from "next/link";
import { useSplitTextReveal } from "@/hooks/useSplitTextReveal";
import type { TeamMember } from "@/data/demo-spasalon/teamMembers";

const socialIcons = ["icon-FacebookLogo", "icon-x-logo", "icon-instagram-logo"];

// Source HTML links every card to the single static member-detail.html /
// staffs.html page it's placed on (never a per-member URL — the theme never
// gave this card a real per-member target). Since our member-detail page IS
// slug-based, point each card at its own /member-detail/{slug} instead of
// reproducing that dead-end link.
function TeamCard({ member, hoverImage }: { member: TeamMember; hoverImage?: boolean }) {
  const href = `/demo-spasalon/member-detail/${member.slug}`;

  return (
    <div className={`card-team style-5${hoverImage ? " hover-image" : ""}`}>
      <div className="img-style">
        <Image loading="lazy" width={410} height={410} src={member.image} alt="team" />
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
        <Link href={href} className="name text-white link h5 mb_5">
          {member.name}
        </Link>
        <p className="text-caption-1 text_white">{member.role}</p>
      </div>
    </div>
  );
}

export default function TeamGridSection({
  members,
  gridClassName,
  spacing = false,
  hoverImage = false,
}: {
  members: TeamMember[];
  gridClassName: string;
  spacing?: boolean;
  hoverImage?: boolean;
}) {
  const subRef = useSplitTextReveal<HTMLDivElement>("up");
  const titleRef = useSplitTextReveal<HTMLHeadingElement>("blur-fade");

  return (
    <div className={`section-team-5${spacing ? " tf-spacing-1" : ""}`}>
      <div className="tf-container medium">
        <div className="heading-section d-grid gap_12 text-center mb_40">
          <div className="sub text-label text-uppercase split-text effect-up text_primary-color lh-16" ref={subRef}>
            OUR TEAM
          </div>
          <h2 className="title split-text effect-blur-fade" ref={titleRef}>
            Meet Our Expert
          </h2>
        </div>
        <div className={`tf-grid-layout ${gridClassName} gap_30`}>
          {members.map((member) => (
            <TeamCard member={member} hoverImage={hoverImage} key={member.slug} />
          ))}
        </div>
      </div>
    </div>
  );
}
