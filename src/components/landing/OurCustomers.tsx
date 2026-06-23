"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

import Companies from "./Companies";

interface OurCustomersProps {}

const OurCustomers = ({}: OurCustomersProps) => {
  const t = useTranslations("HomePage.OurCustomersSection");

  return (
    <div className="border-t-border mt-20 border-t pt-15">
      <div className="w90 flex flex-col items-center 2xl:px-30">
        <div className="text-[40px] mb-16 mt-4 font-medium">{t("badge")}</div>

        {/* companies */}
        <div className="bg-border mt-10 grid grid-cols-3">
          <Companies />
          <Companies />
          <Companies />
        </div>
      </div>
    </div>
  );
};

export default OurCustomers;
