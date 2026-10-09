"use client";

import Image from "next/image";
import Link from "next/link";
import { useAnimateImgItem } from "@/hooks/useAnimateImgItem";
import type { ServiceItem } from "@/data/demo-corporate/services";

export default function ServiceItemRow({ item }: { item: ServiceItem }) {
  const clipRef = useAnimateImgItem<HTMLAnchorElement & HTMLDivElement>();
  const href = `/service-detail/${item.slug}`;
  const clipClass = item.ctl ? "img-style tf-animateCLP-right" : "img-style tf-animateCLP-left";

  const image = (
    <Link href={href} className={clipClass} ref={clipRef}>
      <Image width={555} height={555} loading="eager" src={item.image} alt="service" />
    </Link>
  );

  const content = (
    <div className={`content wow ${item.ctl ? "fadeInLeft" : "fadeInRight"}`}>
      <div className="heading">
        <Link href={href} className="title mb_12 link h2">
          {item.title}
        </Link>
        <p className="text_secondary text-body-2">{item.description}</p>
      </div>
      <ul className="list">
        {item.bullets.map((bullet) => (
          <li className="text-body-default" key={bullet}>
            <i className="icon-Check" />
            {bullet}
          </li>
        ))}
      </ul>
      <Link href={href} className="btn_link">
        <i className="icon-ArrowUpRight" />
      </Link>
    </div>
  );

  return (
    <div className="element">
      <div className={`service-item style-default hover-image${item.ctl ? " ctl" : ""}`}>
        {item.ctl ? (
          <>
            {content}
            {image}
          </>
        ) : (
          <>
            {image}
            {content}
          </>
        )}
      </div>
    </div>
  );
}
