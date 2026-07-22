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
        >
          <Image
            className="rounded-full"
            src="/ati_abzar.webp"
            alt="ati-abzar"
            width={105}
            height={105}
          />
        </motion.div>

        <span className="text-muted-foreground text-lg font-medium">
          {locale === "en" ? "Ati Abzar Pishro" : "آتی ابزار پیشرو"}
        </span>
      </motion.div>
    </Link>
  );
};

export default Companies;
