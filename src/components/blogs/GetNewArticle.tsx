"use client";

import { cn } from "@/lib/utils";
import { useLocale, useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useEffect, useState } from "react";

interface GetNewArticleProps {}

const GetNewArticle = ({}: GetNewArticleProps) => {
  const t = useTranslations("Blogs.GetNewArticle");
  const locale = useLocale();
  const isRTL = locale === "fa";

  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <div className="w90 my-40 px-50">
      <div
        className={`relative flex min-h-[220px] items-center justify-center rounded-xl px-24 py-12 ${
          isRTL
            ? "bg-[radial-gradient(circle_600px_at_top_right,color-mix(in_srgb,var(--primary)_8%,transparent)_0%,color-mix(in_srgb,var(--primary)_3%,transparent)_35%,var(--secondary-bg)_75%)]"
            : "bg-[radial-gradient(circle_600px_at_top_left,color-mix(in_srgb,var(--primary)_8%,transparent)_0%,color-mix(in_srgb,var(--primary)_3%,transparent)_35%,var(--secondary-bg)_75%)]"
        }`}
      >
        <div>
          {/* <div className="mb-5 text-[32px]">}</div> */}
          <div className="text-primary mb-6 text-center text-[40px]">
            {t("title")}
          </div>

          <div className="text-muted-foreground mb-12 text-justify text-base">
            {t("description")}
          </div>

          <div className="flex w-full justify-center">
            <Link
              className="hover:text-primary text-xl transition-colors duration-300"
              href="mailto:support@atihooshbonyan.com"
            >
              support@atihooshbonyan.com
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetNewArticle;
