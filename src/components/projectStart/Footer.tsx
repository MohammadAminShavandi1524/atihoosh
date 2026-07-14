"use client";

import { useTranslations } from "next-intl";
import { ShieldCheck, Lock, Headphones } from "lucide-react";

const ProjectStartFooter = () => {
  const t = useTranslations("projectStart.footer");

  return (
    <div className="border-t-border absolute bottom-0 z-10 h-18 w-full border-t">
      <div className="w90 flex h-full items-center justify-center gap-x-10">
        <div className="flex items-center gap-x-3">
          <ShieldCheck className="text-primary size-6" />
          <span className="text-muted-foreground">{t("secure")}</span>
        </div>

        <div className="flex items-center gap-x-3">
          <Lock className="text-primary size-6" />
          <span className="text-muted-foreground">{t("safe")}</span>
        </div>

        <div className="flex items-center gap-x-3">
          <Headphones className="text-primary size-6" />
          <span className="text-muted-foreground">{t("support")}</span>
        </div>
      </div>
    </div>
  );
};

export default ProjectStartFooter;
