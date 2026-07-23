"use client";

import { useRef } from "react";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import AnimatedArrowButton from "../AnimatedArrowButton";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function TeamSectionMobile() {
  const t = useTranslations("HomePage.TeamSection");
  const locale = useLocale();

  const sectionRef = useRef<HTMLElement>(null);

  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!contentRef.current) return;

    const items = Array.from(contentRef.current.children);

    gsap.set(items, {
      opacity: 0,
      y: 40,
    });

    gsap.to(items, {
      scrollTrigger: {
        trigger: contentRef.current,
        start: "top 75%",
        end: "top 35%",
        scrub: 1,
      },
      opacity: 1,
      y: 0,
      stagger: 0.15,
      ease: "power2.out",
    });
  }, []);

  return (
    <section ref={sectionRef} className="mlg:hidden relative mb-16">
      <div className="w-full">
        {/* IMAGE */}

        <div className="relative aspect-[3/2] w-full overflow-hidden">
          <Image
            src="/teamSample1.jpg"
            alt="Team"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>

        {/* CONTENT */}

        <div ref={contentRef} className="w90 mt-12 flex flex-col items-start">
          <span className="text-foreground/70 mb-3 text-xs font-medium tracking-[0.16em] uppercase sm:text-sm">
            {t("badge")}
          </span>

          <h2 className="xss:text-[28px] mb-5 text-[24px] leading-tight font-bold sm:text-[32px]">
            {t("title")}
          </h2>

          <p className="font-playfair text-foreground/90 xss:text-[17px] mb-8 text-justify text-[15px] leading-7 sm:text-lg sm:leading-8">
            {t("description")}
          </p>

          <AnimatedArrowButton href={`/${locale}/talent`} label={t("button")} />
        </div>
      </div>
    </section>
  );
}
