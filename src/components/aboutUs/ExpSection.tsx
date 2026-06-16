"use client";

import { cn } from "@/lib/utils";
import { useLocale } from "next-intl";

interface ExpSectionProps {
  number: string;
  label: string;
  topLineClassName?: string;
  
}

const ExpSection = ({
  label,
  number,
  topLineClassName,
  
}: ExpSectionProps) => {
  const locale = useLocale();
  return (
    <div className="flex flex-col">
      {/* top Line */}
      <span
        className={cn(
          topLineClassName,
          "h-1.25 w-8.25 bg-[#1e9dbd] 2xl:w-12.25",
        )}
      ></span>
      {/* number */}
      <span
      
        dir="ltr"
        className="w-fit mt-1 text-[48px] 2xl:text-[56px]"
      >
        {number}
      </span>
      {/* label */}
      <span
        
        className="ms-0.75 text-lg text-white/70 2xl:text-xl"
      >
        {label}
      </span>
    </div>
  );
};

export default ExpSection;
