"use client";

import { Copy, Linkedin, Send, XIcon } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";

interface ArticleFooterProps {
  tags: string[];
}

export default function ArticleFooter({ tags }: ArticleFooterProps) {
  const locale = useLocale();
  const t = useTranslations("Blogs.ArticleFooter");
  const shareUrl = window.location.href;

  return (
    <section className="mt-14 mb-16 md:mt-20 md:mb-24">
      <div className="bg-secondary-bg border-border rounded-3xl border px-5 py-6 sm:px-8 md:px-14 md:py-7">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
          {/* Tags */}
          <div className="space-y-5">
            <div>
              <h3 className="mb-3 ps-2 text-xl font-semibold md:mb-4 md:text-2xl">
                {t("tagsTitle")}
              </h3>

              <p className="text-muted-foreground mt-1 mb-7 ps-2 text-sm md:mb-9.5">
                {t("tagsDescription")}
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <button
                  key={tag}
                  className="bg-background hover:bg-primary dark:hover:text-foreground rounded-full border px-4 py-2 text-sm transition-all duration-200 hover:text-white"
                >
                  <span>#</span>
                  <span> {tag}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Share */}
          <div className="space-y-5">
            <div>
              <h3 className="mb-3 text-xl font-semibold md:mb-4 md:text-2xl">
                {t("shareTitle")}
              </h3>

              <p className="text-muted-foreground mt-1 mb-4 max-w-xs text-sm leading-7">
                {t("shareDescription")}
              </p>
            </div>

            <div
              className={`max-xss:justify-between max-xss:px-4 flex items-center gap-3 ${
                locale === "fa" ? "flex-row-reverse" : ""
              }`}
            >
              {/* Linkedin */}
              <Link
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                  window.location.href,
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-background hover:bg-primary dark:hover:text-foreground flex size-11 cursor-pointer items-center justify-center rounded-full border transition-all duration-200 hover:text-white md:size-12"
              >
                <Linkedin className="size-5" />
              </Link>

              {/* X */}
              <Link
                href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                  window.location.href,
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-background hover:bg-primary dark:hover:text-foreground flex size-11 cursor-pointer items-center justify-center rounded-full border transition-all duration-200 hover:text-white md:size-12"
              >
                <XIcon className="size-5" />
              </Link>

              {/* Telegram */}
              <Link
                href={`https://t.me/share/url?url=${encodeURIComponent(
                  window.location.href,
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-background hover:bg-primary dark:hover:text-foreground flex size-11 cursor-pointer items-center justify-center rounded-full border transition-all duration-200 hover:text-white md:size-12"
              >
                <Send className="size-5" />
              </Link>

              {/* Copy */}
              <button
                onClick={() =>
                  navigator.clipboard.writeText(window.location.href)
                }
                className="bg-background hover:bg-primary dark:hover:text-foreground flex size-11 cursor-pointer items-center justify-center rounded-full border transition-all duration-200 hover:text-white md:size-12"
              >
                <Copy className="size-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
