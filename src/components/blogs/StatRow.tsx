"use client";

interface StatRowProps {
  number: string;
  label: string;
}

const StatRow = ({ number, label }: StatRowProps) => {
  return (
    <div className="bg-background xss:min-h-30 s:min-h-32 flex min-h-28 flex-col items-center justify-center gap-y-2 px-4 py-6 text-center transition-colors md:min-h-34 lg:min-h-36 lg:w-72 xl:w-80 2xl:w-90">
      <span
        dir="ltr"
        className="text-primary xss:text-[26px] s:text-[30px] text-[24px] leading-none font-semibold sm:text-[32px] md:text-[34px] lg:text-[36px]"
      >
        {number}
      </span>

      <span className="text-muted-foreground xss:text-sm text-xs leading-6 sm:text-[15px] md:text-base lg:text-lg">
        {label}
      </span>
    </div>
  );
};

export default StatRow;
