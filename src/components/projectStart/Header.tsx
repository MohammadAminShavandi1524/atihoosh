"use client";

import Logo from "../header/Logo";
import Nav from "../header/Nav";
import LanguageSwitcher from "../LanguageSwitcher";
import { ThemeButton } from "../theme/ThemeButton";
import { useLocale } from "next-intl";
import { TextAlignJustify } from "lucide-react";
import { useMobileSidebar } from "../ui/mobile-sidebar";

interface HeaderProps {}

const Header = ({}: HeaderProps) => {
  const locale = useLocale();

  const { open, setOpen } = useMobileSidebar();

  return (
    <header className="border-b-border relative z-10 w-full border-b">
      <div className="bg-transparent">
        <div
          style={
            locale === "en"
              ? { fontFamily: "var(--font-noto-serif)" }
              : undefined
          }
          className="w90 s:py-2.5 flex items-center justify-between px-6 py-3.5 max-sm:w-full max-sm:px-8 xl:py-2.75 2xl:py-3"
        >
          {/* Desktop Logo */}
          <div className="hidden lg:block">
            <Logo />
          </div>

          {/* Mobile Menu */}
          <button onClick={() => setOpen(!open)} className="block lg:hidden">
            <TextAlignJustify className="s:mx-2 s:my-3 s:size-8 s:stroke-3 size-7 cursor-pointer stroke-2" />
          </button>

          {/* Desktop Nav */}
          <div className="hidden lg:block">
            <Nav className="ps-7" />
          </div>

          {/* Mobile Logo */}
          <div className="block lg:hidden">
            <Logo />
          </div>

          {/* Actions */}
          <div className="flex items-center gap-x-2">
            <div className="hidden lg:block">
              <LanguageSwitcher defaultLocale={locale} />
            </div>

            <ThemeButton />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
