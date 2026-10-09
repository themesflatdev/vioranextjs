"use client";

import Image from "next/image";
import { useAnimateImgItem } from "@/hooks/useAnimateImgItem";
import { useMobileSwiper } from "@/hooks/useMobileSwiper";
import { useScrollTransform } from "@/hooks/useScrollTransform";
import { useSplitTextReveal } from "@/hooks/useSplitTextReveal";

const boxIcons = [
  {
    icon: "icon-ChefHat",
    title: "Premium Chef",
    desc: "Crafted by passionate chefs every plate a masterpiece.",
    delay: "",
  },
  {
    icon: "icon-Package",
    title: "Fast Delivery",
    desc: "Your favorites, hot and speedy to your door.",
    delay: ".1s",
  },
  {
    icon: "icon-Leaf",
    title: "Fresh Ingredients",
    desc: "We choose fresh ingredients every day, for every dish.",
    delay: ".2s",
  },
  {
    icon: "icon-Headset",
    title: "Friendly Service",
    desc: "Wherever you are, we bring warm, attentive service.",
    delay: ".3s",
  },
];

export default function AboutSection() {
  const titleRef = useSplitTextReveal<HTMLHeadingElement>("blur-fade");
  const contactRef = useAnimateImgItem<HTMLDivElement>();
  const swiperRef = useMobileSwiper<HTMLDivElement>({ screen: 575, preview: 1, spacing: 15 });

  const item1Ref = useScrollTransform<HTMLDivElement>({ direction: "up", distance: "50%" });
  const item2Ref = useScrollTransform<HTMLDivElement>({ direction: "left", distance: "50%" });
  const item3Ref = useScrollTransform<HTMLDivElement>({ direction: "left", distance: "10%" });
  const item4Ref = useScrollTransform<HTMLDivElement>({ direction: "right", distance: "50%" });
  const leafRef = useScrollTransform<HTMLDivElement>({ direction: "up", distance: "50%" });

  return (
    <div className="section-about-8 position-relative tf-spacing-1">
      <div className="tf-container medium">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="content">
              <div className="heading-section-3 d-grid gap_12 mb_36">
                <div className="sub text-label text-uppercase wow fadeInUp text_white lh-16">About Us</div>
                <h3 className="title" ref={titleRef}>
                  Where Passion Meets The Plate
                </h3>
              </div>
              <p className="mb_39 text-body-default wow fadeInUp">
                Viora was born from a simple idea: to create a place where every meal tells a story, every
                ingredient matters, and every guest feels right at home. Founded by food lovers with a shared
                dream, our restaurant brings together global flavors in a warm, inviting space that feels both
                familiar and exciting.
              </p>
              <div className="wow fadeInUp">
                <a href="#" className="tf-btn style-border btn-hover-animate-border">
                  <span>Read More</span>
                  <span />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="thumbs img-style overflow-hidden">
              <Image
                data-speed=".9"
                loading="lazy"
                width={560}
                height={560}
                src="/assets/images/demo-restaurant/about-1.jpg"
                alt="about"
              />
              <div className="contact d-flex gap_12 align-items-center tf-animateCLP-up" data-delay=".4s" ref={contactRef}>
                <div className="icon">
                  <i className="icon-PhoneCall" />
                </div>
                <div>
                  <div className="text-caption-1 text_white mb_4">Have any Question?</div>
                  <h6 className="font-main">315-666-6688</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="swiper tf-sw-mobile z-5" ref={swiperRef}>
          <div className="swiper-wrapper tf-grid-layout-sm lg-col-4 sm-col-2 tf-spacing-1 pb-0">
            {boxIcons.map((box) => (
              <div className="swiper-slide" key={box.title}>
                <div className="tf-box-icon style-3 wow fadeInLeft" data-wow-delay={box.delay}>
                  <div className="icon">
                    <i className={box.icon} />
                  </div>
                  <div>
                    <a href="#" className="mb_8 h6 link">
                      {box.title}
                    </a>
                    <p className="text-body-default">{box.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="sw-dots style-white sw-pagination-mb justify-content-center d-flex mt_24 d-md-none" />
        </div>
      </div>
      <div className="item-1 item position-absolute scroll-transform" ref={item1Ref}>
        <Image width={110} height={124} src="/assets/images/demo-restaurant/item-restaurant-1.png" alt="item" />
      </div>
      <div className="item-2 item position-absolute scroll-transform" ref={item2Ref}>
        <Image width={142} height={335} src="/assets/images/demo-restaurant/item-restaurant-2.png" alt="item" />
      </div>
      <div className="item-3 item position-absolute scroll-transform" ref={item3Ref}>
        <Image width={296} height={254} src="/assets/images/demo-restaurant/item-restaurant-3.png" alt="item" />
      </div>
      <div className="item-4 item position-absolute scroll-transform" ref={item4Ref}>
        <Image width={167} height={190} src="/assets/images/demo-restaurant/item-restaurant-4.png" alt="item" />
      </div>
      <div className="leaf position-absolute scroll-transform" ref={leafRef}>
        <Image width={259} height={295} src="/assets/images/demo-restaurant/leaf-3.png" alt="leaf" />
      </div>
    </div>
  );
}
