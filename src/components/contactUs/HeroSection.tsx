"use client";

import { useTranslations } from "next-intl";

interface HeroSectionProps {}

const HeroSection = ({}: HeroSectionProps) => {
  const t = useTranslations("ContactUs.HeroSection");

  return (
    <section className="py-16 md:py-18 xl:py-20">
      <div className="flex flex-col items-center">
        {/* title */}
        <div className="xss:mb-10 mb-8 text-center leading-[1.15] md:mb-12">
          <span className="xss:text-[48px] s:text-[56px] text-[42px] sm:text-[62px] md:text-[68px] lg:text-[74px] xl:text-[78px] 2xl:text-[80px]">
            {t("titlePart1")}{" "}
          </span>

          <span className="text-primary xss:text-[48px] s:text-[56px] text-[42px] sm:text-[62px] md:text-[68px] lg:text-[74px] xl:text-[78px] 2xl:text-[80px]">
            {t("titlePart2")}{" "}
          </span>

          <span className="xss:text-[48px] s:text-[56px] text-[42px] sm:text-[62px] md:text-[68px] lg:text-[74px] xl:text-[78px] 2xl:text-[80px]">
            {t("titlePart3")}
          </span>
        </div>

        {/* description */}
        <div className="text-muted-foreground xss:text-[17px] s:text-lg mb-8 w-full max-w-full text-center text-base leading-[1.9] md:mb-10 md:max-w-[85%] lg:max-w-[70%] xl:max-w-[60%] 2xl:max-w-[600px]">
          {t("description")}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
