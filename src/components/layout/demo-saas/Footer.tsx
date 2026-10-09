"use client";

import Image from "next/image";
import Link from "next/link";
import { useMultiOpen } from "@/hooks/useMultiOpen";

const columns = [
  {
    key: "quick-links",
    heading: "Quick Links",
    items: ["Home", "Features", "FAQ", "Blog"],
  },
  {
    key: "company",
    heading: "Company",
    items: ["About Us", "Careers", "Terms of Service", "Privacy Policy"],
  },
  {
    key: "resources",
    heading: "Resources",
    items: ["Help Center", "API Docs", "Community", "System Status"],
  },
] as const;

const socialLinks = [
  { href: "#", icon: "icon-FacebookLogo" },
  { href: "#", icon: "icon-x-logo" },
  { href: "#", icon: "icon-TiktokLogo" },
  { href: "#", icon: "icon-instagram-logo" },
  { href: "#", icon: "icon-YoutubeLogo" },
];

type ColumnKey = (typeof columns)[number]["key"];

export default function Footer() {
  const { isOpen, toggle } = useMultiOpen<ColumnKey>();

  return (
    <footer className="footer-style-7">
      <div className="tf-container medium">
        <div className="footer-body">
          <div className="footer-about">
            <Link href="/demo-saas" className="footer-logo site-logo mb_23">
              <Image
                className="main-logo"
                src="/assets/images/logo/logo-saas.svg"
                alt="logo"
                width={167}
                height={52}
              />
            </Link>
            <p className="text_white font-3">
              Our platform empowers teams of all sizes to streamline workflows, boost productivity,
              and stay focused on what matters most.
            </p>
          </div>
          <div className="footer-link footer-content d-flex justify-content-between">
            {columns.map((col) => (
              <div className={`footer-col-block ${col.key}${isOpen(col.key) ? " open" : ""}`} key={col.key}>
                <h6
                  className="footer-heading footer-heading-mobile text_white mb_20"
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
        <div className="footer-bottom d-flex align-items-center justify-content-between">
          <p className="text_white text-caption-1">
            ©2025 <a href="#" className="link">Viora.</a> All Rights Reserved.
          </p>
          <ul className="tf-social">
            {socialLinks.map((social) => (
              <li key={social.icon}>
                <a href={social.href} className={social.icon} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
