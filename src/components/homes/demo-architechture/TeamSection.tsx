"use client";

import Image from "next/image";
import { useSplitTextReveal } from "@/hooks/useSplitTextReveal";

const team = [
  { image: "team-1.jpg", name: "Kaiya Lubin", role: "Founder & CEO" },
  { image: "team-2.jpg", name: "Martin Westervelt", role: "Project Manager" },
  { image: "team-3.jpg", name: "Marcus Herwitz", role: "Architect" },
  { image: "team-4.jpg", name: "Marcus Botosh", role: "Jr. Executive" },
];

export default function TeamSection() {
  const titleRef = useSplitTextReveal<HTMLHeadingElement>("blur-fade");

  return (
    <div className="section-team-4 tf-spacing-1">
      <div className="tf-container large">
        <div className="heading-section-6 mb_48">
          <div className="row align-items-center">
            <div className="col-7">
              <span className="tag-line lh-16 color-dark text-label text_primary letter-spacing-1 text-uppercase mb_20 wow fadeInUp">
                Our Team
              </span>
              <h3 ref={titleRef} className="text-uppercase font-2 split-text effect-blur-fade">
                our experts
              </h3>
            </div>
            <div className="col-5">
              <a href="#" className="tf-btn-2 border-dark btn-switch-text ms-auto wow fadeInRight">
                <span>
                  <span className="btn-double-text" data-text="View All">
                    View All
                  </span>
                </span>
              </a>
            </div>
          </div>
          <div className="line" />
        </div>
        <div className="tf-grid-layout md-col-2">
          {team.map((member) => (
            <div key={member.name} className="card-team style-4 hover-image-2">
              <a href="#" className="img-style">
                <Image
                  loading="lazy"
                  width={418}
                  height={322}
                  src={`/assets/images/demo-architechture/${member.image}`}
                  alt="team"
                />
              </a>
              <div className="content">
                <div>
                  <h4 className="title fw-4 text-uppercase">
                    <a href="#" className="link">
                      {member.name}
                    </a>
                  </h4>
                  <span className="text-label text-uppercase letter-spacing-1">{member.role}</span>
                </div>
                <ul className="social">
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
