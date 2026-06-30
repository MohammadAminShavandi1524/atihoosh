import { Copy, Linkedin, Send, XIcon } from "lucide-react";
import Link from "next/link";

const tags = ["هوش مصنوعی", "AI", "تحول دیجیتال", "اتوماسیون", "کسب‌وکار"];

export default function ArticleFooter() {
  return (
    <section className="mt-20 mb-24">
      <div className="bg-secondary-bg border-border rounded-3xl border px-14 py-7">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
          {/* Tags */}
          <div className="space-y-5">
            <div>
              <h3 className="mb-4 ps-3 text-2xl font-semibold">
                برچسب‌های مقاله
              </h3>
              <p className="text-muted-foreground mt-1 mb-9.5 ps-2 text-sm">
                موضوعات مرتبط با این مقاله را دنبال کنید.
              </p>
            </div>

            <div className="flex flex-wrap gap-1.5">
              {tags.map((tag) => (
                <button
                  key={tag}
                  className="bg-background hover:bg-primary dark:hover:text-foreground cursor-pointer rounded-full border px-4 py-2 text-sm transition-all duration-200 hover:text-white"
                >
                  #{tag}
                </button>
              ))}
            </div>
          </div>

          {/* Share */}
          <div className="space-y-5">
            <div>
              <h3 className="mb-4 text-2xl font-semibold">
                اشتراک‌گذاری مقاله
              </h3>

              <p className="text-muted-foreground mt-1 mb-4 max-w-xs text-sm">
                اگر این مقاله برایتان مفید بود، آن را با دوستان و همکاران خود به
                اشتراک بگذارید.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button className="bg-background hover:bg-primary dark:hover:text-foreground flex size-12 cursor-pointer items-center justify-center rounded-full border transition-all duration-200 hover:text-white">
                <Linkedin className="size-5" />
              </button>

              <button className="bg-background hover:bg-primary dark:hover:text-foreground flex size-12 cursor-pointer items-center justify-center rounded-full border transition-all duration-200 hover:text-white">
                <XIcon className="size-5" />
              </button>

              <button className="bg-background hover:bg-primary dark:hover:text-foreground flex size-12 cursor-pointer items-center justify-center rounded-full border transition-all duration-200 hover:text-white">
                <Send className="size-5" />
              </button>

              <button className="bg-background hover:bg-primary dark:hover:text-foreground flex size-12 cursor-pointer items-center justify-center rounded-full border transition-all duration-200 hover:text-white">
                <Copy className="size-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
