"use client";

import { cn, englishToPersianNumber } from "@/lib/utils";
import { div } from "framer-motion/client";
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
    <div className="bg-secondary relative min-h-[500px] w-full overflow-hidden rounded-2xl">
      {/* index */}
      <div className="text-primary border-primary bg-tertiary absolute top-5 left-4.5 rounded-full border px-4 py-2 text-base">
        {indexNumber}
      </div>

      {/* top side */}
      <div className="relative h-[330px] w-full overflow-hidden">
        <Image src={imageSrc} alt="" fill className="object-cover" />
      </div>
      {/* content */}
      <div className="bg-secondary-bg flex h-full flex-col px-6 pt-6 pb-7">
        {/* tags */}
        <div className="mb-6 flex items-center gap-x-2.5">
          {tags.map((tag, index) => {
            return (
              <div
                key={index}
                className="bg-tertiary border-primary text-primary rounded-md border px-3 py-1.5 text-[13px]"
              >
                {tag}
              </div>
            );
          })}
        </div>

        {/* title */}
        <div
          className={cn(
            "mb-5 text-[22px]",
            (indexNumber === "03" || indexNumber === "04") && "min-h-[66px]",
            locale === "fa" && "min-h-[66px]",
          )}
        >
          {title}
        </div>

        {/* description */}
        <div className="text-muted-foreground min-h-24 text-sm/[24px]">
          {description}
        </div>

        {/* avgReadtime and read article btn */}
        <div className="border-t-primary-hover/80 ms-0 me-1 mt-10 flex items-center justify-between border-t pt-5">
          {/* avg readtime */}
          <div className="flex items-center gap-x-1.25">
            <Clock className="text-primary size-4" />
            {locale === "en" ? (
              <>
                <span className="text-muted-foreground pt-[0px]">
                  {avgReadTime}
                </span>
                <span className="text-muted-foreground pt-[0px]">min read</span>
              </>
            ) : (
              <>
                <span className="text-muted-foreground">مدت مطالعه: </span>
                <span className="text-muted-foreground pt-[0px]">
                  {englishToPersianNumber(avgReadTime.toString())}
                </span>
                <span className="text-muted-foreground pt-[0px]"> دقیقه</span>
              </>
            )}
          </div>
          {/* readmore article */}
          <Link
            href={`/${locale}/blogs/blog`}
            className="text-primary flex cursor-pointer items-center gap-x-1"
          >
            <span className="">
              {locale === "en" ? " Read more" : "ادامه مطلب"}
            </span>
            <ArrowRight className="size-5 pt-px rtl:rotate-180" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogSummary;
