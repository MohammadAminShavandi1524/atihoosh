"use client";

import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function FooterContent() {
  const locale = useLocale();
  const isRtl = locale === "fa";
  const t = useTranslations("Footer");

  return (
    <div className={cn("flex flex-col", isRtl && "text-right")}>
      {/* title */}
      <div className="mb-40 text-[48px] font-medium">{t("title")}</div>

      {/* links */}
      <div className="grid w-150 grid-cols-2 text-2xl">
        <div className="flex flex-col gap-y-8">
          <Link className="footer-link" href="">
            {t("links.whatWeDo")}
          </Link>
          <Link className="footer-link" href="">
            {t("links.aboutUs")}
          </Link>
          <Link className="footer-link" href="">
            {t("links.blog")}
          </Link>
          <Link className="footer-link" href="">
            {t("links.projectStart")}
          </Link>
        </div>

        <div className="flex flex-col gap-y-8">
          <Link className="footer-link" href="">
            {t("links.terms")}
          </Link>
          <Link className="footer-link" href="">
            {t("links.privacy")}
          </Link>
          <Link className="footer-link" href="">
            {t("links.sitemap")}
          </Link>
        </div>
      </div>

      <div className="mt-20 text-lg">{t("copyright")}</div>
    </div>
  );
}
