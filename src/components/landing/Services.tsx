"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLocale, useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { useBreakpoints } from "@/hooks/useBreakPoint";
import ServicesCarousel from "./ServicesCarousel";

type Service = {
  key: string;
  title: string;
  subTitle: string;
  lightSrc: string;
  darkSrc: string;
  backgroundClass: string;
  backgroundClassDark: string;
};

const Services = () => {
  const t = useTranslations("HomePage.ServicesSection");
  const locale = useLocale();
  const { lg } = useBreakpoints();
  const isMobile = !lg;

  const _services: Service[] = [
    {
      key: "1",
      title: t("1.title"),
      subTitle: t("1.subTitle"),
      lightSrc: "/services/light11.jpg",
      darkSrc: "/services/dark11.jpg",
      backgroundClass: "#c6e5f4",
      backgroundClassDark: "#113d63",
    },
    {
      key: "2",
      title: t("2.title"),
      subTitle: t("2.subTitle"),
      lightSrc: "/services/light22.png",
      darkSrc: "/services/dark22.png",

      backgroundClass: "#e2dff2",
      backgroundClassDark: "#29264b",
    },
    {
      key: "3",
      title: t("3.title"),
      subTitle: t("3.subTitle"),
      lightSrc: "/services/light33.png",
      darkSrc: "/services/dark33.png",

      backgroundClass: "#d6edea",
      backgroundClassDark: "#0c4237",
    },
    {
      key: "4",
      title: t("4.title"),
      subTitle: t("4.subTitle"),
      lightSrc: "/services/light44.png",
      darkSrc: "/services/dark44.png",
      backgroundClass: "#f8e2dc",
      backgroundClassDark: "#502e23",
    },
  ];

  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <div className="w90 3xl:gap-x-16 mlg:grid-cols-3 grid grid-cols-2 gap-x-8 gap-y-8 px-0 pt-20 max-sm:hidden xl:flex xl:justify-between 2xl:gap-x-12">
        {_services.map((service) => (
          <motion.div
            key={service.key}
            whileHover={!isMobile ? "hover" : undefined}
            animate={isMobile ? "hover" : "initial"}
            initial="initial"
            variants={{
              initial: { scale: 1 },
              hover: { scale: 1.025 },
            }}
            transition={{
              duration: 0.55,
              ease: [0.19, 1, 0.22, 1],
            }}
            className="border-border 3xl:h-140 relative h-130 w-full cursor-pointer overflow-hidden rounded-xl border xl:h-120 2xl:h-130"
          >
            {/* Image */}
            <motion.div
              animate={isMobile ? "hover" : undefined}
              variants={{
                initial: { opacity: 1, scale: 1 },
                hover: { opacity: 0.2, scale: 1.08 },
              }}
              transition={{
                duration: 0.55,
                ease: [0.19, 1, 0.22, 1],
              }}
              className="absolute inset-0"
            >
              <Image
                fill
                src={theme === "dark" ? service.darkSrc : service.lightSrc}
                alt={service.title}
                className="border-border rounded-xl object-cover"
              />
            </motion.div>

            {/* Background */}
            <motion.div
              animate={isMobile ? "hover" : undefined}
              variants={{
                initial: { opacity: 0, scale: 0.7 },
                hover: { opacity: 1, scale: 1.15 },
              }}
              transition={{
                duration: 0.6,
                ease: [0.19, 1, 0.22, 1],
              }}
              className={cn(
                "absolute -right-60 -bottom-60 h-282 w-282 rounded-full",
              )}
              style={{
                backgroundColor:
                  theme === "dark"
                    ? service.backgroundClassDark
                    : service.backgroundClass,
              }}
            />

            <div className="3xl:p-7 relative z-10 flex h-full flex-col p-5.5 2xl:p-6">
              {/* Title */}
              <motion.h3
                className={cn(
                  "mb-6 min-h-16 text-xl font-bold 2xl:text-[24px]",
                  "text-foreground",
                )}
              >
                {service.title}
              </motion.h3>

              {/* sub title */}
              <motion.p
                animate={isMobile ? "hover" : undefined}
                variants={{
                  initial: {
                    opacity: 0,
                    x: 45,
                    transition: { duration: 0.2 },
                  },
                  hover: {
                    opacity: 1,
                    x: 0,
                    transition: {
                      duration: 0.55,
                      delay: 0.08,
                      ease: [0.19, 1, 0.22, 1],
                    },
                  },
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
        ))}
      </div>

      {/* mobile carousel */}

      <div className="pt-20 sm:hidden">
        <ServicesCarousel services={_services} />
      </div>
    </>
  );
};

export default Services;
