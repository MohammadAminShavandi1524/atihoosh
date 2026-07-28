"use client";

import { cn, englishToPersianNumber } from "@/lib/utils";
import { ArrowRight, Clock } from "lucide-react";
import { useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";

interface BlogSummaryProps {
  indexNumber: string;
  title: string;
  description: string;
  tags: string[];
  imageSrc: string;
  avgReadTime: number;
}

const BlogSummary = ({
  indexNumber,
  title,
  tags,
  description,
  imageSrc,
  avgReadTime,
}: BlogSummaryProps) => {
  const locale = useLocale();

  return (
    <article className="bg-secondary relative overflow-hidden rounded-2xl">
      {/* index */}
      <div className="text-primary border-primary bg-tertiary absolute top-3 left-3 z-10 rounded-full border px-3 py-1.5 text-xs sm:top-4 sm:left-4 sm:px-4 sm:py-2 sm:text-sm lg:top-5 lg:left-4.5 lg:text-base">
        {indexNumber}
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
      <div className="bg-secondary-bg flex h-full flex-col p-5 sm:p-6">
        {/* tags */}
        <div className="mb-5 flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <div
              key={index}
              className="bg-tertiary border-primary text-primary rounded-md border px-2.5 py-1 text-xs sm:px-3 sm:py-1.5 sm:text-[13px]"
            >
              {tag}
            </div>
          ))}
        </div>
        {/* title */}
        <h3
          className={cn(
            "mb-4 text-xl leading-snug sm:text-2xl lg:text-[22px]",
            locale === "fa" && "lg:min-h-[66px]",
            (indexNumber === "03" || indexNumber === "04") && "lg:min-h-[66px]",
          )}
        >
          {title}
        </h3>
        {/* description */}
        <p className="text-muted-foreground text-sm line-clamp-4 leading-7 sm:min-h-20 lg:min-h-24 text-justify">
          {description}
        </p>
        {/* footer */}
        <div className="border-t-primary-hover/80 mt-8 flex items-center justify-between border-t pt-4 sm:mt-10 sm:pt-5">
          {/* read time */}
          <div className="flex items-center gap-x-1.5 text-sm">
            <Clock className="text-primary size-4" />

            {locale === "en" ? (
              <>
                <span className="text-muted-foreground">{avgReadTime}</span>

                <span className="text-muted-foreground">min read</span>
              </>
            ) : (
              <>
                <span className="text-muted-foreground">مدت مطالعه:</span>

                <span className="text-muted-foreground">
                  {englishToPersianNumber(avgReadTime.toString())}
                </span>

                <span className="text-muted-foreground">دقیقه</span>
              </>
            )}
          </div>

          {/* read more */}
          <Link
            href={`/${locale}/blogs/blog`}
            className="text-primary flex items-center gap-x-1 text-sm transition-colors hover:opacity-80 sm:text-base"
          >
            <span>{locale === "en" ? " Read more" : "ادامه مطلب"}</span>

            <ArrowRight className="size-4.5 pt-px sm:size-5 rtl:rotate-180" />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default BlogSummary;
