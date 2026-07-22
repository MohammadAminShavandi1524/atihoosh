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
    <Link className="" href={`/${locale}`}>
      <div className="relative w-[58px] h-[40px] s:w-[72px] s:h-[49px] xl:h-[55px] xl:w-[80px] 2xl:h-[65px] 2xl:w-[95px]">
        <Image
          src="/logo.png"
          alt="logo"
          fill
          className="drop-shadow-[0_0_8px_rgba(0,0,0,0.08)] dark:drop-shadow-[0_0_10px_rgba(0,0,0,0.35)]"
        />
      </div>
    </Link>
  );
};

export default Logo;
