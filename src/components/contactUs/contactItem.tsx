"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface ContactItemProps {
  label: string;
  children: ReactNode;
  className?: string;
  Logo: LucideIcon;
}

export const ContactItem = ({
  Logo,
  label,
  children,
  className,
}: ContactItemProps) => {
  return (
    <div className={cn("flex gap-4", className)}>
      <div className="bg-primary/15 text-primary flex size-10 shrink-0 items-center justify-center rounded-md">
        <Logo className="size-4.5" />
      </div>

      <div className="min-w-0">
        <p className="text-muted-foreground text-sm font-medium uppercase">
          {label}
        </p>

        <div className="text-foreground mt-1 text-base leading-8 flex flex-col gap-y-0">{children}</div>
      </div>
    </div>
  );
};
