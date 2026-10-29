"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

type VideoModalProps = {
  youtubeId: string;
  open: boolean;
  onClose: () => void;
};

// Rendered via portal into document.body — this component is normally
// mounted deep inside #smooth-content, and GSAP ScrollSmoother applies a
// `transform` to that element to drive the smooth-scroll effect. A
// transformed ancestor becomes the containing block for `position: fixed`
// descendants, so without the portal this overlay would be clipped/offset
// inside the scrolled content instead of covering the real viewport
// (exactly why the original theme's Fancybox lightbox also always appends
// itself to <body> instead of rendering in place).
export default function VideoModal({ youtubeId, open, onClose }: VideoModalProps) {
  const [mounted, setMounted] = useState(false);
  // Hydration-safe mount flag (createPortal needs document.body, unavailable
  // during SSR) — runs once, not derivable from props.
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => setMounted(true), []);

  if (!open || !mounted) return null;

  return createPortal(
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "rgba(0, 0, 0, 0.85)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
      }}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close video"
        style={{
          position: "absolute",
          top: "24px",
          right: "24px",
          background: "transparent",
          border: "none",
          color: "#fff",
          fontSize: "32px",
          cursor: "pointer",
          lineHeight: 1,
        }}
      >
        <i className="icon-Close" />
      </button>
      <div
        onClick={(e) => e.stopPropagation()}
        style={{ width: "100%", maxWidth: "960px", aspectRatio: "16 / 9" }}
      >
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1`}
          title="YouTube video player"
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>,
    document.body,
  );
}
