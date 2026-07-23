"use client";

import { useTranslations } from "next-intl";
import ProcessCardMobile from "./ProcessCardMobile";
import { cn } from "@/lib/utils";

export default function ProcessSectionMobile() {
  const t = useTranslations("HomePage.ProcessSection");

  const cards = [
    {
      title: t("cards.structuredExecution.title"),
      description: t("cards.structuredExecution.description"),
      className: "bg-card text-card-foreground",
    },
    {
      title: t("cards.contractDrivenScope.title"),
      description: t("cards.contractDrivenScope.description"),
      className: "bg-card-secondary text-card-secondary-foreground",
    },
    {
      title: t("cards.continuousResponsibility.title"),
      description: t("cards.continuousResponsibility.description"),
      className: "bg-card-tertiary text-card-tertiary-foreground",
    },
  ];

  return (
    <section className="relative min-h-[260vh]">
      {/* Sticky Title */}
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="absolute top-1/2 left-1/2 w-[90%] -translate-x-1/2 -translate-y-1/2">
          <h2 className="xss:text-[40px]/[48px] s:text-[48px]/[56px] mlg:text-[84px]/[86px] text-center text-[32px]/[40px] font-semibold sm:text-[60px]/[66px] md:text-[72px]/[76px]">
            {t("title")}
          </h2>
        </div>
      </div>

      {/* Cards */}
      <div className="w90 px-0 md:px-6 relative z-10  pt-[20vh] pb-[100vh]">
        <div className="flex flex-col gap-y-20">
          {cards.map((card, index) => (
            <ProcessCardMobile
              key={index}
              title={card.title}
              description={card.description}
              className={cn(
                card.className,
                index % 2 === 0 ? "me-auto" : "ms-auto",
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
