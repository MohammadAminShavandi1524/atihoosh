"use client";

import Image from "next/image";
import Link from "next/link";

import { useLocale } from "next-intl";

import { useMobileSidebar } from "@/components/ui/mobile-sidebar";

const MobileMenuLogo = () => {
  const locale = useLocale();
  const { setOpen } = useMobileSidebar();

  return (
    <Link
      href={`/${locale}`}
      onClick={() => setOpen(false)}
      className="flex items-center gap-3"
    >
      <div className="relative h-11 w-16 shrink-0">
        <Image
          src="/logo.png"
          alt="ATI HOOSH"
          fill
          priority
          className="object-contain"
        />
      </div>

      <span
        style={
          locale === "en" ? { fontFamily: "var(--font-space)" } : undefined
        }
        className="text-foreground hidden text-lg font-semibold tracking-wide"
      >
        ATI HOOSH
      </span>
    </Link>
  );
};

export default MobileMenuLogo;
