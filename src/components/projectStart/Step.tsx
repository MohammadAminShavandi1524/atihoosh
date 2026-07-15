"use client";

import { cn } from "@/lib/utils";
import { Dispatch, SetStateAction } from "react";

interface StepProps {
  label: string;
  stepNumber: number;
  step: number;
  setStep: Dispatch<SetStateAction<number>>;
}

const Step = ({ stepNumber, label, setStep, step }: StepProps) => {
  const activeStep = stepNumber === step;
  return (
    <div className="relative z-10 flex min-w-34 flex-col items-center gap-y-4.5">
      {/* dot */}
      <button
        className={cn(
          "bg-tertiary border-primary size-12.5 rounded-full border",
          activeStep && "bg-primary",
        )}
        // onClick={() => setStep(stepNumber)}
      >
        {stepNumber}
      </button>
      {/* title */}
      <div className={cn("", activeStep && "text-primary")}>{label}</div>
    </div>
  );
};

export default Step;
