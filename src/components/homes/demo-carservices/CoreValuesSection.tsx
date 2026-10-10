"use client";

import Image from "next/image";
import Link from "next/link";
import { useScaleUpImage } from "@/hooks/useScaleUpImage";
import { useSplitTextReveal } from "@/hooks/useSplitTextReveal";
import { useAccordion } from "@/hooks/useAccordion";

const accordionItems = [
  {
    key: "faq-1",
    title: "Reliable Service",
    image: "accordion-1.jpg",
    text: "We deliver consistent, dependable service so you can drive with total confidence and complete peace of mind every day.",
  },
  {
    key: "faq-2",
    title: "Expert Care",
    image: "accordion-2.jpg",
    text: "Our skilled technicians combine knowledge and precision to keep your car performing at its best in every situation and condition.",
  },
  {
    key: "faq-3",
    title: "True Commitment",
    image: "accordion-3.jpg",
    text: "We treat every vehicle as if it were our own, with attention, honesty, respect, and genuine care for lasting trust.",
  },
];

export default function CoreValuesSection() {
  const scaleRef = useScaleUpImage<HTMLDivElement>();
  const headingRef = useSplitTextReveal<HTMLHeadingElement>("blur-fade");
  const { toggle, isOpen } = useAccordion<string>("faq-1");

  return (
    <div className="section-core-values tf-spacing-1">
      <div className="box-left">
        <div className="img-style scale-up-img overflow-hidden" ref={scaleRef}>
          <Image
            className="scale-up"
            src="/assets/images/demo-carservices/core-value-1.jpg"
            alt="core-value"
            width={1060}
            height={955}
          />
        </div>
        <div className="content-inner">
          <div className="content">
            <div className="heading">
              <h3 ref={headingRef} className="mb_8 text_white split-text effect-blur-fade">
                The Core Values
              </h3>
              <p className="text-body-2 text_white wow fadeInUp" data-wow-delay=".2s">
                We believe your car is more than transportation. It’s your trusted partner for
                safety, comfort, and every journey.
              </p>
            </div>
            <p className="h5 font-main desc text-capitalize wow fadeInUp" data-wow-delay=".4s">
              “Finally found a team that truly cares about my car and peace of mind.”
            </p>
            <Link
              href="/portfolio"
              className="tf-btn btn-bg-stroke-dark btn-hover-animate-2 wow fadeInUp"
              data-wow-delay=".6s"
            >
              <span>Schedule A Service</span>
              <span></span>
            </Link>
            <span className="dot dot-top-left"></span>
            <span className="dot dot-top-right"></span>
            <span className="dot dot-bot-left"></span>
            <span className="dot dot-bot-right"></span>
          </div>
        </div>
      </div>
      <ul className="accordion-wrap" id="accordion-faq">
        {accordionItems.map((item) => {
          const open = isOpen(item.key);
          return (
            <li key={item.key} className="accordion-item style-6">
              <a
                href={`#${item.key}`}
                className={`accordion-title${open ? "" : " collapsed"}`}
                aria-expanded={open}
                aria-controls={item.key}
                onClick={(e) => {
                  e.preventDefault();
                  toggle(item.key);
                }}
              >
                <div className="heading">
                  <h4 className="title text-capitalize">{item.title}</h4>
                  <i className="icon-CaretDown"></i>
                </div>
              </a>
              <div
                id={item.key}
                className={`collapse-content${open ? " is-open" : ""}`}
                data-bs-parent="#accordion-faq"
              >
                <div className="accordion-faqs-content">
                  <div className="img-style">
                    <Image
                      width={638}
                      height={365}
                      loading="lazy"
                      src={`/assets/images/demo-carservices/${item.image}`}
                      alt=""
                    />
                  </div>
                  <p className="text-body-2">{item.text}</p>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
