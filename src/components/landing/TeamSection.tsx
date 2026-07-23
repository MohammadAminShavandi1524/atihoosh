"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import AnimatedArrowButton from "../AnimatedArrowButton";
import { useLocale, useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import TeamSectionMobile from "./TeamSectionMobile";

export default function TeamSection() {
  const t = useTranslations("HomePage.TeamSection");
  const locale = useLocale();
  const isRtl = locale === "fa";

  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // ❌ اینا دست نخوردن
  const imageWidth = useTransform(
    scrollYProgress,
    [0, 0.15, 0.55],
    ["100vw", "100vw", "48vw"],
  );

  const imageTop = useTransform(
    scrollYProgress,
    [0, 0.15, 0.55],
    ["0vh", "0vh", "15vh"],
  );

  const textX = useTransform(
    scrollYProgress,
    [0.58, 0.8],
    isRtl ? [-80, 0] : [80, 0],
  );

  const textOpacity = useTransform(scrollYProgress, [0.58, 0.8], [0, 1]);

  return (
    <>
      <section ref={sectionRef} className="max-mlg:hidden relative h-[180vh]">
        <div className="sticky top-0 h-screen overflow-hidden">
          {/* IMAGE */}
          <motion.div
            style={{
              width: imageWidth,
              top: imageTop,
            }}
            className="absolute aspect-[3/2] overflow-hidden will-change-transform"
          >
            <Image
              src="/teamSample1.jpg"
              alt="Team"
              fill
              priority
              className="object-cover"
            />
          </motion.div>

          {/* CONTENT */}
          <motion.div
            style={{
              opacity: textOpacity,
              x: textX,
            }}
            className={cn(
              "absolute top-[18vh] lg:top-[18vh] xl:top-[20vh] 2xl:top-[22vh]",
              "w-[42vw] lg:w-[40vw] xl:w-[38vw] 2xl:w-[36vw]",
              isRtl
                ? "left-6 text-right lg:left-8 xl:left-[5vw] 2xl:left-[6vw]"
                : "right-6 text-left lg:right-8 xl:right-[5vw] 2xl:right-[6vw]",
            )}
          >
            <span
              className={cn(
                "text-foreground/70 block font-medium uppercase",
                "mb-4 lg:mb-5 xl:mb-6 2xl:mb-8",
                "text-sm lg:text-base xl:text-lg",
                "tracking-[0.12em] xl:tracking-[0.15em]",
              )}
            >
              {t("badge")}
            </span>

            <h2
              className={cn(
                "leading-tight font-bold",
                "mb-6 lg:mb-7 xl:mb-8 2xl:mb-10",
                "text-[26px] lg:text-[28px] xl:text-[36px] 2xl:text-5xl",
              )}
            >
              {t("title")}
            </h2>

            <p
              className={cn(
                "font-playfair text-foreground/90 text-justify",
                "mb-6 lg:mb-6 xl:mb-8 2xl:mb-9",
                "text-lg lg:text-xl xl:text-2xl 2xl:text-[28px]",
                "leading-relaxed xl:leading-[1.6]",
              )}
            >
              {t("description")}
            </p>

            <AnimatedArrowButton
              href={`/${locale}/talent`}
              label={t("button")}
              labelClassName=""
            />
          </motion.div>
        </div>
      </section>

      {/* mobile team section */}

      <TeamSectionMobile />
    </>
  );
}
