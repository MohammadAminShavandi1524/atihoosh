"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useLocale } from "next-intl";

interface ExpSectionProps {
  number: string;
  label: string;
  topLineClassName?: string;
}

const ExpSection = ({ label, number, topLineClassName }: ExpSectionProps) => {
  const locale = useLocale();

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="flex flex-col"
    >
      {/* top Line */}
      <motion.span
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.7 }}
        className={cn(
          topLineClassName,
          "bg-primary h-1.25 w-8.25 2xl:w-12.25 ltr:origin-left rtl:origin-right",
        )}
      />

      {/* number */}
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.8 }}
        dir="ltr"
        className="mt-1 w-fit text-[48px] 2xl:text-[56px]"
      >
        {number}
      </motion.span>

      {/* label */}
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.45, duration: 0.8 }}
        className="ms-0.75 text-lg text-foreground/70 2xl:text-xl"
      >
        {label}
      </motion.span>
    </motion.div>
  );
};

export default ExpSection;
