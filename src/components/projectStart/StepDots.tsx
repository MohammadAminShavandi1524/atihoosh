"use client";

import { Dispatch, SetStateAction } from "react";
import Step from "./Step";
import { cn } from "@/lib/utils";

interface StepsDotsProps {
  step: number;
  setStep: Dispatch<SetStateAction<number>>;
}

const StepDots = ({ step, setStep }: StepsDotsProps) => {
  return (
    <div className="relative flex items-center gap-x-45">
      {/* step 1-2 line */}
      <div
        className={cn(
          "bg-foreground/10 absolute top-6.25 h-px w-4/10 ltr:left-19 rtl:right-19",
          step !== 1 && "bg-primary",
        )}
      />
      {/* step 2-3 line */}
      <div
        className={cn(
          "bg-foreground/10 absolute top-6.25 h-px w-4/10 ltr:right-19 rtl:left-19",
          step === 3 && "bg-primary",
        )}
      />
      {/* step 1*/}
      <Step
        step={step}
        setStep={setStep}
        stepNumber={1}
        label="Your information"
      />

      {/* step 2*/}
      <Step
        step={step}
        setStep={setStep}
        stepNumber={2}
        label="Select Product"
      />

      {/* step 3*/}
      <Step step={step} setStep={setStep} stepNumber={3} label="Confirmation" />
    </div>
  );
};

export default StepDots;
