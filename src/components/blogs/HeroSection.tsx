"use client";

import Stats from "./Stats";
import { useTranslations } from "next-intl";

interface HeroSectionProps {}

const HeroSection = ({}: HeroSectionProps) => {
  const t = useTranslations("Blogs.HeroSection");

  return (
    <section className="border-b-border xs:pt-14 xs:pb-14 s:pt-16 s:pb-16 mb-10 border-b pt-12 pb-12 md:mb-12 md:pt-20 md:pb-20">
      <div className="w90 flex flex-col items-center">
        {/* title */}
        <div className="xss:text-[36px] s:text-[42px] mb-8 text-center text-[32px] leading-[1.15] font-medium sm:text-[48px] md:text-[52px] lg:text-[58px]">
          <div>
            <span>{t("titlePart1")} </span>

            <span className="text-primary">{t("titlePart2")}</span>

            <span> {t("titlePart3")}</span>
          </div>

          <div>{t("titlePart4")}</div>
        </div>

        {/* description */}
        <div className="text-muted-foreground xss:max-w-[90%] s:max-w-[85%] mx-auto mb-8 w-full max-w-[95%] text-center text-[15px] leading-8 sm:max-w-[80%] sm:text-base md:mb-10 md:max-w-150 md:text-lg">
          {t("description")}
        </div>

        {/* divider */}
        <div className="max-lg:hidden from-background to-primary mb-6 h-12 w-px rounded-full bg-linear-to-t sm:h-14 md:mb-8 md:h-16" />

        {/* stats */}
        <Stats />
      </div>
    </section>
  );
};

export default HeroSection;
