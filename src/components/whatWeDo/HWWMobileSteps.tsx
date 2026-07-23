"use client";

interface HWWMobileStepsProps {
  steps: {
    title: string;
    description: string;
    index: string;
  }[];
}

const HWWMobileSteps = ({ steps }: HWWMobileStepsProps) => {
  return (
    <div className="relative flex flex-col gap-y-8 md:gap-y-10">
      {/* line */}
      <div className="bg-primary absolute top-4 bottom-10 s:bottom-4 start-6 w-px" />

      {steps.map((step) => (
        <div key={step.index} className="relative flex  s:items-center gap-x-4.5 s:gap-x-6">
          {/* circle */}
          <div className="bg-tertiary border-primary text-primary max-s:mt-0.5 relative z-10 flex size-12 shrink-0 items-center justify-center rounded-full border text-lg">
            {step.index}
          </div>

          {/* content */}
          <div className="flex flex-col gap-y-1.5 md:gap-y-2">
            <div className="text-foreground text-lg">{step.title}</div>

            <div className="text-muted text-sm leading-[1.8] max-s:min-h-[51px]">
              {step.description}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HWWMobileSteps;
