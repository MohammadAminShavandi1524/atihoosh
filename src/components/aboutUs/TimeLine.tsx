"use client";

import { englishToPersianNumber, persianToEnglishNumber } from "@/lib/utils";
import { useLocale } from "next-intl";

interface TimeLineProps {
  year: number;
  title: string;
  description: string;
}

const TimeLine = ({ description, title, year }: TimeLineProps) => {
  const locale = useLocale();
  console.log(String(year));

  return (
    <div className="relative flex flex-col ps-10">
      {/* dot */}
      <div className="bg-custom-primary absolute top-[-8px] size-3 rounded-full ltr:left-[-6px] rtl:right-[-6px]" />

      {/* year */}
      <div className="text-custom-primary text-lg">
        {locale === "en" ? year : englishToPersianNumber(String(year))}
      </div>

      {/* title */}
      <div className="mb-1 text-xl">{title}</div>

      {/* description */}
      <div className="font-extralight text-[#474747]">{description}</div>
    </div>
  );
};

export default TimeLine;
