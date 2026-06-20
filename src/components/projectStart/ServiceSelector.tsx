"use client";

import { Dispatch, SetStateAction, useState } from "react";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import Image from "next/image";

const services = [
  {
    id: 1,
    title: "Website design and development",
    desc: "Modern and Responsive Website Design",
    imageSrc: "/project-start/1.png",
  },
  {
    id: 2,
    title: "Logo and logo motion design",
    desc: "Custom web Applications and Development",
    imageSrc: "/project-start/2.png",
  },
  {
    id: 3,
    title: "SEO and digital marketing",
    desc: "IOS and Android Mobile Applications",
    imageSrc: "/project-start/3.png",
  },
  {
    id: 4,
    title: "UI/UX Design",
    desc: "User experience and interface design",
    imageSrc: "/project-start/4.png",
  },
  {
    id: 5,
    title: "Branding",
    desc: "Brand identity and visual design",
    imageSrc: "/project-start/5.png",
  },
  {
    id: 6,
    title: "Network Support",
    desc: "Computer systems & infrastructure maintenance",
    imageSrc: "/project-start/6.png",
  },
];
interface ServiceSelectorProps {
  step: number;
  setStep: Dispatch<SetStateAction<number>>;
}

export default function ServiceSelector({
  step,
  setStep,
}: ServiceSelectorProps) {
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

                {/* checkbox */}
                <div className="">
                  <div
                    className={`flex h-5 w-5 items-center justify-center rounded border ${
                      isActive
                        ? "border-primary bg-primary-hover"
                        : "border-muted-foreground"
                    }`}
                  >
                    {isActive && (
                      <Check size={14} className="text-foreground" />
                    )}
                  </div>
                </div>
              </div>

              {/* content */}
              <h3 className="mb-2 text-[17px] font-semibold">{item.title}</h3>
              {item.desc && (
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              )}
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
          <span>
            <ArrowLeft className="size-4.5 pt-0.5" />
          </span>
          <span className="font-medium">Back</span>
        </button>

        <button
          onClick={() => setStep(3)}
          className="bg-primary hover:bg-primary-hover flex h-[44px] w-[240px] cursor-pointer items-center justify-center gap-x-1 rounded-md ps-3 font-medium transition-all"
        >
          <span className="font-medium">Continue</span>
          <span>
            <ArrowRight className="size-4.5 pt-0.5" />
          </span>
        </button>
      </div>
    </div>
  );
}
