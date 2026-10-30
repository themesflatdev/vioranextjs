import Image from "next/image";
import Link from "next/link";

import { socialIconLabel } from "@/lib/socialIconLabel";

const socialLinks = [
  { href: "#", icon: "icon-messenger-logo" },
  { href: "#", icon: "icon-x-logo" },
  { href: "#", icon: "icon-instagram-logo" },
  { href: "#", icon: "icon-skype-logo" },
  { href: "#", icon: "icon-telegram-logo" },
];

export default function Footer() {
  return (
    <footer className="footer-style-18 tf-spacing-1">
      <div className="tf-container">
        <div className="row">
          <div className="col-md-7 order-0">
            <div className="footer-content">
              <h2 className="text-uppercase text_white fw-4 mb_28">
                Have something in mind? Let&rsquo;s talk.
              </h2>
              <a href="#" className="tf-btn-2 mb_28">
                <span>Request A Call Back</span>
              </a>
              <p className="text-caption-1 text_muted">©2025 Viora. All Rights Reserved.</p>
            </div>
          </div>
          <div className="col-md-5">
            <div className="footer-about ms-md-auto">
              <Link href="/demo-architechture" className="footer-logo site-logo mb_40">
                <Image
                  className="main-logo"
                  src="/assets/images/logo/logo-architechture-1.svg"
                  alt="logo"
                  width={167}
                  height={52}
                />
              </Link>
              <div className="info mb_24">
                <a href="#" className="h3 text-white fw-4 mb_8 d-block">1-555-678-8888</a>
                <p className="text-body-default text_white mb_12">
                  101 E 129th St, East Chicago, IN 46312, US
                </p>
                <a href="#" className="text-body-default hover-underline-link text_white">
                  themesflat@gmail.com
                </a>
              </div>
              <div>
                <div className="text-label fw-5 text-uppercase text_white mb_12 letter-spacing-1 lh-16">
                  Follow Us:
                </div>
                <ul className="tf-social">
                  {socialLinks.map((social) => (
                    <li key={social.icon}>
                      <a href={social.href} className={social.icon} aria-label={socialIconLabel(social.icon)} />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
