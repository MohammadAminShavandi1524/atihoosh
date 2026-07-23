"use client";
import { ChevronRight } from "lucide-react";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import TechnicalBackground from "../TechnicalBackground";
import { useLocale, useTranslations } from "next-intl";

type ProcessCardProps = {
  title: string;
  description: string;
  className?: string;
};

function ProcessCard({ title, description, className }: ProcessCardProps) {
  const locale = useLocale();
  const t = useTranslations("HomePage.ProcessSection");

  return (
    <motion.div
      initial="initial"
      whileHover="hover"
      className={cn(
        "group relative h-90 w-[60%] overflow-hidden rounded-3xl bg-[#0041f0] p-10 xl:h-105 xl:w-[49%] 2xl:h-120 2xl:p-14",
        className,
        "text-white",
      )}
    >
      <TechnicalBackground />

      {/* Title */}
      <motion.h3
        variants={{
          initial: {
            y: 0,
            opacity: 1,
          },
          hover: {
            y: "-120%",
            opacity: 0,
          },
        }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="absolute start-10 bottom-10 z-10 2xl:start-14 2xl:bottom-14 2xl:text-3xl ltr:text-[24px] rtl:text-[28px]"
      >
        {title}
      </motion.h3>

      {/* Description */}
      <motion.p
        variants={{
          initial: {
            opacity: 0,
            y: 320,
          },
          hover: {
            opacity: 1,
            y: 0,
          },
        }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="absolute start-10 top-10 z-10 max-w-[80%] text-justify text-lg leading-10 whitespace-pre-line text-white/70 2xl:start-14 2xl:top-14 2xl:text-xl"
      >
        {description}
      </motion.p>
    </motion.div>
  );
}

export default ProcessCard;
