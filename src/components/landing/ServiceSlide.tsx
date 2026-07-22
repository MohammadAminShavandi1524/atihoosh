"use client";

import { useLocale } from "next-intl";

import ServiceCard from "./ServiceCard";
import { Service } from "./service.types";

interface ServiceSlideProps {
  service: Service;
  isActive: boolean;
}

const ServiceSlide = ({ service, isActive }: ServiceSlideProps) => {
  const locale = useLocale();

  return (
    <div
      className={`s:flex-[0_0_clamp(60%,68vw,76%)] min-w-0 flex-[0_0_86%] xss:flex-[0_0_82%] px-2`}
    >
      <ServiceCard service={service} isMobile isActive={isActive} />
    </div>
  );
};

export default ServiceSlide;
