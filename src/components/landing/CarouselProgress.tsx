"use client";

import type { EmblaCarouselType } from "embla-carousel";

interface CarouselProgressProps {
  emblaApi?: EmblaCarouselType;
  progress: number;
  isRTL?: boolean;
}

const CarouselProgress = ({
  progress,
  isRTL = false,
}: CarouselProgressProps) => {
  return (
    <div className="mt-6 px-5">
      <div className="bg-border relative h-1 overflow-hidden rounded-full">
        <div
          className="bg-primary absolute top-0 h-full rounded-full transition-all duration-75"
          style={{
            width: `${progress * 100}%`,
            left: isRTL ? "auto" : 0,
            right: isRTL ? 0 : "auto",
          }}
        />
      </div>
    </div>
  );
};

export default CarouselProgress;
