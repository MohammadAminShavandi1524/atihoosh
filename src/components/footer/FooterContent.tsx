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
      <div className="mb-40 text-[48px] font-medium">{t("title")}</div>

      {/* links */}
      <div className="grid w-150 grid-cols-2 text-2xl">
        <div className="flex flex-col gap-y-8">
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

        <div className="flex flex-col gap-y-8">
          <Link className="footer-link" href={`/${locale}/contact-us`}>
            {t("links.conatctUs")}
          </Link>
          <Link className="footer-link" href={`/${locale}/talent`}>
            {t("links.talent")}
          </Link>
        </div>
      </div>

      {/* socials */}
      {/* socials */}
      <div className="mt-20 mb-10 flex items-center gap-x-3">
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
