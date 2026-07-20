"use client";

import { useTranslations } from "next-intl";
import WWOCard from "./WWOCard";

interface OurServicesProps {}

const OurServices = ({}: OurServicesProps) => {
  const t = useTranslations("whatWeDo.services");

  return (
    <div className="w90 mt-20 flex flex-col px-40">
      {/* title */}
      <div className="text-primary mb-10 text-xl">{t("sectionTitle")}</div>

      {/* description */}
      <div className="mb-12 text-[45px]">{t("sectionHeading")}</div>

      {/* what we offer boxes */}
      <div className="grid grid-cols-2 gap-14 2xl:gap-20">
        <WWOCard
          indexNumber="01"
          title={t("cards.web.title")}
          description={t("cards.web.description")}
        
          iamgeSrc="/whatWeDo/1.png"
        />

        <WWOCard
          indexNumber="02"
          title={t("cards.mobile.title")}
          description={t("cards.mobile.description")}
        
          iamgeSrc="/whatWeDo/2.png"
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
