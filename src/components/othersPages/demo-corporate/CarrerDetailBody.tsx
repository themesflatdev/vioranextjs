"use client";

import Image from "next/image";
import { useImageParallax } from "@/hooks/useImageParallax";
import type { Job } from "@/data/demo-corporate/jobs";

const whatYouDo = [
  "Develop and maintain full-stack applications using React, Node.js, and related technologies",
  "Collaborate with UI/UX designers to turn designs into responsive, user-friendly interfaces",
  "Design RESTful APIs and integrate with third-party services",
  "Write clean, testable, and maintainable code",
  "Participate in code reviews, planning sessions, and agile sprints",
  "Troubleshoot and debug issues across the stack",
  "Contribute to architecture discussions and tech decisions",
];

const lookingFor = [
  "3+ years of hands-on experience in web development",
  "Strong proficiency in React and modern JavaScript/TypeScript",
  "Solid experience with Node.js, Express, and database systems (MongoDB, PostgreSQL, etc.)",
  "Understanding of state management (e.g. Redux, Context API)",
  "Experience with REST APIs or GraphQL",
  "Familiarity with Git and CI/CD workflows",
  "Problem-solving mindset, strong communication skills, and a team-first attitude",
];

const bonusPoints = [
  "Experience with cloud platforms (AWS, Firebase, Vercel)",
  "Familiarity with containerization (Docker, etc.)",
  "Knowledge of testing frameworks (Jest, Cypress)",
];

const whyJoinUs = [
  "Competitive salary and performance bonuses",
  "Flexible working hours & remote-friendly",
  "Collaborative, no-ego team culture",
  "Opportunity to work on meaningful, scalable projects",
  "Clear growth path and regular feedback",
];

const meta = [
  { label: "Location:", value: "Remote" },
  { label: "Employment Type:", value: "Full-Time" },
  { label: "Experience Level:", value: "Mid To Senior (3+ years)" },
  { label: "Start Date:", value: "ASAP" },
];

const sidebarInfo = [
  { label: "Experience", value: "5+ Years Experience" },
  { label: "Working Hours:", value: "8 AM To 5 PM" },
  { label: "Workdays", value: "Sunday Through Thursday" },
  { label: "Salary Range:", value: "$24K – $65K Annually" },
  { label: "Openings:", value: "2 Roles Available" },
  { label: "Apply By:", value: "July 3, 2025" },
];

// carrer-detail.html only has one demo write-up ("Full Stack JavaScript
// Developer"), shared by every job slug per corporate-pages-remaining.md —
// only the h3 title changes per slug, the rest (About the Role, What
// You'll Do, requirements, Why Join Us, How To Apply, sidebar) is static.
export default function CarrerDetailBody({ job }: { job: Job }) {
  const parallaxRef = useImageParallax<HTMLDivElement>();

  return (
    <div className="section-carrer-detail parallax-container" ref={parallaxRef}>
      <div className="thumbs-main parallax-image">
        <Image
          className="image-inner"
          loading="lazy"
          width={1920}
          height={680}
          src="/assets/images/demo-corporate/carrer-detail-1.jpg"
          alt="carrer-detail"
        />
      </div>
      <div className="tf-container tf-spacing-1">
        <div className="row">
          <div className="col-lg-8">
            <div className="carrer-detail">
              <div className="heading-title mb_40">
                <h3 className="title mb_16">We&apos;re Hiring: {job.title}</h3>
                <ul className="meta">
                  {meta.map((item) => (
                    <li key={item.label}>
                      <span className="text-caption-1 text_secondary mb_4">{item.label}</span>
                      <span className="text-button text_primary">{item.value}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="thumbs mb_40">
                <Image
                  loading="lazy"
                  width={860}
                  height={512}
                  src="/assets/images/demo-corporate/carrer-detail-2.jpg"
                  alt="carrer-detail"
                />
              </div>
              <div className="passive mb_40">
                <h4 className="title mb_16">About The Role</h4>
                <p className="text_secondary text-body-2">
                  We&apos;re looking for a skilled React Full Stack Developer to join our growing
                  tech team. You&apos;ll be working on building scalable web applications from
                  front to back — from crafting seamless user experiences using React to building
                  robust backend services in Node.js (or similar technologies). This is a great
                  opportunity to work in a fast-paced, collaborative environment where your voice
                  matters and your code powers real-world impact.
                </p>
              </div>
              <div className="passive mb_40">
                <h4 className="title mb_16">What You&rsquo;ll Do</h4>
                <ul className="list">
                  {whatYouDo.map((item) => (
                    <li className="text-body-2 text_secondary" key={item}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="passive mb_40">
                <h4 className="title mb_16">What We&rsquo;re Looking For</h4>
                <ul className="list mb_16">
                  {lookingFor.map((item) => (
                    <li className="text-body-2 text_secondary" key={item}>
                      {item}
                    </li>
                  ))}
                </ul>
                <div>
                  <div className="text-button mb_16 text_primary">Bonus Points If You Have:</div>
                  <ul className="list">
                    {bonusPoints.map((item) => (
                      <li className="text-body-2 text_secondary" key={item}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="passive mb_40">
                <h4 className="title mb_16">Why Join Us?</h4>
                <ul className="list">
                  {whyJoinUs.map((item) => (
                    <li className="text-body-2 text_secondary" key={item}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="passive">
                <h4 className="title mb_16">How To Apply</h4>
                <p className="text_secondary text-body-2">
                  Send your CV and portfolio (if available) to [email@example.com] with the
                  subject line:
                </p>
                <p className="text_secondary text-body-2">
                  React Full Stack Developer Application – [Your Name]
                </p>
                <p className="text_secondary text-body-2">We look forward to hearing from you</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="sidebar-carrer">
              <ul className="infor mb_40">
                {sidebarInfo.map((item) => (
                  <li key={item.label}>
                    <span className="text-caption-1 text_secondary mb_4">{item.label}</span>
                    <span className="text-button text_primary">{item.value}</span>
                  </li>
                ))}
              </ul>
              <a href="#" className="tf-btn btn-hover-animate-2 w-full">
                <span>Apple For The Job</span>
                <span />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
