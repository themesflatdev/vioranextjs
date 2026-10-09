"use client";

import { useSplitTextReveal } from "@/hooks/useSplitTextReveal";
import { teamMembers } from "@/data/demo-agency/teamMembers";
import TeamMemberCard from "./TeamMemberCard";

// section-team-7 — about.html shows only the first 4 of the full 6-member
// roster (teamMembers.ts), same order, reused as-is by /our-team.
export default function AboutTeamPreview() {
  const titleRef = useSplitTextReveal<HTMLHeadingElement>("blur-fade");
  const descRef = useSplitTextReveal<HTMLParagraphElement>("lines-transform");

  return (
    <div className="section-team-7 tf-spacing-1">
      <div className="tf-container large">
        <div className="heading-section-2 mb_44">
          <div className="row">
            <div className="col-lg-6">
              <h2 className="title text_white" ref={titleRef}>
                Talented Team
              </h2>
            </div>
            <div className="col-lg-6">
              <div className="right">
                <p className="text_muted text-body-2" ref={descRef}>
                  We provide creative solutions to grow your brand. From strategy to design and
                  marketing, we deliver impactful results that matter.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="tf-grid-layout lg-col-4 sm-col-2">
          {teamMembers.slice(0, 4).map((member) => (
            <TeamMemberCard member={member} width={435} height={580} key={member.slug} />
          ))}
        </div>
      </div>
    </div>
  );
}
