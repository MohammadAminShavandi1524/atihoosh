"use client";

import { useLocale, useTranslations } from "next-intl";
import BlogSummary from "./BlogSummary";
import { EN_latestBlogsSample, FA_latestBlogsSample } from "@/data/BlogsSample";

interface LatestBlogsProps {}

const LatestBlogs = ({}: LatestBlogsProps) => {
  const locale = useLocale();
  const t = useTranslations("Blogs.LatestBlogs");

  const activeBlogs =
    locale === "en" ? EN_latestBlogsSample : FA_latestBlogsSample;

  return (
    <section className="w90 px-5 sm:px-6 lg:px-10 xl:px-16 2xl:px-24">
      {/* title */}
      <div className="text-primary mb-3 text-sm sm:text-base lg:mb-4 lg:text-lg">
        {t("titlePart1")} {t("titlePart2")}
      </div>

      {/* header */}
      <div className="mb-8 flex flex-col gap-5 sm:mb-10 md:flex-row md:items-center md:justify-between lg:mb-13">
        <h2 className="max-w-3xl text-3xl leading-tight sm:text-4xl lg:text-[38px]">
          {t("heading")}
        </h2>

        <div className="bg-tertiary text-primary border-primary w-fit rounded-full border px-4 py-2 text-sm sm:px-5 sm:text-[15px] lg:px-6 lg:py-3 lg:text-base">
          {t("badge")}
        </div>
      </div>

      {/* blogs */}
      <div className="grid grid-cols-1 gap-6 mlg:grid-cols-2 xl:gap-8">
        {activeBlogs.map(
          (
            { avgReadTime, description, imageSrc, indexNumber, tags, title },
            index,
          ) => (
            <BlogSummary
              key={index}
              indexNumber={indexNumber}
              title={title}
              tags={tags}
              description={description}
              imageSrc={imageSrc}
              avgReadTime={avgReadTime}
            />
          ),
        )}
      </div>
    </section>
  );
};

export default LatestBlogs;
