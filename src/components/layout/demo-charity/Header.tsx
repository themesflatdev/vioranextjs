"use client";

import Image from "next/image";
import Link from "next/link";
import {
  desktopDemosFeatured,
  pagesMenu,
  projectMenu,
  servicesMenu,
  blogMenu,
  contactHref,
  viewAllDemosHref,
} from "@/data/demo-charity/menu";
import type { SimpleMenuItem } from "@/data/demo-charity/menu";

type HeaderProps = {
  fixed?: boolean;
  isSticky?: boolean;
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

function ToggleText({ children }: { children: string }) {
  return (
    <>
      <span className="text">{children}</span>
      <span className="text">{children}</span>
    </>
  );
}

export default function Header({ fixed = false, isSticky = false, onOpenMobileNav }: HeaderProps) {
  const headerClassName = fixed
    ? `header style-14 header-sticky bg-white${isSticky ? " is-sticky" : ""}`
    : "header style-14";

  return (
    <header className={headerClassName}>
      <div className="header-inner">
        <Link href="/demo-charity" className="site-logo">
          <Image
            className="logo_header"
            alt="logo"
            width={167}
            height={52}
            src="/assets/images/logo/logo-charity.svg"
          />
        </Link>
        <div className="wrap d-flex align-items-center">
          <nav className="main-menu style-2 xl-hide">
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
                      <Link href={viewAllDemosHref} className="tf-btn btn-mega-2">
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
              <li className="has-child text-menu">
                <a href="#" className="link-no-action toggle">
                  <ToggleText>Project</ToggleText>
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
          <div className="header-right d-flex align-items-center gap_20">
            <div className="header-contact sm-hide">
              <div className="icon">
                <i className="icon-PhoneCall" />
              </div>
              <div>
                <div className="text-button text_white">Or Call Us:</div>
                <div className="text-button text_white">1-555-678-8888</div>
              </div>
            </div>
            <div
              className="mobile-button d-xl-none"
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
      </div>
    </header>
  );
}
