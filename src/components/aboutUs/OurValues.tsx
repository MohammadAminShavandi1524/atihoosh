"use client";

import { useTranslations } from "next-intl";
import OurValuesBox from "./OurValuesBox";

interface OurValuesProps {}

const OurValues = ({}: OurValuesProps) => {
  const t = useTranslations("AboutPage");

  return (
    <div className="border-b-border mb-12 border-b pb-16 md:mb-16 md:pb-20">
      <div className="w90 flex flex-col px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 2xl:px-30">
        {/* badge */}
        <div className="text-primary mb-4 text-lg sm:text-xl md:mb-6 md:text-2xl">
          {t("ValuesSection.badge")}
        </div>

        {/* title */}
        <div className="xss:text-[32px] mb-8 text-[28px] leading-[1.25] sm:text-[36px] md:mb-10 md:text-[40px] lg:text-[44px] 2xl:text-[48px]">
          {t("ValuesSection.title")}
        </div>

        {/* cards */}
        <div className="s:grid-cols-2 grid grid-cols-1 gap-5 md:gap-6 lg:grid-cols-3 lg:gap-8 2xl:grid-cols-4 2xl:gap-10">
          <OurValuesBox title={t("ValuesSection.items.onTimeDelivery.title")} />

          <OurValuesBox
            title={t("ValuesSection.items.customerFocusedSolutions.title")}
          />

          <OurValuesBox
            title={t("ValuesSection.items.crossDisciplinaryExpertise.title")}
          />

          <OurValuesBox
            title={t("ValuesSection.items.continuousSupport.title")}
          />
        </div>
      </div>
    </div>
  );
};

export default OurValues;
