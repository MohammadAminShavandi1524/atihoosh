"use client";

import { cn } from "@/lib/utils";
import { RefObject, useEffect, useRef } from "react";
import { useLocale } from "next-intl";

type Props = {
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
  V_ClassName,
  O_ClassName,
  L_ClassName,
  Lv_ClassName,
  Le_ClassName,
}: Props) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const targetScroll = useRef(0);
  const currentScroll = useRef(0);

  const locale = useLocale();
  const isRtl = locale === "fa";

  useEffect(() => {
    let frame: number;

    const animate = () => {
      const diff = targetScroll.current - currentScroll.current;

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
      if (!footerRef.current || !scrollRef.current) return;

      const rect = footerRef.current.getBoundingClientRect();

      // ✅ RTL FIX HERE
      const raw = (e.clientX - rect.left) / rect.width;
      let progress = isRtl ? 1 - raw : raw;

      progress = Math.max(0, Math.min(1, progress));

      if (progress < deadZoneStart) progress = 0;
      if (progress > deadZoneEnd) progress = 1;

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
  }, [footerRef, speed, offset, breakpoint, scrollRatio, bias, deadZoneStart, deadZoneEnd, isRtl]);

  return (
    <div ref={scrollRef} style={{ height }} className="overflow-hidden select-none">
      <div className="flex flex-col">
        <span className={topOffset}>
          <span className={cn(E_ClassName)}>E</span>
          <span className={cn(V_ClassName)}>V</span>
          <span className={cn(O_ClassName)}>O</span>
          <span className={cn(L_ClassName)}>L</span>
          <span className={cn(Lv_ClassName)}>V</span>
          <span className={cn(Le_ClassName)}>E</span>
        </span>

        <span className={topOffset}>
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