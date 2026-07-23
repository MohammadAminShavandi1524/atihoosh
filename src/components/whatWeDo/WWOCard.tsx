"use client";

import Image from "next/image";

interface WWOCardProps {
  indexNumber: string;
  title: string;
  description: string;
  iamgeSrc: string;
}

const WWOCard = ({
  description,
  indexNumber,
  title,
  iamgeSrc,
}: WWOCardProps) => {
  return (
    <div className="flex w-full flex-col overflow-hidden rounded-xl">
      {/* image */}
      <div className="bg-secondary relative aspect-[1328/800] w-full overflow-hidden">
        <Image
          src={iamgeSrc}
          alt=""
          fill
          sizes="(max-width: 480px) 100vw, 50vw"
          className="object-cover"
        />
      </div>

      {/* content */}
      <div className="bg-secondary-bg flex min-h-52.5 flex-1 flex-col gap-y-2 px-4 pt-5 pb-6 sm:gap-y-3 sm:px-6 sm:pt-6 sm:pb-7">
        {/* index */}
        <div className="text-primary text-sm sm:text-base lg:text-lg">
          {indexNumber}
        </div>

        {/* title */}
        <div className="text-lg sm:text-xl 2xl:text-2xl">{title}</div>

        {/* description */}
        <div className="text-muted text-justify text-sm leading-[1.8] sm:text-base sm:leading-[1.7]">
          {description}
        </div>
      </div>
    </div>
  );
};

export default WWOCard;