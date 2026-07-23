"use client";

import { useTranslations } from "next-intl";
import Stats from "./Stats";

interface HeroSectionProps {}

const HeroSection = ({}: HeroSectionProps) => {
  const t = useTranslations("Talent.HeroSection");

  return (
    <section className="border-b-border mb-10 border-b py-16 sm:py-18 md:mb-12 md:py-20">
      <div className="w90 flex flex-col items-center px-0 sm:px-4 md:px-8 lg:px-16 xl:px-24">
        {/* title */}
        <div className="xss:mb-10 mb-8 max-w-full text-center leading-[1.15] sm:max-w-[90%] lg:max-w-[1100px]">
          <span className="xss:text-[40px] s:text-[46px] text-[36px] sm:text-[52px] md:text-[56px] lg:text-[60px] xl:text-[62px] 2xl:text-[64px]">
            {t("titlePart1")}{" "}
          </span>

          <span className="text-primary xss:text-[40px] s:text-[46px] text-[36px] sm:text-[52px] md:text-[56px] lg:text-[60px] xl:text-[62px] 2xl:text-[64px]">
            {t("titlePart2")}{" "}
          </span>

          <span className="xss:text-[40px] s:text-[46px] text-[36px] sm:text-[52px] md:text-[56px] lg:text-[60px] xl:text-[62px] 2xl:text-[64px]">
            {t("titlePart3")}
          </span>
        </div>

        {/* description */}
        <div className="text-muted-foreground xss:text-[17px] s:text-lg mb-8 w-full max-w-full text-center text-base leading-[1.9] md:mb-10 md:max-w-[88%] lg:max-w-[72%] xl:max-w-[62%] 2xl:max-w-[620px]">
          {t("description")}
        </div>

        {/* stats */}
        {/* <Stats /> */}
      </div>
    </section>
  );
};

export default HeroSection;
