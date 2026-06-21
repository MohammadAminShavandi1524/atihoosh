"use client";

interface GetNewArticleProps {}

const GetNewArticle = ({}: GetNewArticleProps) => {
  return (
    <div className="my-40 px-50">
      <div className="relative flex min-h-[220px] items-center justify-between rounded-xl bg-[radial-gradient(circle_600px_at_top_left,color-mix(in_srgb,var(--primary)_8%,transparent)_0%,color-mix(in_srgb,var(--primary)_3%,transparent)_35%,var(--secondary-bg)_75%)] py-16 ps-24 pe-56">
        <div>
          <div className="mb-5 text-[32px]">Get new articles in your inbox</div>
          <div className="text-muted-foreground max-w-[368px] text-base">
            Practical insights on AI, software and security — no noise, just
            what's useful for your business.
          </div>
        </div>

        <div className="flex items-center gap-x-2.5">
          <button className="text-muted-foreground border-muted-foreground bg-secondary-bg cursor-pointer rounded-lg border px-5 py-2.5">
            Your email address
          </button>
          <button className="bg-primary cursor-pointer rounded-lg px-5 py-2.5">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetNewArticle;
