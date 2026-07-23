"use client";

import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import { useLocale } from "next-intl";
import Link from "next/link";

interface AnimatedArrowButtonProps {
  label: string;
  labelClassName?: string;
  className?: string;
  href: string;
}

const AnimatedArrowButton = ({
  label,
  labelClassName,
  className,
  href,
}: AnimatedArrowButtonProps) => {
  const locale = useLocale();

  return (
    <Link
      href={href}
      className={cn(
        "group flex cursor-pointer items-center gap-x-5",

        "3xl:gap-x-5",
        "2xl:gap-x-5",
        "xl:gap-x-4",
        "lg:gap-x-4",
        "mlg:gap-x-3.5",
        "md:gap-x-3",
        "sm:gap-x-3",
        "s:gap-x-2.5",
        "xss:gap-x-2",
        "xs:gap-x-2",

        className,
      )}
    >
      {/* Label */}
      <span
        className={cn(
          "text-[28px] font-medium",

          "3xl:text-[27px]",
          "2xl:text-[26px]",
          "xl:text-[25px]",
          "lg:text-[24px]",
          "mlg:text-[22px]",
          "md:text-[21px]",
          "sm:text-[20px]",
          "s:text-[19px]",
          "xss:text-[18px]",
          "xs:text-[17px]",

          labelClassName,
        )}
      >
        {label}
      </span>

      {/* Arrow */}
      <span
        className={cn(
          "bg-primary relative flex size-8 items-center justify-center overflow-hidden transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]",

          "3xl:size-8",
          "2xl:size-8",
          "xl:size-8",
          "lg:size-8",
          "mlg:size-7",
          "md:size-7",
          "sm:size-7",
          "s:size-6",
          "xss:size-6",
          "xs:size-6",

          locale === "en"
            ? "group-hover:translate-x-1.5"
            : "group-hover:-translate-x-1.5",
        )}
      >
        {/* Hover Layer */}
        <span className="bg-primary-hover absolute inset-0 origin-left scale-x-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-x-100" />

        {/* Icon */}
        <span className="relative z-10 text-white">
          <ChevronRight
            size={24}
            className={cn(
              locale === "fa" && "rotate-180",

              "lg:size-[22px]",
              "md:size-[22px]",
              "sm:size-5",
              "s:size-5",
              "xss:size-5",
              "xs:size-[18px]",
            )}
          />
        </span>
      </span>
    </Link>
  );
};

export default AnimatedArrowButton;
