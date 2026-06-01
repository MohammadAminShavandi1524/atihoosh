"use client";

import { useRef } from "react";
import FooterContent from "./FooterContent";
import AnimatedTextColumn from "./AnimatedTextColumn";

export default function Footer() {
  const footerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={footerRef} className="w90 grid grid-cols-2 pt-30 relative">
      <FooterContent />
    
      <div className="flex  items-end justify-start -rotate-90 absolute top-36 -right-0   ">
        <div className="flex h-fit  flex-col gap-2 text-[196px] leading-[170px] font-bold">
          <AnimatedTextColumn
            footerRef={footerRef}
            height={50}
            E_ClassName="opacity-0"
            V_ClassName=""
            O_ClassName="opacity-0"
            L_ClassName=""
            Lv_ClassName="opacity-0"
            Le_ClassName="opacity-0"
          />
          <AnimatedTextColumn
            footerRef={footerRef}
            height={50}
            V_ClassName="opacity-0"
            Le_ClassName="opacity-0"
          />
          <AnimatedTextColumn
            footerRef={footerRef}
            height={50}
            O_ClassName="opacity-0"
          />
          <AnimatedTextColumn
            footerRef={footerRef}
            height={78}
            V_ClassName="opacity-0"
            Le_ClassName="opacity-0"
          />
          {/* center */}
          <AnimatedTextColumn footerRef={footerRef} height={158} />
          {/*  */}
          <AnimatedTextColumn
            topOffset="-translate-y-[calc(0.1em+79px)]"
            footerRef={footerRef}
            height={78}
            offset={78 + 40}
            O_ClassName="opacity-0"
          />
          <AnimatedTextColumn
            topOffset="-translate-y-[calc(0.1em+129px)]"
            footerRef={footerRef}
            height={50}
            offset={129 + 40}
            Lv_ClassName="opacity-0"
          />
          <AnimatedTextColumn
            topOffset="-translate-y-[calc(0.1em+129px)]"
            footerRef={footerRef}
            height={50}
            offset={129 + 40}
            E_ClassName="opacity-0"
            L_ClassName="opacity-0"
          />
          <AnimatedTextColumn
            topOffset="-translate-y-[calc(0.1em+129px)]"
            footerRef={footerRef}
            height={50}
            offset={129 + 40}
            V_ClassName="opacity-0"
            O_ClassName="opacity-0"
            Le_ClassName="opacity-0"
          />
        </div>
      </div>
    </div>
  );
}
