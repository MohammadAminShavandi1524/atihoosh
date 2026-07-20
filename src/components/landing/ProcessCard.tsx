"use client";
import { ChevronRight } from "lucide-react";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import TechnicalBackground from "./TechnicalBackground";
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
        "group relative h-[480px] w-[49%] overflow-hidden rounded-3xl bg-[#0041f0] p-14",
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
        className="absolute bottom-14 z-10 text-3xl ltr:left-14 rtl:right-14"
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
        className="text-justify absolute top-14 left-14 z-10 max-w-[500px] text-xl leading-10 whitespace-pre-line text-white/70"
      >
        {description}
      </motion.p>
    </motion.div>
  );
}

export default ProcessCard;
