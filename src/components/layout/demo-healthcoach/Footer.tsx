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
];

// healthcoach has no pages of its own (index.html only) — Quick Links
// borrows corporate's real pages per CLAUDE.md rule 6. The original HTML
// pointed both "Careers" and "Contact" to the same broken "our-pricing.html"
// (neither niche has a pricing page) — fixed to corporate's actual Careers
// and Contact pages.
const quickLinks = [
  { label: "About Us", href: "/about-us" },
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
    <footer className="footer style-default v2">
      <div className="tf-container medium">
        <div className="footer-body">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="footer-about footer-item">
                <Link href="/demo-healthcoach" className="footer-logo site-logo mb_19">
                  <Image
                    className="main-logo"
                    src="/assets/images/logo/logo-health-coach-1.svg"
                    alt="logo"
                    width={167}
                    height={52}
                  />
                </Link>
                <p className="text-caption-1 text_secondary">
                  Leading solutions for modern businesses. <br />
                  Empowering growth through innovation and strategy.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="footer-content footer-item d-flex justify-content-between">
                <div className={`footer-col-block company${isOpen("company") ? " open" : ""}`}>
                  <div
                    className="footer-heading footer-heading-mobile text-uppercase text-label fw-5 text_primary-color mb_16"
                    onClick={() => toggle("company")}
                    role="button"
                    tabIndex={0}
                  >
                    Services
                  </div>
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
                  <div
                    className="footer-heading footer-heading-mobile text-uppercase text-label fw-5 text_primary-color mb_16"
                    onClick={() => toggle("quick-link")}
                    role="button"
                    tabIndex={0}
                  >
                    Quick Links
                  </div>
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
              </div>
            </div>
            <div className="col-lg-4">
              <div className="footer-contact">
                <div className="info mb_24">
                  <p className="text-body-default text_secondary mb_7">
                    101 E 129th St, East Chicago, IN 46312, US
                  </p>
                  <a href="#" className="h4 text_primary-color fw-6 link mb_12 font-main d-block">
                    1-555-678-8888
                  </a>
                  <a href="#" className="text-body-default hover-underline-link text_secondary fw-4 link">
                    themesflat@gmail.com
                  </a>
                </div>
                <div>
                  <div className="text-label fw-5 text-uppercase text_primary-color mb_12 letter-spacing-1">
                    Follow Us:
                  </div>
                  <ul className="tf-social style-2">
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
        <div className="wrap-footer-bottom tf-container align-items-center justify-content-between d-flex">
          <p className="text-caption-1 fs-15">All Rights Reserved.</p>
          <ul className="wrap">
            {bottomLinks.map((label) => (
              <li key={label}>
                <a href="#" className="text-caption-1 link text_secondary">{label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
