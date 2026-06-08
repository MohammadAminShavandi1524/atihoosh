"use client";

import { useLocale } from "next-intl";
import Link from "next/link";

interface FooterContentProps {}

const FooterContent = ({}: FooterContentProps) => {

   const locale = useLocale();


  return (
    <div className="flex flex-col">
      {/* header */}
      <div
        style={locale === "en" ? { fontFamily: "var(--font-space)" } : {}}
        className="mb-40 text-[48px] font-medium"
      >
        Engineered To Evolve
      </div>
      {/* links */}
      <div className="grid w-150 grid-cols-2 text-2xl">
        <div className="flex flex-col gap-y-8">
          <Link className="footer-link" href={""}>
            What we do
          </Link>
          <Link className="footer-link" href={""}>
            Aboout us
          </Link>
          <Link className="footer-link" href={""}>
            Blog
          </Link>
          <Link className="footer-link" href={""}>
            Project start
          </Link>
        </div>
        <div className="flex flex-col gap-y-8">
          <Link className="footer-link" href={""}>
            Terms & Conditions
          </Link>
          <Link className="footer-link" href={""}>
            Privacy And Policy
          </Link>
          <Link className="footer-link" href={""}>
            Sitemap
          </Link>
        </div>
      </div>

      {/* footer */}

      <div className="mt-20 text-lg">© 2026 ATI HOOSH BONYAN</div>
    </div>
  );
};

export default FooterContent;
