"use client";

import Image from "next/image";
import Link from "next/link";
import { useAnchorScroll } from "@/hooks/useAnchorScroll";
import { anchorMenu, collectionHref, contactUsHref, purchaseHref } from "@/data/landing/menu";

type HeaderProps = {
  fixed?: boolean;
  isFixed?: boolean;
  onOpenMobileNav: () => void;
};

/** Fades between two stacked spans on hover — matches the real site, which
 * never loads Splitting.js (no per-character 3D rotation). */
function ToggleText({ children }: { children: string }) {
  return (
    <>
      <span className="text">{children}</span>
      <span className="text">{children}</span>
    </>
  );
}

export default function Header({ fixed = false, isFixed = false, onOpenMobileNav }: HeaderProps) {
  const scrollToAnchor = useAnchorScroll();
  // Both the header-fixed (outer) and landing (inner, in-flow) headers get
  // "is-fixed" together — assets/js/main.js `headerFixed` selects ALL
  // `.header` elements, not just the `.header-fixed` one.
  const headerClassName = fixed
    ? `header style-default header-fixed${isFixed ? " is-fixed" : ""}`
    : `header style-default landing${isFixed ? " is-fixed" : ""}`;

  return (
    <header className={headerClassName}>
      <div className="wrap-header">
        <div className="tf-container medium">
          <div className="header-inner position-relative">
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
                {anchorMenu.map((item) => (
                  <li className="text-menu" key={item.href}>
                    <a
                      href={item.href}
                      className="link-no-action toggle nav_link"
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToAnchor(item.href);
                      }}
                    >
                      <ToggleText>{item.label}</ToggleText>
                    </a>
                  </li>
                ))}
                <li className="text-menu">
                  <a href={collectionHref} target="_blank" rel="noreferrer" className="link-no-action toggle">
                    <ToggleText>Collection</ToggleText>
                  </a>
                </li>
                <li className="text-menu">
                  <a href={contactUsHref} target="_blank" rel="noreferrer" className="link-no-action toggle">
                    <ToggleText>Contact Us</ToggleText>
                  </a>
                </li>
              </ul>
            </nav>
            <div className="header-right d-flex align-items-center gap_20">
              <a href={purchaseHref} target="_blank" rel="noreferrer" className="tf-btn btn-hover-animate-2">
                <span>Purchase Now</span>
                <span className="bg-effect" />
              </a>
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
      </div>
    </header>
  );
}
