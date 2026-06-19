"use client";

import { useTranslations } from "next-intl";
import HWWStep from "./HWWStep";

interface HowWeWorkProps {}

const HowWeWork = ({}: HowWeWorkProps) => {
  const t = useTranslations("whatWeDo.howWeWork");

  return (
    <div className="mt-20 border-y border-y-border px-40 pt-15 pb-25">
      <div className="w90 flex flex-col">
        {/* title */}
        <div className="text-primary mb-10 text-xl">{t("sectionTitle")}</div>

        {/* description */}
        <div className="mb-16 text-[45px]">{t("sectionHeading")}</div>

        {/* steps */}
        <div className="relative flex items-center justify-between gap-x-10">
          {/* line */}
          <div className="bg-primary absolute top-6 left-1/2 h-px ltr:w-[77.5%] ltr:-translate-x-1/2 rtl:w-[74%] rtl:-translate-x-[52%]" />

          <HWWStep
            title={t("steps.discovery.title")}
            description={t("steps.discovery.description")}
          />

          <HWWStep
            title={t("steps.design.title")}
            description={t("steps.design.description")}
          />

          <HWWStep
            title={t("steps.development.title")}
            description={t("steps.development.description")}
          />

          <HWWStep
            title={t("steps.launch.title")}
            description={t("steps.launch.description")}
          />
        </div>
      </div>
    </div>
  );
};

export default HowWeWork;
