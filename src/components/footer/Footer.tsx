"use client";

import { useRef } from "react";
import FooterContent from "./FooterContent";
import AnimatedTextColumn from "./AnimatedTextColumn";
import { useLocale } from "next-intl";
import { cn } from "@/lib/utils";

export default function Footer() {
  const footerRef = useRef<HTMLDivElement>(null);
  const locale = useLocale();
  const isRtl = locale === "fa";

  return (
    <div
      ref={footerRef}
      className={cn("w90 relative grid grid-cols-2 pt-30", isRtl && "rtl")}
      dir={isRtl ? "rtl" : "ltr"}
    >
      <FooterContent />

      {/* EVOLVE ANIMATION (UNCHANGED STRUCTURE) */}
      <div
        className={cn(
          "absolute top-36 flex items-end justify-start",
          isRtl ? "-left-0 -rotate-90" : "-right-0 -rotate-90",
        )}
      >
        <div className="flex h-fit flex-col gap-2 text-[196px] leading-[170px] font-bold">
          <AnimatedTextColumn
            footerRef={footerRef}
            height={50}
            E_ClassName="opacity-0"
            V_ClassName=""
            O_ClassName="opacity-0"
            L_ClassName=""
            Lv_ClassName="opacity-0"
            Le_ClassName=""
            bias={locale === "en" ? "right" : "left"}
            offset={locale === "en" ? 40 : 80}
            topOffset={
              locale === "fa" ? "translate-y-[0.1em]" : "-translate-y-[0.1em]"
            }
          />

          <AnimatedTextColumn
            footerRef={footerRef}
            height={50}
            V_ClassName="opacity-0"
            Le_ClassName="opacity-0"
            bias={locale === "en" ? "right" : "left"}
            offset={locale === "en" ? 40 : 80}
            topOffset={
              locale === "fa" ? "translate-y-[0.1em]" : "-translate-y-[0.1em]"
            }
          />

          <AnimatedTextColumn
            footerRef={footerRef}
            height={50}
            O_ClassName="opacity-0"
            bias={locale === "en" ? "right" : "left"}
            offset={locale === "en" ? 40 : 80}
            topOffset={
              locale === "fa" ? "translate-y-[0.1em]" : "-translate-y-[0.1em]"
            }
          />

          <AnimatedTextColumn
            footerRef={footerRef}
            height={78}
            V_ClassName="opacity-0"
            Le_ClassName="opacity-0"
            bias={locale === "en" ? "right" : "left"}
            offset={locale === "en" ? 40 : 80}
            topOffset={
              locale === "fa" ? "translate-y-[0.1em]" : "-translate-y-[0.1em]"
            }
          />

          <AnimatedTextColumn
            footerRef={footerRef}
            height={158}
            bias={locale === "en" ? "right" : "left"}
            offset={locale === "en" ? 40 : 80}
            topOffset={
              locale === "fa" ? "translate-y-[0.1em]" : "-translate-y-[0.1em]"
            }
          />

          <AnimatedTextColumn
            footerRef={footerRef}
            height={78}
            O_ClassName="opacity-0"
            bias={locale === "en" ? "right" : "left"}
            offset={locale === "en" ? 40 : 80}
            topOffset={
              locale === "fa" ? "translate-y-[0.1em]" : "-translate-y-[0.1em]"
            }
          />

          <AnimatedTextColumn
            footerRef={footerRef}
            height={50}
            Lv_ClassName="opacity-0"
            bias={locale === "en" ? "right" : "left"}
            offset={locale === "en" ? 40 : 80}
            topOffset={
              locale === "fa" ? "translate-y-[0.1em]" : "-translate-y-[0.1em]"
            }
          />

          <AnimatedTextColumn
            footerRef={footerRef}
            height={50}
            E_ClassName="opacity-0"
            L_ClassName="opacity-0"
            bias={locale === "en" ? "right" : "left"}
            offset={locale === "en" ? 40 : 80}
            topOffset={
              locale === "fa" ? "translate-y-[0.1em]" : "-translate-y-[0.1em]"
            }
          />

          <AnimatedTextColumn
            footerRef={footerRef}
            height={50}
            V_ClassName="opacity-0"
            O_ClassName="opacity-0"
            Le_ClassName="opacity-0"
            bias={locale === "en" ? "right" : "left"}
            offset={locale === "en" ? 40 : 80}
            topOffset={
              locale === "fa" ? "translate-y-[0.1em]" : "-translate-y-[0.1em]"
            }
          />
        </div>
      </div>
    </div>
  );
}
