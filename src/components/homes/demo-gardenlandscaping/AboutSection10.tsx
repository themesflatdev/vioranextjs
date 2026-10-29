import Image from "next/image";
import Link from "next/link";

const aboutImages = [
  { src: "/assets/images/demo-gardenlandscaping/about-1.jpg", wowDelay: "" },
  { src: "/assets/images/demo-gardenlandscaping/about-2.jpg", wowDelay: "0.2s" },
  { src: "/assets/images/demo-gardenlandscaping/about-3.jpg", wowDelay: "0.4s" },
];

export default function AboutSection10() {
  return (
    <div className="section-about-10 tf-spacing-1">
      <div className="tf-container">
        <div className="heading-section style-1 mb_80">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <h3 className="text-capitalize wow fadeInUp">
                We create timeless landscapes connecting nature, and our clients’ stories.
              </h3>
            </div>
            <div className="col-lg-5">
              <p className="text-body-2 text_secondary mb_20 wow fadeInUp">
                We bring expertise and passion to every project, creating outdoor environments that not only enrich
                daily living but also add lasting value to your property.
              </p>
              <div className="wow fadeInUp">
                <Link href="#" className="text-button hover-underline-link text_primary py_4" data-wow-delay=".4s">
                  About Us
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="tf-grid-layout md-col-3">
          {aboutImages.map((item) => (
            <div className="hover-image wow fadeInLeft" data-wow-delay={item.wowDelay} key={item.src}>
              <div className="img-style rounded-20">
                <Image width={443} height={345} loading="lazy" src={item.src} alt="about" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
