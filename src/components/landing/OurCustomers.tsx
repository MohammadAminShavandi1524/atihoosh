"use client";

import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Companies from "./Companies";
import Link from "next/link";
import CustomTooltip from "../CustomTooltip";

interface OurCustomersProps {}

const OurCustomers = ({}: OurCustomersProps) => {
  const t = useTranslations("HomePage.OurCustomersSection");
  const locale = useLocale();

  return (
    <div className="border-t-border mlg:mt-10 mlg:pt-9 mt-14 border-t pt-8 lg:mt-12 lg:pt-10 xl:mt-14 xl:pt-12 2xl:mt-16 2xl:pt-13">
      <div className="s:w90 mlg:px-14 flex flex-col items-center px-5 xss:px-7 md:px-10 lg:px-18 xl:px-24 2xl:px-30">
        {/* title */}
        <div className="s:text-[30px] s:mb-8 xss:text-[28px] mt-4 mb-8 text-center text-[26px] leading-relaxed font-medium sm:text-[34px] md:mb-10 xl:mb-14 xl:text-[34px] 2xl:mb-16 2xl:text-[36px]">
          {t("badge")}
        </div>

        {/* companies */}
        <div className="max-s:gap-y-3 grid grid-cols-1 md:grid-cols-2">
          <CustomTooltip
            content={
              locale === "en"
                ? "Ati Abzar Pishro website"
                : "وب‌سایت آتی ابزار پیشرو"
            }
          >
            <Companies />
          </CustomTooltip>

          {/*  */}

          <CustomTooltip
            content={
              locale === "en"
                ? "Ati Sanat Gostar Pouya website"
                : "وب‌سایت آتی صنعت گستر پویا"
            }
          >
            <Link href="/your-page" target="_blank">
              <motion.div
                initial={false}
                whileHover="hover"
                className="bg-background text-muted mlg:px-18 s:gap-y-4 s:py-4 flex cursor-pointer flex-col items-center gap-y-2 md:gap-y-6 md:px-12 xl:px-24 2xl:px-30"
              >
                <motion.div
                  variants={{
                    hover: { scale: 1.1 },
                  }}
                  transition={{
                    duration: 0.35,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="flex h-[105px] flex-col justify-center"
                >
                  <div className="s:h-12 s:w-[180px] relative h-10 w-[150px]">
                    <Image
                      className="rounded-full"
                      src="/atisanat.png"
                      alt="ati-sanat"
                      fill
                    />
                  </div>
                </motion.div>

                <span className="text-muted-foreground s:text-lg text-base font-medium">
                  {locale === "en"
                    ? "Ati Sanat Gostar Pouya"
                    : "آتی صنعت گستر پویا"}
                </span>
              </motion.div>
            </Link>
          </CustomTooltip>
        </div>
      </div>
    </div>
  );
};

export default OurCustomers;
