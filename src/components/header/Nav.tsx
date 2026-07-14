"use client";

import { cn } from "@/lib/utils";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavProps {
  className?: string;
}

const Nav = ({ className }: NavProps) => {
  const t = useTranslations("Header.Navigation");
  const locale = useLocale();
  const pathname = usePathname();

  return (
    <nav>
      <ul className={cn("flex items-center gap-x-9 ps-20 text-lg", className)}>
        {/* home */}
        <li>
          <Link
            className={cn(
              "hover:text-primary transition-all",
              pathname === `/${locale}` &&
                "dark:text-primary font-medium text-[#2B4C7E]",
            )}
            href={`/${locale}`}
          >
            {t("home")}
          </Link>
        </li>
        {/* whatWeDo */}
        <li>
          <Link
            className={cn(
              "hover:text-primary transition-all",
              pathname === `/${locale}/what-we-do` &&
                "dark:text-primary font-medium text-[#2B4C7E]",
            )}
            href={`/${locale}/what-we-do`}
          >
            {t("whatWeDo")}
          </Link>
        </li>
        {/* about us */}
        <li>
          <Link
            className={cn(
              "hover:text-primary transition-all",
              pathname === `/${locale}/aboutUs` &&
                "dark:text-primary font-medium text-[#2B4C7E]",
            )}
            href={`/${locale}/aboutUs`}
          >
            {t("aboutUs")}
          </Link>
        </li>
        {/* contact us */}
        <li>
          <Link
            className={cn(
              "hover:text-primary transition-all",
              pathname === `/${locale}/contact-us` &&
                "dark:text-primary font-medium text-[#2B4C7E]",
            )}
            href={`/${locale}/contact-us`}
          >
            {t("contactUs")}
          </Link>
        </li>
        {/* blog */}
        <li>
          <Link
            className={cn(
              "hover:text-primary transition-all",
              pathname === `/${locale}/blogs` &&
                "dark:text-primary font-medium text-[#2B4C7E]",
            )}
            href={`/${locale}/blogs`}
          >
            {t("blog")}
          </Link>
        </li>
        {/* project start */}
        <li>
          <Link
            className={cn(
              "hover:text-primary transition-all",
              pathname === `/${locale}/project-start` &&
                "dark:text-primary font-medium text-[#2B4C7E]",
            )}
            href={`/${locale}/project-start`}
          >
            {t("projectStart")}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
