"use client";

import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Upload } from "lucide-react";
import SubmitButton from "./SubmitButton";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { applySchema, type ApplySchema } from "@/lib/validations/talent";
import { FormField } from "../FormField";
import { sendResume } from "@/services/support";

interface ApplyFormProps {}

const ApplyForm = ({}: ApplyFormProps) => {
  const { theme } = useTheme();
  const locale = useLocale();
  const t = useTranslations("Talent.ApplyForm");
  const tValidation = useTranslations("Talent.Validation");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ApplySchema>({
    resolver: zodResolver(applySchema(tValidation)),
    defaultValues: {
      full_name: "",
      phone: "",
      email: "",
    },
  });

  const [file, setFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [resumeUrl, setResumeUrl] = useState("");
  const [resumeError, setResumeError] = useState("");

  const MAX_FILE_SIZE = 5 * 1024 * 1024;

  const uploadResume = async () => {
    if (!file) return "";

    setIsUploading(true);

    try {
      const formData = new FormData();

      formData.append("file", file);

      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      setResumeUrl(data.url);

      return data.url;
    } finally {
      setIsUploading(false);
    }
  };

  const onSubmit = async (values: ApplySchema) => {
    setResumeError("");

    if (!file) {
      setResumeError(tValidation("resumeRequired"));
      return;
    }

    let resume = resumeUrl;

    if (!resume) {
      resume = await uploadResume();
    }

    if (!resume) {
      setResumeError(tValidation("resumeUploadFailed"));
      return;
    }

    try {
      await sendResume(locale, {
        full_name: values.full_name,
        phone: values.phone,
        email: values.email,
        file: resume,
      });

      toast.success(t("success"));

      reset();
      setFile(null);
      setResumeUrl("");
    } catch {
      setResumeError(tValidation("resumeUploadFailed"));
    }
  };

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="mt-14 mb-14 flex justify-center sm:mt-16 sm:mb-16 lg:mt-20 lg:mb-20 xl:mt-24 xl:mb-24">
      <div className="w90 flex max-w-full flex-col items-center sm:max-w-[90%] lg:max-w-[850px] xl:max-w-[900px]">
        {/* badge */}
        <span className="text-primary text-xs font-medium tracking-[0.15em] uppercase sm:text-sm">
          {t("badge")}
        </span>

        {/* title */}
        <h2 className="xss:text-[34px] s:text-[38px] mt-4 text-center text-[30px] leading-[1.2] font-bold md:mt-5 md:text-[40px]">
          {t("title")}
        </h2>

        {/* description */}
        <p className="text-muted-foreground mt-4 mb-8 w-full text-center text-base leading-[1.9] sm:mb-10 sm:max-w-[90%] sm:text-[17px] lg:mb-12 lg:max-w-[700px] lg:text-lg">
          {t("description")}
        </p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="s:bg-secondary-bg s:border-foreground/8 s:p-6 w-full space-y-5 rounded-xl s:border p-0 sm:space-y-6 sm:p-8 lg:p-10 max-s:mt-6"
        >
          {" "}
          <div className="grid grid-cols-1 gap-5 mlg:grid-cols-2 md:gap-6">
            <FormField
              label={t("fullName")}
              placeholder={t("fullNamePlaceholder")}
              {...register("full_name")}
              error={errors.full_name}
            />

            <FormField
              label={t("phone")}
              type="tel"
              dir="ltr"
              placeholder={t("phonePlaceholder")}
              {...register("phone")}
              error={errors.phone}
            />
          </div>
          <FormField
            label={t("email")}
            type="email"
            dir="ltr"
            placeholder={t("emailPlaceholder")}
            {...register("email")}
            error={errors.email}
          />
          <div className="flex flex-col gap-y-3">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <label className="text-foreground ps-1.5 text-sm font-semibold">
                {t("resume")}
              </label>

              {resumeError && (
                <p className="text-sm text-red-500">{resumeError}</p>
              )}
            </div>

            <input
              id="resume-upload"
              type="file"
              accept=".pdf"
              className="hidden"
              onChange={(e) => {
                const selected = e.target.files?.[0];

                if (!selected) return;

                if (selected.type !== "application/pdf") {
                  setResumeError(tValidation("resumeOnlyPdf"));
                  setFile(null);
                  return;
                }

                if (selected.size > MAX_FILE_SIZE) {
                  setResumeError(tValidation("resumeTooLarge"));
                  setFile(null);
                  return;
                }

                setFile(selected);
                setResumeUrl("");
                setResumeError("");
              }}
            />

            <label
              htmlFor="resume-upload"
              className={cn(
                "border-foreground/20 hover:border-primary mb-2 flex min-h-[220px] w-full cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed px-4 py-8 text-center transition sm:mb-4 sm:min-h-[240px]",
                theme === "dark" ? "bg-[#151515]" : "bg-[#F5F5F5]",
              )}
            >
              <div className="bg-primary/50 mb-3 flex size-10 items-center justify-center rounded-lg sm:size-11">
                <Upload className="text-primary size-5" />
              </div>

              <div className="mb-2 text-base sm:text-lg">
                <span className="text-primary text-lg sm:text-xl">
                  {t("resumeUploadAction")}
                </span>
              </div>

              <div className="text-muted-foreground text-sm">
                {t("resumeHint")}
              </div>

              {file && (
                <div className="mt-5 rounded-lg bg-green-500/10 px-3 py-2 text-center text-sm text-green-600">
                  {file.name}
                </div>
              )}
            </label>
          </div>
          <SubmitButton isUploading={isUploading} text={t("button")} />
          <p className="text-muted-foreground text-center text-xs leading-[1.8] sm:text-sm">
            {t("privacy")}
          </p>
        </form>
      </div>
    </section>
  );
};

export default ApplyForm;
