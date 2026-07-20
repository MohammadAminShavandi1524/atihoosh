"use client";

import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";

interface SubmitButtonProps {
  isUploading: boolean;
  text: string;
}

const SubmitButton = ({ isUploading, text }: SubmitButtonProps) => {
  const { theme } = useTheme();
  const t = useTranslations("Talent.ApplyForm");

  return (
    <button
      type="submit"
      disabled={isUploading}
      className={cn(
        "bg-primary flex h-13 w-full cursor-pointer items-center justify-center rounded-lg font-semibold text-[#f8fafc] transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50 dark:text-[#06151a]",
      )}
    >
      {isUploading ? t("uploading") : text}
    </button>
  );
};

export default SubmitButton;
