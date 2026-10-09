import Image from "next/image";
import Link from "next/link";

// section-404 — insurance has no 404.html of its own in the source theme
// (only demo-corporate does; insurance's header menu just links to
// "../demo-corporate/404.html"), so this reuses corporate's page design
// and artwork verbatim, same borrowing convention already used for the
// "404 Error" menu link itself (CLAUDE.md rule on linking to corporate
// when a niche has no equivalent page).
export default function NotFoundSection() {
  return (
    <div className="section-404">
      <div className="tf-container">
        <div className="row align-items-center">
          <div className="col-lg-5">
            <div className="content d-grid gap_32">
              <div className="title">
                <h1 className="mb_20">Oops!</h1>
                <h3>This page doesn&apos;t exist.</h3>
              </div>
              <p className="text-body-2 text_secondary">
                Looks like the link is broken, the page was removed, or it never existed.
              </p>
              <Link href="/demo-insurance" className="tf-btn">
                <span>Back To Homepage</span>
                <span />
              </Link>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="img">
              <Image
                loading="lazy"
                width={824}
                height={490}
                src="/assets/images/demo-corporate/404.png"
                alt="404"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
