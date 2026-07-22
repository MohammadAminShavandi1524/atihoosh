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
import { Noto_Serif } from "next/font/google";
import Link from "next/link";
const notoSerif = Noto_Serif({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-noto-serif",
  display: "swap",
});

interface HeroSectionProps {}

const HeroSection = ({}: HeroSectionProps) => {
  const locale = useLocale();
  const t = useTranslations("HomePage.HeroSection.content");
  const isEN = locale === "en";
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
        "s:pb-14 relative flex min-h-112 w-full flex-col overflow-hidden pb-10 lg:flex-row lg:pb-0",
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

      {/* <HeroBackground /> */}

      {theme === "dark" ? <ParticlesBackground /> : <LightParticles />}

      {/* content lg: */}
      <div
        className={cn(
          "relative hidden flex-col ps-[8%] pe-[37%] pb-6 text-[72px]/[80px] font-bold lg:flex lg:w-6/10 lg:pb-0 lg:text-[80px]/[85px] " +
            "lg:ps-[clamp(3%,4vw,5%)] lg:pe-[clamp(4%,6vw,8%)] " +
            "xl:ps-[clamp(5%,6vw,7%)] xl:pe-[clamp(8%,9vw,11%)] " +
            "2xl:ps-[clamp(8%,10vw,12%)] 2xl:pe-[clamp(12%,14vw,16%)]",
          notoSerif.className,
          // pt
          "pt-14 lg:pt-30 xl:pt-30 2xl:pt-30",
        )}
      >
        <div className="self-start">ATI HOOSH</div>

        <div className="flex self-end">
          <span>B</span>
          <span className="text-primary">O</span>
          <span>NYAN</span>
        </div>
      </div>

      <div
        className={cn(
          "relative hidden ps-[6%] pe-[6%] lg:block lg:w-4/10 2xl:pe-[8%]",
          isEN
            ? ""
            : "ps-[5%] lg:pe-[2%] xl:ps-[8%] xl:pe-0 2xl:ps-[10%] 2xl:pe-[4%]",
          // ** pt **
          "ltr:3xl:pt-26 lg:pt-24 2xl:pt-24 ltr:lg:pt-18 ltr:xl:pt-18 rtl:xl:pt-24",
        )}
        dir={isEN ? "ltr" : "rtl"}
        // pr-[37%]  2xl:pr-[12%]
      >
        {/* title */}
        <div className="mb-8 text-[24px] 2xl:mb-10">{t("title")}</div>
        {/* description */}
        <div
          className={cn(
            isEN
              ? "leading-8 2xl:mb-12 ltr:lg:mb-10 rtl:lg:mb-12"
              : "mb-14 leading-9 2xl:mb-16",
            "text-justify text-lg",
          )}
        >
          {t("description")}
        </div>
        {/* button */}
        <Link
          href={`/${locale}/what-we-do`}
          className="flex cursor-pointer items-center gap-x-2.5"
        >
          <span className="text-lg">{t("buttonText")}</span>
          <span className="bg-primary flex size-5 items-center justify-center text-white">
            <ChevronRight
              className={cn(locale === "fa" && "rotate-180")}
              size={18}
            />
          </span>
        </Link>
      </div>

      {/* content less than lg */}

      <div
        className={cn(
          "mlg:pe-[35%] s:mb-6 xss:ps-[8%] xss:pe-[8%] s:text-[72px]/[84px] relative mb-0 flex flex-col pb-6 text-[48px]/[54px] font-bold sm:pe-[24%] lg:hidden",
          notoSerif.className,
          // p
          "s:pt-14 xss:px-0 px-7 pt-10",
        )}
      >
        <div className="self-start">ATI HOOSH</div>

        <div className="flex self-end">
          <span>B</span>
          <span className="text-primary">O</span>
          <span>NYAN</span>
        </div>
      </div>

      <div
        className={cn(
          "xss:ps-[6%] xss:pe-[6%] relative lg:hidden",
          isEN
            ? "mlg:ps-[35%] xss:ps-[10%] xss:pe-[8%] sm:ps-[24%]"
            : "xss:ps-[5%] mlg:pe-[35%] xss:pe-[10%] xss:ps-[8%] sm:pe-[24%]",
          // ** p **
          "xss:px-0 px-7",
        )}
        dir={isEN ? "ltr" : "rtl"}
        // pr-[37%]  2xl:pr-[12%]
      >
        <div className="bg-primary s:mb-4.5 mb-3.75 h-1 w-14 rounded-full"></div>

        {/* title */}
        <div className="s:mb-6 s:text-[26px] mb-4.5 text-[22px]">
          {t("title")}
        </div>
        {/* description */}
        <div
          className={cn(
            isEN ? "mb-5 leading-8" : "mb-5 leading-9",
            "s:text-lg text-justify text-base",
          )}
        >
          {t("description")}
        </div>
        {/* button */}
        <Link
          href={`/${locale}/what-we-do`}
          className="flex cursor-pointer items-center gap-x-2.5"
        >
          <span className="s:text-lg text-base">{t("buttonText")}</span>
          <span className="bg-primary flex items-center justify-center text-white">
            <ChevronRight
              className={cn(locale === "fa" && "rotate-180", "size-5")}
            />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
