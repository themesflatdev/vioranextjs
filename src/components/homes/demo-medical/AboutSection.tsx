"use client";

import Image from "next/image";
import Link from "next/link";
import { useSplitTextReveal } from "@/hooks/useSplitTextReveal";

const items = [
  {
    image: "/assets/images/demo-medical/portfolio-item-1.jpg",
    title: "Experienced Professionals",
    desc: "Over 20 years of trusted medical expertise, delivering consistent and compassionate care.",
    linkLabel: "Our Teams",
    linkHref: "/demo-medical/our-doctor",
  },
  {
    image: "/assets/images/demo-medical/portfolio-item-2.jpg",
    title: "State-Of-The-Art Facilities.",
    desc: "Equipped with cutting-edge technology to ensure accurate, efficient, and safe medical services.",
    linkLabel: "Our Services",
    linkHref: "/demo-medical/service",
  },
  {
    image: "/assets/images/demo-medical/portfolio-item-3.jpg",
    title: "Personalized Treatment Plans.",
    desc: "Care tailored to your unique health needs, with expert guidance every step forward.",
    linkLabel: "Contact Us",
    linkHref: "/demo-medical/contact",
  },
];

export default function AboutSection() {
  const titleRef = useSplitTextReveal<HTMLHeadingElement>("left");
  const descRef = useSplitTextReveal<HTMLParagraphElement>("lines-transform");

  return (
    <div className="section-about-3 tf-spacing-5">
      <div className="tf-container medium">
        <div className="heading-section-5 mb_48">
          <div className="row">
            <div className="col-lg-6">
              <div className="left">
                <div className="tag text-label text-uppercase wow fadeInUp mb_16">About Us</div>
                <h2 className="title" ref={titleRef}>
                  Caring Healthcare You Can Trust
                </h2>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="right">
                <p className="text-body-2 text_secondary desc mb_32" ref={descRef}>
                  We are deeply committed to providing patient-centered care that prioritizes your
                  well-being, delivered with empathy, clinical excellence, and unwavering integrity
                  at every step of your healthcare journey.
                </p>
                <Link href="/demo-medical/about" className="tf-btn btn-hover-animate-border style-border wow fadeInUp">
                  <span> About Us</span>
                  <span />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="tf-grid-layout md-col-3 gap_30">
          {items.map((item) => (
            <div className="portfolio-item style-2 hover-image-2" key={item.title}>
              <Link href="/demo-medical/about" className="img-style">
                <Image loading="lazy" width={410} height={308} src={item.image} alt="about-item" />
              </Link>
              <div className="content">
                <Link href="/demo-medical/about" className="title mb_8 link h5">
                  {item.title}
                </Link>
                <p className="text_secondary mb_16">{item.desc}</p>
                <div>
                  <Link href={item.linkHref} className="hover-underline-link text_primary-color text-button">
                    {item.linkLabel}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
