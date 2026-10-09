"use client";

import { useFixedThumb } from "@/hooks/useFixedThumb";

export default function BlogDetailFixedSocial() {
  const wrapRef = useFixedThumb<HTMLDivElement>();

  return (
    <div className="col-md-2 md-hide fixed-thumb-wrap" ref={wrapRef}>
      <ul className="tf-social style-2 v2 flex-column fixed-thumb">
        <li><a href="#" className="icon-messenger-logo" /></li>
        <li><a href="#" className="icon-x-logo" /></li>
        <li><a href="#" className="icon-instagram-logo" /></li>
        <li><a href="#" className="icon-skype-logo" /></li>
        <li><a href="#" className="icon-telegram-logo" /></li>
      </ul>
    </div>
  );
}
