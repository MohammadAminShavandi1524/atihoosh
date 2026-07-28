"use client";

import StatRow from "./StatRow";
import { useTranslations } from "next-intl";

interface StatsProps {}

const Stats = ({}: StatsProps) => {
  const t = useTranslations("Blogs.Stats");

  return (
    <div className="flex w-full justify-center">
      <div className="bg-border grid  max-w-[420px] grid-cols-2 gap-px overflow-hidden rounded-xl lg:flex lg:max-w-none lg:rounded-none w-fit">
        <StatRow number="4" label={t("articlesPublished")} />
        <StatRow number="3" label={t("topicsCovered")} />
        <StatRow number="2026" label={t("latestEdition")} />
        <StatRow number="~6 min" label={t("avgReadTime")} />
      </div>
    </div>
  );
};

export default Stats;
