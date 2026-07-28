"use client";

import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { useTheme } from "next-themes";
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
    <section className="w90 xss:px-6 s:px-8 mlg:px-20 my-14 px-4 sm:px-10 md:my-20 md:px-14 lg:my-28 lg:px-30 xl:my-36 xl:px-40 2xl:my-40 2xl:px-50">
      <div
        className={`xss:px-6 s:px-8 relative flex min-h-[180px] items-center justify-center rounded-xl px-5 py-8 sm:px-10 md:min-h-[200px] md:px-14 md:py-10 lg:min-h-[220px] lg:px-20 lg:py-12 xl:px-24 ${
          isRTL
            ? "bg-[radial-gradient(circle_600px_at_top_right,color-mix(in_srgb,var(--primary)_8%,transparent)_0%,color-mix(in_srgb,var(--primary)_3%,transparent)_35%,var(--secondary-bg)_75%)]"
            : "bg-[radial-gradient(circle_600px_at_top_left,color-mix(in_srgb,var(--primary)_8%,transparent)_0%,color-mix(in_srgb,var(--primary)_3%,transparent)_35%,var(--secondary-bg)_75%)]"
        }`}
      >
        <div className="mx-auto w-full max-w-4xl">
          {/* title */}
          <h2 className="text-primary xss:text-[30px] s:text-[34px] mb-5 text-center text-[28px] leading-tight sm:text-[36px] md:mb-6 md:text-[38px] lg:text-[40px]">
            {t("title")}
          </h2>

          {/* description */}
          <p className="text-muted-foreground xss:text-[15px] s:text-base mx-auto mb-8 max-w-3xl text-center text-sm leading-7 md:mb-10 md:text-[17px] md:leading-8 lg:mb-12">
            {t("description")}
          </p>

          {/* email */}
          <div className="flex justify-center">
            <Link
              href="mailto:support@atihooshbonyan.com"
              className="hover:text-primary xss:text-lg text-center text-base break-all transition-colors duration-300 sm:text-xl"
            >
              support@atihooshbonyan.com
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetNewArticle;
