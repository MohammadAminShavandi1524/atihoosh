"use client";

import { useLocale, useTranslations } from "next-intl";
import AnimatedArrowButton from "../AnimatedArrowButton";
import { cn } from "@/lib/utils";

interface CTAProps {}

const CTA = ({}: CTAProps) => {
  const t = useTranslations("HomePage.CTASection");
  const locale = useLocale();

  return (
    <div
      className={cn(
        "mt-50 flex w-full flex-col items-center px-6",
        "3xl:mt-46",
        "2xl:mt-42",
        "xl:mt-36",
        "lg:mt-30",
        "mlg:mt-24",
        "md:mt-20",
        "sm:mt-18",
        "s:mt-16",
        "xss:mt-16",
        "xs:mt-16",
        "sm:px-8",
      )}
    >
      {/* title */}
      <div
        className={cn(
          "font-space mb-12 text-center text-[120px] leading-snug font-semibold",

          "3xl:text-[112px]",
          "2xl:text-[104px]",
          "xl:text-[92px]",
          "lg:text-[80px]",
          "mlg:text-[72px]",
          "md:text-[64px]",
          "sm:text-[56px]",
          "s:text-[48px]",
          "xss:text-[42px]",
          "xs:text-[42px]",

          "3xl:mb-11",
          "2xl:mb-10",
          "xl:mb-9",
          "lg:mb-8",
          "mlg:mb-7",
          "md:mb-6",
          "sm:mb-5",
          "s:mb-6",
          "xss:mb-6",
          "xs:mb-6",
        )}
      >
        <span className={cn(locale === "fa" && "text-primary")}>
          {t("title.part1")}
        </span>

        <span className={cn(locale === "en" && "text-primary")}>
          {t("title.part2")}
        </span>

        <span>{t("title.part3")}</span>
      </div>

      {/* description xss */}
      <div
        className={cn(
          "font-playfair xss:flex mb-15 hidden flex-col items-center text-center text-[40px] leading-relaxed",

          "3xl:text-[38px]",
          "2xl:text-[36px]",
          "xl:text-[34px]",
          "lg:text-[30px]",
          "mlg:text-[28px]",
          "md:text-[24px]",
          "sm:text-[22px]",
          "s:text-[20px]",
          "xss:text-[18px]",
          "xs:text-[18px]",

          "3xl:mb-14",
          "2xl:mb-13",
          "xl:mb-12",
          "lg:mb-10",
          "mlg:mb-9",
          "md:mb-8",
          "sm:mb-7",
          "s:mb-6",
          "xss:mb-6",
          "xs:mb-6",
        )}
      >
        <span>{t("description.line1")}</span>
        <span>{t("description.line2")}</span>
      </div>

      {/* description less than 400px */}
      <div
        className={cn(
          "font-playfair xss:hidden mb-6 flex flex-col items-center text-center text-[18px] leading-relaxed",
        )}
      >
        {t("description.line1")} {t("description.line2")}
      </div>

      {/* button */}
      <AnimatedArrowButton
        href={`/${locale}/project-start`}
        label={t("button")}
      />
    </div>
  );
};

export default CTA;
