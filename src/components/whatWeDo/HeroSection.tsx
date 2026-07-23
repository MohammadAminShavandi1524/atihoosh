"use client";

import { useTranslations } from "next-intl";

interface HeroSectionProps {}

const HeroSection = ({}: HeroSectionProps) => {
  const t = useTranslations("whatWeDo.hero");

  return (
    <div className="border-b-border mb-10 flex flex-col items-center border-b py-16 md:mb-12 md:py-20">
      <div className="w90 xss:px-4 xss:text-[32px] xss:leading-[1.35] xs:px-5 xs:text-[28px] xs:leading-[1.4] text-center text-[60px] leading-[1.2] text-balance sm:text-[36px] sm:leading-[1.25] md:text-[42px] lg:text-[48px] xl:text-[54px] 2xl:px-40">
        {t("description2")}
      </div>
    </div>
  );
};

export default HeroSection;
