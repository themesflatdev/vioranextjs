"use client";

import Image from "next/image";
import Link from "next/link";
import {
  desktopDemosFeatured,
  pagesMenu,
  servicesMenu,
  projectMenu,
  blogMenu,
  contactHref,
  viewAllDemosHref,
} from "@/data/demo-spasalon/menu";
import type { SimpleMenuItem } from "@/data/demo-spasalon/menu";

type HeaderProps = {
  fixed?: boolean;
  isFixed?: boolean;
  onOpenMobileNav: () => void;
};

function SubmenuList({ items }: { items: SimpleMenuItem[] }) {
  return (
    <ul className="submenu">
      {items.map((item) => (
        <li key={item.href}>
          <Link href={item.href}>{item.label}</Link>
        </li>
      ))}
    </ul>
  );
}

/** Fades between two stacked spans on hover — spasalon never loads
 * Splitting.js either (no per-character 3D rotation), despite the
 * leftover "splitting"/"data-splitting" class names in the source HTML. */
function ToggleText({ children }: { children: string }) {
  return (
    <>
      <span className="text">{children}</span>
      <span className="text">{children}</span>
    </>
  );
}

export default function Header({ fixed = false, isFixed = false, onOpenMobileNav }: HeaderProps) {
  const headerClassName = fixed
    ? `header style-9 header-fixed${isFixed ? " is-fixed" : ""}`
    : "header style-9";

  // The two DOM copies of this header use different logo files and phone
  // text colors (verified by diffing both blocks in the source HTML) — not
  // just a "header-fixed" class toggle like insurance/agency/corporate.
  const logoSrc = fixed
    ? "/assets/images/logo/logo-spa-2.svg"
    : "/assets/images/logo/logo-spa-1.svg";
  const phoneClassName = `phone d-flex align-items-center gap_12 ${
    fixed ? "text_primary" : "text-white"
  } h6 text-nowrap`;

  return (
    <header className={headerClassName}>
      <div className="header-inner">
        <div className="header-left md-hide">
          <div className={phoneClassName}>
            <i className="icon-PhoneCall" />
            1-333-345-6868
          </div>
        </div>
        <div className="header-center">
          {/* Left half of the split menu */}
          <nav className="main-menu">
            <ul className="navigation">
              <li className="has-child text-menu has-menu-mega">
                <a href="#" className="link-no-action toggle">
                  <ToggleText>Demos</ToggleText>
                </a>
                <div className="submenu mega-menu">
                  <div className="tf-container">
                    <div className="row-demo">
                      {desktopDemosFeatured.map((demo) => (
                        <div className="demo-item" key={demo.href}>
                          <Link href={demo.href} className="img-demo">
                            <Image
                              loading="lazy"
                              width={202}
                              height={233}
                              src={demo.image}
                              alt="home-demo"
                            />
                          </Link>
                          <Link href={demo.href} className="demo-name">
                            {demo.name}
                          </Link>
                        </div>
                      ))}
                    </div>
                    <div className="text-center">
                      <Link href={viewAllDemosHref} className="tf-btn">
                        View all demos (20)
                      </Link>
                    </div>
                  </div>
                </div>
              </li>
              <li className="has-child text-menu">
                <a href="#" className="link-no-action toggle">
                  <ToggleText>Pages</ToggleText>
                </a>
                <SubmenuList items={pagesMenu} />
              </li>
              <li className="has-child text-menu">
                <a href="#" className="link-no-action toggle">
                  <ToggleText>Services</ToggleText>
                </a>
                <SubmenuList items={servicesMenu} />
              </li>
            </ul>
          </nav>

          {/* Logo sits between the two nav halves */}
          <Link href="/demo-spasalon" className="site-logo">
            <Image
              className="logo_header"
              alt="logo"
              width={167}
              height={52}
              src={logoSrc}
            />
          </Link>

          {/* Right half of the split menu */}
          <nav className="main-menu">
            <ul className="navigation">
              <li className="has-child text-menu">
                <a href="#" className="link-no-action toggle">
                  <ToggleText>Porfolio</ToggleText>
                </a>
                <SubmenuList items={projectMenu} />
              </li>
              <li className="has-child text-menu">
                <a href="#" className="link-no-action toggle">
                  <ToggleText>Blog</ToggleText>
                </a>
                <SubmenuList items={blogMenu} />
              </li>
              <li className="text-menu">
                <Link href={contactHref} className="toggle">
                  <ToggleText>Contact</ToggleText>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="header-right d-flex align-items-center gap_20">
          <ul className="tf-social style-4 sm-hide">
            <li>
              <a href="#" className="icon-Linkedin" />
            </li>
            <li>
              <a href="#" className="icon-XLogo-2" />
            </li>
            <li>
              <a href="#" className="icon-InsLogo-fill" />
            </li>
            <li>
              <a href="#" className="icon-Youtube" />
            </li>
          </ul>
          <div
            className="mobile-button"
            onClick={onOpenMobileNav}
            role="button"
            tabIndex={0}
            aria-label="Open menu"
            aria-controls="menu-mobile"
          >
            <div className="burger">
              <span />
              <span />
              <span />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
