"use client";

import { X } from "lucide-react";
import { useTranslations } from "next-intl";

import { useMobileSidebar } from "@/components/ui/mobile-sidebar";

const MobileMenuCloseButton = () => {
  const { setOpen } = useMobileSidebar();
  const t = useTranslations("MobileMenu");

  return (
    <button
      type="button"
      aria-label={t("close")}
      onClick={() => setOpen(false)}
      className="hover:bg-accent active:bg-secondary flex size-11 items-center justify-center rounded-xl transition-colors duration-200 cursor-pointer"
    >
      <X className="size-6" />
    </button>
  );
};

export default MobileMenuCloseButton;
