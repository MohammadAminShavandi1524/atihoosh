"use client";

import { BlogSection } from "@/components/blog/BlogSection";
import ArticleFooter from "@/components/blog/Footer";

import { relatedArticles } from "@/data/BlogsSample";
import { ArrowLeft } from "lucide-react";
import { useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";

interface pageProps {}

const page = ({}: pageProps) => {
  const locale = useLocale();

  return (
    <div className="headerPadding w90 flex flex-col">
      {/* hero section */}
      <div className="mt-30 mb-40 grid grid-cols-2">
        <div className="mt-10 flex flex-col pe-20">
          {/* title */}
          <div className="mb-10 text-5xl/[72px] font-medium">
            هوش مصنوعی در سال ۲۰۲۶؛ کدام کسب‌وکارها از رقابت عقب می‌مانند؟
          </div>
          {/* description */}
          <div className="text-muted-foreground mb-6 pe-20 text-justify text-xl">
            هوش مصنوعی دیگر یک فناوری آینده‌نگرانه نیست؛ بلکه به بخشی از واقعیت
            کسب‌وکارها تبدیل شده است. شرکت‌هایی که همچنان به روش‌های سنتی متکی
            باشند، به‌تدریج سهم بازار خود را از دست می‌دهند و از رقابت عقب
            می‌مانند.
          </div>
          {/* Category */}
          <div className="border-primary bg-tertiary text-primary mb-6 w-fit rounded-full border px-4 py-2 text-[15px] font-medium">
            هوش مصنوعی
          </div>
          {/* author date avg read time */}
          <div className="text-muted-foreground flex flex-wrap items-center gap-4">
            <div className="bg-tertiary text-primary border-primary flex hidden h-8 w-8 items-center justify-center rounded-full border font-semibold">
              A
            </div>

            <div className="flex gap-x-2">
              <span> نوشته شده توسط</span>
              <span className="text-foreground font-medium">آتی هوش</span>
            </div>

            <span>•</span>

            <time dateTime="2026-06-30">۳۰ تیر ۱۴۰۵</time>

            <span>•</span>

            <span>۷ دقیقه مطالعه</span>
          </div>
        </div>
        <div className="relative h-125 w-full">
          <Image
            alt="blog-image"
            src="/blogs/3.png"
            fill
            className="rounded-3xl"
          />
        </div>
      </div>

      {/* content and other blogs */}

      <div className="relative flex gap-x-15">
        <div className="flex flex-1 flex-col border-e pe-15 dark:border-e-[#0b313b]">
          <BlogSection
            title="مقدمه"
            paragraphs={[
              "تا چند سال پیش، هوش مصنوعی بیشتر مفهومی متعلق به فیلم‌های علمی‌تخیلی بود؛ اما امروز به یکی از مهم‌ترین عوامل تحول در دنیای کسب‌وکار تبدیل شده است. از پاسخ‌گویی خودکار به مشتریان گرفته تا تحلیل رفتار کاربران و پیش‌بینی روند بازار، این فناوری شیوه فعالیت سازمان‌ها را متحول کرده است.",
              "امروزه سؤال اصلی این نیست که آیا باید از هوش مصنوعی استفاده کنیم یا خیر؛ بلکه این است که اگر از آن استفاده نکنیم، چه تأثیری بر آینده کسب‌وکارمان خواهد داشت. شرکت‌هایی که نتوانند خود را با این تغییرات هماهنگ کنند، به‌مرور از رقابت عقب خواهند ماند.",
            ]}
          />

          <BlogSection
            title="هوش مصنوعی دیگر یک مزیت نیست؛ یک ضرورت است"
            paragraphs={[
              "در گذشته، استفاده از فناوری‌های نوین یک مزیت رقابتی محسوب می‌شد، اما اکنون به یک ضرورت تبدیل شده است. مشتریان انتظار دارند خدمات سریع‌تر، هوشمندتر و شخصی‌سازی‌شده‌تری دریافت کنند.",
              "کسب‌وکارهایی که همچنان به روش‌های سنتی متکی هستند، به‌تدریج سهم بازار خود را از دست می‌دهند. هوش مصنوعی می‌تواند با افزایش سرعت تصمیم‌گیری، کاهش هزینه‌ها و بهبود تجربه مشتری، نقش مهمی در حفظ رقابت‌پذیری سازمان‌ها ایفا کند.",
            ]}
          />

          <BlogSection
            title="چه کسب‌وکارهایی بیشترین خطر عقب ماندن را دارند؟"
            paragraphs={[
              "همه کسب‌وکارها به یک اندازه در معرض خطر نیستند. شرکت‌هایی که همچنان فرآیندهای سنتی دارند یا از داده‌های خود استفاده نمی‌کنند، بیش از سایرین با چالش رقابت روبه‌رو خواهند شد.",
            ]}
          />

          <BlogSection
            title="۱. شرکت‌هایی که هنوز همه کارها را به‌صورت دستی انجام می‌دهند"
            paragraphs={[
              "اگر بخش بزرگی از فعالیت‌های سازمان به ورود اطلاعات، تهیه گزارش‌های تکراری یا پاسخ‌گویی دستی وابسته باشد، زمان و منابع زیادی صرف کارهایی می‌شود که ارزش افزوده کمی دارند.",
              "هوش مصنوعی می‌تواند این وظایف را خودکار کرده و به کارکنان فرصت دهد روی فعالیت‌های مهم‌تری مانند توسعه کسب‌وکار، حل مسائل پیچیده و نوآوری تمرکز کنند.",
            ]}
          />

          <BlogSection
            title="۲. کسب‌وکارهایی که از داده‌های خود استفاده نمی‌کنند"
            paragraphs={[
              "بسیاری از شرکت‌ها اطلاعات ارزشمندی درباره مشتریان، فروش و رفتار کاربران در اختیار دارند؛ اما این داده‌ها بدون تحلیل باقی می‌مانند و در تصمیم‌گیری‌ها نقش مؤثری ندارند.",
              "هوش مصنوعی می‌تواند الگوهای پنهان در داده‌ها را شناسایی کرده و به مدیران کمک کند رفتار مشتریان را بهتر درک کنند، روندهای آینده بازار را پیش‌بینی کنند و تصمیم‌های دقیق‌تری بگیرند.",
            ]}
          />

          <BlogSection
            title="هوش مصنوعی چگونه تجربه مشتری را متحول می‌کند؟"
            paragraphs={[
              "امروزه تجربه مشتری یکی از مهم‌ترین عوامل موفقیت هر کسب‌وکار است. هوش مصنوعی با ارائه خدمات سریع‌تر و شخصی‌سازی‌شده، می‌تواند رضایت مشتریان را به شکل چشمگیری افزایش دهد.",
            ]}
          />

          <BlogSection
            title="پشتیبانی هوشمند مشتریان"
            paragraphs={[
              "چت‌بات‌ها و دستیارهای هوشمند قادرند در تمام ساعات شبانه‌روز به سؤالات متداول پاسخ دهند، زمان انتظار مشتریان را کاهش دهند و بخشی از بار کاری تیم پشتیبانی را بر عهده بگیرند.",
            ]}
          />

          <BlogSection
            title="پیشنهادهای شخصی‌سازی‌شده"
            paragraphs={[
              "با تحلیل رفتار کاربران، هوش مصنوعی می‌تواند محصولات یا خدمات متناسب با نیاز هر مشتری را پیشنهاد دهد. این موضوع علاوه بر افزایش رضایت کاربران، نرخ تبدیل و فروش را نیز بهبود می‌بخشد.",
            ]}
          />

          <BlogSection
            title="تحلیل احساسات مشتریان"
            paragraphs={[
              "بررسی نظرات، پیام‌ها و بازخوردهای مشتریان به کمک الگوریتم‌های هوشمند، به کسب‌وکارها کمک می‌کند نقاط قوت و ضعف خود را سریع‌تر شناسایی کرده و خدمات بهتری ارائه دهند.",
            ]}
          />

          <BlogSection
            title="آیا هوش مصنوعی جای انسان را می‌گیرد؟"
            paragraphs={[
              "یکی از نگرانی‌های رایج درباره هوش مصنوعی، جایگزین شدن آن با نیروی انسانی است. اما در عمل، این فناوری بیشتر نقش یک ابزار کمکی را ایفا می‌کند تا یک جایگزین کامل.",
              "وظایف تکراری و زمان‌بر به سیستم‌های هوشمند سپرده می‌شوند و انسان‌ها می‌توانند بر فعالیت‌هایی مانند خلاقیت، تصمیم‌گیری، مذاکره و ایجاد روابط انسانی تمرکز کنند.",
            ]}
          />

          <BlogSection
            title="از کجا استفاده از هوش مصنوعی را شروع کنیم؟"
            paragraphs={[
              "بسیاری از مدیران تصور می‌کنند استفاده از هوش مصنوعی نیازمند تغییر کامل ساختار سازمان است، درحالی‌که چنین نیست. بهترین روش، آغاز با پروژه‌های کوچک و قابل‌اندازه‌گیری است.",
              "خودکارسازی پاسخ به مشتریان، تحلیل داده‌های فروش، تولید گزارش‌های مدیریتی، پیش‌بینی تقاضا و بهینه‌سازی کمپین‌های بازاریابی، از جمله اولین گام‌های مناسب برای ورود به این حوزه هستند.",
            ]}
          />

          <BlogSection
            title="بزرگ‌ترین اشتباه در مواجهه با هوش مصنوعی"
            paragraphs={[
              "بزرگ‌ترین اشتباه این نیست که امروز از پیشرفته‌ترین ابزارهای هوش مصنوعی استفاده نمی‌کنید؛ بلکه این است که تصور کنید هنوز زمان زیادی برای تصمیم‌گیری باقی مانده است.",
              "در حالی که بسیاری از رقبا در حال یادگیری، آزمایش و بهبود فرآیندهای خود هستند، تأخیر در ورود به این حوزه می‌تواند فاصله رقابتی را هر روز بیشتر کند.",
            ]}
          />

          <BlogSection
            title="آینده متعلق به کسب‌وکارهای سازگار است"
            paragraphs={[
              "تاریخ نشان داده است که موفق‌ترین شرکت‌ها همیشه بزرگ‌ترین یا قدیمی‌ترین برندها نبوده‌اند؛ بلکه سازمان‌هایی موفق بوده‌اند که توانسته‌اند خود را با تغییرات فناوری و نیازهای بازار تطبیق دهند.",
              "هوش مصنوعی نیز از همین قاعده پیروی می‌کند. شرکت‌هایی که از امروز برای استفاده هدفمند از این فناوری برنامه‌ریزی کنند، در آینده رشد سریع‌تر، مشتریان وفادارتر و انعطاف‌پذیری بیشتری خواهند داشت.",
            ]}
          />

          <BlogSection
            title="جمع‌بندی"
            paragraphs={[
              "هوش مصنوعی در سال ۲۰۲۶ دیگر یک فناوری آینده‌نگرانه نیست، بلکه بخشی از واقعیت امروز کسب‌وکارها محسوب می‌شود. شرکت‌هایی که همچنان به روش‌های سنتی متکی بمانند، به‌مرور از رقابت عقب خواهند افتاد.",
              "خبر خوب این است که برای شروع، نیازی به سرمایه‌گذاری‌های سنگین نیست. کافی است از بخش‌های کوچک آغاز کنید، نتایج را ارزیابی کنید و به‌تدریج فرهنگ تصمیم‌گیری مبتنی بر داده و نوآوری را در سازمان خود گسترش دهید.",
            ]}
          />
        </div>

        <div
          className="sticky h-fit w-125 rounded-2xl border p-7 transition-[top] duration-300 ease-out dark:border-[#0b313b]"
          style={{ top: "var(--header-offset)" }}
        >
          <div className="text-primary flex items-center justify-between pb-6">
            <div className="text-lg">مقالات دیگر</div>
            <Link href={`/${locale}/blogs`} className="flex gap-x-1">
              <span>مشاهده همه</span>
              <span>
                <ArrowLeft />
              </span>
            </Link>
          </div>
          {/*  */}
          <div>
            {relatedArticles.map((article, index) => {
              return (
                <Link
                  href={""}
                  className="border-b-border flex gap-x-4 border-b py-5 last:border-none"
                  key={index}
                >
                  <section className="relative size-18 overflow-hidden">
                    <Image
                      alt=""
                      src={article.image}
                      fill
                      className="rounded-md object-cover"
                    />
                  </section>
                  <section className="flex flex-col gap-y-2 text-sm">
                    <div className="text-primary text-xs">
                      {article.category}
                    </div>
                    <div className="">{article.title}</div>
                    <div className="text-muted-foreground flex flex-wrap items-center gap-1.5">
                      <time dateTime="2026-06-30">۳۰ تیر ۱۴۰۵</time>

                      <span>،</span>

                      <span>۷ دقیقه مطالعه</span>
                    </div>
                  </section>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* share */}
      <ArticleFooter />
    </div>
  );
};

export default page;
