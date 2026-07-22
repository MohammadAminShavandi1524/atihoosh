"use client";

import { cn } from "@/lib/utils";
import { useLocale } from "next-intl";

type Props = {
  height?: number;

  E_ClassName?: string;
  V_ClassName?: string;
  O_ClassName?: string;
  L_ClassName?: string;
  Lv_ClassName?: string;
  Le_ClassName?: string;
};

export default function StaticTextColumn({
  height = 158,

  E_ClassName,
  V_ClassName,
  O_ClassName,
  L_ClassName,
  Lv_ClassName,
  Le_ClassName,
}: Props) {
  const locale = useLocale();

  return (
    <div
      style={{
        height,
        ...(locale === "en"
          ? { fontFamily: "var(--font-inter)" }
          : {}),
      }}
      className="overflow-hidden select-none"
    >
      <div className="flex flex-col">
        <span>
          <span className={cn(E_ClassName)}>E</span>
          <span className={cn(V_ClassName)}>V</span>
          <span className={cn(O_ClassName)}>O</span>
          <span className={cn(L_ClassName)}>L</span>
          <span className={cn(Lv_ClassName)}>V</span>
          <span className={cn(Le_ClassName)}>E</span>
        </span>

        <span>
          <span className={cn(E_ClassName)}>E</span>
          <span className={cn(V_ClassName)}>V</span>
          <span className={cn(O_ClassName)}>O</span>
          <span className={cn(L_ClassName)}>L</span>
          <span className={cn(Lv_ClassName)}>V</span>
          <span className={cn(Le_ClassName)}>E</span>
        </span>
      </div>
    </div>
  );
}