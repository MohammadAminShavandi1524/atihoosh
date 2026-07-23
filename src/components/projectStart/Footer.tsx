"use client";

import { useTranslations } from "next-intl";
import { ShieldCheck, Lock, Headphones } from "lucide-react";

const ProjectStartFooter = () => {
  const t = useTranslations("projectStart.footer");

  return (
    <footer className="border-t-border absolute bottom-0 z-10 w-full border-t">
      <div className="w90 s:px-6 flex h-auto flex-wrap items-center justify-center gap-x-6 gap-y-4 px-4 py-4 sm:gap-x-8 md:gap-x-10 lg:h-18 lg:flex-nowrap lg:gap-y-0 lg:px-0 lg:py-0">
        <div className="flex items-center gap-x-2 sm:gap-x-3">
          <ShieldCheck className="text-primary size-5 sm:size-6" />

          <span className="text-muted-foreground text-xs sm:text-sm lg:text-base">
            {t("secure")}
          </span>
        </div>

        <div className="flex items-center gap-x-2 sm:gap-x-3">
          <Lock className="text-primary size-5 sm:size-6" />

          <span className="text-muted-foreground text-xs sm:text-sm lg:text-base">
            {t("safe")}
          </span>
        </div>

        <div className="flex items-center gap-x-2 sm:gap-x-3">
          <Headphones className="text-primary size-5 sm:size-6" />

          <span className="text-muted-foreground text-xs sm:text-sm lg:text-base">
            {t("support")}
          </span>
        </div>
      </div>
    </footer>
  );
};

export default ProjectStartFooter;
