import type { Metadata } from "next";
import Script from "next/script";
import { Plus_Jakarta_Sans } from "next/font/google";
import "@/styles/app.scss";
import DemoModalProvider from "@/components/common/DemoModalProvider";

// Loaded as a true VARIABLE font (no `weight` array) to match the source
// theme's assets/font/fonts.css, which declares it with a
// `font-weight: <min> <max>` RANGE backed by a single variable woff2 — not
// one static file per weight. next/font/google defaults to the variable
// axis when `weight` is omitted and the family supports it. Static
// per-weight instances have different glyph metrics/hinting than the
// variable instance at that same weight, which was shifting text line-wraps
// (and therefore element heights) versus the source across many sections.
//
// This is the ONLY font loaded globally — it backs every niche's shared
// --font-main (body text everywhere). Every other family is niche-specific
// (only a handful of niches actually reference it via font-main2/3/4) and
// is loaded in that niche's own layout.tsx instead, so pages that don't
// need it don't pay for it.
const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-main",
  subsets: ["latin", "vietnamese"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Viora AI-powered Multipurpose Next.js Themes",
  description:
    "Viora is an AI-powered multipurpose Next.js theme designed for speed and versatility. Perfect for business, tech startups, portfolios, and more with clean, modern design. Easily customizable and optimized for performance across all devices",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={plusJakartaSans.variable}>
      <body>
        <DemoModalProvider>{children}</DemoModalProvider>
        <Script src="/assets/js/wow.min.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
