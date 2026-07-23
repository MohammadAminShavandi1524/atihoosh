"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";
import TechnicalBackground from "../TechnicalBackground";

type ProcessCardMobileProps = {
  title: string;
  description: string;
  className?: string;
};

export default function ProcessCardMobile({
  title,
  description,
  className,
}: ProcessCardMobileProps) {
  const ref = useRef<HTMLDivElement>(null);

  const isInView = useInView(ref, {
    amount: 1,
    margin: "-80px 0px -80px 0px",
    once: false,
  });

  return (
    <motion.div
      ref={ref}
      className={cn(
        "group s:w-[70%] relative h-100 w-[88%] s:w-[80%] overflow-hidden p-8 text-white sm:h-90 md:w-[60%]",
        className,
      )}
    >
      <motion.div
        animate={{
          opacity: isInView ? 0 : 1,
        }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="absolute inset-0"
      >
        <TechnicalBackground />
      </motion.div>

      {/* Title */}
      <motion.h3
        animate={
          isInView
            ? {
                y: "-120%",
                opacity: 0,
              }
            : {
                y: 0,
                opacity: 1,
              }
        }
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="absolute pe-6 sm:pe-8 start-6 sm:start-8 bottom-6 sm:bottom-8 z-10 text-xl font-semibold text-white sm:text-2xl"
      >
        {title}
      </motion.h3>

      {/* Description */}
      <motion.p
        animate={
          isInView
            ? {
                y: 0,
                opacity: 1,
              }
            : {
                y: 220,
                opacity: 0,
              }
        }
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="absolute start-6 top-6 z-10 max-w-[80%] text-base leading-relaxed whitespace-pre-line text-white/70 sm:start-8 sm:top-8 text-justify"
      >
        {description}
      </motion.p>
    </motion.div>
  );
}
