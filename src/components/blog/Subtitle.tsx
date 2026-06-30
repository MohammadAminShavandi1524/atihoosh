import { cn } from "@/lib/utils";
import { ComponentPropsWithoutRef } from "react";

type BlogSubtitleProps = ComponentPropsWithoutRef<"h2">;

export function BlogSubtitle({
  className,
  children,
  ...props
}: BlogSubtitleProps) {
  return (
    <h2
      className={cn(
        "text-foreground mt-12 mb-5 text-2xl font-bold tracking-tight md:text-3xl",
        className,
      )}
      {...props}
    >
      {children}
    </h2>
  );
}
