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
      <div className="mt-10 hidden items-center justify-center lg:flex">
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
        <div className="mt-8 flex flex-col gap-7.5 max-lg:mb-12 lg:mt-0 lg:flex-row lg:items-start lg:justify-center lg:gap-12 lg:px-8 xl:gap-16 2xl:mt-6 2xl:gap-10 2xl:gap-20">
          {/* Left Content */}
          <div className="flex flex-col px-2 sm:px-4 lg:max-w-[420px] lg:px-0 lg:pt-5 xl:max-w-[460px] xl:shrink-0 xl:pt-10">
            <div className="text-primary mb-3 text-base sm:text-lg xl:mb-3.5 xl:text-xl">
              {t("step2.label")}
            </div>

            <div className="mb-5 text-[32px] leading-tight sm:text-[38px] md:text-[42px] xl:mb-8 xl:text-[45px]">
              <span>{t("step2.title.part1")} </span>

              <span className="text-primary">{t("step2.title.highlight")}</span>
            </div>

            <div className="text-muted-foreground max-w-md text-base leading-7 sm:text-lg xl:text-xl">
              {t("step2.desc")}
            </div>
          </div>

          {/* Right Content */}
          <div className="w-full lg:max-w-[760px] xl:max-w-[820px]">
            <ServiceSelector step={step} setStep={setStep} />
          </div>
        </div>
      )}

      {/* STEP 3 */}
      {step === 3 && (
        <div className="mt-12 flex flex-col gap-10 lg:mt-10 lg:flex-row lg:items-start lg:justify-center lg:gap-12 xl:mt-14 xl:gap-16 2xl:mt-30 2xl:gap-20 rtl:2xl:gap-16">
          {/* Left Content */}
          <div className="flex shrink-0 flex-col px-2 sm:px-4 lg:max-w-[420px] lg:px-0 lg:pt-2 xl:max-w-[460px]">
            <div className="text-primary mb-3 text-base sm:text-lg xl:mb-3.5 xl:text-xl">
              {t("step3.label")}
            </div>

            <div className="mb-5 text-[32px] leading-tight sm:text-[38px] md:text-[42px] xl:mb-8 xl:text-[45px]">
              <span>{t("step3.title.part1")}&nbsp;</span>

              <span className="text-primary">{t("step3.title.highlight")}</span>
            </div>

            <div className="text-muted-foreground max-w-md text-base leading-7 sm:text-lg xl:max-w-[320px] xl:text-xl">
              {t("step3.desc")}
            </div>
          </div>

          {/* Result Card */}
          <div className="border-border bg-secondary-bg mt-2 w-full rounded-xl border p-5 sm:p-6 lg:mt-0 lg:max-w-[470px] lg:min-w-[440px] xl:max-w-[440px] xl:min-w-[430px]">
            <div className="flex flex-col gap-y-6">
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

              {/* Selected Products */}

              <>
                {/* Selected Products for upper s: */}
                <div
                  className={cn(
                    "max-s:hidden flex gap-y-2",
                    services.length < 2
                      ? "flex-row items-center bg-red-600"
                      : "flex-col items-start",
                  )}
                >
                  <div className="flex items-center gap-3">
                    <Package
                      className={cn(
                        "text-primary mt-0.5 size-5 shrink-0",
                        services.length < 2 && "mt-0",
                      )}
                    />
                    <span
                      className={cn(
                        "text-base font-medium sm:text-lg",
                        services.length < 2 && "sm:min-w-[180px]",
                      )}
                    >
                      {t("result.product")}
                    </span>
                  </div>

                  <div
                    className={cn(
                      "flex flex-1 gap-y-2",
                      services.length < 2
                        ? "flex-col sm:flex-row sm:items-center"
                        : "flex-col",
                    )}
                  >
                    <ServiceTags services={selectedServiceTitles} />
                  </div>
                </div>
                {/* Selected Products for lower s: */}
                <div
                  className={cn(
                    "s:hidden flex gap-y-2",
                    services.length < 2
                      ? "max-xss:flex-col"
                      : "flex-col items-start",
                  )}
                >
                  <div className="flex items-center gap-3">
                    <Package
                      className={cn(
                        "text-primary mt-0.5 size-5 shrink-0",
                        services.length < 2 && "mt-0",
                      )}
                    />

                    <span
                      className={cn(
                        "w-50 text-base font-medium sm:text-lg",
                        services.length < 2 && "sm:min-w-[180px]",
                      )}
                    >
                      {t("result.product")}
                    </span>
                  </div>

                  <div className={cn("flex flex-1 gap-y-2")}>
                    <ServiceTags services={selectedServiceTitles} />
                  </div>
                </div>
              </>

              <div className="bg-border h-px w-full" />

              <ResultRow
                Logo={ClockFading}
                title={t("result.contactTime")}
                description={t("result.contactDesc")}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PSBody;
