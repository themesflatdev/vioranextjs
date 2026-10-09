"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import type { TeamMember } from "@/data/demo-agency/teamMembers";

const education = [
  { period: "October 2013 - July 2015", title: "Bachelor Of Science", place: "Vin University" },
  { period: "October 2011 - July 2013", title: "Android Programming", place: "Vin University" },
  { period: "October 2008 - July 2011", title: "Software Development", place: "Vin University" },
];

const experience = [
  { period: "July 2023 - Present", title: "Founder Viora", place: "Viora Inc." },
  { period: "October 2020 - July 2023", title: "Project Manager", place: "Google Inc." },
  { period: "October 2018 - July 2020", title: "Bachelor of Science", place: "DigitalAwesome Inc" },
];

const skills = [
  { name: "Figma", progress: 70 },
  { name: "Html & CSS", progress: 100 },
  { name: "JavaScript", progress: 100 },
  { name: "Shopify", progress: 50 },
  { name: "Wordpress", progress: 80 },
  { name: "Laravel", progress: 30 },
];

function SkillBar({ name, progress }: { name: string; progress: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        const timer = setTimeout(() => setWidth(progress), 300);
        observer.disconnect();
        return () => clearTimeout(timer);
      },
      { threshold: 0.1 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [progress]);

  return (
    <div className="skill-item" ref={ref}>
      <span className="text-caption-1 mb_13 d-block text_white">{name}</span>
      <div className="tf-progress-bar progress-effect">
        <div className="value" style={{ width: `${width}%`, transition: "width 1s ease" }} data-progress={progress} />
      </div>
    </div>
  );
}

function TimelineList({ items }: { items: typeof education }) {
  return (
    <div className="list position-relative">
      {items.map((item) => (
        <div className="item" key={item.title}>
          <span className="text_muted text-uppercase letter-spacing-1 text-label lh-16">{item.period}</span>
          <h5 className="text_white">{item.title}</h5>
          <span className="text-button text_white">{item.place}</span>
        </div>
      ))}
      <div className="line">
        {items.map((_, index) => (
          <span key={index} style={{ "--i": index } as React.CSSProperties} />
        ))}
      </div>
    </div>
  );
}

// team-detail-2 — one shared demo body ("Hi, I'm Davix..." bio, Education,
// Experience, Skills) reused for every slug per
// agency-pages-menu-only.md; only the small "Hi, I'm A {role}" line,
// name, and hero photo change per member (teamMembers.ts).
export default function TeamDetailAgencyBody({ member }: { member: TeamMember }) {
  return (
    <div className="team-detail-2 tf-spacing-1">
      <div className="tf-container">
        <div className="team-info">
          <div className="wrap-content">
            <div className="content">
              <h5 className="text_white mb_20">Hi, I&apos;m A {member.role}</h5>
              <h3 className="text_white mb_20">{member.name}</h3>
              <p className="text-body-2 text_muted">
                Hi, I&apos;m Davix I have an Understanding of the relationship between design and
                users through detailed execution and proper user experience. I love working on
                interesting and meeting full projects that I can be proud of and I always strive to
                create clean, pixelated interfaces that are smoothly animated. I prefer to
                prioritize not only code but also quality, perfect graphic design and optimized
                development.
              </p>
            </div>
            <div className="info d-flex justify-content-between">
              <div className="info-col">
                <div>
                  <span className="text_muted text-button mb_8 d-block">Age:</span>
                  <h5 className="text_white">28 Years Old</h5>
                </div>
                <div>
                  <span className="text_muted text-button mb_8 d-block">Email:</span>
                  <a href="#" className="text_white h5 link">
                    themesflat@gmail.com
                  </a>
                </div>
              </div>
              <div className="info-col">
                <div>
                  <span className="text_muted text-button mb_8 d-block">Whatsapp:</span>
                  <h5 className="text_white">(555) 123-4567</h5>
                </div>
                <div>
                  <span className="text_muted text-button mb_8 d-block">From:</span>
                  <h5 className="text_white">Los Angeles,California</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="img-style">
            <Image width={460} height={560} loading="lazy" src={member.image} alt="team-detail" />
          </div>
        </div>
        <div className="edu-exp tf-grid-layout md-col-2 gap_30">
          <div className="edu-exp-item">
            <h4 className="text_white mb_20">Education</h4>
            <TimelineList items={education} />
          </div>
          <div className="edu-exp-item">
            <h4 className="text_white mb_20">Experience</h4>
            <TimelineList items={experience} />
          </div>
        </div>
        <div className="skills">
          <h4 className="text_white fw-6 mb_24">Skills</h4>
          <div className="tf-grid-layout lg-col-3 md-col-2">
            {skills.map((skill) => (
              <SkillBar name={skill.name} progress={skill.progress} key={skill.name} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
