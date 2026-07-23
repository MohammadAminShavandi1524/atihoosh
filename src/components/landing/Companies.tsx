"use client";

import { motion } from "framer-motion";
import { useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";

interface CompaniesProps {}

const Companies = ({}: CompaniesProps) => {
  const locale = useLocale();

  return (
    <Link href="/your-page" target="_blank">
      <motion.div
        initial={false}
        whileHover="hover"
        className="bg-background text-muted mlg:px-18 s:py-4 flex cursor-pointer flex-col items-center gap-y-4 md:gap-y-6 md:px-12 xl:px-24 2xl:px-30"
      >
        <motion.div
          variants={{
            hover: { scale: 1.1 },
          }}
          transition={{
            duration: 0.35,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className="s:size-[105px] relative size-[96px]">
            <Image
              className="rounded-full"
              src="/ati_abzar.webp"
              alt="ati-abzar"
              fill
            />
          </div>
        </motion.div>

        <span className="text-muted-foreground s:text-lg text-base font-medium">
          {locale === "en" ? "Ati Abzar Pishro" : "آتی ابزار پیشرو"}
        </span>
      </motion.div>
    </Link>
  );
};

export default Companies;
