"use client";

import { Dispatch, SetStateAction } from "react";
import StepDots from "./StepDots";
import { ArrowRight, Phone, User2 } from "lucide-react";

interface PSBodyProps {
  step: number;
  setStep: Dispatch<SetStateAction<number>>;
}

const PSBody = ({ step, setStep }: PSBodyProps) => {
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
          <div className="flex w-125 flex-col pt-8">
            {/* full name */}
            <div className="mb-10">
              <div className="mb-4 ps-1.5">Full name</div>
              <div className="relative flex">
                <User2 className="text-muted-foreground absolute top-1/2 size-5 -translate-1/2 ltr:left-6" />
                <input
                  className="bg-secondary-bg text-muted-foreground min-w-80 rounded-md py-2.5 ps-12 pe-6 text-lg"
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
                  className="bg-secondary-bg text-muted-foreground min-w-80 rounded-lg py-2.5 ps-12 pe-6 text-lg"
                  type="text"
                  placeholder="Enter your phone number"
                />
              </div>
            </div>
            {/* continue */}
            <button className="bg-primary hover:bg-primary-hover text-tertiary flex h-11.5 w-40 cursor-pointer items-center justify-center gap-x-1 rounded-md ps-2 text-sm">
              <span className="font-medium">Continue</span>
              <span>
                <ArrowRight className="size-4.5 pt-0.5" />
              </span>
            </button>
          </div>
        </div>
      )}
      {/* step 2 */}
      {step === 2 && <div className=""></div>}
      {/* step 3 */}
      {step === 3 && <div className=""></div>}
    </div>
  );
};

export default PSBody;
