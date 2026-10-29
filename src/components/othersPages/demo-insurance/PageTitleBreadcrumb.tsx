import Image from "next/image";
import Link from "next/link";

type PageTitleBreadcrumbProps = {
  breadcrumbLabel: string;
  title: string;
};

// page-layout-v04 — breadcrumb strip reused by every insurance sub-page
// (about-us, our-team, team-detail, testimonials, pricing, faqs all share
// the exact same "images/page-title.jpg" background and markup, only
// breadcrumbLabel/title change). "HOME" in the source links to
// "/index.html" (the theme-root landing page), per CLAUDE.md's routing
// section — not this niche's own homepage.
export default function PageTitleBreadcrumb({ breadcrumbLabel, title }: PageTitleBreadcrumbProps) {
  return (
    <div className="page-layout-v04">
      <div className="img-style">
        <Image
          className="img-cover"
          width={1920}
          height={720}
          loading="eager"
          src="/assets/images/demo-insurance/page-title.jpg"
          alt="page-title"
        />
      </div>
      <div className="content">
        <div className="tf-container">
          <ul className="tf-breadcrumb style-2 mb_16">
            <li className="text-label text_white lh-16">
              <Link href="/landing" className="link text_white">
                HOME
              </Link>
            </li>
            <li className="text_white text-label lh-16">{breadcrumbLabel}</li>
          </ul>
          <h2 className="text_white">{title}</h2>
        </div>
      </div>
    </div>
  );
}
