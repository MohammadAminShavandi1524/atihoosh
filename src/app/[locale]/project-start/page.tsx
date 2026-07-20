"use client";

import Footer from "@/components/projectStart/Footer";
import Header from "@/components/projectStart/Header";

import { cn } from "@/lib/utils";

import {
  projectStartSchema,
  type ProjectStartForm,
} from "@/lib/validations/projectStart";

import { useLocale } from "next-intl";
import Image from "next/image";
import { useState } from "react";

import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import PSBody from "@/components/projectStart/PSBody";

const Page = () => {
  const [step, setStep] = useState(1);

  const locale = useLocale();

  const methods = useForm<ProjectStartForm>({
    resolver: zodResolver(projectStartSchema),

    defaultValues: {
      full_name: "",
      email: "",
      phone: "",
      services: [],
      description: "",
    },

    mode: "onTouched",
  });

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* background iamge */}
      {step === 1 && (
        <div className="absolute top-1/2 z-1 me-auto h-[730px] w-[1026px] -translate-y-1/2 ltr:right-0 rtl:left-0">
          <Image src="/step11.png" alt="projectStartBackground" fill />
        </div>
      )}
      {step === 2 && (
        <div className="absolute top-1/2 z-1 aspect-1715/917 h-full w-full -translate-y-1/2 ltr:right-0 rtl:left-0">
          <Image
            src="/step22.png"
            alt="projectStartBackground"
            fill
            className="object-cover"
          />
        </div>
      )}
      {step === 3 && (
        <div className="absolute top-1/2 z-1 aspect-1738/905 h-full w-full -translate-y-[45%] ltr:right-0 rtl:left-0">
          <Image
            src="/step33.png"
            alt="projectStartBackground"
            fill
            className="object-cover"
          />
        </div>
      )}
      <FormProvider {...methods}>
        <Header />

        <PSBody step={step} setStep={setStep} />

        <Footer />
      </FormProvider>
    </div>
  );
};

export default Page;
