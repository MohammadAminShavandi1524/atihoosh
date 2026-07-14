import { cn } from "@/lib/utils";
import { ComponentPropsWithoutRef } from "react";

type BlogParagraphProps = ComponentPropsWithoutRef<"p">;

export function BlogParagraph({
  className,
  children,
  ...props
}: BlogParagraphProps) {
  return (
    <p
      className={cn(
        "text-muted-foreground mb-6 text-base leading-8 md:text-lg md:leading-9",
        className,
      )}
      {...props}
    >
      {children}
    </p>
  );
}
