"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { useSwiperControls } from "@/hooks/useSwiperControls";
import { useSplitTextReveal } from "@/hooks/useSplitTextReveal";
import { useCountUp } from "@/hooks/useCountUp";
import { useScrollTransform } from "@/hooks/useScrollTransform";

const benefitItems = [
  {
    icon: "/assets/images/demo-gardenlandscaping/benefit-1.svg",
    title: "Beautiful Outdoor Transformations",
    desc: "We design stunning landscapes that enrich beauty & function.",
    hoverEffectIcon: true,
  },
  {
    icon: "/assets/images/demo-gardenlandscaping/benefit-2.svg",
    title: "Reliable Expert Craftsmanship",
    desc: "Our skilled team ensures quality work and lasting results.",
    hoverEffectIcon: true,
  },
  {
    icon: "/assets/images/demo-gardenlandscaping/benefit-3.svg",
    title: "Smart Sustainable Solutions",
    desc: "Eco-friendly systems keep gardens efficient.",
    hoverEffectIcon: true,
  },
  {
    icon: "/assets/images/demo-gardenlandscaping/benefit-4.svg",
    title: "Value For Your Property",
    desc: "Landscapes that enhance daily living and boost property value.",
    hoverEffectIcon: false,
  },
];

const counters = [
  { target: 15, duration: 700, suffix: "", label: "Projects Completed" },
  { target: 15, duration: 700, suffix: "+", label: "Years of Experience" },
  { target: 120, duration: 700, suffix: "+", label: "Skilled Professionals" },
  { target: 500, duration: 700, suffix: "+", label: "Satisfied Clients" },
];

function CounterItem({ target, duration, suffix, label }: (typeof counters)[number]) {
  const { value, ref } = useCountUp(target, duration);
  return (
    <div className="counter-item d-flex flex-column text-center">
      <div className="counter h2 text-white mb_12" ref={ref as React.RefObject<HTMLDivElement>}>
        <span className="numberCounter">{value}</span>
        {suffix ? <span className="sub-counter">{suffix}</span> : null}
      </div>
      <p className="sub-title h6 text-white">{label}</p>
    </div>
  );
}

export default function BenefitSection() {
  const { dotsRef, dotsEl, onSwiper } = useSwiperControls();
  const titleRef = useSplitTextReveal<HTMLHeadingElement>("right");
  const leaf1Ref = useScrollTransform<HTMLDivElement>({ direction: "left", distance: "40%" });
  const leaf2Ref = useScrollTransform<HTMLDivElement>({ direction: "right", distance: "40%" });

  return (
    <div className="tf-container w-1840">
      <div className="section-benefit-2 tf-spacing-1 position-relative">
        <div className="heading-section text-center mb_48">
          <h3 className="text_white mb_16 split-text effect-right" ref={titleRef}>
            Crafting Outdoor Spaces
          </h3>
          <p className="text-body-2 text_white wow fadeInUp" data-wow-delay=".2s">
            Transforming gardens into beautiful, functional retreats.
          </p>
        </div>
        <div className="tf-container sw-layout">
          <Swiper
            className="swiper"
            slidesPerView={1}
            spaceBetween={15}
            speed={1000}
            loop={false}
            observer
            observeParents
            modules={[Pagination]}
            pagination={{ el: dotsEl, clickable: true }}
            onSwiper={onSwiper}
            breakpoints={{
              575: { slidesPerView: 2, spaceBetween: 15 },
              768: { slidesPerView: 3, spaceBetween: 20 },
              992: { slidesPerView: 3, spaceBetween: 30 },
              1200: { slidesPerView: 4, spaceBetween: 30 },
            }}
          >
            {benefitItems.map((item) => (
              <SwiperSlide key={item.title}>
                <div className={`benefit-item${item.hoverEffectIcon ? " hover-effect-icon" : ""}`}>
                  <div className="icon">
                    <Image width={49} height={49} src={item.icon} alt="benefit" />
                  </div>
                  <div className="content text-center">
                    <h5 className="mb_12">
                      <Link href="#" className="hover-line-text link">
                        {item.title}
                      </Link>
                    </h5>
                    <p className="text-body-default text_secondary">{item.desc}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
            <div className="sw-dots style-white sw-pagination-layout text-center mt_24" ref={dotsRef} />
          </Swiper>
          <div className="wrap-counter">
            {counters.map((c) => (
              <CounterItem key={c.label} {...c} />
            ))}
          </div>
        </div>
        <div className="leaf-1 position-absolute scroll-transform" ref={leaf1Ref}>
          <Image width={284} height={341} src="/assets/images/demo-gardenlandscaping/leaf-1.png" alt="leaf" />
        </div>
        <div className="leaf-2 position-absolute scroll-transform" ref={leaf2Ref}>
          <Image width={602} height={721} src="/assets/images/demo-gardenlandscaping/leaf-2.png" alt="leaf" />
        </div>
      </div>
    </div>
  );
}
