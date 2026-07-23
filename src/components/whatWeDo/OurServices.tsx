"use client";

import { useTranslations } from "next-intl";
import WWOCard from "./WWOCard";

interface OurServicesProps {}

const OurServices = ({}: OurServicesProps) => {
  const t = useTranslations("whatWeDo.services");

  return (
    <div className="w90 xs:px-0 mt-12 md:mt-20 flex flex-col px-40 sm:px-4 md:px-8 lg:px-16 xl:px-24">
      {/* title */}
      <div className="text-primary mb-6 md:mb-8 text-xl sm:text-lg">
        {t("sectionTitle")}
      </div>

      {/* heading */}
      <div className="xss:text-[26px] xs:text-[24px] xs:leading-[1.35] mb-10 md:mb-12 text-[45px] leading-[1.2] sm:text-[28px] md:text-[32px] lg:text-[36px] xl:text-[40px]">
        {t("sectionHeading")}
      </div>

      {/* cards */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-8 lg:gap-10 xl:gap-14 2xl:gap-20">
        <WWOCard
          indexNumber="01"
          title={t("cards.web.title")}
          description={t("cards.web.description")}
          iamgeSrc="/whatWeDo/wwd1.png"
        />

        <WWOCard
          indexNumber="02"
          title={t("cards.mobile.title")}
          description={t("cards.mobile.description")}
          iamgeSrc="/whatWeDo/wwd2.png"
        />

        <WWOCard
          indexNumber="03"
          title={t("cards.ai.title")}
          description={t("cards.ai.description")}
          iamgeSrc="/whatWeDo/3.png"
        />

        <WWOCard
          indexNumber="04"
          title={t("cards.consulting.title")}
          description={t("cards.consulting.description")}
          iamgeSrc="/whatWeDo/4.png"
        />
      </div>
    </div>
  );
};

export default OurServices;