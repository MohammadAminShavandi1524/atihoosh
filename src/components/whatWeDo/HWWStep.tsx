"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";

interface HWWStepProps {
  title: string;
  description: string;
  index: string;
}

const HWWStep = ({ title, description, index }: HWWStepProps) => {
  const [show, setShow] = useState(false);

  return (
    <div
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      className="z-10 flex max-w-xs flex-col items-center gap-y-3 md:gap-y-4"
    >
      {/* circle */}
      <div className="border-primary text-primary bg-tertiary flex size-12 items-center justify-center rounded-full border text-lg transition-all md:size-12">
        <span
          className={cn(
            "transition-all duration-400",
            show ? "opacity-100" : "opacity-0",
          )}
        >
          {index}
        </span>
      </div>

      {/* title */}
      <div className="text-foreground text-base md:text-[17px]">{title}</div>

      {/* description */}
      <div className="text-muted text-center text-sm leading-[1.8] max-xl:min-h-[68px] md:text-[15px] md:leading-normal">
        {description}
      </div>
    </div>
  );
};

export default HWWStep;
