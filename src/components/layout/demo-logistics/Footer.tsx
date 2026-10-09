"use client";

import Image from "next/image";
import Link from "next/link";
import { useMultiOpen } from "@/hooks/useMultiOpen";

const socialLinks = [
  { href: "#", icon: "icon-messenger-logo" },
  { href: "#", icon: "icon-x-logo" },
  { href: "#", icon: "icon-instagram-logo" },
  { href: "#", icon: "icon-skype-logo" },
  { href: "#", icon: "icon-telegram-logo" },
];

const servicesLinks = [
  "Business Strategy",
  "Web Development",
  "Branding & Identity",
  "Digital Marketing",
  "Custom Solutions",
  "Consulting",
];

// logistics has no pages of its own (index.html only) — Quick Links borrow
// corporate's real pages per CLAUDE.md rule 6. "Services" fixes the
// original HTML's broken "constacts.html" target to corporate's real page.
const quickLinks = [
  { label: "About Us", href: "/about-us" },
  { label: "Services", href: "/services" },
  { label: "Case Studies", href: "#" },
  { label: "Blog", href: "/blog-full-width" },
  { label: "Careers", href: "/carrer" },
  { label: "Contact", href: "/contact" },
];

const bottomLinks = ["Terms Of Services", "Privacy Policy", "Cookie Policy"];

type ColumnKey = "company" | "quick-link";

export default function Footer() {
  const { isOpen, toggle } = useMultiOpen<ColumnKey>();

  return (
    <footer className="footer style-default v3">
      <div className="tf-container medium">
        <div className="footer-body">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="footer-about">
                <Link href="/demo-logistics" className="footer-logo site-logo mb_20">
                  <Image
                    className="main-logo"
                    src="/assets/images/logo/logo-logistics-2.svg"
                    alt="logo"
                    width={167}
                    height={52}
                  />
                </Link>
                <p className="text-caption-1 text_white mb_20">
                  Home Logistics – Moving, storage, and delivery made simple
                </p>
                <form className="form-newsletter style-9 mb_8" onSubmit={(e) => e.preventDefault()}>
                  <div className="wrap gap_12 position-relative">
                    <fieldset className="position-relative">
                      <input
                        type="email"
                        className="tb-my-input style-border"
                        name="email"
                        placeholder="Your email address"
                        required
                      />
                    </fieldset>
                    <button name="submit" type="submit" className="button-submit">
                      <span className="icon-PaperPlaneTilt" />
                    </button>
                  </div>
                </form>
                <div className="box-fieldset-item d-flex align-items-center">
                  <fieldset>
                    <input type="checkbox" className="tf-check" id="note" />
                  </fieldset>
                  <p className="text-caption-1 text_muted">
                    I consent to receive legal updates &amp; news.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="footer-content footer-item d-flex justify-content-between">
                <div className={`footer-col-block company${isOpen("company") ? " open" : ""}`}>
                  <div
                    className="footer-heading footer-heading-mobile text-uppercase text-label fw-5 text_primary-color mb_14"
                    onClick={() => toggle("company")}
                    role="button"
                    tabIndex={0}
                  >
                    Services
                  </div>
                  <div className="tf-collapse-content">
                    <ul className="footer-menu-list d-grid gap_12">
                      {servicesLinks.map((label) => (
                        <li className="text-caption-1 text_white" key={label}>
                          <Link href="/service-detail" className="link">{label}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className={`footer-col-block quick-link${isOpen("quick-link") ? " open" : ""}`}>
                  <div
                    className="footer-heading footer-heading-mobile text-uppercase text-label fw-5 text_primary-color mb_14"
                    onClick={() => toggle("quick-link")}
                    role="button"
                    tabIndex={0}
                  >
                    Quick Links
                  </div>
                  <div className="tf-collapse-content">
                    <ul className="footer-menu-list d-grid gap_12">
                      {quickLinks.map((item) => (
                        <li className="text-caption-1 text_white" key={item.label}>
                          <Link href={item.href} className="link">{item.label}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="footer-contact">
                <div className="info mb_24">
                  <p className="text-body-default text_white mb_7">
                    101 E 129th St, East Chicago, IN 46312, US
                  </p>
                  <a href="#" className="h4 text-white fw-6 link mb_12 d-block">1-555-678-8888</a>
                  <a href="#" className="text-body-default hover-underline-link text_primary-color link">
                    themesflat@gmail.com
                  </a>
                </div>
                <div>
                  <div className="text-label fw-5 text-uppercase text_white mb_12 letter-spacing-1">
                    Follow Us:
                  </div>
                  <ul className="tf-social">
                    {socialLinks.map((social) => (
                      <li key={social.icon}>
                        <a href={social.href} className={social.icon} />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="wrap-footer-bottom tf-container medium d-flex align-items-center justify-content-between">
          <p className="text_white text-caption-1">
            ©2025 <a href="#" className="text_white link">Viora.</a> All Rights Reserved.
          </p>
          <ul className="wrap">
            {bottomLinks.map((label) => (
              <li key={label}>
                <a href="#" className="text-caption-1 link text_white">{label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
