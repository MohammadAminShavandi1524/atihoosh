"use client";

import { useLocale } from "next-intl";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface LogoProps {}

const Logo = ({}: LogoProps) => {
  const locale = useLocale();

  return (
    <Link className="min-h-[65px]" href={`/${locale}`}>
      <Image
        src="/logo.png"
        alt="logo"
        width={95}
        height={65}
        className="drop-shadow-[0_0_8px_rgba(0,0,0,0.08)] dark:drop-shadow-[0_0_10px_rgba(0,0,0,0.35)]"
      />
    </Link>
  );
};

export default Logo;
