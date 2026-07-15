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
  const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB

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
    } catch (error) {
      // console.error(error);
      return "";
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
    } catch (error) {
      // console.error(error);
      setResumeError(tValidation("resumeUploadFailed"));
    }
  };

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="mt-24 mb-24 flex flex-col items-center">
      <div className="flex max-w-200 flex-col items-center">
        <span className="text-primary text-sm font-medium tracking-[0.15em] uppercase">
          {t("badge")}
        </span>

        <h2 className="mt-5 text-4xl font-bold">{t("title")}</h2>

        <p className="text-muted-foreground mt-4 mb-12 text-lg">
          {t("description")}
        </p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-secondary-bg border-foreground/8 w-full space-y-6 rounded-xl border p-10"
        >
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
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
            <div className="flex items-center justify-between">
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

                // check type
                if (selected.type !== "application/pdf") {
                  setResumeError(tValidation("resumeOnlyPdf"));
                  setFile(null);
                  return;
                }

                // check size
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
                "border-foreground/20 hover:border-primary mb-4 flex min-h-45 w-full cursor-pointer flex-col items-center rounded-xl border-2 border-dashed pt-8 transition",
                theme === "dark" ? "bg-[#151515]" : "bg-[#F5F5F5]",
              )}
            >
              <div className="bg-primary/50 mb-2 flex size-11 items-center justify-center rounded-lg">
                <Upload className="text-primary size-5" />
              </div>

              <div className="mb-2 text-lg">
                {/* <span>{t("resumeUploadText")} </span> */}

                <span className="text-primary text-xl">
                  {t("resumeUploadAction")}
                </span>
              </div>

              <div className="text-muted-foreground text-sm">
                {t("resumeHint")}
              </div>

              {file && (
                <div className="mt-6 mb-6 rounded-lg bg-green-500/10 px-3 py-2 text-sm text-green-600">
                  {file.name}
                </div>
              )}
            </label>
          </div>

          <SubmitButton isUploading={isUploading} text={t("button")} />

          <p className="text-muted-foreground text-center text-sm">
            {t("privacy")}
          </p>
        </form>
      </div>
    </div>
  );
};

export default ApplyForm;
