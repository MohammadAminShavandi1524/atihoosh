"use client";

import { cn } from "@/lib/utils";

import { useLocale, useTranslations } from "next-intl";
import ProcessCard from "./ProcessCard";

export default function ProcessSectionDesktop() {
  const locale = useLocale();
  const t = useTranslations("HomePage.ProcessSection");

  const cards = [
    {
      key: "structuredExecution",
      title: t("cards.structuredExecution.title"),
      description: t("cards.structuredExecution.description"),
      className: "mr-auto bg-card",
      accentColor: "#60A5FA",
    },
    {
      key: "contractDrivenScope",
      title: t("cards.contractDrivenScope.title"),
      description: t("cards.contractDrivenScope.description"),
      className: "ml-auto bg-[#901a30]",
      accentColor: "#FB7185",
    },
    {
      key: "continuousResponsibility",
      title: t("cards.continuousResponsibility.title"),
      description: t("cards.continuousResponsibility.description"),
      className: "mr-auto bg-[#460073]",
      accentColor: "#C084FC",
    },
  ];

  return (
    <section className="relative min-h-[300vh]">
      {/* Sticky Layer */}
      <div className="sticky top-0 h-screen overflow-hidden">
        <div
          className={cn(
            "absolute top-1/2 left-1/2 w-[90%] -translate-x-1/2 -translate-y-1/2 text-center font-semibold",

            "xss:text-[40px]/[48px] s:text-[48px]/[56px] mlg:text-[84px]/[86px] text-[32px]/[40px] sm:text-[60px]/[66px] md:text-[72px]/[76px] lg:text-[96px]/[96px] xl:text-[108px]/[108px] 2xl:text-[120px]/[120px]",
          )}
        >
          {t("title")}
        </div>
      </div>

      {/* Cards Layer */}
      <div className="relative z-10 pt-[5vh] pb-[100vh]">
        <div className="mx-auto max-w-[1800px] px-15 xl:px-20 2xl:px-20">
          <div className="flex flex-col gap-y-24 xl:gap-y-24 2xl:gap-y-30">
            <ProcessCard
              title={cards[0].title}
              description={cards[0].description}
              className="bg-card text-card-foreground me-auto"
            />

            <ProcessCard
              title={cards[1].title}
              description={cards[1].description}
              className="bg-card-secondary text-card-secondary-foreground ms-auto"
            />

            <ProcessCard
              title={cards[2].title}
              description={cards[2].description}
              className="bg-card-tertiary text-card-tertiary-foreground me-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
