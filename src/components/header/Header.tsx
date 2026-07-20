"use client";

import { Search } from "lucide-react";
import LanguageSwitcher from "../LanguageSwitcher";
import { useLocale } from "next-intl";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import Nav from "./Nav";
import { ThemeButton } from "../theme/ThemeButton";
import { useTheme } from "next-themes";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const Header = () => {
  const locale = useLocale();
  const pathname = usePathname();
  const { theme } = useTheme();

  const [mounted, setMounted] = useState(false);
  const [showHeader, setShowHeader] = useState(true);

  const lastScrollY = useRef(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Sync sticky offset with header visibility
  useEffect(() => {
    document.documentElement.style.setProperty(
      "--header-offset",
      showHeader ? "130px" : "40px",
    );
  }, [showHeader]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // جلوگیری از لرزش
      if (Math.abs(currentScrollY - lastScrollY.current) < 10) return;

      // ابتدای صفحه همیشه هدر نمایش داده شود
      if (currentScrollY < 80) {
        setShowHeader(true);
      } else if (currentScrollY > lastScrollY.current) {
        // Scroll Down
        setShowHeader(false);
      } else {
        // Scroll Up
        setShowHeader(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!mounted) return null;

  if (pathname === `/${locale}/project-start`) {
    return null;
  }

  return (
    <header
      className={cn(
        "border-b-border fixed top-0 right-0 left-0 z-50 max-h-[98px] min-h-[97px] border-b transition-transform duration-300",
        showHeader ? "translate-y-0" : "-translate-y-full",
      )}
    >
      <div className="bg-[#f6f7f9] dark:bg-[#101010]">
        <div
          style={
            locale === "en"
              ? { fontFamily: "var(--font-noto-serif)" }
              : undefined
          }
          className="w90 flex items-center justify-between py-3"
        >
          {/* Logo */}
          <Logo />

          {/* Nav */}
          <Nav />

          {/* Actions */}
          <div className="flex items-center gap-x-2">
            <div className="hidden cursor-pointer px-2 py-3">
              <Search />
            </div>

            <LanguageSwitcher defaultLocale={locale} />
            <ThemeButton />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
