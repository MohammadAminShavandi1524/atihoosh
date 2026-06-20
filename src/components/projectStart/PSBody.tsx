"use client";

import { Dispatch, HTMLAttributes, SetStateAction } from "react";
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
      {/* content */}
      {/* step 1 */}
      {step === 1 && (
        <div className="mt-20 flex gap-x-50 ps-110">
          <div className="flex flex-col p-7.5">
            <div className="text-primary mb-3.25 text-xl">STEP 1 OF 3 </div>
            <div className="mb-8.5 text-xl text-[45px]">
              <span className="">Let`s Get</span>
              <span className="text-primary"> Started</span>
            </div>
            <div className="text-muted-foreground flex flex-col text-xl">
              <span>Please enter your name and</span>
              <span> phone number to continue.</span>
            </div>
          </div>
          <div className="flex w-125 flex-col pt-7">
            {/* full name */}
            <div className="mb-10">
              <div className="mb-4 ps-1.5">Full name</div>
              <div className="relative flex">
                <User2 className="text-muted-foreground absolute top-1/2 size-5 -translate-1/2 ltr:left-6" />
                <input
                  className={cn(inputClassName)}
                  type="text"
                  placeholder="Enter your Full name"
                />
              </div>
            </div>
            {/* phone number */}
            <div className="mb-14">
              <div className="mb-4 ps-1.5">Phone Number</div>
              <div className="relative flex">
                <Phone className="text-muted-foreground absolute top-1/2 size-5 -translate-1/2 ltr:left-6" />
                <input
                  className={cn(inputClassName)}
                  type="text"
                  placeholder="Enter your phone number"
                />
              </div>
            </div>
            {/* continue */}
            <button
              onClick={() => setStep(2)}
              className="bg-primary hover:bg-primary-hover text-tertiary flex h-11.5 w-40 cursor-pointer items-center justify-center gap-x-1 rounded-md ps-2 text-sm"
            >
              <span className="font-medium">Continue</span>
              <span>
                <ArrowRight className="size-4.5 pt-0.5" />
              </span>
            </button>
          </div>
        </div>
      )}
      {/* step 2 */}
      {step === 2 && (
        <div className="mt-20 flex gap-x-20 ps-60">
          <div className="flex flex-col p-7.5">
            <div className="text-primary mb-3.25 text-xl">STEP 2 OF 3 </div>
            <div className="mb-8.5 text-xl text-[45px]">
              <span className="">Choose Your</span>
              <span className="text-primary"> Product</span>
            </div>
            <div className="text-muted-foreground flex flex-col text-xl">
              Select the product you are interested in
            </div>
          </div>
          {/*  */}
          <ServiceSelector step={step} setStep={setStep} />
        </div>
      )}
      {/* step 3 */}
      {step === 3 && (
        <div className="mt-20 flex gap-x-20 ps-135">
          <div className="flex flex-col">
            <div className="flex flex-col p-7.5">
              <div className="text-primary mb-3.25 text-xl">STEP 3 OF 3 </div>
              <div className="mb-8.5 text-xl text-[45px]">
                <span className="">You`re</span>
                <span className="text-primary"> All Set!</span>
              </div>
              <div className="text-muted-foreground mb-16 flex max-w-79 flex-col text-xl">
                Thank you for your information. We will contact you shortly to
                get started
              </div>
              <button className="bg-primary hover:bg-primary-hover flex h-[44px] w-[270px] cursor-pointer items-center justify-center gap-x-1 rounded-md ps-3 font-medium transition-all">
                <span className="font-medium">Go to Dashboard</span>
                <span>
                  <ArrowRight className="size-4.5 pt-0.5" />
                </span>
              </button>
            </div>
          </div>
          <div className="border-border bg-secondary-bg mt-12 h-fit flex w-100 flex-col gap-y-6.5 rounded-lg border px-6 py-6">
            <ResultRow Logo={User} title="Name" description="Ali karimi" />
            <ResultRow
              Logo={Phone}
              title="Phone number"
              description="+989125554422"
            />
            <ResultRow
              Logo={Package}
              title="Selected Product"
              description="Web Design"
            />
            <div className="bg-muted-foreground my-1 h-px w-full"></div>
            <ResultRow
              Logo={ClockFading}
              title="We will contact you"
              description="Within 24h"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default PSBody;
