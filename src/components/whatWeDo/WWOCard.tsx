"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";

interface WWOCardProps {
  indexNumber: string;
  title: string;
  description: string;

  iamgeSrc: string;
}

const WWOCard = ({
  description,
  indexNumber,

  title,
  iamgeSrc,
}: WWOCardProps) => {
  const t = useTranslations("whatWeDo.services");
  return (
    <div className="flex w-full flex-col overflow-hidden rounded-xl">
      <div className="bg-secondary relative h-100 w-full overflow-hidden">
        <Image src={iamgeSrc} alt="" fill className="object-cover" />
      </div>
      {/* content */}
      <div className="bg-secondary-bg flex min-h-52.5 flex-col gap-y-3 px-6 pt-6 pb-7">
        {/* index */}
        <div className="text-primary text-sm">{indexNumber}</div>
        {/* title */}
        <div className="text-xl">{title}</div>
        {/* description */}
        <div className="text-muted text-base text-justify">{description}</div>

        {/* Learn more */}
        {/* <div className="text-primary mt-2 cursor-pointer text-base ">
          {t("learnMore")}
        </div> */}
      </div>
    </div>
  );
};

export default WWOCard;
