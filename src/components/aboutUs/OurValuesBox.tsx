"use client";

import { LucideIcon } from "lucide-react";

interface OurValuesBoxProps {
 
  title: string;
  description?: string;
}

const OurValuesBox = ({ description, title }: OurValuesBoxProps) => {
  return (
    <div className="bg-secondary-bg flex py-11 w-full flex items-center rounded-xl p-5.5">
   

      {/* title */}
      <div className="text-[28px]">{title}</div>

      {/* description */}
      {/* <div className="text-muted hidden">{description}</div> */}
    </div>
  );
};

export default OurValuesBox;
