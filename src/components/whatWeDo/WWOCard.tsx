"use client";

import { useTranslations } from "next-intl";

interface WWOCardProps {
  indexNumber: string;
  title: string;
  description: string;
  tags: string[];
}

const WWOCard = ({ description, indexNumber, tags, title }: WWOCardProps) => {
  const t = useTranslations("whatWeDo.services");
  return (
    <div className="flex w-full flex-col overflow-hidden rounded-xl">
      <div className="bg-secondary h-60 w-full"></div>
      {/* content */}
      <div className="bg-secondary-bg flex min-h-52.5 flex-col gap-y-3 px-6 py-6">
        {/* index */}
        <div className="text-primary text-sm">{indexNumber}</div>
        {/* title */}
        <div className="text-lg">{title}</div>
        {/* description */}
        <div className="text-base text-muted">{description}</div>
        {/* tags */}
        <div className="flex items-center gap-x-3">
          {tags.map((tag, index) => {
            return (
              <div
                key={index}
                className="border-primary text-primary rounded-lg border bg-secondary px-2.5 py-1.25 text-base"
              >
                {tag}
              </div>
            );
          })}
        </div>
        {/* Learn more */}
        <div className="text-primary mt-2 cursor-pointer text-base">
          {t("learnMore")}
        </div>
      </div>
    </div>
  );
};

export default WWOCard;
