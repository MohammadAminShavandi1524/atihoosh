"use client";

import Link from "next/link";
import Logo from "../header/Logo";

interface HeaderProps {}

const Header = ({}: HeaderProps) => {
  return (
    <div className="border-b-border relative z-10 h-21 w-full border-b">
      <div className="w90 flex items-center justify-between h-full">
        <Logo />

        <Link href={""}>help</Link>
      </div>
    </div>
  );
};

export default Header;
