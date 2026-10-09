"use client";

import Image from "next/image";
import Link from "next/link";
import { contactHref } from "@/data/demo-spasalon/menu";
import { useMultiOpen } from "@/hooks/useMultiOpen";

const socialLinks = [
  { href: "#", icon: "icon-FaceBook-2" },
  { href: "#", icon: "icon-x-logo" },
  { href: "#", icon: "icon-instagram-logo" },
  { href: "#", icon: "icon-TiktokLogo-fill" },
  { href: "#", icon: "icon-PinterestLogo" },
];

const bottomLinks = ["Terms Of Services", "Privacy Policy", "Cookie Policy"];

type ColumnKey = "quick-link" | "company";

export default function Footer() {
  const { isOpen, toggle } = useMultiOpen<ColumnKey>();

  return (
    <footer className="footer-style-9">
      <div className="tf-container medium">
        <div className="footer-body">
          <div className="row">
            <div className="col-lg-4">
              <div className="footer-about footer-item">
                <Link href="/demo-spasalon" className="footer-logo site-logo mb_26">
                  <Image
                    className="main-logo"
                    src="/assets/images/logo/logo-spa-2.svg"
                    alt="logo"
                    width={167}
                    height={52}
                  />
                </Link>
                <p className="text-body-default text_secondary-color mb_44">
                  We believe selfcare should feel natural, calm, and beautiful just like you.
                </p>
                <ul className="tf-social style-3">
                  {socialLinks.map((social) => (
                    <li key={social.icon}>
                      <a href={social.href} className={social.icon} />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="footer-content footer-item d-flex justify-content-between">
                <div className={`footer-col-block quick-link${isOpen("quick-link") ? " open" : ""}`}>
                  <div
                    className="footer-heading footer-heading-mobile text-uppercase lh-16 text-label fw-6 text_secondary mb_16 letter-spacing-1"
                    onClick={() => toggle("quick-link")}
                    role="button"
                    tabIndex={0}
                  >
                    Quick Links
                  </div>
                  <div className="tf-collapse-content">
                    <ul className="footer-menu-list d-grid gap_12">
                      <li className="text-caption-1 text_secondary-color">
                        <Link href="/demo-spasalon" className="link">Home</Link>
                      </li>
                      <li className="text-caption-1 text_secondary-color">
                        <Link href="/demo-spasalon/service" className="link">Services</Link>
                      </li>
                      <li className="text-caption-1 text_secondary-color">
                        <Link href="/demo-spasalon/packages" className="link">Packages</Link>
                      </li>
                      <li className="text-caption-1 text_secondary-color">
                        <Link href="/demo-spasalon/booking" className="link">Booking</Link>
                      </li>
                      <li className="text-caption-1 text_secondary-color">
                        <Link href="/demo-spasalon/about" className="link">About Us</Link>
                      </li>
                      <li className="text-caption-1 text_secondary-color">
                        <Link href={contactHref} className="link">Contact</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className={`footer-col-block company${isOpen("company") ? " open" : ""}`}>
                  <div
                    className="footer-heading footer-heading-mobile text-uppercase lh-16 text-label fw-6 text_secondary mb_16 letter-spacing-1"
                    onClick={() => toggle("company")}
                    role="button"
                    tabIndex={0}
                  >
                    Get in touch
                  </div>
                  <div className="tf-collapse-content">
                    <div className="footer-menu-list">
                      <div className="mb_18">
                        <div className="text-button text_primary mb_14">Email</div>
                        <a href="#" className="link text_secondary-color text-caption-1">
                          hi.viora@gmail.com
                        </a>
                      </div>
                      <div>
                        <div className="text-button text_primary mb_10">Phone</div>
                        <a href="#" className="link text_secondary-color text-caption-1 font-5">
                          1-333-345-6868
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="footer-info">
                  <div className="info time mb_44">
                    <div className="footer-heading text-uppercase text-label fw-6 text_secondary mb_3">
                      Opening Hours:
                    </div>
                    <p className="text-body-default text_secondary-color font-5">
                      Monday–Friday from 8 AM to 8 PM
                    </p>
                    <p className="text-body-default text_secondary-color font-5">
                      Saturday from 9 AM to 6 PM EST
                    </p>
                  </div>
                  <div className="info">
                    <div className="footer-heading text-uppercase text-label fw-6 text_secondary mb_4">
                      Visit Us
                    </div>
                    <p className="text-body-default text_secondary-color">
                      101 E 129th St, East Chicago, IN 46312, US
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom wow fadeInUp">
        <div className="wrap-footer-bottom tf-container medium d-flex align-items-center justify-content-between">
          <p className="text_secondary-color text-caption-1">
            ©2025 <a href="#" className="text_secondary-color link">Viora.</a> All Rights Reserved.
          </p>
          <ul className="wrap">
            {bottomLinks.map((label) => (
              <li key={label}>
                <a href="#" className="text-caption-1 link text_secondary-color">{label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
