"use client";

import Image from "next/image";
import Link from "next/link";
import { useDemoModal } from "@/components/common/DemoModalProvider";
import {
  blogMenu,
  contactHref,
  desktopDemosFeatured,
  pagesMenu,
  projectMenu,
  servicesMenu,
} from "@/data/demo-corporate/menu";
import type { SimpleMenuItem } from "@/data/demo-corporate/menu";

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

/** Fades between two stacked spans on hover — matches the real corporate
 * site, which never loads Splitting.js (no per-character 3D rotation). */
function ToggleText({ children }: { children: string }) {
  return (
    <>
      <span className="text">{children}</span>
      <span className="text">{children}</span>
    </>
  );
}

export default function Header({ fixed = false, isFixed = false, onOpenMobileNav }: HeaderProps) {
  const { openDemoModal } = useDemoModal();
  const headerClassName = fixed
    ? `header style-default header-fixed${isFixed ? " is-fixed" : ""}`
    : "header style-default";

  return (
    <header className={headerClassName}>
      <div className="tf-container">
        <div className="header-inner">
          <Link href="/" className="site-logo">
            <Image
              className="logo_header"
              alt="logo"
              width={167}
              height={52}
              src="/assets/images/logo/logo.svg"
            />
          </Link>
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
                      <a
                        href="#modalDemo"
                        className="tf-btn"
                        onClick={(e) => {
                          e.preventDefault();
                          openDemoModal();
                        }}
                      >
                        View all demos (20)
                      </a>
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
            <Link href={contactHref} className="tf-btn btn-hover-animate-2">
              <span>Get In Touch</span>
              <span className="bg-effect" />
            </Link>
            <div
              className="mobile-button d-lg-none"
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
