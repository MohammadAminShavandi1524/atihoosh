"use client";

import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

interface HeroSectionProps {}

const HeroSection = ({}: HeroSectionProps) => {
  const locale = useLocale();
  const t = useTranslations("HomePage.HeroSection.content");

  return (
    <div
      dir="ltr"
      className="relative flex h-112 w-full overflow-hidden pt-[120px]"
    >
      {/* background image */}
      <div className="absolute inset-0 scale-105 bg-[url('/herosection.png')] bg-cover bg-center bg-no-repeat" />

      {/* dark overlay */}
      <div className="absolute inset-0 bg-black/70" />
      {/* محتوا */}
      <div
        // style={{ fontFamily: "var(--font-inter)" }}
        // style={{ fontFamily: "var(--font-playfair)" }}
        // style={{ fontFamily: "var(--font-space)" }}
        className="relative flex w-6/10 flex-col ps-[12%] pe-[16%] text-[80px]/[85px] font-bold"
      >
        <div className="self-start">ATI HOOSH</div>
        <div className="flex self-end">
          <span>B</span>
          <span className="text-[#1e9dbd]">O</span>
          <span>NYAN</span>
        </div>
      </div>

      <div
        dir={locale === "en" ? "ltr" : "rtl"}
        className="relative w-4/10 pr-[12%]"
      >
        {/* title */}
        <div className="mb-12 text-[24px]">{t("title")}</div>
        {/* description */}
        <div className="mb-20 text-justify text-lg">{t("description")}</div>
        {/* button */}
        <button className="flex cursor-pointer items-center gap-x-2.5">
          <span className="text-lg">{t("buttonText")}</span>
          <span className="flex size-5 items-center justify-center bg-[#1e9dbd]">
            <ChevronRight
              className={cn(locale === "fa" && "rotate-180")}
              size={18}
            />
          </span>
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
