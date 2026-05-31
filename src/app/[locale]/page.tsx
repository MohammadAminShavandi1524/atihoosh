import LanguageSwitcher from "@/components/LanguageSwitcher";
import Services from "@/components/landing/Services";
import StickyTitle from "@/components/landing/StickyTitle";
import { cn } from "@/lib/utils";
import { ChevronDown, ChevronRight } from "lucide-react";
import { Locale, useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import Image from "next/image";
import { use } from "react";

export default function IndexPage({ params }: PageProps<"/[locale]">) {
  const { locale } = use(params);
  console.log("🚀 ~ IndexPage ~ locale:", locale);

  // Enable static rendering
  setRequestLocale(locale as Locale);

  const t = useTranslations("IndexPage");

  return (
    <div style={{ fontFamily: "var(--font-inter)" }}>
      {/* hero section */}
      <div
        dir="ltr"
        className="relative flex h-112 w-full overflow-hidden pt-[120px]"
      >
        {/* background image */}
        <div className="absolute inset-0 scale-105 bg-[url('/herosection.png')] bg-cover bg-center bg-no-repeat" />

        {/* dark overlay */}
        <div className="absolute inset-0 bg-black/70" />
        {/* محتوا */}
        <div
          style={{ fontFamily: "var(--font-playfair)" }}
          className="relative flex w-6/10 flex-col ps-[12%] pe-[16%] text-[80px]/[85px] font-bold"
        >
          <div className="self-start">ATI HOOSH</div>
          <div className="flex self-end">
            <span>B</span>
            <span className="text-[#1e9dbd]">O</span>
            <span>NYAN</span>
          </div>
        </div>

        <div className="relative w-4/10 pe-[12%]">
          {/* title */}
          <div className="mb-12 text-[24px]">Shaping tomorrow, today</div>
          {/* description */}
          <div className="mb-20 text-justify text-lg">
            In a world of constant change, reinvention is acontinuous
            strategy.That’s why we work withorganizations to rewrite the rules
            of growth,innovation and resilience.
          </div>
          {/* button */}
          <button className="flex cursor-pointer items-center gap-x-2.5">
            <span className="text-lg">See What Wa Do</span>
            <span className="flex size-5 items-center justify-center bg-[#1e9dbd]">
              <ChevronRight size={18} />
            </span>
          </button>
        </div>
      </div>

      {/* services */}
      <Services />
      {/* style={{ fontFamily: "var(--font-inter)" }} */}
      {/* style={{ fontFamily: "var(--font-playfair)" }} */}
      {/* style={{ fontFamily: "var(--font-space)" }} */}

      {/* Entrust Your Project To Us */}
      <div className="mt-50 flex w-full flex-col items-center">
        {/* title */}
        <div
          style={{ fontFamily: "var(--font-space)" }}
          className="mb-12 text-[120px] font-semibold"
        >
          <span>Entrust Your </span>
          <span className="text-[#219ebc]">Project </span>
          <span>To Us</span>
        </div>
        {/* description */}
        <div
          style={{ fontFamily: "var(--font-playfair)" }}
          className="mb-15 flex flex-col items-center text-[40px]"
        >
          <span>software design is not just about coding ,</span>
          <span>we are with the project at all stages</span>
        </div>
        {/* button */}
        <button className="group flex cursor-pointer items-center gap-x-5">
          <span className="text-[28px] font-medium">Get Started</span>

          <span className="relative flex h-8 w-8 items-center justify-center overflow-hidden bg-[#219ebc] transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:translate-x-1.5">
            {/* Hover Layer */}
            <span className="absolute inset-0 origin-left scale-x-0 bg-[#197c95] transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-x-100" />

            {/* Icon */}
            <span className="relative z-10">
              <ChevronRight size={28} />
            </span>
          </span>
        </button>
      </div>

      {/* read more carousel  */}
      <div className="mt-50 h-125 w-full border-y-2 border-y-blue-400"></div>

      {/* How We Run Software Project  stiky title !!*/}

      <StickyTitle />
    </div>
  );
}
