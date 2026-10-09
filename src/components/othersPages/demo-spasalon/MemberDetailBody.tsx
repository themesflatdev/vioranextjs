"use client";

import Image from "next/image";
import { useFixedThumb } from "@/hooks/useFixedThumb";
import type { TeamMember } from "@/data/demo-spasalon/teamMembers";

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

// member-detail.html only has one demo write-up, shared by every slug (same
// pattern as corporate's team-detail.html). The original description
// contradicted the displayed title (heading said "Chief Executive Officer",
// paragraph called her "Chief Marketing Officer") — fixed by dropping the
// specific title from the paragraph and switching to they/their since it's
// now shared across all 6 members. Info sidebar, Areas of Expertise, and the
// quote are kept verbatim from the source HTML (marketing-flavored content,
// a leftover from the shared theme copy) per explicit instruction.
export default function MemberDetailBody({ member }: { member: TeamMember }) {
  const wrapRef = useFixedThumb<HTMLDivElement>();

  return (
    <div className="tf-container medium tf-spacing-1">
      <div className="team-detail style-2 mx-0 fixed-thumb-wrap" ref={wrapRef}>
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
              <h3 className="name text_primary-color">{member.name}</h3>
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
              As our dedicated {member.role}, they bring years of expertise to every treatment,
              combining technical skill with a genuinely caring touch. {member.name} works closely
              with each guest to understand their skin, body, and wellness goals, then tailors every
              session to deliver visible, lasting results. Clients return to them again and again for
              their attention to detail and calming presence.
            </p>
            <h6 className="quote text_primary-color fw-5">
              &ldquo;Great marketing is about clarity, empathy, and timing. I believe in telling the
              right story to the right people — and making it matter.&rdquo;
            </h6>
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
              <a href="#" className="link text_secondary-color h6 hover-underline-link">
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
                  <h6 className="text_primary">{area}</h6>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
