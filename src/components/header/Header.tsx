import { Search, Sun } from "lucide-react";
import LanguageSwitcher from "../LanguageSwitcher";
import { use } from "react";
import { setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

interface HeaderProps {
  locale: "en" | "fa";
}

const Header = ({ locale }: HeaderProps) => {
  return (
    <div>
      <div
        style={{ fontFamily: "var(--font-inter)" }}
        className="w90 flex items-center justify-between py-4"
      >
        {/* logo */}
        <Link href={`/${locale}`}>
          <Image src="/logo.png" alt="logo" width={56} height={56} />
        </Link>

        {/* nav */}
        <nav>
          <ul className="flex items-center gap-x-9 ps-12 text-lg">
            <Link href={`/${locale}`}>
              <li>What we do</li>
            </Link>

            <Link href={`/${locale}`}>
              <li>About us</li>
            </Link>

            <Link href={`/${locale}`}>
              <li>Blog</li>
            </Link>

            <Link href={`/${locale}`}>
              <li>Project start</li>
            </Link>
          </ul>
        </nav>

        {/* search language and theme buttons container */}
        <div className="flex items-center gap-x-2">
          {/* search */}
          <div className="cursor-pointer px-2 py-3">
            <Search />
          </div>

          {/* language switcher */}
          <LanguageSwitcher defaultLocale={locale} />
          {/* theme button */}
          <button className="cursor-pointer px-2 py-3">
            <Sun strokeWidth="3px" color="#ffde21" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
