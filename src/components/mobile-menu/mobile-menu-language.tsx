"use client";

import { Earth } from "lucide-react";
import { useTransition } from "react";

import { useParams } from "next/navigation";
import { usePathname, useRouter } from "@/i18n/navigation";
import { useLocale } from "next-intl";

import { cn } from "@/lib/utils";

const MobileMenuLanguage = () => {
  const router = useRouter();

  const pathname = usePathname();
  const params = useParams();

  const locale = useLocale();

  const [isPending, startTransition] = useTransition();

  const nextLocale = locale === "fa" ? "en" : "fa";

  function handleToggle() {
    startTransition(() => {
      router.replace(
        // @ts-expect-error
        { pathname, params },
        { locale: nextLocale },
      );
    });
  }

  return (
    <button
      disabled={isPending}
      onClick={handleToggle}
      className={cn(
        `group border-border bg-secondary/50 hover:bg-secondary flex w-full cursor-pointer items-center justify-between rounded-2xl border px-4 py-3 transition-all duration-300`,
        isPending && "opacity-50",
      )}
    >
      <div className="flex items-center gap-x-3">
        <div className="bg-background border-border flex size-9 items-center justify-center rounded-xl border">
          <Earth className="size-5" />
        </div>

        <div
          className={cn(
            "flex flex-col items-start",
            // locale === "fa" ? "font-IRANYekanX" : "",
          )}
        >
          <span className="text-muted-foreground text-sm">
            {locale === "fa" ? "زبان" : "Language"}
          </span>

          <span className="text-base font-medium">
            {locale === "fa" ? "فارسی" : "English"}
          </span>
        </div>
      </div>

      <span className="bg-background rounded-lg px-3 py-2 text-sm font-medium">
        {nextLocale.toUpperCase()}
      </span>
    </button>
  );
};

export default MobileMenuLanguage;
