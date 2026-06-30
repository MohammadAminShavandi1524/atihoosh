"use client";

import { Dispatch, SetStateAction, useState } from "react";
import { useTranslations } from "next-intl";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import Image from "next/image";

interface ServiceSelectorProps {
  step: number;
  setStep: Dispatch<SetStateAction<number>>;
}

export default function ServiceSelector({
  step,
  setStep,
}: ServiceSelectorProps) {
  const t = useTranslations("projectStart.services");

  const services = t.raw("items") as {
    id: number;
    title: string;
    desc: string;
    imageSrc: string;
  }[];

  const [selected, setSelected] = useState<number[]>([]);

  const toggle = (id: number) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  return (
    <div className="flex flex-col pt-10">
      {/* GRID */}
      <div className="grid grid-cols-1 gap-x-6 gap-y-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((item) => {
          const isActive = selected.includes(item.id);

          return (
            <div
              key={item.id}
              onClick={() => toggle(item.id)}
              className={`relative h-[166px] w-[221px] cursor-pointer rounded-xl border p-3 transition-all duration-200 ${
                isActive
                  ? "border-primary shadow-primary/20"
                  : "border-border bg-secondary-bg hover:border-muted-foreground"
              }`}
            >
              <div className="mb-3 flex items-center justify-between">
                <Image
                  src={item.imageSrc}
                  alt={item.title}
                  width={20}
                  height={20}
                />

                <div
                  className={`flex h-5 w-5 items-center justify-center rounded border ${
                    isActive
                      ? "border-primary bg-primary-hover"
                      : "border-muted-foreground"
                  }`}
                >
                  {isActive && <Check size={14} />}
                </div>
              </div>

              <h3 className="mb-2 text-[17px] font-semibold">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.desc}</p>
            </div>
          );
        })}
      </div>

      {/* buttons */}
      <div className="mt-10 flex gap-x-4">
        <button
          onClick={() => setStep(1)}
          className="border-border text-muted-foreground hover:text-foreground hover:border-muted-foreground shadow-border bg-secondary-bg flex h-[44px] w-[240px] cursor-pointer items-center justify-center gap-x-1 rounded-md border pe-3 shadow-sm transition-all"
        >
          <ArrowLeft className="size-4.5 pt-0.5 rtl:rotate-180" />
          <span className="font-medium">{t("buttons.back")}</span>
        </button>

        <button
          onClick={() => setStep(3)}
          className="bg-primary hover:bg-primary-hover flex h-[44px] w-[240px] cursor-pointer items-center justify-center gap-x-1 rounded-md ps-3 font-medium transition-all"
        >
          <span>{t("buttons.continue")}</span>
          <ArrowRight className="size-4.5 pt-0.5 rtl:rotate-180" />
        </button>
      </div>
    </div>
  );
}
