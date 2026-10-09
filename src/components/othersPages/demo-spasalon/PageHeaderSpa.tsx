"use client";

import Image from "next/image";
import Link from "next/link";
import { useImageParallax } from "@/hooks/useImageParallax";

type PageHeaderSpaProps = {
  crumb: string;
  title: string;
};

export default function PageHeaderSpa({ crumb, title }: PageHeaderSpaProps) {
  const parallaxRef = useImageParallax<HTMLDivElement>();

  return (
    <div className="page-layout-v02 parallax-container overflow-hidden" ref={parallaxRef}>
      <div className="thumb parallax-image">
        <Image
          className="image-inner"
          loading="eager"
          width={1920}
          height={720}
          src="/assets/images/demo-spasalon/page-title.jpg"
          alt="page-title"
        />
      </div>
      <div className="tf-container">
        <div className="content text-center">
          <ul className="tf-breadcrumb justify-content-center mb_16">
            <li className="text-label text_white lh-16">
              <Link href="/demo-spasalon" className="link text_white">
                HOME
              </Link>
            </li>
            <li className="text_white text-label lh-16">{crumb}</li>
          </ul>
          <h2 className="title text_white">{title}</h2>
        </div>
      </div>
    </div>
  );
}
