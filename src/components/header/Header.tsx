"use locale";

import { Search, Sun } from "lucide-react";
import LanguageSwitcher from "../LanguageSwitcher";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

import Nav from "./Nav";
import { ThemeButton } from "../theme/ThemeButton";

interface HeaderProps {}

const Header = ({}: HeaderProps) => {
  const locale = useLocale();
  return (
    <div>
      <div
        style={locale === "en" ? { fontFamily: "var(--font-noto-serif)" } : {}}
        className="w90 flex items-center justify-between py-4"
      >
        {/* logo */}
        <Link
          className="border-primary bg-tertiary rounded-lg border pt-2.5 pr-4.25 pb-3 pl-3.75"
          href={`/${locale}`}
        >
          <Image src="/logo.png" alt="logo" width={56} height={56} />
        </Link>

        {/* nav */}
        <Nav />

        {/* search language and theme buttons container */}
        <div className="flex items-center gap-x-2">
          {/* search */}
          <div className="cursor-pointer px-2 py-3">
            <Search />
          </div>

          {/* language switcher */}
          <LanguageSwitcher defaultLocale={locale} />
          {/* theme button */}
          <ThemeButton />
        </div>
      </div>
    </div>
  );
};

export default Header;
