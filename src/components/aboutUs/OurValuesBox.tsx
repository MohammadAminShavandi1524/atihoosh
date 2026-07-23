"use client";

interface OurValuesBoxProps {
  title: string;
  description?: string;
}

const OurValuesBox = ({ description, title }: OurValuesBoxProps) => {
  return (
    <div className="bg-secondary-bg xss:p-6 xss:py-8 xss:min-h-[132px] s:min-h-[165px] flex min-h-[118px] w-full items-center rounded-xl p-5 py-7 md:min-h-[190px] md:p-6 md:py-9 xl:min-h-0 xl:p-5.5 xl:py-11">
      <div className="xss:text-[24px] text-[22px] leading-[1.4] md:text-[26px] xl:text-[28px]">
        {title}
      </div>
    </div>
  );
};

export default OurValuesBox;
