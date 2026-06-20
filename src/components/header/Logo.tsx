"use client";

import { useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";

interface LogoProps {}

const Logo = ({}: LogoProps) => {
  const locale = useLocale();

  return (
    <Link
      className="border-primary bg-tertiary rounded-lg border pt-2.5 pr-4.25 pb-3 pl-3.75"
      href={`/${locale}`}
    >
      <Image src="/logo.png" alt="logo" width={56} height={56} />
    </Link>
  );
};

export default Logo;
