"use client";

import { useSplitTextReveal } from "@/hooks/useSplitTextReveal";
import { teamMembers } from "@/data/demo-agency/teamMembers";
import TeamMemberCard from "./TeamMemberCard";

// section-team-6 — /our-team's full 6-member grid (teamMembers.ts),
// 3-column layout with larger cards than about.html's 4-card preview.
export default function AgencyTeamGrid() {
  const titleRef = useSplitTextReveal<HTMLHeadingElement>("blur-fade");
  const descRef = useSplitTextReveal<HTMLParagraphElement>("lines-transform");

  return (
    <div className="section-team-6 tf-spacing-1">
      <div className="tf-container">
        <div className="heading-section-2 mb_47">
          <div className="row">
            <div className="col-lg-5">
              <h2 className="title text_white" ref={titleRef}>
                Talented Team
              </h2>
            </div>
            <div className="col-lg-7">
              <div className="right">
                <p className="text_muted text-body-2 text-lg-end" ref={descRef}>
                  We provide creative solutions to grow your brand. From strategy to design and
                  marketing, we deliver impactful results that matter.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="tf-grid-layout lg-col-3 sm-col-2 gap_30">
          {teamMembers.map((member) => (
            <TeamMemberCard member={member} width={450} height={540} key={member.slug} />
          ))}
        </div>
      </div>
    </div>
  );
}
