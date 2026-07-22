"use client";

import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";

const MobileMenuNav = () => {
  const locale = useLocale();
  const t = useTranslations("Footer");

  const links = [
    {
      title: t("links.whatWeDo"),
      href: "/what-we-do",
    },
    {
      title: t("links.aboutUs"),
      href: "/aboutUs",
    },
    {
      title: t("links.blog"),
      href: "/blogs",
    },
    {
      title: t("links.projectStart"),
      href: "/project-start",
    },
    {
      title: t("links.conatctUs"),
      href: "/contact-us",
    },
    {
      title: t("links.talent"),
      href: "/talent",
    },
  ];

  return (
    <nav className="flex flex-col gap-y-2">
      {links.map((item) => (
        <Link
          key={item.href}
          href={`/${locale}${item.href}`}
          className="text-foreground hover:text-primary rounded-lg px-3 py-3 text-lg transition-colors"
        >
          {item.title}
        </Link>
      ))}
    </nav>
  );
};

export default MobileMenuNav;
