"use client";

import Link from "next/link";
import { useMultiOpen } from "@/hooks/useMultiOpen";

// agriculturefarming has no pages of its own (index.html only). The
// original HTML copy-pasted the same 4 recycled hrefs (constacts.html /
// corporate about-us / corporate contact / blog-grid.html) across both
// columns regardless of label, so most items point nowhere sensible —
// kept as "#" except "About Us", whose label clearly matches corporate's
// real page (borrowed per CLAUDE.md rule 6).
const servicesLinks = [
  "Business Strategy",
  "Web Development",
  "Branding & Identity",
  "Digital Marketing",
  "Custom Solutions",
];

const quickLinks = [
  { label: "About Us", href: "/about-us" },
  { label: "Case Studies", href: "#" },
  { label: "Latest News", href: "#" },
  { label: "Help Center", href: "#" },
];

const bottomLinks = ["Terms Of Services", "Privacy Policy", "Cookie Policy"];

type ColumnKey = "service" | "quick-link";

export default function Footer() {
  const { isOpen, toggle } = useMultiOpen<ColumnKey>();

  return (
    <footer className="footer-style-16">
      <div className="footer-body">
        <div className="tf-container">
          <div className="wrap-footer-body">
            <div className="footer-about">
              <h4 className="title mb_24">Ready To Transform Your Outdoor Space?</h4>
              <a href="#" className="tf-btn btn-hover-animate-2 btn-bg-secondary">
                <span>Book a Consultation</span>
                <span className="bg-effect" />
              </a>
            </div>
            <div className="line xl-hide" />
            <div className="footer-content footer-item d-flex justify-content-between">
              <div className={`footer-col-block service${isOpen("service") ? " open" : ""}`}>
                <h6
                  className="footer-heading footer-heading-mobile mb_16"
                  onClick={() => toggle("service")}
                  role="button"
                  tabIndex={0}
                >
                  Our Services
                </h6>
                <div className="tf-collapse-content">
                  <ul className="footer-menu-list d-grid gap_12">
                    {servicesLinks.map((label) => (
                      <li className="text-caption-1 text_secondary" key={label}>
                        <a href="#" className="link">{label}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className={`footer-col-block quick-link${isOpen("quick-link") ? " open" : ""}`}>
                <h6
                  className="footer-heading footer-heading-mobile mb_16"
                  onClick={() => toggle("quick-link")}
                  role="button"
                  tabIndex={0}
                >
                  Quick Links
                </h6>
                <div className="tf-collapse-content">
                  <ul className="footer-menu-list d-grid gap_12">
                    {quickLinks.map((item) => (
                      <li className="text-caption-1 text_secondary" key={item.label}>
                        <Link href={item.href} className="link">{item.label}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="footer-contact">
                <h6 className="footer-heading mb_16">Contact Us</h6>
                <div className="d-grid gap_12">
                  <p className="text_secondary text-body-default">
                    101 E 129th St East Chicago, IN 46312, United States
                  </p>
                  <h4>1-555-678-8888</h4>
                  <div>
                    <a href="#" className="hover-underline-link link text-body-default">
                      themesflat@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="wrap-footer-bottom tf-container d-flex align-items-center justify-content-between">
          <p className="text-caption-1">
            ©2025 <a href="#" className="link">Viora.</a> All Rights Reserved.
          </p>
          <ul className="wrap">
            {bottomLinks.map((label) => (
              <li key={label}>
                <a href="#" className="text-caption-1 link">{label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
