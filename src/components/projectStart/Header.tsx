"use client";

import Link from "next/link";
import Logo from "../header/Logo";
import Nav from "../header/Nav";
import LanguageSwitcher from "../LanguageSwitcher";
import { ThemeButton } from "../theme/ThemeButton";
import { useLocale } from "next-intl";

interface HeaderProps {}

const Header = ({}: HeaderProps) => {
  const locale = useLocale();
  return (
    <div className="border-b-border relative z-10 h-21 w-full border-b">
      <div className="w90 flex h-full items-center justify-between">
        {/* Logo */}
        <Logo />

        {/* Nav */}
        <Nav className="ps-7" />

        {/* Actions */}
        <div className="flex items-center gap-x-2">
          <LanguageSwitcher defaultLocale={locale} />
          <ThemeButton />
        </div>
      </div>
    </div>
  );
};

export default Header;
