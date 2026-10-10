"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import Link from "next/link";
import { allDemos } from "@/data/demos";

type DemoModalProps = {
  open: boolean;
  onClose: () => void;
};

// Rendered via portal into document.body — same reason as common/VideoModal:
// #smooth-content gets a `transform` from GSAP ScrollSmoother, which makes
// `position: fixed` descendants clip/offset inside the scrolled content
// instead of covering the real viewport.
//
// Mirrors Bootstrap's Modal: mount with display:block, add "show" one frame
// later so `.fade` can transition (opacity + dialog translate), and on close
// remove "show" first and only unmount ~300ms later once that transition
// finishes — matching `_queueCallback`/`hidden.bs.modal` timing in
// bootstrap.min.js, including the body scroll-lock staying on during the
// fade-out (Bootstrap only calls `_resetAdjustments` after the transition).
export default function DemoModal({ open, onClose }: DemoModalProps) {
  const [mounted, setMounted] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);
  const [visible, setVisible] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (open) {
      previousFocusRef.current = document.activeElement as HTMLElement | null;
      setShouldRender(true);
      return undefined;
    }

    setVisible(false);
    const timer = window.setTimeout(() => setShouldRender(false), 300);
    return () => window.clearTimeout(timer);
  }, [open]);

  useEffect(() => {
    if (!shouldRender) return undefined;
    // Two rAFs: the first lets the browser paint display:block (no "show"
    // class yet), the second then adds "show" so the fade transition has a
    // real starting frame to animate from instead of jumping straight in.
    let raf2 = 0;
    const raf1 = requestAnimationFrame(() => {
      dialogRef.current?.focus();
      raf2 = requestAnimationFrame(() => setVisible(true));
    });
    return () => {
      cancelAnimationFrame(raf1);
      cancelAnimationFrame(raf2);
    };
  }, [shouldRender]);

  useEffect(() => {
    if (!shouldRender) {
      previousFocusRef.current?.focus();
      previousFocusRef.current = null;
    }
  }, [shouldRender]);

  useEffect(() => {
    if (!shouldRender) return undefined;

    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    const prevOverflow = document.body.style.overflow;
    const prevPaddingRight = document.body.style.paddingRight;
    document.body.style.overflow = "hidden";
    if (scrollbarWidth > 0) document.body.style.paddingRight = `${scrollbarWidth}px`;

    return () => {
      document.body.style.overflow = prevOverflow;
      document.body.style.paddingRight = prevPaddingRight;
    };
  }, [shouldRender]);

  useEffect(() => {
    if (!shouldRender) return undefined;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [shouldRender, onClose]);

  if (!mounted || !shouldRender) return null;

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose();
  };

  return createPortal(
    <>
      <div
        className={`modal fade modalDemo${visible ? " show" : ""}`}
        id="modalDemo"
        style={{ display: "block" }}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modalDemoLabel"
        onClick={handleOverlayClick}
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content" ref={dialogRef} tabIndex={-1}>
            <div className="header">
              <h3 className="demo-title" id="modalDemoLabel">
                Ultimate Next.js Template
              </h3>
              <span
                className="icon-Close icon-close-popup"
                role="button"
                tabIndex={0}
                aria-label="Close"
                onClick={onClose}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") onClose();
                }}
              />
            </div>
            <div className="mega-menu">
              <div className="tf-container">
                <div className="row-demo">
                  {allDemos.map((demo) => (
                    <div className="demo-item" key={demo.href}>
                      <Link href={demo.href} className="img-demo" onClick={onClose}>
                        <Image loading="lazy" width={202} height={233} src={demo.image} alt="home-demo" />
                      </Link>
                      <Link href={demo.href} className="demo-name" onClick={onClose}>
                        {demo.name}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`modal-backdrop fade${visible ? " show" : ""}`} />
    </>,
    document.body,
  );
}
