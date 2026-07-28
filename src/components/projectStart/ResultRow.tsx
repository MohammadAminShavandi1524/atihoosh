"use client";

import { LucideIcon } from "lucide-react";

interface ResultRowProps {
  Logo: LucideIcon;
  title: string;
  description: string;
}

const ResultRow = ({ Logo, description, title }: ResultRowProps) => {
  return (
    <>
      <div className="s:hidden flex items-center flex-wrap gap-y-2">
        <div className="flex items-center">
          {/* logo */}
          <div className="me-4">
            <Logo className="text-primary size-5" />
          </div>
          {/* title */}
          <div className="text-foreground w-[200px] shrink-0 text-lg">
            {title}
          </div>
        </div>

        {/* description */}
        <div className="text-muted-foreground text-sm flex-1 flex xss:justify-end xss:self-end shrink-0 min-w-20">{description}</div>
      </div>{" "}
      {/********* upper s: ************/}
      <div className="max-s:hidden flex items-center">
        {/* logo */}
        <div className="me-4">
          <Logo className="text-primary size-5" />
        </div>
        {/* title */}
        <div className="text-foreground w-[220px] shrink-0 text-lg">
          {title}
        </div>
        {/* description */}
        <div className="text-muted-foreground text-sm">{description}</div>
      </div>{" "}
    </>
  );
};

export default ResultRow;
