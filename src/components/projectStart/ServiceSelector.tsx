"use client";

import { Dispatch, SetStateAction } from "react";
import { useTranslations } from "next-intl";
import { useFormContext } from "react-hook-form";

import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import Image from "next/image";

import { FormField } from "../FormField";
import type { ProjectStartForm } from "@/lib/validations/projectStart";

interface ServiceSelectorProps {
  step: number;
  setStep: Dispatch<SetStateAction<number>>;
}

export default function ServiceSelector({ setStep }: ServiceSelectorProps) {
  const t = useTranslations("projectStart.services");

  const {
    watch,
    setValue,
    register,
    trigger,
    formState: { errors },
  } = useFormContext<ProjectStartForm>();

  const services = t.raw("items") as {
    id: number;
    title: string;
    desc: string;
    imageSrc: string;
  }[];

  const selected = watch("services");

  const toggle = (id: number) => {
    const current = selected ?? [];

    const updated = current.includes(id)
      ? current.filter((item) => item !== id)
      : [...current, id];

    setValue("services", updated, {
      shouldValidate: true,
      shouldDirty: true,
    });
  };

  return (
    <div className="flex flex-col pt-10">
      {/* GRID */}
      <div className="grid grid-cols-1 gap-x-5 gap-y-5 md:grid-cols-2 lg:grid-cols-3">
        {services.map((item) => {
          const isActive = selected?.includes(item.id);

          return (
            <div
              key={item.id}
              onClick={() => toggle(item.id)}
              className={`relative flex h-[128px] w-[221px] cursor-pointer flex-col justify-between rounded-xl border p-4 transition-all duration-200 ${
                isActive
                  ? "border-primary bg-primary/5"
                  : "border-border bg-secondary-bg hover:border-muted-foreground"
              }`}
            >
              <div className="flex items-center gap-x-2.5">
                <Image
                  src={item.imageSrc}
                  alt={item.title}
                  width={30}
                  height={30}
                />

                <h3 className="text-[16px] font-semibold">{item.title}</h3>
              </div>

              <p className="text-muted-foreground line-clamp-2 text-sm">
                {item.desc}
              </p>
            </div>
          );
        })}
      </div>

      {/* description */}

      <FormField
        as="textarea"
        label={t("description")}
        placeholder={t("descriptionPlaceholder")}
        register={register("description")}
        error={errors.description}
        containerClassName="mt-6"
      />

      {/* buttons */}

      <div className="mt-6 flex gap-x-4">
        <button
          type="button"
          onClick={() => setStep(1)}
          className="border-border text-muted-foreground hover:text-foreground hover:border-muted-foreground shadow-border bg-secondary-bg flex h-[44px] w-[240px] cursor-pointer items-center justify-center gap-x-1 rounded-md border pe-3 shadow-sm transition-all"
        >
          <ArrowLeft className="size-4.5 pt-0.5 rtl:rotate-180" />

          <span className="font-medium">{t("buttons.back")}</span>
        </button>

        <button
          type="button"
          onClick={async () => {
            const isValid = await trigger("services");

            if (!isValid) return;

            setStep(3);
          }}
          className="bg-primary hover:bg-primary-hover flex h-[44px] w-[240px] cursor-pointer items-center justify-center gap-x-1 rounded-md ps-3 font-medium transition-all"
        >
          <span>{t("buttons.continue")}</span>

          <ArrowRight className="size-4.5 pt-0.5 rtl:rotate-180" />
        </button>
      </div>
    </div>
  );
}
