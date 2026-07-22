"use client";

import MobileMenuCloseButton from "./mobile-menu-close-button";
import MobileMenuLanguage from "./mobile-menu-language";
import MobileMenuLogo from "./mobile-menu-logo";
import MobileMenuNav from "./mobile-menu-nav";

import {
  MobileSidebarBody,
  MobileSidebarHeader,
} from "@/components/ui/mobile-sidebar";

import { useTranslations } from "next-intl";

const MobileMenu = () => {
  const t = useTranslations("MobileMenu");

  return (
    <>
      <MobileSidebarHeader>
        <div className="flex w-full items-center justify-between">
          <MobileMenuLogo />

          <MobileMenuCloseButton />
        </div>
      </MobileSidebarHeader>

      <MobileSidebarBody>
        <div className="flex h-full flex-col px-4 py-6">
          <div className="flex flex-col gap-y-4.5">
            <MobileMenuLanguage />

            <div className="bg-border h-px w-full" />

            <MobileMenuNav />
          </div>

          <div className="text-foreground mt-auto  pt-8 text-lg">
            <div className="bg-border h-px w-full" />
            <div className="pt-4 ">{t("copyright")}</div>
          </div>
        </div>
      </MobileSidebarBody>
    </>
  );
};

export default MobileMenu;
