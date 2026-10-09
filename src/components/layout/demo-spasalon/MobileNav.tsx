"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { useAccordion } from "@/hooks/useAccordion";
import {
  mobileDemosFull,
  pagesMenu,
  servicesMenu,
  projectMenu,
  blogMenu,
  contactHref,
} from "@/data/demo-spasalon/menu";
import type { SimpleMenuItem } from "@/data/demo-spasalon/menu";

type MobileNavProps = {
  open: boolean;
  onClose: () => void;
};

type Group = {
  key: string;
  label: string;
  children: React.ReactNode;
};

function SimpleSubMenu({ items }: { items: SimpleMenuItem[] }) {
  return (
    <ul className="sub-mobile">
      {items.map((item) => (
        <li className="menu-item" key={item.href}>
          <Link href={item.href}>{item.label}</Link>
        </li>
      ))}
    </ul>
  );
}

export default function MobileNav({ open, onClose }: MobileNavProps) {
  const pathname = usePathname();
  const { openKey, toggle } = useAccordion<string>();
  const isSpasalonActive = pathname === "/demo-spasalon";

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const groups: Group[] = [
    {
      key: "one",
      label: "Demos",
      children: (
        <ul className="sub-mobile">
          {mobileDemosFull.map((demo) => (
            <li
              className={`menu-item${demo.href === "/demo-spasalon" && isSpasalonActive ? " active" : ""}`}
              key={demo.href}
            >
              <Link href={demo.href}>{demo.name}</Link>
            </li>
          ))}
        </ul>
      ),
    },
    { key: "two", label: "Pages", children: <SimpleSubMenu items={pagesMenu} /> },
    { key: "three", label: "Services", children: <SimpleSubMenu items={servicesMenu} /> },
    { key: "four", label: "Project", children: <SimpleSubMenu items={projectMenu} /> },
    { key: "five", label: "Blog", children: <SimpleSubMenu items={blogMenu} /> },
  ];

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
            <Link href="/demo-spasalon" className="site-logo">
              <Image
                src="/assets/images/logo/logo-spa-2.svg"
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
              {groups.map((group) => {
                const isOpen = openKey === group.key;
                return (
                  <li
                    className={`menu-item menu-item-has-children-mobile${
                      group.key === "one" && isSpasalonActive ? " active" : ""
                    }`}
                    key={group.key}
                  >
                    <a
                      href={`#dropdown-menu-${group.key}`}
                      className={`item-menu-mobile${isOpen ? "" : " collapsed"}`}
                      onClick={(e) => {
                        e.preventDefault();
                        toggle(group.key);
                      }}
                      aria-expanded={isOpen}
                      aria-controls={`dropdown-menu-${group.key}`}
                    >
                      {group.label}
                    </a>
                    <div
                      id={`dropdown-menu-${group.key}`}
                      className={`collapse-content${isOpen ? " is-open" : ""}`}
                    >
                      {group.children}
                    </div>
                  </li>
                );
              })}
              <li className="menu-item">
                <Link href={contactHref} className="item-menu-mobile">
                  Contact
                </Link>
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
                  <a href="#" className="link">
                    themesflat@gmail.com
                  </a>
                </li>
                <li>
                  <div className="wrap-social">
                    <p>Follow us:</p>
                    <ul className="social">
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
