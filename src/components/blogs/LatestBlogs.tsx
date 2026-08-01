"use client";

import { useEffect, useState } from "react";

import { useLocale, useTranslations } from "next-intl";

import BlogSummary from "./BlogSummary";

interface LatestBlog {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  lang: string;
  root_blog: number;
  slug: string;
}

interface LatestBlogsProps {}

const LatestBlogs = ({}: LatestBlogsProps) => {
  const locale = useLocale();

  const t = useTranslations("Blogs.LatestBlogs");

  const [blogs, setBlogs] = useState<LatestBlog[]>([]);

  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch(`/api/blogs/latest?lang=${locale}`, {
          cache: "no-store",
        });

        if (!res.ok) {
          throw new Error("Failed to fetch blogs");
        }

        const data = await res.json();

        setBlogs(data);
      } catch (error) {
        console.error("FETCH LATEST BLOGS ERROR =>", error);
      }
    };

    fetchBlogs();
  }, [locale]);

  const visibleBlogs = showAll ? blogs.slice(0, 8) : blogs.slice(0, 4);

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

        <div className="bg-tertiary text-primary border-primary flex w-fit items-center gap-x-2 rounded-full border px-4 py-2 text-sm sm:px-5 sm:text-[15px] lg:px-6 lg:py-3 lg:text-base">
          <span>{blogs.length}</span>
          <span>{t("badge")}</span>
        </div>
      </div>

      {/* blogs */}
      <div className="mlg:grid-cols-2 grid grid-cols-1 gap-6 xl:gap-8">
        {visibleBlogs.map((blog, index) => (
          <BlogSummary
            key={blog.id}
            id={blog.id}
            indexNumber={index + 1}
            title={blog.title}
            tags={blog.tags}
            description={blog.description}
            slug={blog.slug}
            imageSrc={blog.image}
            avgReadTime={5}
          />
        ))}
      </div>
      {blogs.length > 4 && (
        <div className="mt-10 flex justify-start">
          <button
            onClick={() => setShowAll((prev) => !prev)}
            className="bg-tertiary text-primary border-primary cursor-pointer rounded-full border px-4 py-2 text-xs transition-all hover:opacity-80 sm:px-5 sm:py-2.5 sm:text-sm lg:px-6 lg:py-3 lg:text-base"
          >
            {showAll
              ? locale === "en"
                ? "Show less"
                : "نمایش کمتر"
              : locale === "en"
                ? "View more articles"
                : "مشاهده مقالات بیشتر"}
          </button>
        </div>
      )}
    </section>
  );
};

export default LatestBlogs;
