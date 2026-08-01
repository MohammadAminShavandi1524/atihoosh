"use client";

import { BlogSection } from "@/components/blog/BlogSection";
import ArticleFooter from "@/components/blog/Footer";

import { ArrowLeft } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

interface BlogChild {
  id: number;
  blog: number;
  title: string;
  description: string;
  image: string | null;
}

interface BlogParent {
  id: number;
  title: string;
  description: string;
  image: string;
  category: {
    id: number;
    name: string;
  };
  root_blog: number;
  tags: string[];
  lang: string;
  published: boolean;
  slug: string;
}

interface BlogResponse {
  fa: {
    parent: BlogParent;
    child: BlogChild[];
  };
  en: {
    parent: BlogParent;
    child: BlogChild[];
  };
}

const Page = () => {
  const locale = useLocale();
  const t = useTranslations("Blogs.Article");

  const params = useParams();

  const id = params.id as string;

  const [blogData, setBlogData] = useState<BlogResponse | null>(null);

  const [relatedBlogs, setRelatedBlogs] = useState<BlogParent[]>([]);
  const relatedId =
    locale === "fa" ? blogData?.fa.parent.id : blogData?.en.parent.id;

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await fetch(`/api/blogs/children/${id}`, {
          cache: "no-store",
        });

        if (!res.ok) throw new Error("Failed to fetch blog");

        const data = await res.json();

        setBlogData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchBlog();
  }, [id]);

  useEffect(() => {
    if (!relatedId) return;

    const fetchRelatedBlogs = async () => {
      try {
        const res = await fetch(`/api/blogs/related/${relatedId}`, {
          cache: "no-store",
        });

        if (!res.ok) {
          throw new Error("Failed to fetch related blogs");
        }

        const data = await res.json();

        setRelatedBlogs(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchRelatedBlogs();
  }, [relatedId]);

  if (!blogData) return null;

  const blog = locale === "fa" ? blogData.fa.parent : blogData.en.parent;

  const children = locale === "fa" ? blogData.fa.child : blogData.en.child;

  return (
    <div
      dir={locale === "fa" ? "rtl" : "ltr"}
      className="font-IRANYekanX headerPadding w90 flex flex-col"
    >
      {/* hero */}
      <div className="mt-20 mb-20 grid gap-y-7.5 max-lg:flex max-lg:flex-col-reverse md:mt-30 md:mb-30 lg:grid-cols-2 lg:gap-x-10 xl:mb-40 2xl:gap-y-10">
        <div className="flex flex-col lg:pe-10 xl:pe-20 2xl:mt-4">
          <h1 className="mb-6 text-3xl/[48px] font-medium sm:text-4xl/[58px] lg:mb-10 lg:text-5xl/[72px]">
            {blog.title}
          </h1>

          <div className="text-muted-foreground mb-6 text-justify text-base leading-8 sm:text-lg lg:pe-10 lg:text-xl">
            {blog.description}
          </div>

          <div className="border-primary bg-tertiary text-primary mb-6 w-fit rounded-full border px-4 py-2 text-sm font-medium">
            {blog.category.name}
          </div>

          <div className="text-muted-foreground flex flex-wrap items-center gap-3 text-sm sm:gap-4">
            <div>
              {t("writtenBy")}
              <span className="text-foreground ms-2 font-medium">
                {t("author")}
              </span>
            </div>

            <span>•</span>

            <span>
              {locale === "fa" ? "۷" : "7"} {t("readTime")}
            </span>
          </div>
        </div>

        <div className="3xl:rounded-3xl relative aspect-video w-full overflow-hidden rounded-lg max-lg:max-h-[420px] lg:rounded-2xl">
          <Image
            alt={blog.title}
            src={blog.image}
            fill
            sizes="(max-width: 640px) 100vw,
           (max-width: 1024px) 100vw,
           50vw"
            className="rounded-3xl object-cover"
            priority
          />
        </div>
      </div>

      <div className="relative flex flex-col gap-y-10 lg:flex-row lg:gap-x-15">
        <div className="flex flex-1 flex-col lg:border-e lg:pe-10 xl:pe-15">
          {children.map((child) => (
            <BlogSection
              key={child.id}
              title={child.title}
              paragraphs={[child.description]}
            />
          ))}
        </div>

        <aside className="s:border-border s:rounded-xl border-y-border s:border s:p-7 h-fit w-full border-y py-5 lg:sticky lg:top-10 lg:min-h-125 lg:w-125">
          <div className="text-primary flex items-center justify-between pb-5">
            <div className="text-lg">{t("moreArticles")}</div>

            <Link
              href={`/${locale}/blogs`}
              className="flex items-center gap-x-1 text-sm"
            >
              <span>{t("viewAll")}</span>

              <ArrowLeft className="size-4 ltr:rotate-180" />
            </Link>
          </div>

          {relatedBlogs.length === 0 ? (
            <div className="text-muted-foreground flex min-h-40 items-center justify-center text-center text-sm leading-7">
              {locale === "fa"
                ? "در حال حاضر مقاله مرتبطی برای نمایش وجود ندارد."
                : "There are no related articles available at the moment."}
            </div>
          ) : (
            relatedBlogs.slice(0, 4).map((article) => (
              <Link
                key={article.id}
                href={`/${locale}/blogs/${article.id}/${article.slug}`}
                className="border-b-border flex gap-x-4 border-b py-5 last:border-none"
              >
                <div className="relative size-16 shrink-0 overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="rounded-md object-cover"
                  />
                </div>

                <div className="flex min-w-0 flex-col gap-y-2">
                  <div className="text-primary text-xs">
                    {article.category.name}
                  </div>

                  <div className="line-clamp-2 text-sm leading-6">
                    {article.title}
                  </div>
                </div>
              </Link>
            ))
          )}
        </aside>
      </div>

      <ArticleFooter tags={blog.tags} />
    </div>
  );
};

export default Page;
