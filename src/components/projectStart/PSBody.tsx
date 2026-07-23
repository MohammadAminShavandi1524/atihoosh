"use client";

import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { useFormContext } from "react-hook-form";

import StepDots from "./StepDots";
import ServiceSelector from "./ServiceSelector";
import ResultRow from "./ResultRow";

import {
  ArrowLeft,
  ArrowRight,
  ClockFading,
  Package,
  Phone,
  User,
} from "lucide-react";

import { FormField } from "../FormField";
import type { ProjectStartForm } from "@/lib/validations/projectStart";
import ServiceTags from "./ServiceTags";
import { cn } from "@/lib/utils";
import { MergedService, mergeServices } from "@/lib/utils/mergeServices";
import { getServices } from "@/lib/api/services";

interface PSBodyProps {
  step: number;
  setStep: Dispatch<SetStateAction<number>>;
}

const PSBody = ({ step, setStep }: PSBodyProps) => {
  const t = useTranslations("projectStart");
  const locale = useLocale();

  const {
    register,
    watch,
    trigger,
    handleSubmit,
    formState: { errors },
  } = useFormContext<ProjectStartForm>();

  const fullName = watch("full_name");
  const phone = watch("phone");
  const services = watch("services") ?? [];

  const handleStepOne = async () => {
    const valid = await trigger(["full_name", "phone"]);

    if (!valid) return;

    setStep(2);
  };

  // ? services
  const [serviceList, setServiceList] = useState<MergedService[]>([]);

  const selectedServiceTitles = serviceList
    .filter(
      (service) =>
        services.includes(service.enId) || services.includes(service.faId),
    )
    .map((service) => service.name[locale as "fa" | "en"]);

  useEffect(() => {
    async function fetchServices() {
      const [faServices, enServices] = await Promise.all([
        getServices("fa"),
        getServices("en"),
      ]);

      setServiceList(mergeServices(faServices, enServices));
    }

    fetchServices();
  }, []);

  return (
    <div className="w90 relative z-10 flex w-full flex-col">
      {/* steps dots */}
      <div className="mt-10 flex items-center justify-center">
        <StepDots step={step} setStep={setStep} />
      </div>

      {/* STEP 1 */}
      {step === 1 && (
        <div className="xs:mt-10 s:mt-12 3xl:gap-40 flex flex-col items-center gap-10 md:mt-12 lg:mt-18 lg:flex-row lg:items-start lg:justify-center lg:gap-14 xl:mt-20 xl:gap-24 2xl:gap-24">
          {/* Left */}
          <div className="flex w-full max-w-[450px] flex-col text-center lg:px-0 lg:text-start xl:pt-6 2xl:pt-8">
            <div className="text-primary mb-3 text-sm sm:text-base lg:text-lg xl:text-xl">
              {t("step1.label")}
            </div>

            <div className="s:text-[40px] mb-6 text-[34px] leading-[1.15] md:text-[46px] xl:text-[52px] 2xl:text-[56px]">
              <span>{t("step1.title.part1")} </span>

              <span className="text-primary">{t("step1.title.highlight")}</span>
            </div>

            <div className="text-foreground sm:text-muted-foreground s:text-lg flex flex-col text-base leading-8 md:text-xl">
              <span>{t("step1.desc.line1")}</span>
              <span>{t("step1.desc.line2")}</span>
            </div>
          </div>

          {/* Right */}
          <div className="ice flex w-full max-w-[400px] flex-col lg:max-w-[430px] xl:max-w-[470px] 2xl:max-w-[450px]">
            <div className="mb-8">
              <FormField
                containerClassName="max-lg:w-full max-w-100"
                label={t("form.fullName")}
                placeholder={t("form.fullNamePlaceholder")}
                register={register("full_name")}
                error={errors.full_name}
              />
            </div>

            <div className="mb-10">
              <FormField
                containerClassName="max-lg:w-full max-w-100"
                label={t("form.phone")}
                placeholder={t("form.phonePlaceholder")}
                register={register("phone")}
                error={errors.phone}
              />
            </div>

            <button
              onClick={handleStepOne}
              className="bg-primary hover:bg-primary-hover text-tertiary flex h-12 items-center justify-center gap-2 rounded-lg text-sm font-medium max-lg:w-full lg:w-48"
            >
              <span>{t("buttons.continue")}</span>

              <ArrowRight className="size-4 rtl:rotate-180" />
            </button>
          </div>
        </div>
      )}

      {/* STEP 2 */}
      {step === 2 && (
        <div className="mt-10 flex justify-center gap-x-20">
          <div className="mt-5 flex flex-col p-7.5">
            <div className="text-primary mb-3.25 text-xl">
              {t("step2.label")}
            </div>

            <div className="mb-8.5 text-[45px]">
              <span>{t("step2.title.part1")} </span>
              <span className="text-primary">{t("step2.title.highlight")}</span>
            </div>

            <div className="text-muted-foreground text-xl">
              {t("step2.desc")}
            </div>
          </div>

          <ServiceSelector step={step} setStep={setStep} />
        </div>
      )}

      {/* STEP 3 */}
      {step === 3 && (
        <div className="mt-[80px] flex justify-center gap-x-20 rtl:gap-x-16">
          <div className="flex flex-col">
            <div className="flex flex-col p-7.5">
              <div className="text-primary mb-3.25 text-xl">
                {t("step3.label")}
              </div>

              <div className="mb-8.5 text-[45px]">
                <span>{t("step3.title.part1")}&nbsp;</span>

                <span className="text-primary">
                  {t("step3.title.highlight")}
                </span>
              </div>

              <div className="text-muted-foreground mb-16 flex max-w-79 flex-col text-xl">
                {t("step3.desc")}
              </div>
            </div>
          </div>

          <div className="border-border bg-secondary-bg mt-10 flex h-fit max-w-120 min-w-100 flex-col gap-y-6.5 rounded-lg border px-6 py-6">
            <ResultRow
              Logo={User}
              title={t("result.name")}
              description={fullName || "-"}
            />

            <ResultRow
              Logo={Phone}
              title={t("result.phone")}
              description={phone || "-"}
            />
            {/* selected products */}
            <div
              className={cn(
                "flex gap-x-3",
                services.length < 2 && "items-center",
              )}
            >
              <Package
                className={cn(
                  "text-primary size-5.75",
                  services.length > 1 && "mt-0.75",
                )}
              />

              <div
                className={cn(
                  "flex w-full gap-y-2",
                  services.length < 2 ? "flex-row items-center" : "flex-col",
                )}
              >
                <span
                  className={cn(
                    "text-lg font-medium",
                    services.length < 2 && "w-[220px]",
                  )}
                >
                  {t("result.product")}
                </span>

                <ServiceTags services={selectedServiceTitles} />
              </div>
            </div>

            <div className="bg-muted-foreground my-1 h-px w-full" />

            <ResultRow
              Logo={ClockFading}
              title={t("result.contactTime")}
              description={t("result.contactDesc")}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default PSBody;
