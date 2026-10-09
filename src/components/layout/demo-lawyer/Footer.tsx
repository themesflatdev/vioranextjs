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

// lawyer has no pages of its own (index.html only). The original HTML
// copy-pasted the same 4 recycled hrefs (constacts.html / corporate
// about-us / corporate contact / blog-grid.html) across both columns.
// Quick Links are generic nav labels with real corporate equivalents, so
// each is fixed to the page its label actually names (borrowed per
// CLAUDE.md rule 6). The specific law-practice names have no matching
// page anywhere, so kept as "#" (same treatment as the analogous
// mismatched columns in solarenergy/agriculturefarming).
const quickLinks = [
  { label: "Home Page", href: "/demo-lawyer" },
  { label: "Our Services", href: "/services" },
  { label: "About Us", href: "/about-us" },
  { label: "Contact Us", href: "/contact" },
];

const servicesLinks = ["Civil Law", "Firm Law", "Property Law", "Criminal Law"];

type ColumnKey = "quick-link" | "service";

export default function Footer() {
  const { isOpen, toggle } = useMultiOpen<ColumnKey>();

  return (
    <footer className="footer-style-17">
      <div className="footer-top">
        <div className="tf-container d-flex align-items-center gap_12 justify-content-between flex-wrap">
          <Link href="/demo-lawyer" className="site-logo">
            <Image
              className="logo_header"
              alt="logo"
              width={167}
              height={52}
              src="/assets/images/logo/logo-lawyer-1.svg"
            />
          </Link>
          <ul className="tf-social">
            {socialLinks.map((social) => (
              <li key={social.icon}>
                <a href={social.href} className={social.icon} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="footer-body">
        <div className="tf-container">
          <div className="wrap-footer-body d-flex justify-content-between">
            <div className="footer-contact footer-item">
              <div className="mb_16">
                <h4 className="text_white mb_8">1-555-678-8888</h4>
                <p className="text_muted text-body-default">
                  Let&rsquo;s discuss protecting your legal rights.
                </p>
              </div>
              <div className="d-grid gap_8">
                <a href="#" className="link text-white h5">themesflat@gmail.com</a>
                <p className="text_muted text-body-default">123 Creative Ave, New York, NY 10001</p>
                <p className="text_muted text-body-default">Mon – Fri, 9:00 AM – 6:00 PM</p>
              </div>
            </div>
            <div className="line md-hide" />
            <div className="footer-content footer-item d-flex justify-content-between gap_12">
              <div className={`footer-col-block quick-link${isOpen("quick-link") ? " open" : ""}`}>
                <h5
                  className="footer-heading text_white footer-heading-mobile mb_12"
                  onClick={() => toggle("quick-link")}
                  role="button"
                  tabIndex={0}
                >
                  Quick Links
                </h5>
                <div className="tf-collapse-content">
                  <ul className="footer-menu-list d-grid gap_12">
                    {quickLinks.map((item) => (
                      <li className="text-body-default text_muted" key={item.label}>
                        <Link href={item.href} className="link">{item.label}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className={`footer-col-block service${isOpen("service") ? " open" : ""}`}>
                <h5
                  className="footer-heading text_white footer-heading-mobile mb_12"
                  onClick={() => toggle("service")}
                  role="button"
                  tabIndex={0}
                >
                  Our Services
                </h5>
                <div className="tf-collapse-content">
                  <ul className="footer-menu-list d-grid gap_12">
                    {servicesLinks.map((label) => (
                      <li className="text-body-default text_muted" key={label}>
                        <a href="#" className="link">{label}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="line lg-hide" />
            <div className="footer-newsletter">
              <div className="heading mb_24">
                <h5 className="text_white mb_12">Join Our Newsletter</h5>
                <p className="text-body-default text_muted">
                  Sign up for updates on our latest news.
                </p>
              </div>
              <form className="form-newsletter style-3 mb_20 rounded-0" onSubmit={(e) => e.preventDefault()}>
                <div className="wrap gap_12">
                  <fieldset className="position-relative">
                    <input
                      type="email"
                      className="tb-my-input style-border rounded-0"
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
        </div>
      </div>
      <div className="footer-bottom">
        <div className="wrap-footer-bottom tf-container medium text-center">
          <p className="text-caption-1 text_white">
            ©2025 <a href="#" className="link">Viora.</a> All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
