"use client";

import Image from "next/image";
import { useFixedThumb } from "@/hooks/useFixedThumb";
import type { TeamMember } from "@/data/demo-insurance/teamMembers";

const socialIcons = [
  "icon-messenger-logo",
  "icon-x-logo",
  "icon-instagram-logo",
  "icon-skype-logo",
  "icon-telegram-logo",
];

const expertiseAreas = [
  "B2B Marketing Strategy",
  "Brand Positioning",
  "Enterprise Demand Generation",
  "Go-To-Market Planning",
  "Cross-Functional Leadership",
];

// team-detail.html only has one demo write-up (for Maria Torres), shared
// by every slug — only name/role/image change per member, same approach
// as demo-corporate's TeamDetailBody. The original description
// contradicted the displayed title ("Chief Executive Officer" heading,
// but text called her "Chief Marketing Officer") — fixed the same way:
// dropped the specific title from the paragraph and switched to
// they/their since it's now shared across all 6 members.
//
// The source's avatar is a single static "images/team-detail.jpg" (one
// flat demo instance) — swapped for member.image so each dynamic slug
// shows its own photo, matching the listing page avatar.
export default function TeamDetailBody({ member }: { member: TeamMember }) {
  const wrapRef = useFixedThumb<HTMLDivElement>();

  return (
    <div className="tf-container tf-spacing-1">
      <div className="team-detail v2 fixed-thumb-wrap" ref={wrapRef}>
        <div className="avatar">
          <Image
            className="fixed-thumb"
            data-startoffset="450"
            loading="eager"
            width={600}
            height={600}
            src={member.image}
            alt="team"
          />
        </div>
        <div className="detail">
          <div className="content d-grid gap_24">
            <div className="info-author">
              <h3 className="name">{member.name}</h3>
              <p className="text-label lh-16 fw-6 text-uppercase letter-spacing-1">{member.role}</p>
            </div>
            <ul className="tf-social style-2 d-flex gap_24">
              {socialIcons.map((icon) => (
                <li key={icon}>
                  <a href="#" className={icon} />
                </li>
              ))}
            </ul>
            <p className="desc text-body-2">
              {member.name} is a valued member of the leadership team at Viora, where they lead
              strategic initiatives, cross-functional collaboration, and drive measurable impact
              across the organization. With over 12 years of experience in B2B technology and
              enterprise communications, they have a proven track record of building
              high-performing teams and launching campaigns that drive measurable business impact.
            </p>
            <p className="quote text_secondary-color h6 fw-5">
              &ldquo;Great marketing is about clarity, empathy, and timing. I believe in telling
              the right story to the right people — and making it matter.&rdquo;
            </p>
          </div>
          <ul className="info-list d-grid gap_16">
            <li>
              <div className="text-label lh-16 text_secondary fw-6 letter-spacing-1 text-uppercase mb_16">
                Infomation:
              </div>
              <a href="#" className="link text_secondary-color h5">
                San Francisco, California
              </a>
            </li>
            <li>
              <div className="text-label lh-16 text_secondary fw-6 letter-spacing-1 text-uppercase mb_8">
                WHATSAPP:
              </div>
              <a href="#" className="link text_secondary-color h6">
                (555) 123-4567
              </a>
            </li>
            <li>
              <div className="text-label text_secondary fw-6 letter-spacing-1 text-uppercase mb_4">
                LinkedIn:
              </div>
              <a href="#" className="link text_secondary-color h6 hover-line-text">
                linkedin.com/in/{member.name}
              </a>
            </li>
          </ul>
          <div className="edu">
            <p className="text-label fw-6 text_secondary letter-spacing-1 text-uppercase">
              Areas of Expertise:
            </p>
            <ul className="edu-list">
              {expertiseAreas.map((area) => (
                <li key={area}>
                  <h6 className="text_secondary-color font-4">{area}</h6>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
