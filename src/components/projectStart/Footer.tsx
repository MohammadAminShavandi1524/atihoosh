"use client";

import { Headphones, Lock, ShieldCheck } from "lucide-react";

interface FooterProps {}

const Footer = ({}: FooterProps) => {
  return (
    <div className="border-t-border absolute bottom-0 z-10 h-18 w-full border-t">
      <div className="w90 flex h-full items-center justify-center gap-x-10">
        <div className="flex items-center gap-x-3">
          <ShieldCheck className="text-primary size-6" />
          <span className="text-muted-foreground">Secure & Protected</span>
        </div>

        <div className="flex items-center gap-x-3">
          <Lock className="text-primary size-6" />
          <span className="text-muted-foreground">Your data is safe</span>
        </div>

        <div className="flex items-center gap-x-3">
          <Headphones className="text-primary size-6" />
          <span className="text-muted-foreground">24/7 support</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
