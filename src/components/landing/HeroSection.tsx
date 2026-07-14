"use client";

import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import LoginBackground from "./HeroBackground";
import ParticlesBackground from "./Particles";
import HeroBackground from "./HeroBackground";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import LightParticles from "./LightParticles";

interface HeroSectionProps {}

const HeroSection = ({}: HeroSectionProps) => {
  const locale = useLocale();
  const t = useTranslations("HomePage.HeroSection.content");

  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div
      dir="ltr"
      className={cn(
        locale === "en" ? "pt-[80px]" : "pt-[120px]",
        "relative flex h-112 w-full overflow-hidden",
      )}
    >
      {/* background image */}

      {theme === "dark" ? (
        <div className="absolute inset-0 scale-105 bg-[url('/herosection.png')] bg-cover bg-center bg-no-repeat" />
      ) : (
        <div className="absolute inset-0 scale-105 bg-[url('/lighthero.png')] bg-cover bg-center bg-no-repeat" />
      )}

      {/* dark overlay */}
      {theme === "dark" && <div className="absolute inset-0 bg-black/50" />}

      {/* <HeroBackground/> */}

      {theme === "dark" ? <ParticlesBackground /> : <LightParticles />}

      {/* محتوا */}
      <div
        // style={{ fontFamily: "var(--font-inter)" }}
        style={{ fontFamily: "var(--font-notoSerif)" }}
        // style={{ fontFamily: "var(--font-space)" }}
        className="relative flex w-6/10 flex-col ps-[12%] pe-[16%] pt-10 text-[80px]/[85px] font-bold"
      >
        <div className="self-start">ATI HOOSH</div>
        <div className="flex self-end">
          <span>B</span>
          <span className="text-primary">O</span>
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
        <div
          className={cn(
            locale === "en" ? "mb-16 leading-8" : "mb-20 leading-9",
            "text-justify text-lg",
          )}
        >
          {t("description")}
        </div>
        {/* button */}
        <button className="flex cursor-pointer items-center gap-x-2.5">
          <span className="text-lg">{t("buttonText")}</span>
          <span className="bg-primary flex size-5 items-center justify-center text-white">
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
