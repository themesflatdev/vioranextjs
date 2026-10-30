"use client";

import Image from "next/image";
import Link from "next/link";
import { useMultiOpen } from "@/hooks/useMultiOpen";

const columns = [
  { key: "company", heading: "Company", items: ["About Us", "Our Team", "Join Us", "Contact Us"] },
  {
    key: "services",
    heading: "Services",
    items: ["General Contract", "Structural Design", "Space Renovation", "Green Building"],
  },
  {
    key: "platform",
    heading: "Platform",
    items: ["Our Projects", "Latest News", "Help Center", "Get Quote"],
  },
] as const;

import { socialIconLabel } from "@/lib/socialIconLabel";

const socialLinks = [
  { href: "#", icon: "icon-messenger-logo" },
  { href: "#", icon: "icon-x-logo" },
  { href: "#", icon: "icon-instagram-logo" },
  { href: "#", icon: "icon-skype-logo" },
  { href: "#", icon: "icon-telegram-logo" },
];

const bottomLinks = ["Terms Of Services", "Privacy Policy", "Cookie Policy"];

type ColumnKey = (typeof columns)[number]["key"];

export default function Footer() {
  const { isOpen, toggle } = useMultiOpen<ColumnKey>();

  return (
    <footer className="footer-style-10">
      <div className="tf-container">
        <div className="footer-top d-flex justify-content-between align-items-center flex-wrap gap_20">
          <Link href="/demo-construction" className="footer-logo site-logo">
            <Image
              className="main-logo"
              src="/assets/images/logo/logo-construction.svg"
              alt="logo"
              width={167}
              height={52}
            />
          </Link>
          <div className="right d-flex align-items-center">
            <div className="d-flex align-items-center gap_18">
              <div className="text-label letter-spacing-1 fw-6 text-uppercase text_white">Follow Us:</div>
              <ul className="social d-flex gap_12">
                {socialLinks.map((social) => (
                  <li key={social.icon}>
                    <a href={social.href} className={social.icon} aria-label={socialIconLabel(social.icon)} />
                  </li>
                ))}
              </ul>
            </div>
            <a href="#" className="tf-btn btn-hover-animate-2 btn-bg-primary-2 rounded-0">
              <span>Get A Consultation</span>
              <span />
            </a>
          </div>
        </div>
      </div>
      <div className="tf-container">
        <div className="footer-body">
          <div className="row">
            <div className="col-lg-6">
              <div className="footer-about footer-item">
                <div className="phone">
                  <h4 className="text_white mb_4">1-555-678-8888</h4>
                  <p className="text-body-default text_muted">
                    Let&rsquo;s discuss supporting your health journey.
                  </p>
                </div>
                <div className="d-grid gap_8">
                  <div>
                    <a href="#" className="h5 link hover-underline-link text-white font-main">
                      themesflat@gmail.com
                    </a>
                  </div>
                  <p className="text-body-default text_muted">123 Creative Ave, New York, NY 10001</p>
                  <p className="text-body-default text_muted">Mon – Fri, 9:00 AM – 6:00 PM</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="footer-content footer-item d-flex justify-content-between">
                {columns.map((col) => (
                  <div className={`footer-col-block quick-link${isOpen(col.key) ? " open" : ""}`} key={col.key}>
                    <h6
                      className="footer-heading footer-heading-mobile text_white mb_16"
                      onClick={() => toggle(col.key)}
                      role="button"
                      tabIndex={0}
                    >
                      {col.heading}
                    </h6>
                    <div className="tf-collapse-content">
                      <ul className="footer-menu-list d-grid gap_12">
                        {col.items.map((label) => (
                          <li className="text-body-default text_white" key={label}>
                            <a href="#" className="link">{label}</a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="wrap-footer-bottom d-flex justify-content-between align-items-center">
            <p className="text_muted text-caption-1">
              ©2025 <a href="#" className="text_muted link">Viora.</a> All Rights Reserved.
            </p>
            <ul className="wrap d-flex gap_20">
              {bottomLinks.map((label) => (
                <li key={label}>
                  <a href="#" className="text-caption-1 link text_muted">{label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
