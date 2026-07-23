"use client";

import { useTranslations } from "next-intl";
import HWWStep from "./HWWStep";
import HWWMobileSteps from "./HWWMobileSteps";

interface HowWeWorkProps {}

const HowWeWork = ({}: HowWeWorkProps) => {
  const t = useTranslations("whatWeDo.howWeWork");

  return (
    <div className="border-y-border mt-12 border-y pt-12 pb-16 md:mt-20 md:pt-15 md:pb-25">
      <div className="w90 flex flex-col px-4 md:px-8 lg:px-16 xl:px-24">
        {/* title */}
        <div className="text-primary mb-8 text-lg md:mb-10 md:text-xl">
          {t("sectionTitle")}
        </div>

        {/* heading */}
        <div className="s:text-[28px] mlg:mb-16 mb-10 text-[24px] leading-[1.35] md:text-[32px] lg:text-[36px] xl:text-[40px] 2xl:text-[45px] 2xl:leading-[1.2]">
          {t("sectionHeading")}
        </div>

        {/* desktop */}
        <div className="mlg:flex relative hidden flex-row items-center justify-between gap-x-10">
          <div className="bg-primary absolute top-6 left-1/2 h-px w-[77.5%] -translate-x-1/2 ltr:translate-x-[-50%] rtl:translate-x-[-52%]" />

          <HWWStep
            title={t("steps.discovery.title")}
            description={t("steps.discovery.description")}
            index="1"
          />

          <HWWStep
            title={t("steps.design.title")}
            description={t("steps.design.description")}
            index="2"
          />

          <HWWStep
            title={t("steps.development.title")}
            description={t("steps.development.description")}
            index="3"
          />

          <HWWStep
            title={t("steps.launch.title")}
            description={t("steps.launch.description")}
            index="4"
          />
        </div>

        {/* mobile */}
        <div className="mlg:hidden">
          <HWWMobileSteps
            steps={[
              {
                index: "1",
                title: t("steps.discovery.title"),
                description: t("steps.discovery.description"),
              },
              {
                index: "2",
                title: t("steps.design.title"),
                description: t("steps.design.description"),
              },
              {
                index: "3",
                title: t("steps.development.title"),
                description: t("steps.development.description"),
              },
              {
                index: "4",
                title: t("steps.launch.title"),
                description: t("steps.launch.description"),
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default HowWeWork;
