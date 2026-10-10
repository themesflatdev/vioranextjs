import Image from "next/image";

const features = [
  {
    icon: "icon-Blueprint",
    number: "01.",
    title: "Advanced Structural Design",
    desc: "Cutting-edge structural solutions for maximum safety.",
    delay: "0s",
  },
  {
    icon: "icon-HardHat",
    number: "02.",
    title: "Professional Site Supervision",
    desc: "Managing quality, safety, and deadlines with precision.",
    delay: "0.2s",
  },
  {
    icon: "icon-PencilRuler",
    number: "03.",
    title: "Innovative Building Renovation",
    desc: "Transforming spaces with modern & creative upgrades.",
    delay: "0.4s",
  },
  {
    icon: "icon-HouseLine",
    number: "04.",
    title: "Sustainable Green Construction",
    desc: "Building eco-friendly projects for a sustainable future.",
    delay: "0.6s",
  },
];

export default function FeatureSection() {
  return (
    <div className="section-feature-4">
      <div className="shape">
        <Image src="/assets/images/shape/shape-construction-1.png" alt="shape" width={200} height={200} />
      </div>
      <div className="tf-spacing-1">
        <div className="tf-container">
          <div className="heading-section style-1 mb_48">
            <div className="row align-items-center">
              <div className="col-lg-7 d-grid gap_16">
                <div className="sub text-label text-uppercase text_primary-color split-text effect-left">
                  Our Features
                </div>
                <h2 className="title split-text effect-blur-fade">Core Services That Define Our Work</h2>
              </div>
              <div className="col-lg-5">
                <a href="#" className="tf-btn btn-hover-animate-2 btn-bg-primary-2 rounded-0 ms-lg-auto">
                  <span>About Us</span>
                  <span className="bg-effect" />
                </a>
              </div>
            </div>
          </div>

          <div className="tf-grid-layout lg-col-4 sm-col-2">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="tf-box-icon style-7 wow fadeInLeft hover-effect-icon"
                data-wow-delay={feature.delay}
              >
                <div className="heading">
                  <div className="icon">
                    <i className={feature.icon} />
                  </div>
                  <div className="h1 number">{feature.number}</div>
                </div>
                <h4 className="mb_8 title">
                  <a href="#" className="link hover-line-text">
                    {feature.title}
                  </a>
                </h4>
                <p className="text-body-default text_secondary">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
