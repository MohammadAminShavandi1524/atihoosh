"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";

interface LeadershipSectionProps {}

const LeadershipSection = ({}: LeadershipSectionProps) => {
  const t = useTranslations("AboutPage.LeadershipSection");

  return (
    <section className="border-b-border mb-20 border-b pb-20">
      <div className="w90 2xl:px-30">
        {/* content */}
        <div className="">
          {/* <div className="text-primary mb-2 text-2xl">{t("badge")}</div> */}

          <div className="grid grid-cols-10">
            {/* image */}
            <div className="col-span-3 flex items-center">
              <div className="relative h-[480px] w-[400px]">
                <Image
                  alt="leadershipImage"
                  src={"/founder.png"}
                  fill
                  className="overflow-hidden rounded-2xl shadow-xl saturate-100 dark:saturate-75"
                />
              </div>
            </div>

            {/* description */}
            <div className="text-muted-foreground col-span-7 flex flex-col ps-4 pt-4 text-justify text-xl">
              <div className="text-foreground mb-8  text-[36px]">
                {t("title")}
              </div>
              <div className="mb-8 leading-8">{t("paragraph1")}</div>
              <div className="mb-8 leading-8">{t("paragraph2")}</div>
              <div className="leading-8">{t("paragraph3")}</div>

              {/* line */}
              <div className="bg-border my-8 h-0.5 w-36" />

              <div>
                <div className="text-foreground mb-1 text-2xl font-medium">
                  {t("name")}
                </div>

                <div className="text-[22px]">{t("role")}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;
