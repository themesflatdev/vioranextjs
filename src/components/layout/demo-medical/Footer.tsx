"use client";

import Image from "next/image";
import Link from "next/link";
import { contactHref } from "@/data/demo-medical/menu";
import { useMultiOpen } from "@/hooks/useMultiOpen";
import { medicalServices } from "@/data/demo-medical/services";

const socialLinks = [
  { href: "#", icon: "icon-messenger-logo" },
  { href: "#", icon: "icon-x-logo" },
  { href: "#", icon: "icon-instagram-logo" },
  { href: "#", icon: "icon-skype-logo" },
  { href: "#", icon: "icon-telegram-logo" },
];

// Original HTML has all 4 links point to the same service-detail.html —
// now that the route is dynamic per slug, each link goes to its own real
// service (same 4 services, same order as before).
const footerServiceSlugs = ["general-check-up", "disease-management", "laboratory-tests", "emergency-care"];
const footerServiceLinks = footerServiceSlugs
  .map((slug) => medicalServices.find((service) => service.slug === slug))
  .filter((service): service is (typeof medicalServices)[number] => Boolean(service));

type ColumnKey = "quick-link" | "company";

export default function Footer() {
  const { isOpen, toggle } = useMultiOpen<ColumnKey>();

  return (
    <footer className="footer-style-3">
      <div className="footer-top">
        <div className="tf-container medium d-flex justify-content-between align-items-center flex-wrap gap_12">
          <Link href="/demo-medical" className="footer-logo site-logo">
            <Image
              className="main-logo"
              src="/assets/images/logo/logo-medical.svg"
              alt="logo"
              width={167}
              height={52}
            />
          </Link>
          <ul className="tf-social style-2 d-flex gap_16">
            {socialLinks.map((social) => (
              <li key={social.icon}>
                <a href={social.href} className={social.icon} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="tf-container medium">
        <div className="footer-body">
          <div className="row align-items-center">
            <div className="col-lg-4 col-md-6">
              <div className="footer-about footer-item">
                <div className="mb_20">
                  <h4 className="mb_8 text_primary-color">1-555-678-8888</h4>
                  <p className="text-body-default text_primary">
                    Let&rsquo;s discuss supporting your health journey.
                  </p>
                </div>
                <div>
                  <a href="#" className="mb_8 h5 link text_primary-color">themesflat@gmail.com</a>
                  <p className="text-body-default text_primary mb_8">
                    123 Creative Ave, New York, NY 10001
                  </p>
                  <p className="text-body-default text_primary">Mon – Fri, 9:00 AM – 6:00 PM</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="footer-content footer-item d-flex justify-content-between">
                <div className={`footer-col-block quick-link${isOpen("quick-link") ? " open" : ""}`}>
                  <h5
                    className="footer-heading footer-heading-mobile text_primary mb_12"
                    onClick={() => toggle("quick-link")}
                    role="button"
                    tabIndex={0}
                  >
                    Quick Links
                  </h5>
                  <div className="tf-collapse-content">
                    <ul className="footer-menu-list d-grid gap_12">
                      <li className="text-body-default text_primary">
                        <Link href="/demo-medical" className="link">Home Page</Link>
                      </li>
                      <li className="text-body-default text_primary">
                        <Link href="/demo-medical/service" className="link">Our Services</Link>
                      </li>
                      <li className="text-body-default text_primary">
                        <Link href="/demo-medical/about" className="link">About Us</Link>
                      </li>
                      <li className="text-body-default text_primary">
                        <Link href={contactHref} className="link">Contact Us</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className={`footer-col-block company${isOpen("company") ? " open" : ""}`}>
                  <h5
                    className="footer-heading footer-heading-mobile text_primary mb_12"
                    onClick={() => toggle("company")}
                    role="button"
                    tabIndex={0}
                  >
                    Our Services
                  </h5>
                  <div className="tf-collapse-content">
                    <ul className="footer-menu-list d-grid gap_12">
                      {footerServiceLinks.map((service) => (
                        <li className="text-body-default text_primary" key={service.slug}>
                          <Link href={`/demo-medical/service-detail/${service.slug}`} className="link">
                            {service.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 h-full">
              <div className="footer-newsletter">
                <h5 className="mb_20">Subscribe Newsletter</h5>
                <form className="form-newsletter style-3 mb_20" onSubmit={(e) => e.preventDefault()}>
                  <div className="wrap gap_12">
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
                <p className="text-body-default text_primary">
                  Please sign up to follow the latest news and events from us, we promise not to
                  spam
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="tf-container medium">
          <p className="text-caption-1 text_primary text-center">©2025 Viora. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
