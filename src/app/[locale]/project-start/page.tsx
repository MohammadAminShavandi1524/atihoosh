"use client";

import Footer from "@/components/projectStart/Footer";
import Header from "@/components/projectStart/Header";
import PSBody from "@/components/projectStart/PSBody";

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
      {/* background */}

      <FormProvider {...methods}>
        <Header />

        <PSBody step={step} setStep={setStep} />

        <Footer />
      </FormProvider>
    </div>
  );
};

export default Page;
