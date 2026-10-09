"use client";

import Image from "next/image";
import Link from "next/link";
import { useSplitTextReveal } from "@/hooks/useSplitTextReveal";
import type { TeamMember } from "@/data/demo-corporate/teamMembers";

const socialIcons = ["icon-FacebookLogo", "icon-x-logo", "icon-instagram-logo"];

function TeamCard({ member, delay }: { member: TeamMember; delay: string }) {
  const href = `/team-detail/${member.slug}`;

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

// section-team — shared markup between about-us.html (first 3 members) and
// our-team.html (all 7), same heading copy on both, per
// corporate-pages-remaining.md.
export default function TeamGridSection({ members }: { members: TeamMember[] }) {
  const subRef = useSplitTextReveal<HTMLDivElement>("up");
  const titleRef = useSplitTextReveal<HTMLHeadingElement>("right");
  const descRef = useSplitTextReveal<HTMLParagraphElement>("lines-transform");

  return (
    <div className="section-team tf-spacing-1">
      <div className="tf-container large">
        <div className="tf-grid-layout lg-col-4 sm-col-2 gap_20 align-items-center">
          <div className="box">
            <div className="heading-section style-default mb_32">
              <div className="sub text-label text-uppercase lh-16" ref={subRef}>
                Our Team
              </div>
              <h3 className="title" ref={titleRef}>
                Meet Our Leadership Team
              </h3>
              <p className="desc text-body-3 text_on-suface-1 mt_6 font-3" ref={descRef}>
                A diverse group of thinkers, builders, and leaders driving innovation and impact.
              </p>
            </div>
            <div className="trust d-flex align-items-center gap_12 mb_32 wow fadeInUp" data-wow-delay="0.4s">
              <div className="group">
                <Image width={48} height={48} src="/assets/images/avatar/group-avatar-1-1.jpg" alt="avatar" />
                <Image width={48} height={48} src="/assets/images/avatar/group-avatar-1-2.jpg" alt="avatar" />
                <Image width={48} height={48} src="/assets/images/avatar/group-avatar-1-3.jpg" alt="avatar" />
              </div>
              <p className="text-caption-1 text_primary">Trusted by 50k+ users</p>
            </div>
            <a href="#" className="tf-btn btn-hover-animate-2 wow fadeInUp" data-wow-delay="0.6s">
              <span>Join Our Team</span>
              <span />
            </a>
          </div>
          {members.map((member, index) => (
            <TeamCard member={member} delay={`${index * 0.2}s`} key={member.slug} />
          ))}
        </div>
      </div>
    </div>
  );
}
