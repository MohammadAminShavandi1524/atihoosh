import LanguageSwitcher from "@/components/LanguageSwitcher";
import { ChevronDown, ChevronRight } from "lucide-react";
import { Locale, useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { use } from "react";

export default function IndexPage({ params }: PageProps<"/[locale]">) {
  const { locale } = use(params);

  // Enable static rendering
  setRequestLocale(locale as Locale);

  const t = useTranslations("IndexPage");

  return (
    <div style={{ fontFamily: "var(--font-inter)" }} className="">
      {/* hero section */}
      <div className="relative flex h-110 w-full overflow-hidden pt-[115px]">
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
          <div className="text-lg mb-20 text-justify">
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
    </div>
  );
}
