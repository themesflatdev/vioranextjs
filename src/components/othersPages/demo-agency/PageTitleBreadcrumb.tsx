"use client";

import Image from "next/image";
import Link from "next/link";
import { useScrollTransform } from "@/hooks/useScrollTransform";

type PageTitleBreadcrumbProps = {
  breadcrumbLabel: string;
  title: string;
};

// page-layout-v03 — breadcrumb strip reused by every agency sub-page's
// HTML (services.html, service-detail.html and the 6 pages already built
// before this one, which are still missing it). "HOME" in the source
// links to the theme-root "/index.html" (the landing/demo-switcher), per
// CLAUDE.md's routing section, not this niche's own homepage.
export default function PageTitleBreadcrumb({ breadcrumbLabel, title }: PageTitleBreadcrumbProps) {
  const shapeRef = useScrollTransform<HTMLDivElement>({ rotate: 180 });

  return (
    <div className="page-layout-v03">
      <div className="tf-container large">
        <div className="content text-center">
          <ul className="tf-breadcrumb style-2 justify-content-center mb_20">
            <li className="text-label text_primary-color lh-16">
              <Link href="/landing" className="link text_primary-color">
                HOME
              </Link>
            </li>
            <li className="text_primary-color text-label lh-16">{breadcrumbLabel}</li>
          </ul>
          <div className="text-display-1 title text_white fw-6">{title}</div>
          <div className="shape sm-hide position-absolute" ref={shapeRef}>
            <Image width={100} height={100} src="/assets/images/shape/agency-shape-1.svg" alt="shape" />
          </div>
        </div>
      </div>
    </div>
  );
}
