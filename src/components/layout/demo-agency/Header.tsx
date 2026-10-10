"use client";

import Image from "next/image";
import Link from "next/link";
import { useDemoModal } from "@/components/common/DemoModalProvider";
import {
  desktopDemosFeatured,
  pagesMenu,
  projectMenu,
  servicesMenu,
  contactHref,
} from "@/data/demo-agency/menu";
import type { SimpleMenuItem } from "@/data/demo-agency/menu";

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

/** Fades between two stacked spans on hover — the real agency site never
 * loads Splitting.js either (no per-character 3D rotation). */
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
    ? `header style-2 header-fixed${isFixed ? " is-fixed" : ""}`
    : "header style-2";

  return (
    <header className={headerClassName}>
      <div className="tf-container large">
        <div className="header-inner">
          <Link href="/demo-agency" className="site-logo">
            <Image
              className="logo_header"
              alt="logo"
              width={167}
              height={52}
              src="/assets/images/logo/logo-agency.svg"
            />
          </Link>
          <nav className="main-menu">
            <ul className="navigation">
              <li className="has-child text-menu has-menu-mega current-menu">
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
              <li className="text-menu">
                <Link href={contactHref} className="toggle">
                  <ToggleText>Contact</ToggleText>
                </Link>
              </li>
            </ul>
          </nav>
          <div className="header-right d-flex align-items-center gap_20">
            <ul className="tf-social style-3 sm-hide">
              <li>
                <a href="#" className="icon-Linkedin" />
              </li>
              <li>
                <a href="#" className="icon-x-logo" />
              </li>
              <li>
                <a href="#" className="icon-instagram-logo" />
              </li>
              <li>
                <a href="#" className="icon-Youtube" />
              </li>
            </ul>
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
