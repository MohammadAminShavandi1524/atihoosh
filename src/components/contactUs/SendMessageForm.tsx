"use client";

import { ArrowRight } from "lucide-react";
import { FormField } from "../FormField";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

interface SendMessageFormProps {}

const SendMessageForm = ({}: SendMessageFormProps) => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const t = useTranslations("ContactUs.SendMessageForm");

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="border-border bg-secondary-bg col-span-2 rounded-2xl border p-8 md:p-10">
      <span className="text-primary text-sm font-medium tracking-[0.15em] uppercase">
        {t("badge")}
      </span>

      <h2 className="mt-5 text-4xl font-bold">{t("title")}</h2>

      <p className="text-muted-foreground mt-4 text-lg">{t("description")}</p>

      <form className="mt-12 space-y-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <FormField
            label={t("fullName")}
            placeholder={t("fullNamePlaceholder")}
          />

          <FormField
            label={t("phone")}
            type="tel"
            dir="ltr"
            placeholder={t("phonePlaceholder")}
          />
        </div>

        <FormField
          label={t("email")}
          type="email"
          dir="ltr"
          placeholder={t("emailPlaceholder")}
        />

        <FormField
          as="textarea"
          label={t("message")}
          placeholder={t("messagePlaceholder")}
        />

        <button
          type="submit"
          className={cn(
            "bg-primary flex h-12 w-full cursor-pointer items-center justify-center gap-x-3 rounded-lg font-semibold transition hover:opacity-90",
            theme === "dark" ? "text-[#06151a]" : "text-[#f8fafc]",
          )}
        >
          <span>{t("button")}</span>
          <ArrowRight className="size-5 pt-0.5 rtl:rotate-180" />
        </button>

        <p className="text-muted-foreground text-center text-sm">
          {t("privacy")}
        </p>
      </form>
    </div>
  );
};

export default SendMessageForm;
