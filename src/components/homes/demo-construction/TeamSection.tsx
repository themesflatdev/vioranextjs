"use client";

import Image from "next/image";
import { useSplitTextReveal } from "@/hooks/useSplitTextReveal";

type TeamMember = {
  image: string;
  name: string;
  role: string;
};

const team: TeamMember[] = [
  { image: "/assets/images/demo-construction/team-1.jpg", name: "Sarah Thompson", role: "Project Manager" },
  { image: "/assets/images/demo-construction/team-2.jpg", name: "David Robinson", role: "Senior Structural Engineer" },
  { image: "/assets/images/demo-construction/team-3.jpg", name: "Emily Carter", role: "Lead Architect" },
  { image: "/assets/images/demo-construction/team-4.jpg", name: "James Wilson", role: "Construction Supervisor" },
];

export default function TeamSection() {
  const subRef = useSplitTextReveal<HTMLDivElement>("left");
  const titleRef = useSplitTextReveal<HTMLHeadingElement>("blur-fade");
  const descRef = useSplitTextReveal<HTMLParagraphElement>("lines-transform");

  return (
    <div className="section-team-3 tf-spacing-1">
      <div className="tf-container">
        <div className="heading-section-5 mb_48">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="left">
                <div
                  className="sub text-label text-uppercase text_primary-color split-text effect-left mb_16 lh-16"
                  ref={subRef}
                >
                  Our Teams
                </div>
                <h2 className="title split-text effect-blur-fade" ref={titleRef}>
                  Meet Our Highly Skilled Construction Team
                </h2>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="right">
                <p
                  className="text-body-2 text_secondary desc mb_28 split-text split-lines-transform"
                  ref={descRef}
                >
                  A dedicated team of engineers, designers, and builders delivering exceptional
                  construction solutions for every project.
                </p>
                <a href="#" className="hover-underline-link-2 wow fadeInUp text_primary">
                  <span className="text-button">View All Teams</span>
                  <i className="icon-ArrowRight3" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="tf-grid-layout lg-col-4 sm-col-2">
          {team.map((member) => (
            <div className="card-team style-3 hover-image" key={member.name}>
              <div className="img-style">
                <Image width={322} height={322} loading="lazy" src={member.image} alt="team" />
                <ul className="list-social">
                  <li>
                    <a href="#" className="icon-FacebookLogo" />
                  </li>
                  <li>
                    <a href="#" className="icon-x-logo" />
                  </li>
                  <li>
                    <a href="#" className="icon-LinkedinLogo" />
                  </li>
                </ul>
                <a href="#" className="overlay-link" />
              </div>
              <div className="content">
                <div>
                  <h4 className="mb_4">
                    <a href="#" className="link hover-line-text">
                      {member.name}
                    </a>
                  </h4>
                  <p className="text-body-default text_secondary line-clamp-1">{member.role}</p>
                </div>
                <a href="#" className="btn-arrow">
                  <i className="icon-ArrowUpRight" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
