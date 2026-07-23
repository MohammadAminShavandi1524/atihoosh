"use client";

import { useRef } from "react";
import FooterContent from "./FooterContent";
import AnimatedTextColumn from "./AnimatedTextColumn";
import { useLocale } from "next-intl";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { useBreakpoints } from "@/hooks/useBreakPoint";
import StaticTextColumn from "./StaticTextColumn";

export default function Footer() {
  const footerRef = useRef<HTMLDivElement>(null);
  const locale = useLocale();
  const isRtl = locale === "fa";

  const pathname = usePathname();

  const { _2xl, xl } = useBreakpoints();

  const responsiveHeight = (xl: boolean, _2xl: boolean, base: number) => {
    if (_2xl) {
      return base;
    }

    if (xl) {
      if (base === 50) return 42;
      if (base === 78) return 65;
      if (base === 158) return 130;
    }

    if (base === 50) return 35;
    if (base === 78) return 55;
    if (base === 158) return 110;

    return base;
  };

  const responsiveOffset = (xl: boolean, _2xl: boolean, base: number) => {
    if (_2xl) {
      return base;
    }

    if (xl) {
      return base === 40 ? 32 : 65;
    }

    return base === 40 ? 25 : 50;
  };

  if (pathname === `/${locale}/project-start`)
    return <div className="hidden"></div>;

  return (
    <div
      ref={footerRef}
      className={cn(
        "w90 px-8 s:px-10 sm:px-6 relative pt-12 xss:pt-16 sm:pt-30 pb-8 xss:pb-12 s:pb-16 max-sm:w-full  lg:grid lg:grid-cols-2 lg:pb-0",
        isRtl && "rtl",
      )}
      dir={isRtl ? "rtl" : "ltr"}
    >
      <FooterContent />

      {/* static evolve */}

      <div
        className={cn(
          "hidden h-fit flex-col gap-y-2 text-[130px]/[112px] font-bold lg:flex xl:hidden",
          isRtl ? "left-0 -rotate-90" : "right-0 -rotate-90",
        )}
      >
        <StaticTextColumn
          height={responsiveHeight(xl, _2xl, 50)}
          E_ClassName="opacity-0"
          V_ClassName=""
          O_ClassName="opacity-0"
          L_ClassName=""
          Lv_ClassName="opacity-0"
          Le_ClassName=""
        />

        <StaticTextColumn
          height={responsiveHeight(xl, _2xl, 50)}
          V_ClassName="opacity-0"
          Le_ClassName="opacity-0"
        />

        <StaticTextColumn
          height={responsiveHeight(xl, _2xl, 50)}
          O_ClassName="opacity-0"
        />

        <StaticTextColumn
          height={responsiveHeight(xl, _2xl, 78)}
          V_ClassName="opacity-0"
          Le_ClassName="opacity-0"
        />

        <StaticTextColumn height={responsiveHeight(xl, _2xl, 158)} />

        <StaticTextColumn
          height={responsiveHeight(xl, _2xl, 78)}
          O_ClassName="opacity-0"
        />

        <StaticTextColumn
          height={responsiveHeight(xl, _2xl, 50)}
          Lv_ClassName="opacity-0"
        />

        <StaticTextColumn
          height={responsiveHeight(xl, _2xl, 50)}
          E_ClassName="opacity-0"
          L_ClassName="opacity-0"
        />

        <StaticTextColumn
          height={responsiveHeight(xl, _2xl, 50)}
          V_ClassName="opacity-0"
          O_ClassName="opacity-0"
          Le_ClassName="opacity-0"
        />
      </div>

      {/* animated evolve */}
      <div
        className={cn(
          "absolute top-16 hidden items-end justify-start xl:top-34 xl:flex 2xl:top-36",
          isRtl ? "left-0 -rotate-90" : "right-0 -rotate-90",
        )}
      >
        <div className="flex h-fit flex-col gap-2 text-[130px]/[112px] font-bold xl:text-[160px]/[139px] 2xl:text-[196px]/[170px]">
          <AnimatedTextColumn
            footerRef={footerRef}
            height={responsiveHeight(xl, _2xl, 50)}
            E_ClassName="opacity-0"
            V_ClassName=""
            O_ClassName="opacity-0"
            L_ClassName=""
            Lv_ClassName="opacity-0"
            Le_ClassName=""
            bias={locale === "en" ? "right" : "left"}
            offset={
              locale === "en"
                ? responsiveOffset(xl, _2xl, 40)
                : responsiveOffset(xl, _2xl, 80)
            }
            topOffset={
              locale === "fa" ? "translate-y-[0.1em]" : "-translate-y-[0.1em]"
            }
          />

          <AnimatedTextColumn
            footerRef={footerRef}
            height={responsiveHeight(xl, _2xl, 50)}
            V_ClassName="opacity-0"
            Le_ClassName="opacity-0"
            bias={locale === "en" ? "right" : "left"}
            offset={
              locale === "en"
                ? responsiveOffset(xl, _2xl, 40)
                : responsiveOffset(xl, _2xl, 80)
            }
            topOffset={
              locale === "fa" ? "translate-y-[0.1em]" : "-translate-y-[0.1em]"
            }
          />

          <AnimatedTextColumn
            footerRef={footerRef}
            height={responsiveHeight(xl, _2xl, 50)}
            O_ClassName="opacity-0"
            bias={locale === "en" ? "right" : "left"}
            offset={
              locale === "en"
                ? responsiveOffset(xl, _2xl, 40)
                : responsiveOffset(xl, _2xl, 80)
            }
            topOffset={
              locale === "fa" ? "translate-y-[0.1em]" : "-translate-y-[0.1em]"
            }
          />

          <AnimatedTextColumn
            footerRef={footerRef}
            height={responsiveHeight(xl, _2xl, 78)}
            V_ClassName="opacity-0"
            Le_ClassName="opacity-0"
            bias={locale === "en" ? "right" : "left"}
            offset={
              locale === "en"
                ? responsiveOffset(xl, _2xl, 40)
                : responsiveOffset(xl, _2xl, 80)
            }
            topOffset={
              locale === "fa" ? "translate-y-[0.1em]" : "-translate-y-[0.1em]"
            }
          />

          <AnimatedTextColumn
            footerRef={footerRef}
            height={responsiveHeight(xl, _2xl, 158)}
            bias={locale === "en" ? "right" : "left"}
            offset={
              locale === "en"
                ? responsiveOffset(xl, _2xl, 40)
                : responsiveOffset(xl, _2xl, 80)
            }
            topOffset={
              locale === "fa" ? "translate-y-[0.1em]" : "-translate-y-[0.1em]"
            }
          />

          <AnimatedTextColumn
            footerRef={footerRef}
            height={responsiveHeight(xl, _2xl, 78)}
            O_ClassName="opacity-0"
            bias={locale === "en" ? "right" : "left"}
            offset={
              locale === "en"
                ? responsiveOffset(xl, _2xl, 40)
                : responsiveOffset(xl, _2xl, 80)
            }
            topOffset={
              locale === "fa" ? "translate-y-[0.1em]" : "-translate-y-[0.1em]"
            }
          />

          <AnimatedTextColumn
            footerRef={footerRef}
            height={responsiveHeight(xl, _2xl, 50)}
            Lv_ClassName="opacity-0"
            bias={locale === "en" ? "right" : "left"}
            offset={
              locale === "en"
                ? responsiveOffset(xl, _2xl, 40)
                : responsiveOffset(xl, _2xl, 80)
            }
            topOffset={
              locale === "fa" ? "translate-y-[0.1em]" : "-translate-y-[0.1em]"
            }
          />

          <AnimatedTextColumn
            footerRef={footerRef}
            height={responsiveHeight(xl, _2xl, 50)}
            E_ClassName="opacity-0"
            L_ClassName="opacity-0"
            bias={locale === "en" ? "right" : "left"}
            offset={
              locale === "en"
                ? responsiveOffset(xl, _2xl, 40)
                : responsiveOffset(xl, _2xl, 80)
            }
            topOffset={
              locale === "fa" ? "translate-y-[0.1em]" : "-translate-y-[0.1em]"
            }
          />

          <AnimatedTextColumn
            footerRef={footerRef}
            height={responsiveHeight(xl, _2xl, 50)}
            V_ClassName="opacity-0"
            O_ClassName="opacity-0"
            Le_ClassName="opacity-0"
            bias={locale === "en" ? "right" : "left"}
            offset={
              locale === "en"
                ? responsiveOffset(xl, _2xl, 40)
                : responsiveOffset(xl, _2xl, 80)
            }
            topOffset={
              locale === "fa" ? "translate-y-[0.1em]" : "-translate-y-[0.1em]"
            }
          />
        </div>
      </div>
    </div>
  );
}
