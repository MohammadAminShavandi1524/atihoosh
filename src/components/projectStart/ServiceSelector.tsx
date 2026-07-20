"use client";

import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { useFormContext } from "react-hook-form";

import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import Image from "next/image";
import { FormField } from "../FormField";
import type { ProjectStartForm } from "@/lib/validations/projectStart";
import { createRequest } from "@/services/createRequest";
import { CustomButton } from "../ui/custom-button";
import { getServices, Service } from "@/lib/api/services";
import { MergedService, mergeServices } from "@/lib/utils/mergeServices";

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
    trigger,
    handleSubmit,
    formState: { errors },
  } = useFormContext<ProjectStartForm>();

  // const services = t.raw("items") as {
  //   id: number;
  //   title: string;
  //   desc: string;
  //   imageSrc: string;
  // }[];

  const selected = watch("services");
  console.log("🚀 ~ ServiceSelector ~ selected:", selected);

  const toggle = (service: MergedService) => {
    const current = selected ?? [];

    const ids = [service.enId, service.faId];

    const isSelected = ids.every((id) => current.includes(id));

    const updated = isSelected
      ? current.filter((id) => !ids.includes(id))
      : [...current, ...ids];

    setValue("services", updated, {
      shouldValidate: true,
      shouldDirty: true,
    });
  };

  //? services

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
    <div className="flex flex-col pt-10">
      {/* GRID */}
      <div className="grid grid-cols-1 gap-x-5 gap-y-5 md:grid-cols-2 lg:grid-cols-3">
        {services.map((item) => {
          const isActive =
            selected?.includes(item.enId) || selected?.includes(item.faId);

          return (
            <div
              key={item.id}
              onClick={() => toggle(item)}
              className={`relative flex h-[128px] w-[221px] cursor-pointer flex-col justify-between rounded-xl border p-4 transition-all duration-200 ${
                isActive
                  ? "border-primary bg-primary/5"
                  : "border-border bg-secondary-bg hover:border-muted-foreground"
              }`}
            >
              <div className="flex items-center gap-x-2.5">
                <Image
                  src={item.image}
                  alt={item.name[locale]}
                  width={30}
                  height={30}
                />

                <h3 className="text-[16px] font-semibold">
                  {item.name[locale]}
                </h3>
              </div>

              <p className="text-muted-foreground line-clamp-2 text-sm">
                {item.description[locale]}
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
        <CustomButton
          type="button"
          intent="secondary"
          variant="outline"
          onClick={() => setStep(1)}
          leftSection={<ArrowLeft className="size-4.5 pt-0.5 rtl:rotate-180" />}
          className="h-[44px] w-[240px] pe-3 font-medium shadow-sm"
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
          rightSection={
            <ArrowRight className="size-4.5 pt-0.5 rtl:rotate-180" />
          }
          className="h-[44px] w-[240px] ps-3 font-medium text-white"
        >
          {t("buttons.submit")}
        </CustomButton>
      </div>
    </div>
  );
}
