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
} from "@/data/demo-coworkingspace/menu";
import type { SimpleMenuItem } from "@/data/demo-coworkingspace/menu";

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
    ? `header style-9 v2 header-sticky px-0${isSticky ? " is-sticky" : ""}`
    : "header style-9 v2";

  // Verified by diffing both DOM copies: the fixed variant wraps
  // header-inner in an extra tf-container and adds "px-0" to header-inner
  // itself; it also swaps logo file and the phone tag/class.
  const headerInnerClassName = fixed ? "header-inner rounded-0 px-0" : "header-inner rounded-0";
  const logoSrc = fixed
    ? "/assets/images/logo/logo-coworking-space-2.svg"
    : "/assets/images/logo/logo-coworking-space.svg";

  const phone = fixed ? (
    <h6 className="phone d-flex align-items-center gap_12 text_white text-nowrap">
      <i className="icon-PhoneCall" />
      1-333-345-6868
    </h6>
  ) : (
    <div className="phone d-flex align-items-center gap_12 text-white h6 text-nowrap">
      <i className="icon-PhoneCall" />
      1-333-345-6868
    </div>
  );

  const headerInner = (
    <div className={headerInnerClassName}>
      <div className="header-left md-hide">{phone}</div>
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
        <Link href="/demo-coworkingspace" className="site-logo">
          <Image className="logo_header" alt="logo" width={167} height={52} src={logoSrc} />
        </Link>

        {/* Right half of the split menu */}
        <nav className="main-menu">
          <ul className="navigation">
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
  );

  return (
    <header className={headerClassName}>
      {fixed ? <div className="tf-container w-1840">{headerInner}</div> : headerInner}
    </header>
  );
}
