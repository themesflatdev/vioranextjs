import Image from "next/image";
import Link from "next/link";

type PageHeaderBannerProps = {
  crumb: string;
  title: string;
};

export default function PageHeaderBanner({ crumb, title }: PageHeaderBannerProps) {
  return (
    <div className="page-layout-v01">
      <div className="tf-container medium">
        <div className="row">
          <div className="col-lg-6">
            <div className="content">
              <ul className="tf-breadcrumb mb_12">
                <li className="text-label">
                  <Link href="/demo-medical" className="link text_primary-color">
                    HOME
                  </Link>
                </li>
                <li className="text_primary-color text-label">{crumb}</li>
              </ul>
              <h2 className="title text_primary-color">{title}</h2>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="thumb d-flex align-items-end">
              <Image width={696} height={509} loading="lazy" src="/assets/images/demo-medical/hero.png" alt="hero" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
