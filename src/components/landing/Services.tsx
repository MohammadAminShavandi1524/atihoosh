"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLocale, useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

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

  const _services: Service[] = [
    {
      key: "1",
      title: t("1.title"),
      subTitle: t("1.subTitle"),
      lightSrc: "/services/light1.jpg",
      darkSrc: "/services/dark1.jpg",
      backgroundClass: "#c6e5f4",
      backgroundClassDark: "#113d63",
    },
    {
      key: "2",
      title: t("2.title"),
      subTitle: t("2.subTitle"),
      lightSrc: "/services/light2.png",
      darkSrc: "/services/dark2.png",

      backgroundClass: "#e2dff2",
      backgroundClassDark: "#29264b",
    },
    {
      key: "3",
      title: t("3.title"),
      subTitle: t("3.subTitle"),
      lightSrc: "/services/light3.png",
      darkSrc: "/services/dark3.png",

      backgroundClass: "#d6edea",
      backgroundClassDark: "#0c4237",
    },
    {
      key: "4",
      title: t("4.title"),
      subTitle: t("4.subTitle"),
      lightSrc: "/services/light4.png",
      darkSrc: "/services/dark4.png",
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
    <div className="w90 flex justify-between gap-x-16 px-0 pt-20">
      {_services.map((service) => (
        <motion.div
          key={service.key}
          whileHover="hover"
          initial="initial"
          variants={{
            initial: { scale: 1 },
            hover: { scale: 1.025 },
          }}
          transition={{
            duration: 0.55,
            ease: [0.19, 1, 0.22, 1],
          }}
          className="relative h-140 w-full cursor-pointer overflow-hidden rounded-lg"
        >
          {/* Image */}
          <motion.div
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

          <div className="relative z-10 flex h-full flex-col px-7 py-7">
            {/* Title */}
            <motion.h3
              className={cn(
                "mb-6 min-h-16 text-[24px] font-bold",
                "text-foreground",
              )}
            >
              {service.title}
            </motion.h3>

            {/* sub title */}
            <motion.p
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
              className={cn("mt-5 max-w-md text-justify text-lg", "text-foreground")}
            >
              {service.subTitle}
            </motion.p>

            {/* Expand Button */}
            {/* <motion.button
              variants={{
                initial: { opacity: 0, y: 20 },
                hover: { opacity: 1, y: 0 },
              }}
              transition={{
                duration: 0.55,
                ease: [0.19, 1, 0.22, 1],
              }}
              className={cn(
                "mt-auto flex cursor-pointer items-center",
                "text-foreground",
                locale === "en"
                  ? "gap-x-1.5 self-end text-[22px]"
                  : "gap-x-4 self-end text-lg",
              )}
            >
              <span
                className={cn(
                  "pb-0.5 font-medium",
                  locale === "en"
                    ? "enServicesExpandButton"
                    : "faServicesExpandButton",
                )}
              >
                {t("expandButton")}
              </span>

              <motion.div
                variants={{
                  initial: { x: 0 },
                  hover: { x: 8 },
                }}
                transition={{
                  duration: 0.4,
                  ease: [0.19, 1, 0.22, 1],
                }}
              >
                <ChevronRight
                  className={cn(locale === "fa" && "rotate-180")}
                  size={24}
                />
              </motion.div>
            </motion.button> */}






          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Services;
