"use client";

import { useLocale } from "next-intl";
import BlogSummary from "./BlogSummary";
import { EN_latestBlogsSample, FA_latestBlogsSample } from "@/data/BlogsSample";

interface LatestBlogsProps {}

const LatestBlogs = ({}: LatestBlogsProps) => {
  const locale = useLocale();

  const activeBlogs =
    locale === "en" ? EN_latestBlogsSample : FA_latestBlogsSample;

  return (
    <div className="px-50">
      {/* title */}
      <div className="text-primary mb-4 text-lg">Latest Posts</div>
      {/*  */}
      <div className="mb-13 flex items-center justify-between">
        <div className="text-[38px]">From the journal</div>
        <div className="bg-tertiary text-primary border-primary rounded-full border px-6 py-3 text-base">
          4 articles
        </div>
      </div>
      {/* latest blogs */}
      <div className="grid grid-cols-2 gap-x-6 gap-y-8">
        {activeBlogs.map(
          (
            { avgReadTime, description, imageSrc, indexNumber, tags, title },
            index,
          ) => {
            return (
              <BlogSummary
                key={index}
                indexNumber={indexNumber}
                title={title}
                tags={tags}
                description={description}
                imageSrc={imageSrc}
                avgReadTime={avgReadTime}
              />
            );
          },
        )}
      </div>
    </div>
  );
};

export default LatestBlogs;
