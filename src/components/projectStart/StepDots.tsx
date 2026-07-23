"use client";

import { Dispatch, SetStateAction } from "react";
import { useTranslations } from "next-intl";
import Step from "./Step";
import { cn } from "@/lib/utils";

interface StepsDotsProps {
  step: number;
  setStep: Dispatch<SetStateAction<number>>;
}

const StepDots = ({ step, setStep }: StepsDotsProps) => {
  const t = useTranslations("projectStart.steps");

  return (
    <div className="relative flex w-full max-w-[760px] items-start justify-between">
      {/* line 1 */}
      <div
        className={cn(
          "bg-foreground/10 absolute top-5.5 s:top-5.75 sm:top-6 lg:top-6.25 h-px",
          "start-[9%] end-[50%]",
          step !== 1 && "bg-success",
        )}
      />

      {/* line 2 */}
      <div
        className={cn(
          "bg-foreground/10 absolute top-5.5 s:top-5.75 sm:top-6 lg:top-6.25 h-px",
          "start-[50%] end-[9%]",
          step === 3 && "bg-success",
        )}
      />

      <Step step={step} setStep={setStep} stepNumber={1} label={t("step1")} />

      <Step step={step} setStep={setStep} stepNumber={2} label={t("step2")} />

      <Step step={step} setStep={setStep} stepNumber={3} label={t("step3")} />
    </div>
  );
};

export default StepDots;
