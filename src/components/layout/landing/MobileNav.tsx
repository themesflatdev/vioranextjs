"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { useAnchorScroll } from "@/hooks/useAnchorScroll";
import { anchorMenu, supportHref } from "@/data/landing/menu";

type MobileNavProps = {
  open: boolean;
  onClose: () => void;
};

export default function MobileNav({ open, onClose }: MobileNavProps) {
  const scrollToAnchor = useAnchorScroll();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleAnchorClick = (hash: string) => {
    onClose();
    scrollToAnchor(hash);
  };

  return (
    <>
      <div
        className={`offcanvas offcanvas-end mobile-nav-wrap${open ? " show" : ""}`}
        tabIndex={-1}
        id="menu-mobile"
        aria-labelledby="menu-mobile"
      >
        <div className="offcanvas-header top-nav-mobile">
          <div className="offcanvas-title">
            <Link href="/landing" className="site-logo">
              <Image
                src="/assets/images/logo/logo.svg"
                alt="logo"
                className="main-logo"
                width={193}
                height={44}
              />
            </Link>
          </div>
          <div className="btn-close-menu" onClick={onClose}>
            <i className="icon-Close" />
          </div>
        </div>
        <div className="offcanvas-body inner-mobile-nav">
          <div className="mb-body">
            <ul id="menu-mobile-menu" className="style-1">
              {anchorMenu.map((item) => (
                <li className="menu-item" key={item.href}>
                  <a
                    href={item.href}
                    className="item-menu-mobile nav_link"
                    onClick={(e) => {
                      e.preventDefault();
                      handleAnchorClick(item.href);
                    }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li className="menu-item">
                <a href="#" className="item-menu-mobile">
                  Documentation
                </a>
              </li>
              <li className="menu-item">
                <a href={supportHref} target="_blank" rel="noreferrer" className="item-menu-mobile">
                  Support
                </a>
              </li>
            </ul>
            <div className="support">
              <a href="#" className="text-need text-body-2">
                {" "}
                Need help?
              </a>
              <ul className="mb-info">
                <li>
                  Call Us Now: <span className="number">+1 666 8888</span>
                </li>
                <li>
                  Support 24/7:{" "}
                  <a href="mailto:themesflat@gmail.com" className="link">
                    themesflat@gmail.com
                  </a>
                </li>
                <li>
                  <div className="wrap-social">
                    <p>Follow us:</p>
                    <ul className="social">
                      <li>
                        <a href="#" className="icon-Linkedin" aria-label="LinkedIn" />
                      </li>
                      <li>
                        <a href="#" className="icon-XLogo-2" aria-label="X (Twitter)" />
                      </li>
                      <li>
                        <a href="#" className="icon-InsLogo-fill" aria-label="Instagram" />
                      </li>
                      <li>
                        <a href="#" className="icon-Youtube" aria-label="YouTube" />
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {open && <div className="offcanvas-backdrop fade show" onClick={onClose} />}
    </>
  );
}
