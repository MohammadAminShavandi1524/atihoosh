"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import AnimatedArrowButton from "../AnimatedArrowButton";
import { useLocale } from "next-intl";

export default function TeamSection() {
  const locale = useLocale();

  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const finalTop = "15vh";

  // Image animation
  const imageWidth = useTransform(
    scrollYProgress,
    [0, 0.15, 0.55],
    ["100vw", "100vw", "48vw"],
  );

  const imageTop = useTransform(
    scrollYProgress,
    [0, 0.15, 0.55],
    ["0vh", "0vh", finalTop],
  );

  const imageLeft = useTransform(
    scrollYProgress,
    [0, 0.15, 0.55],
    ["0vw", "0vw", "0vw"],
  );

  // Text animation
  const textOpacity = useTransform(scrollYProgress, [0.58, 0.8], [0, 1]);

  const textX = useTransform(scrollYProgress, [0.58, 0.8], [80, 0]);

  return (
    <section ref={sectionRef} className="relative h-[180vh]">
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* IMAGE */}
        <motion.div
          style={{
            width: imageWidth,
            top: imageTop,
            left: imageLeft,
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
          className="absolute top-[22vh] right-[6vw] w-[26vw] text-white"
        >
          <span className="mb-8 block text-lg font-medium tracking-[0.15em] text-white/70 uppercase">
            OUR TEAM
          </span>

          <h2 className="mb-10 text-5xl leading-tight font-bold">
            The People Behind Exceptional Digital Products
          </h2>

          <p
            style={
              locale === "en" ? { fontFamily: "var(--font-playfair)" } : {}
            }
            className="mb-9 text-[28px] text-white/90"
          >
            Our team brings together expertise in software engineering, design,
            and AI to create scalable digital solutions.
          </p>

          <AnimatedArrowButton label="join us" labelClassName="text-xl" />
        </motion.div>
      </div>
    </section>
  );
}
