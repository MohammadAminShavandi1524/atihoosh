"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";

import { Service } from "./service.types";

interface ServiceCardProps {
  service: Service;
  isMobile?: boolean;
  isActive?: boolean;
}

const ServiceCard = ({
  service,
  isMobile = false,
  isActive = false,
}: ServiceCardProps) => {
  const { theme } = useTheme();

  const animateState = isMobile ? (isActive ? "hover" : "initial") : "initial";

  return (
    <motion.div
      whileHover={!isMobile ? "hover" : undefined}
      animate={animateState}
      initial="initial"
      variants={{
        initial: { scale: 1 },
        hover: { scale: 1.025 },
      }}
      transition={{
        duration: 0.8,
        ease: [0.19, 1, 0.22, 1],
      }}
      className="border-border 3xl:h-140 relative h-130 w-full cursor-pointer overflow-hidden rounded-xl border xl:h-120 2xl:h-130"
    >
      {/* Image */}
      <motion.div
        animate={animateState}
        variants={{
          initial: {
            opacity: 1,
            scale: 1,
          },
          hover: {
            opacity: 0.2,
            scale: 1.08,
          },
        }}
        transition={{
          duration: 0.85,
          ease: [0.19, 1, 0.22, 1],
        }}
        className="absolute inset-0"
      >
        <Image
          fill
          src={theme === "dark" ? service.darkSrc : service.lightSrc}
          alt={service.title}
          className="object-cover"
        />
      </motion.div>

      {/* Background */}
      <motion.div
        animate={animateState}
        variants={{
          initial: {
            opacity: 0,
            scale: 0.7,
          },
          hover: {
            opacity: 1,
            scale: 1.15,
          },
        }}
        transition={{
          duration: 0.9,
          ease: [0.19, 1, 0.22, 1],
        }}
        className="absolute -right-60 -bottom-60 h-282 w-282 rounded-full"
        style={{
          backgroundColor:
            theme === "dark"
              ? service.backgroundClassDark
              : service.backgroundClass,
        }}
      />

      {/* Content */}
      <div className="3xl:p-7 relative z-10 flex h-full flex-col p-5.5 2xl:p-6">
        <motion.h3
          className={cn(
            "mb-6 min-h-16 text-xl font-bold 2xl:text-[24px]",
            "text-foreground",
          )}
        >
          {service.title}
        </motion.h3>

        <motion.p
          animate={animateState}
          variants={{
            initial: {
              opacity: 0,
              x: 45,
            },
            hover: {
              opacity: 1,
              x: 0,
            },
          }}
          transition={{
            duration: 1,
            delay: 0.25,
            ease: [0.19, 1, 0.22, 1],
          }}
          className={cn(
            "mt-5 max-w-md text-justify text-base 2xl:text-lg",
            "text-foreground",
          )}
        >
          {service.subTitle}
        </motion.p>
      </div>
    </motion.div>
  );
};

export default ServiceCard;