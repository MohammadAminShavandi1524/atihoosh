"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import type { EmblaCarouselType } from "embla-carousel";
import { useLocale } from "next-intl";

import { Service } from "./service.types";
import ServiceSlide from "./ServiceSlide";
import CarouselProgress from "./CarouselProgress";

interface ServicesCarouselProps {
  services: Service[];
}

const ServicesCarousel = ({ services }: ServicesCarouselProps) => {
  const locale = useLocale();
  const isRTL = locale === "fa";

  const [emblaRef, emblaApi] = useEmblaCarousel({
    direction: isRTL ? "rtl" : "ltr",
    loop: false,
    align: "start",
    dragFree: false,
    containScroll: "trimSnaps",
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setScrollProgress(emblaApi.scrollProgress());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect(emblaApi);

    emblaApi.on("select", onSelect);
    emblaApi.on("scroll", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("scroll", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className="w-full">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {services.map((service, index) => (
            <ServiceSlide
              key={service.key}
              service={service}
              isActive={selectedIndex === index}
            />
          ))}
        </div>
      </div>

      <CarouselProgress
        emblaApi={emblaApi}
        progress={scrollProgress}
        isRTL={isRTL}
      />
    </div>
  );
};

export default ServicesCarousel;
