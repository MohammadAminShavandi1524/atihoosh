"use client";

import { useTranslations } from "next-intl";

interface HeroSectionProps {}

const HeroSection = ({}: HeroSectionProps) => {
  const t = useTranslations("AboutPage");
  return (
    <div className="border-b-border mb-12 border-b py-16 md:mb-16 md:py-18 xl:py-20">
      <div className="w90 flex flex-col gap-y-8 px-0 xss:px-4 sm:px-6 md:gap-y-10 md:px-8 lg:px-16 xl:gap-y-14 xl:px-24 2xl:gap-y-17.5 2xl:px-30">
        {/* title */}
        <div className="flex flex-col items-center text-center font-medium">
          <span className="text-primary xss:text-[60px] s:text-[68px] mb-5 text-[52px] leading-none sm:text-[76px] md:text-[84px] lg:text-[92px] xl:text-[100px] 2xl:text-[108px]">
            {t("HeroSection.titlePart1")}
          </span>

          <span className="xss:text-[28px] s:text-[30px] mt-2 text-[24px] leading-[1.25] sm:text-[34px] md:text-[38px] lg:text-[42px] xl:text-[45px] 2xl:mt-0 2xl:text-[48px]">
            {t("HeroSection.titlePart2")}
          </span>
        </div>

        {/* description */}
        <div className="max-xss:px-2 xss:text-[19px] s:text-[20px] flex flex-col gap-y-4 text-justify text-[18px] leading-[1.9] font-medium sm:gap-y-5 sm:text-[22px] md:text-[23px] lg:text-[24px] xl:text-[26px] 2xl:gap-y-6 2xl:text-[28px]">
          <span>{t("HeroSection.description1")}</span>
          <span>{t("HeroSection.description2")}</span>
          <span>{t("HeroSection.description3")}</span>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
