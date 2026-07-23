"use client";

import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Instagram, Linkedin, Mail, Send } from "lucide-react";

export default function FooterContent() {
  const locale = useLocale();
  const isRtl = locale === "fa";
  const t = useTranslations("Footer");

  return (
    <div className={cn("flex flex-col", isRtl && "text-right")}>
      {/* title */}
      <div className="s:text-[40px] mb-10 s:mb-12 text-[32px] font-medium xl:mb-22 2xl:mb-40 2xl:text-[48px]">
        {t("title")}
      </div>

      {/* links */}
      <div className="s:grid s:w-120 s:grid-cols-2 flex flex-col pe-4 text-xl xl:w-135 xl:text-[22px] 2xl:w-150 2xl:text-2xl">
        <div className="s:mb-0 mb-6 flex flex-col gap-y-6 s:gap-y-7 xl:gap-y-8">
          <Link className="footer-link" href={`/${locale}/what-we-do`}>
            {t("links.whatWeDo")}
          </Link>
          <Link className="footer-link" href={`/${locale}/aboutUs`}>
            {t("links.aboutUs")}
          </Link>
          <Link className="footer-link" href={`/${locale}/blogs`}>
            {t("links.blog")}
          </Link>
          <Link className="footer-link" href={`/${locale}/project-start`}>
            {t("links.projectStart")}
          </Link>
        </div>

        <div className="flex flex-col gap-y-6 s:gap-y-7 xl:gap-y-8">
          <Link className="footer-link" href={`/${locale}/contact-us`}>
            {t("links.conatctUs")}
          </Link>
          <Link className="footer-link" href={`/${locale}/talent`}>
            {t("links.talent")}
          </Link>
        </div>
      </div>

      {/* socials */}
      <div className="s:mt-15 mt-10 mb-7.5 flex items-center gap-x-3 xl:mt-20 xl:mb-10">
        <Link href="mailto:info@atihooshbonyan.com">
          <Mail className="text-primary size-6 cursor-pointer" />
        </Link>

        <Link
          href="telegram.com/atihooshbonyanco"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Send className="text-primary size-6 cursor-pointer" />
        </Link>

        <Link
          href="https://www.instagram.com/atihooshbonyan?igsh=dHdvbHdkcXNiZGRn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Instagram className="text-primary size-6 cursor-pointer" />
        </Link>

        <Link href="" target="_blank" rel="noopener noreferrer">
          <Linkedin className="text-primary size-6 cursor-pointer ps-0.5" />
        </Link>
      </div>

      <div className="text-lg">{t("copyright")}</div>
    </div>
  );
}
