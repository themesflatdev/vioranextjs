"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const pins = [
  { id: 1, position: "position1 sm-hide" },
  { id: 2, position: "position2" },
  { id: 3, position: "position3 lg-hide" },
];

// Source HTML's `.tf-pin-btn` carries a leftover `swiper-button` class but is
// wired to a plain Bootstrap dropdown (`data-bs-toggle="dropdown"`), not
// Swiper — confirmed in assets/js/main.js (no Swiper instance targets
// `.tf-pin-btn`/`.bundle-pin-item`; only generic Bootstrap dropdown JS
// applies). Reproduced here as independent open/close state per pin,
// closing on outside click, matching Bootstrap dropdown behavior.
export default function LookbookSection() {
  const [openPin, setOpenPin] = useState<number | null>(null);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (openPin === null) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) {
        setOpenPin(null);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [openPin]);

  return (
    <div className="section-lookbook tf-spacing-1">
      <div className="banner-lookbook position-relative">
        <Image
          loading="lazy"
          width={1920}
          height={520}
          className="img-banner"
          src="/assets/images/demo-spasalon/banner-1.jpg"
          alt="Banners"
        />
        <div className="wrap-lookbook-item">
          <div className="tf-container position-relative" ref={wrapRef}>
            {pins.map((pin) => {
              const isOpen = openPin === pin.id;
              return (
                <div className={`lookbook-item ${pin.position}`} key={pin.id}>
                  <div className={`dropdown dropup-center dropdown-custom dropup${isOpen ? " show" : ""}`}>
                    <div
                      role="dialog"
                      className="tf-pin-btn bundle-pin-item"
                      id={`pin${pin.id}`}
                      aria-expanded={isOpen}
                      onClick={(e) => {
                        e.stopPropagation();
                        setOpenPin(isOpen ? null : pin.id);
                      }}
                    >
                      <span />
                    </div>
                    <div className={`dropdown-menu p-0${isOpen ? " show" : ""}`}>
                      <div className="lookbook-content text-button text_primary-color">
                        Organic Handmade Candles
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
