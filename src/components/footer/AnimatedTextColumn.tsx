"use client";

import { cn } from "@/lib/utils";
import { RefObject, useEffect, useRef } from "react";

type AnimatedTextColumnProps = {
  footerRef: RefObject<HTMLDivElement | null>;

  height?: number;

  topOffset?: string;

  speed?: number;

  offset?: number;

  breakpoint?: number;

  scrollRatio?: number;

  bias?: "left" | "right";

  deadZoneStart?: number;

  deadZoneEnd?: number;

  E_ClassName?: string;
  V_ClassName?: string;
  O_ClassName?: string;
  L_ClassName?: string;
  Lv_ClassName?: string;
  Le_ClassName?: string;
};

export default function AnimatedTextColumn({
  footerRef,

  height = 158,

  topOffset = "-translate-y-[0.1em]",

  speed = 0.02,

  offset = 40,

  breakpoint = 0.5,

  scrollRatio = 0.9,

  bias = "right",

  deadZoneStart = 0.05,

  deadZoneEnd = 0.95,

  E_ClassName,
  Le_ClassName,
  L_ClassName,
  Lv_ClassName,
  O_ClassName,
  V_ClassName,
}: AnimatedTextColumnProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const targetScroll = useRef(0);
  const currentScroll = useRef(0);

  useEffect(() => {
    let frame: number;

    const animate = () => {
      const diff = targetScroll.current - currentScroll.current;

      // جلوگیری از لرزش انتهای حرکت
      if (Math.abs(diff) < 2) {
        currentScroll.current = targetScroll.current;
      } else {
        currentScroll.current += diff * speed;
      }

      if (scrollRef.current) {
        scrollRef.current.scrollTop = Math.floor(currentScroll.current);
      }

      frame = requestAnimationFrame(animate);
    };

    animate();

    const handleMouseMove = (e: MouseEvent) => {
      if (!footerRef.current || !scrollRef.current) {
        return;
      }

      const rect = footerRef.current.getBoundingClientRect();

      let progress = (e.clientX - rect.left) / rect.width;

      // Clamp
      progress = Math.max(0, Math.min(1, progress));

      // Dead Zones
      if (progress < deadZoneStart) progress = 0;
      if (progress > deadZoneEnd) progress = 1;

      // Curve
      if (bias === "left") {
        if (progress <= breakpoint) {
          progress = (progress / breakpoint) * scrollRatio;
        } else {
          progress =
            scrollRatio +
            ((progress - breakpoint) / (1 - breakpoint)) * (1 - scrollRatio);
        }
      } else {
        if (progress <= 1 - breakpoint) {
          progress = (progress / (1 - breakpoint)) * (1 - scrollRatio);
        } else {
          progress =
            1 -
            scrollRatio +
            ((progress - (1 - breakpoint)) / breakpoint) * scrollRatio;
        }
      }

      const maxScroll = Math.max(
        0,
        scrollRef.current.scrollHeight -
          scrollRef.current.clientHeight -
          offset,
      );

      const nextTarget = progress * maxScroll;

      // جلوگیری از آپدیت‌های خیلی ریز
      if (Math.abs(nextTarget - targetScroll.current) > 1) {
        targetScroll.current = nextTarget;
      }
    };

    const footer = footerRef.current;

    footer?.addEventListener("mousemove", handleMouseMove);

    return () => {
      cancelAnimationFrame(frame);

      footer?.removeEventListener("mousemove", handleMouseMove);
    };
  }, [
    footerRef,
    speed,
    offset,
    breakpoint,
    scrollRatio,
    bias,
    deadZoneStart,
    deadZoneEnd,
  ]);

  return (
    <div
      ref={scrollRef}
      style={{ height }}
      className="overflow-hidden select-none"
    >
      <div className="flex flex-col">
        <span className={topOffset}>
          <span className={cn(E_ClassName, "")}>E</span>
          <span className={cn(V_ClassName, "")}>V</span>
          <span className={cn(O_ClassName, "")}>O</span>
          <span className={cn(L_ClassName, "")}>L</span>
          <span className={cn(Lv_ClassName, "")}>V</span>
          <span className={cn(Le_ClassName, "")}>E</span>
        </span>
        <span className={topOffset}>
          <span className={cn(E_ClassName, "")}>E</span>
          <span className={cn(V_ClassName, "")}>V</span>
          <span className={cn(O_ClassName, "")}>O</span>
          <span className={cn(L_ClassName, "")}>L</span>
          <span className={cn(Lv_ClassName, "")}>V</span>
          <span className={cn(Le_ClassName, "")}>E</span>
        </span>
      </div>
    </div>
  );
}
