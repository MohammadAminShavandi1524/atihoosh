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
    <div className="border-t-border mt-20 border-t pt-15">
      <div className="w90 flex flex-col items-center 2xl:px-30">
        <div className="mt-4 mb-16 text-[40px] font-medium">{t("badge")}</div>

        {/* companies */}
        <div className="bg-border mt-10 grid grid-cols-2">
          <CustomTooltip
            content={
              locale === "en" ? "Ati Abzar Pishro website" : "  وب‌سایت آتی ابزار پیشرو"
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
                className="bg-background text-muted flex cursor-pointer flex-col items-center gap-y-6 px-30 py-4"
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
                  <Image
                    className="rounded-full"
                    src="/atisanat.png"
                    alt="ati-sanat"
                    width={180}
                    height={80}
                  />
                </motion.div>

                <span className="text-muted-foreground text-lg font-medium">
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
