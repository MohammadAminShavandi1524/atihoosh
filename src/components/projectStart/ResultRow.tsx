"use client";

import { LucideIcon } from "lucide-react";

interface ResultRowProps {
  Logo: LucideIcon;
  title: string;
  description: string;
}

const ResultRow = ({ Logo, description, title }: ResultRowProps) => {
  return (
    <div className="flex items-center">
      {/* logo */}
      <div className="me-4">
        <Logo className="text-primary size-5" />
      </div>
      {/* title */}
      <div className="text-foreground text-lg w-[220px] shrink-0">{title}</div>
      {/* description */}
      <div className="text-muted-foreground text-sm">{description}</div>
    </div>
  );
};

export default ResultRow;
