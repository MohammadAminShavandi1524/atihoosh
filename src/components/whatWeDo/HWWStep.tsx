"use client";

interface HWWStepProps {
  title: string;
  description: string;
}

const HWWStep = ({ title, description }: HWWStepProps) => {
  return (
    <div className="z-10 flex flex-col items-center gap-y-4">
      {/* circle */}
      <div className="border-primary bg-tertiary size-12 rounded-full border" />
      {/* title */}
      <div className="text-[17px] text-foreground">{title}</div>
      {/* description */}
      <div className="text-center text-[15px] text-muted">
        {description}
      </div>
    </div>
  );
};

export default HWWStep;
