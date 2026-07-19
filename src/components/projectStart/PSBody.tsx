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
  User2,
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

  // const serviceItems = t.raw("services.items") as {
  //   id: number;
  //   title: string;
  //   desc: string;
  //   imageSrc: string;
  // }[];

  // const selectedServiceTitles = serviceItems
  //   .filter((service) => services.includes(service.id))
  //   .map((service) => service.title);

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
        <div className="mt-20 flex gap-x-50 ps-110">
          <div className="flex flex-col p-7.5">
            <div className="text-primary mb-3.25 text-xl">
              {t("step1.label")}
            </div>

            <div className="mb-8.5 text-[45px]">
              <span>{t("step1.title.part1")} </span>
              <span className="text-primary">{t("step1.title.highlight")}</span>
            </div>

            <div className="text-muted-foreground flex flex-col text-xl">
              <span>{t("step1.desc.line1")}</span>
              <span>{t("step1.desc.line2")}</span>
            </div>
          </div>

          <div className="flex w-125 flex-col pt-7">
            <div className="relative mb-10">
              {/* <User2 className="text-muted-foreground absolute top-[45px] size-5 ltr:left-6 rtl:right-6" /> */}

              <FormField
                className=""
                label={t("form.fullName")}
                placeholder={t("form.fullNamePlaceholder")}
                register={register("full_name")}
                error={errors.full_name}
              />
            </div>

            <div className="relative mb-14">
              {/* <Phone className="text-muted-foreground absolute top-[45px] size-5 ltr:left-6 rtl:right-6" /> */}

              <FormField
                label={t("form.phone")}
                placeholder={t("form.phonePlaceholder")}
                register={register("phone")}
                error={errors.phone}
              />
            </div>

            <button
              onClick={handleStepOne}
              className="bg-primary hover:bg-primary-hover text-tertiary flex h-11.5 w-40 cursor-pointer items-center justify-center gap-x-1 rounded-md ps-2 text-sm"
            >
              <span className="font-medium">{t("buttons.continue")}</span>

              <ArrowRight className="size-4.5 pt-0.5 rtl:rotate-180" />
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
