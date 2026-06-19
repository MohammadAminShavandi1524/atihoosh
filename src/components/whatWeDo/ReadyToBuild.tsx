"use client";

import { useTranslations } from "next-intl";

interface ReadyToBuildProps {}

const ReadyToBuild = ({}: ReadyToBuildProps) => {
  const t = useTranslations("whatWeDo.readyToBuild");

  return (
    <section className="w-full border-y border-y-border pt-24 pb-18 mb-18">
      <div className="mx-auto flex max-w-6xl flex-col items-center px-6 text-center">
        {/* title */}
        <h2 className="text-foreground mb-6 font-serif text-5xl md:text-[65px]">
          {t("title")}
        </h2>

        {/* description */}
        <p className="text-muted mt-8 mb-6 max-w-[800px] text-lg md:text-2xl">
          {t("description")}
        </p>

        {/* buttons */}
        <div className="mt-14 flex flex-col gap-x-6 sm:flex-row">
          <button className="bg-primary text-tertiary cursor-pointer rounded-xl px-10 py-4 text-lg font-semibold transition">
            {t("primaryButton")}
          </button>

          <button className="cursor-pointer rounded-xl border border-muted px-10 py-4 text-lg font-semibold text-muted transition">
            {t("secondaryButton")}
          </button>
        </div>
      </div>
    </section>
  );
};

export default ReadyToBuild;
