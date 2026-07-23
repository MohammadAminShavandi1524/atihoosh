"use client";

import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import { Dispatch, SetStateAction } from "react";

interface StepProps {
  label: string;
  stepNumber: number;
  step: number;
  setStep: Dispatch<SetStateAction<number>>;
}

const Step = ({ stepNumber, label, step }: StepProps) => {
  const activeStep = stepNumber === step;
  const completedStep = stepNumber < step;

  return (
    <div className="s:w-[100px] relative z-10 flex w-[88px] flex-col items-center gap-y-3 text-center sm:w-[120px] lg:min-w-34 lg:gap-y-4.5">
      <button
        className={cn(
          "bg-tertiary border-primary flex size-11 items-center justify-center rounded-full border text-sm transition-colors sm:size-12 lg:size-12.5 lg:text-base",
          activeStep && "bg-primary text-white",
          completedStep && "border-success bg-success text-white",
        )}
      >
        {completedStep ? (
          <Check className="size-5 lg:size-6" strokeWidth={2.5} />
        ) : (
          stepNumber
        )}
      </button>

      <div
        className={cn(
          "text-muted-foreground s:text-sm text-xs leading-[1.45] lg:text-base",
          activeStep && "text-primary ",
          completedStep && " text-success",
        )}
      >
        {label}
      </div>
    </div>
  );
};

export default Step;
