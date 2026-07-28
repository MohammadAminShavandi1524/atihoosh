"use client";

import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { useFormContext } from "react-hook-form";

import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";

import { FormField } from "../FormField";
import { CustomButton } from "../ui/custom-button";

import type { ProjectStartForm } from "@/lib/validations/projectStart";
import { createRequest } from "@/services/createRequest";
import { getServices } from "@/lib/api/services";
import { MergedService, mergeServices } from "@/lib/utils/mergeServices";
import { cn } from "@/lib/utils";

interface ServiceSelectorProps {
  step: number;
  setStep: Dispatch<SetStateAction<number>>;
}

export default function ServiceSelector({ setStep }: ServiceSelectorProps) {
  const t = useTranslations("projectStart.services");
  const locale = useLocale() as "fa" | "en";

  const {
    watch,
    setValue,
    register,
    handleSubmit,
    formState: { errors },
  } = useFormContext<ProjectStartForm>();

  const selected = watch("services") ?? [];

  const toggle = (service: MergedService) => {
    const ids = [service.enId, service.faId];

    const isSelected = ids.every((id) => selected.includes(id));

    const updated = isSelected
      ? selected.filter((id) => !ids.includes(id))
      : [...selected, ...ids];

    setValue("services", updated, {
      shouldValidate: true,
      shouldDirty: true,
    });
  };

  const [services, setServices] = useState<MergedService[]>([]);

  useEffect(() => {
    async function fetchServices() {
      const [faServices, enServices] = await Promise.all([
        getServices("fa"),
        getServices("en"),
      ]);

      setServices(mergeServices(faServices, enServices));
    }

    fetchServices();
  }, []);
  return (
    <div className="flex w-full flex-col pt-4 sm:pt-6 lg:pt-8">
      {/* GRID */}
      <div className="grid grid-cols-1 gap-3 xl:gap-3.5 2xl:gap-4 sm:grid-cols-2 sm:gap-5 xl:grid-cols-3">
        {services.map((item) => {
          const isActive =
            selected.includes(item.enId) || selected.includes(item.faId);

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => toggle(item)}
              className={cn(
                "border-border bg-secondary-bg relative flex min-h-[120px] w-full cursor-pointer flex-col justify-between rounded-xl border p-3 xl:p-3.5 2xl:p-4 text-start transition-all duration-200",
                "hover:border-primary/60 hover:-translate-y-0.5",
                isActive &&
                  "border-primary bg-primary/5 ring-primary/20 ring-2",
              )}
            >
              {/* Header */}
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 flex size-11 shrink-0 items-center justify-center rounded-lg">
                  <Image
                    src={item.image}
                    alt={item.name[locale]}
                    width={28}
                    height={28}
                    className="object-contain"
                  />
                </div>

                <h3 className="line-clamp-2 text-sm font-semibold sm:text-[15px] xl:text-base">
                  {item.name[locale]}
                </h3>
              </div>

              {/* Description */}
              <p className="text-muted-foreground mt-4 line-clamp-2 text-xs leading-6 sm:text-sm">
                {item.description[locale]}
              </p>

              
            </button>
          );
        })}
      </div>
      {/* Description */}
      <FormField
        as="textarea"
        label={t("description")}
        placeholder={t("descriptionPlaceholder")}
        register={register("description")}
        error={errors.description}
        containerClassName="mt-6 lg:mt-6 lg:hidden 2xl:flex"
      />{" "}
      {/* Buttons */}
      <div className="mt-6 flex flex-col-reverse gap-3 sm:mt-8 lg:mt-6 xl:mt-12 2xl:mt-6 sm:flex-row">
        <CustomButton
          type="button"
          intent="secondary"
          variant="outline"
          onClick={() => setStep(1)}
          leftSection={<ArrowLeft className="size-4 sm:size-4.5 pt-px sm:pt-0 rtl:rotate-180" />}
          className="h-11 w-full font-medium shadow-sm sm:w-52 lg:w-60"
        >
          {t("buttons.back")}
        </CustomButton>

        <CustomButton
          type="button"
          intent="primary"
          variant="solid"
          onClick={handleSubmit(async (data) => {
            try {
              await createRequest(locale, data);
              setStep(3);
            } catch (error) {
              console.error(error);
            }
          })}
          rightSection={<ArrowRight className=" rtl:rotate-180 size-4 sm:size-4.5 pt-px sm:pt-0" />}
          className="h-11 w-full font-medium text-white sm:w-52 lg:w-60"
        >
          {t("buttons.submit")}
        </CustomButton>
      </div>
    </div>
  );
}
