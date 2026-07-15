"use client";

import { cn } from "@/lib/utils";
import { TextareaHTMLAttributes, InputHTMLAttributes } from "react";

import { FieldError, UseFormRegisterReturn } from "react-hook-form";

interface BaseProps {
  label: string;
  containerClassName?: string;
  error?: FieldError;
  register?: UseFormRegisterReturn;
}

interface InputProps extends BaseProps, InputHTMLAttributes<HTMLInputElement> {
  as?: "input";
}

interface TextareaProps
  extends BaseProps, TextareaHTMLAttributes<HTMLTextAreaElement> {
  as: "textarea";
}

type FormFieldProps = InputProps | TextareaProps;

export const FormField = (props: FormFieldProps) => {
  const {
    label,
    containerClassName,
    error,
    register,
    as = "input",
    ...rest
  } = props;

  return (
    <div className={cn("flex flex-col gap-3", containerClassName)}>
      <div className="flex items-center justify-between px-1.5">
        <label className="text-foreground text-sm font-semibold">{label}</label>
        {error && <p className="text-xs text-red-500 ">{error.message}</p>}
      </div>

      {as === "textarea" ? (
        <textarea
          {...(rest as TextareaHTMLAttributes<HTMLTextAreaElement>)}
          {...register}
          className={cn(
            "bg-secondary-bg text-foreground placeholder:text-muted-foreground h-24 w-full resize-none rounded-lg border px-4 py-2.5 transition-colors outline-none rtl:text-right",

            error
              ? "border-red-500 focus:border-red-500"
              : "border-foreground/8 focus:border-primary",
          )}
        />
      ) : (
        <input
          {...(rest as InputHTMLAttributes<HTMLInputElement>)}
          {...register}
          className={cn(
            "bg-secondary-bg text-foreground placeholder:text-muted-foreground h-12 w-full rounded-lg border px-4 transition-colors outline-none rtl:text-right",

            error
              ? "border-red-500 focus:border-red-500"
              : "border-foreground/8 focus:border-primary",
          )}
        />
      )}
    </div>
  );
};
