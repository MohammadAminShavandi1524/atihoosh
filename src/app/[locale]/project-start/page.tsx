"use client";

import Footer from "@/components/projectStart/Footer";
import Header from "@/components/projectStart/Header";
import PSBody from "@/components/projectStart/PSBody";
import { cn } from "@/lib/utils";
import { useLocale } from "next-intl";
import Image from "next/image";
import { useState } from "react";

interface pageProps {}

const page = ({}: pageProps) => {
  const [step, setStep] = useState<number>(1);
  const locale = useLocale();
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* background iamge */}
      {step === 1 && (
        <div className="absolute top-1/2 z-1 me-auto h-[730px] w-[1026px] -translate-y-1/2 ltr:right-0 rtl:left-0">
          <Image
            src="/step1.png"
            alt="projectStartBackground"
            fill
            className={cn(
              locale === "fa"
                ? "scale-x-[-1] rotate-0"
                : "scale-x-100 rotate-0",
            )}
          />
        </div>
      )}
      {step === 2 && (
        <div className="absolute top-1/2 z-1 aspect-1715/917 h-full w-full -translate-y-1/2 ltr:right-0 rtl:left-0">
          <Image
            src="/step2.png"
            alt="projectStartBackground"
            fill
            className={cn(
              locale === "fa"
                ? "scale-x-[-1] rotate-0"
                : "scale-x-100 rotate-0",
              "object-cover",
            )}
          />
        </div>
      )}
      {step === 3 && (
        <div className="absolute top-1/2 z-1 aspect-1738/905 h-full w-full -translate-y-[45%] ltr:right-0 rtl:left-0">
          <Image
            src="/step3.png"
            alt="projectStartBackground"
            fill
            className={cn("object-cover")}
          />
        </div>
      )}

      <Header />
      <PSBody step={step} setStep={setStep} />
      <Footer />
    </div>
  );
};

export default page;
