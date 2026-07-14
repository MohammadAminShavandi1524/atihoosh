"use client";

import { Dispatch, SetStateAction } from "react";
import { useTranslations } from "next-intl";
import StepDots from "./StepDots";
import {
  ArrowRight,
  ClockFading,
  Package,
  Phone,
  User,
  User2,
} from "lucide-react";
import { cn } from "@/lib/utils";
import ServiceSelector from "./ServiceSelector";
import ResultRow from "./ResultRow";

interface PSBodyProps {
  step: number;
  setStep: Dispatch<SetStateAction<number>>;
}

const PSBody = ({ step, setStep }: PSBodyProps) => {
  const t = useTranslations("projectStart");

  const inputClassName =
    "bg-secondary-bg text-muted-foreground min-w-80 rounded-md py-2.5 ps-12 pe-6 text-[17px] " +
    "outline-none border border-transparent " +
    "focus:border-primary focus:ring-2 focus:ring-primary/30 " +
    "transition-all duration-200 " +
    "placeholder:text-muted-foreground/60 " +
    "disabled:opacity-50 disabled:cursor-not-allowed";

  return (
    <div className="w90 relative z-10 flex w-full flex-col">
      {/* steps Dots */}
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

            <div className="mb-8.5 text-xl text-[45px]">
              <span>{t("step1.title.part1")} </span>
              <span className="text-primary">{t("step1.title.highlight")}</span>
            </div>

            <div className="text-muted-foreground flex flex-col text-xl">
              <span>{t("step1.desc.line1")}</span>
              <span>{t("step1.desc.line2")}</span>
            </div>
          </div>

          <div className="flex w-125 flex-col pt-7">
            {/* full name */}
            <div className="mb-10">
              <div className="mb-4 ps-1.5">{t("form.fullName")}</div>
              <div className="relative flex">
                <User2 className="text-muted-foreground absolute top-1/2 size-5 -translate-1/2 ltr:left-6" />
                <input
                  className={cn(inputClassName)}
                  type="text"
                  placeholder={t("form.fullNamePlaceholder")}
                />
              </div>
            </div>

            {/* phone */}
            <div className="mb-14">
              <div className="mb-4 ps-1.5">{t("form.phone")}</div>
              <div className="relative flex">
                <Phone className="text-muted-foreground absolute top-1/2 size-5 -translate-1/2 ltr:left-6" />
                <input
                  className={cn(inputClassName)}
                  type="text"
                  placeholder={t("form.phonePlaceholder")}
                />
              </div>
            </div>

            <button
              onClick={() => setStep(2)}
              className="bg-primary hover:bg-primary-hover text-tertiary flex h-11.5 w-40 cursor-pointer items-center justify-center gap-x-1 rounded-md ps-2 text-sm"
            >
              <span className="font-medium">{t("buttons.continue")}</span>
              <ArrowRight className="size-4.5 pt-0.5 rtl:rotate-180 rtl:pt-0.75" />
            </button>
          </div>
        </div>
      )}

      {/* STEP 2 */}
      {step === 2 && (
        <div className="mt-20 flex gap-x-20 ps-60">
          <div className="flex flex-col p-7.5">
            <div className="text-primary mb-3.25 text-xl">
              {t("step2.label")}
            </div>

            <div className="mb-8.5 text-xl text-[45px]">
              <span>{t("step2.title.part1")} </span>
              <span className="text-primary">{t("step2.title.highlight")}</span>
            </div>

            <div className="text-muted-foreground flex flex-col text-xl">
              {t("step2.desc")}
            </div>
          </div>

          <ServiceSelector step={step} setStep={setStep} />
        </div>
      )}

      {/* STEP 3 */}
      {step === 3 && (
        <div className="mt-[80px] flex gap-x-20 ps-[540px] rtl:mt-[80px] rtl:gap-x-16 rtl:ps-[440px]">
          <div className="flex flex-col">
            <div className="flex flex-col p-7.5">
              <div className="text-primary mb-3.25 text-xl">
                {t("step3.label")}
              </div>

              <div className="mb-8.5 text-xl text-[45px]">
                <span>{t("step3.title.part1")}&nbsp; </span>
                <span className="text-primary">
                  {t("step3.title.highlight")}
                </span>
              </div>

              <div className="text-muted-foreground mb-16 flex max-w-79 flex-col text-xl">
                {t("step3.desc")}
              </div>

              <button className="bg-primary hover:bg-primary-hover flex h-[44px] w-[270px] cursor-pointer items-center justify-center gap-x-1 rounded-md ps-3 font-medium opacity-0 transition-all">
                <span>{t("buttons.goDashboard")}</span>
                <ArrowRight className="size-4.5 pt-0.5" />
              </button>
            </div>
          </div>

          <div className="border-border bg-secondary-bg mt-10 flex h-fit w-100 flex-col gap-y-6.5 rounded-lg border px-6 py-6 rtl:mt-8">
            <ResultRow
              Logo={User}
              title={t("result.name")}
              description="Ali karimi"
            />
            <ResultRow
              Logo={Phone}
              title={t("result.phone")}
              description="+989125554422"
            />
            <ResultRow
              Logo={Package}
              title={t("result.product")}
              description="Web Design"
            />

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
