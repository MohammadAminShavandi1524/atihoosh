"use client";

import { cn, englishToPersianNumber } from "@/lib/utils";
import { ArrowRight, Clock } from "lucide-react";
import { useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";

interface BlogSummaryProps {
  id: number;
  indexNumber: number | string;
  slug: string;
  title: string;
  description: string;
  tags: string[];
  imageSrc: string;
  avgReadTime: number;
}

const BlogSummary = ({
  slug,
  indexNumber,
  title,
  tags,
  description,
  imageSrc,
  avgReadTime,
  id,
}: BlogSummaryProps) => {
  const locale = useLocale();

  return (
    <article className="relative h-fit overflow-hidden rounded-2xl">
      {/* index */}
      <div className="text-primary border-primary bg-tertiary absolute top-3 left-3 z-10 rounded-full border px-3 py-1.5 text-xs sm:top-4 sm:left-4 sm:px-4 sm:py-2 sm:text-sm lg:top-5 lg:left-4.5 lg:text-base">
        {typeof indexNumber === "number"
          ? String(indexNumber).padStart(2, "0")
          : indexNumber}
      </div>

      {/* image */}
      <div className="relative aspect-[16/9] w-full overflow-hidden">
        <Image
          src={imageSrc}
          alt={title}
          fill
          sizes="(max-width:768px) 100vw, (max-width:1280px) 50vw, 720px"
          className="object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>

      {/* content */}
      <div className="bg-secondary-bg mlg:min-h-90 3xl:min-h-[300px] flex flex-col p-5 sm:p-6 lg:min-h-[360px] xl:min-h-[340px]">
        {/* title */}
        <h3
          className={cn(
            "mb-4 text-xl leading-snug sm:text-2xl lg:min-h-[61px] lg:text-[22px]",
            locale === "fa" && "lg:min-h-[66px]",
          )}
        >
          {title}
        </h3>

        {/* description */}
        <p className="text-muted-foreground line-clamp-4 text-justify text-sm leading-7 sm:min-h-20 lg:line-clamp-3 lg:min-h-21">
          {description}
        </p>
        {/* tags */}
        <div className="3xl:mt-3 mt-5 flex flex-wrap gap-2 xl:min-h-[71px] 2xl:min-h-0">
          {tags.map((tag, index) => (
            <div
              key={index}
              className="bg-tertiary border-primary text-primary h-fit rounded-md border px-2.5 py-1 text-xs sm:px-3 sm:py-1.5 sm:text-[13px]"
            >
              {tag}
            </div>
          ))}
        </div>

        {/* footer for lg */}
        <div className="absolute end-6 bottom-6 pt-4 max-lg:hidden sm:mt-10 sm:pt-5">
          {/* read more */}
          <Link
            href={`/${locale}/blogs/${id}/${slug}`}
            className="text-primary flex items-center gap-x-1 text-sm transition-colors hover:opacity-80 sm:text-base"
          >
            <span>{locale === "en" ? "Read more" : "ادامه مطلب"}</span>

            <ArrowRight className="size-4.5 pt-px sm:size-5 rtl:rotate-180" />
          </Link>
        </div>

        {/* footer for less lg */}
        <div className="self-end pt-4 max-sm:mt-4 sm:mt-10 sm:pt-5 lg:hidden">
          {/* read more */}
          <Link
            href={`/${locale}/blogs/${id}/${slug}`}
            className="text-primary flex items-center gap-x-1 text-sm transition-colors hover:opacity-80 sm:text-base"
          >
            <span>{locale === "en" ? "Read more" : "ادامه مطلب"}</span>

            <ArrowRight className="size-4.5 pt-px sm:size-5 rtl:rotate-180" />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default BlogSummary;
