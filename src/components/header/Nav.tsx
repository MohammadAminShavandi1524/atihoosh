"use client";

import { cn } from "@/lib/utils";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavProps {}

const Nav = ({}: NavProps) => {
  const t = useTranslations("Header.Navigation");
  const locale = useLocale();
  const pathname = usePathname();

  return (
    <nav>
      <ul className="flex items-center gap-x-9 ps-20 text-lg">
        {/* home */}
        <li>
          <Link
            className={cn(
              "hover:text-primary transition-all",
              pathname === `/${locale}` && "text-primary",
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
              pathname === `/${locale}/what-we-do` && "text-primary",
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
              pathname === `/${locale}/aboutUs` && "text-primary",
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
              pathname === `/${locale}/contact-us` && "text-primary",
            )}
            href={`/${locale}/contact-us`}
          >
            {t("contactUs")}
          </Link>
        </li>
        {/* blog */}
        <li>
          <Link
            className="hover:text-primary transition-all"
            href={`/${locale}`}
          >
            {t("blog")}
          </Link>
        </li>
        {/* project start */}
        <li>
          <Link
            className={cn(
              "hover:text-primary transition-all",
              pathname === `/${locale}/project-start` && "text-primary",
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
