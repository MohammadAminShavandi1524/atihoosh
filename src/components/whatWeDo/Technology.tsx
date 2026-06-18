"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

interface TechnologyProps {}

const tags = [
  { imageSrc: "/logos/react.png", label: "React" },
  { imageSrc: "/logos/nodejs.png", label: "Node.js" },
  { imageSrc: "/logos/python.png", label: "Python" },
  { imageSrc: "/logos/postgresql.png", label: "PostgreSQL" },
  { imageSrc: "/logos/docker.png", label: "Docker" },
  { imageSrc: "/logos/aws.png", label: "AWS" },
  { imageSrc: "/logos/figma.png", label: "Figma" },
  { imageSrc: "/logos/openai.png", label: "OpenAI API" },
  { imageSrc: "/logos/Jira.png", label: "Jira" },
];

const Technology = ({}: TechnologyProps) => {
  const t = useTranslations("whatWeDo");

  return (
    <div className="w90 mt-20 mb-30 flex flex-col px-40">
      {/* title */}
      <div className="text-custom-primary mb-10 text-xl">
        {t("services.sectionTitle")}
      </div>

      {/* description */}
      <div className="mb-12 text-[45px]">{t("services.sectionHeading")}</div>

      {/* tags */}
      <div className="flex flex-wrap items-center gap-3">
        {tags.map((tag, index) => (
          <div
            key={index}
            className="flex items-center gap-x-3 rounded-lg border border-[#ffffff14] bg-[#101010] px-4 py-2"
          >
            <Image alt={tag.label} src={tag.imageSrc} width={20} height={20} />
            <div>{tag.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Technology;
