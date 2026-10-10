"use client";

import Image from "next/image";

const services = [
  {
    image: "/assets/images/demo-logistics/service-1.jpg",
    icon: "icon-Clock",
    title: "Customs Clearance",
    desc: "Smooth handling of import and export paperwork.",
  },
  {
    image: "/assets/images/demo-logistics/service-2.jpg",
    icon: "icon-AirplaneTilt",
    title: "Freight Forwarding",
    desc: "Fast and reliable global transport.",
  },
  {
    image: "/assets/images/demo-logistics/service-3.jpg",
    icon: "icon-FileText",
    title: "Last Mile Delivery",
    desc: "On time delivery to your final destination.",
  },
  {
    image: "/assets/images/demo-logistics/service-4.jpg",
    icon: "icon-Package",
    title: "Warehousing & Storage",
    desc: "Secure and efficient inventory management.",
  },
];

export default function ServiceSection() {
  return (
    <div className="section-service-14 tf-spacing-1">
      <div className="tf-container">
        <div className="heading-section d-grid gap_20 mb_48">
          <div className="wrap-line-marker">
            <div className="tag wrap-line-marker lh-16 text-label text_primary text-uppercase letter-spacing-1">
              <span className="line-marker line-primary" />
              Our Services
            </div>
          </div>
          <h2 className="split-text effect-right">Delivering Reliable Logistics Solutions</h2>
        </div>
        <div className="tf-grid-layout md-col-2 wow fadeInUp">
          {services.map((service) => (
            <div className="service-item style-6 v2 hover-image-translate" key={service.title}>
              <a href="#" className="img-style">
                <Image width={685} height={411} src={service.image} alt="service" />
              </a>
              <div className="content">
                <div className="icon">
                  <i className={service.icon} />
                </div>
                <div>
                  <h5 className="mb_8 text_white">
                    <a href="#" className="link">
                      {service.title}
                    </a>
                  </h5>
                  <p className="text-label text-uppercase text_white letter-spacing-1">{service.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
