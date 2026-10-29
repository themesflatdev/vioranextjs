import Image from "next/image";
import Link from "next/link";

export default function BannerSection() {
  return (
    <div className="section-banner-8 tf-spacing-1 pb-0 overflow-hidden">
      <div className="tf-container">
        <div className="box">
          <div className="heading-section text-center mb_40">
            <h2 className="mb_16 text_white split-text effect-blur-fade">Together, We Create Lasting Impact</h2>
            <p className="text-body-default text_white wow fadeInUp">
              Your contribution helps us deliver vital resources and brighter opportunities for communities in need.
            </p>
          </div>
          <div className="wrap-btn d-flex justify-content-center gap_24 wow fadeInUp" data-wow-delay="0.2s">
            <Link href="#" className="tf-btn btn-bg-white-2 btn-switch-text">
              <span>
                <span className="btn-double-text" data-text="Give Today">
                  Give Today
                </span>
              </span>
            </Link>
            <Link href="#" className="tf-btn style-border-white btn-switch-text">
              <span>
                <span className="btn-double-text" data-text="Join As A Volunteer">
                  Join As A Volunteer
                </span>
              </span>
            </Link>
          </div>
          <div className="thumb">
            <Image
              className="wow fadeInUp"
              data-wow-delay="0.4s"
              loading="lazy"
              width={1155}
              height={430}
              src="/assets/images/demo-charity/banner-1.png"
              alt="banner"
            />
            <span className="shape-circle" />
          </div>
          <div className="item-1 position-absolute md-hide slide-ltr-animated">
            <h6 className="mb_8">Lives Touched</h6>
            <p className="text-body-default text_primary mb_16">Opening doors to education and brighter futures.</p>
            <div className="trust d-flex align-items-center gap_12">
              <div className="group">
                <Image
                  className="wow fadeInLeft"
                  data-wow-delay="0.1s"
                  width={48}
                  height={48}
                  src="/assets/images/avatar/group-avatar-5-1.jpg"
                  alt="avatar"
                />
                <Image
                  className="wow fadeInLeft"
                  data-wow-delay="0.2s"
                  width={48}
                  height={48}
                  src="/assets/images/avatar/group-avatar-5-2.jpg"
                  alt="avatar"
                />
                <Image
                  className="wow fadeInLeft"
                  data-wow-delay="0.3s"
                  width={48}
                  height={48}
                  src="/assets/images/avatar/group-avatar-5-3.jpg"
                  alt="avatar"
                />
              </div>
              <div className="text-body-2 text_primary">16K+ people</div>
            </div>
          </div>
          <div className="item-2 position-absolute md-hide slide-rtl-animated">
            <p className="text-body-default text_primary">Providing care and</p>
            <p className="text-body-default text_primary">resources for vulnerable families</p>
            <p className="text-body-default text_primary">and individuals.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
