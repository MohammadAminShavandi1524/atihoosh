"use client";

import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

interface SubmitButtonProps {
  isUploading: boolean;
  text: string;
}

const SubmitButton = ({ isUploading, text }: SubmitButtonProps) => {
  const t = useTranslations("Talent.ApplyForm");

  return (
    <button
      type="submit"
      disabled={isUploading}
      className={cn(
        "bg-primary flex h-11 w-full cursor-pointer items-center justify-center rounded-lg px-6 text-sm font-semibold text-[#f8fafc] transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50 sm:h-12 sm:text-base lg:h-13 dark:text-[#06151a]",
      )}
    >
      {isUploading ? t("uploading") : text}
    </button>
  );
};

export default SubmitButton;
