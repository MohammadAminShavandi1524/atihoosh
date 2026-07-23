"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";

interface LeadershipSectionProps {}

const LeadershipSection = ({}: LeadershipSectionProps) => {
  const t = useTranslations("AboutPage.LeadershipSection");

  return (
    <section className="border-b-border mb-12 border-b pb-16 md:mb-16 md:pb-20">
      <div className="w90 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 2xl:px-30">
        <div className="3xl:gap-x-14 grid grid-cols-1 gap-y-10 lg:grid-cols-10 lg:gap-x-10 xl:grid-cols-100 xl:gap-x-0 2xl:grid-cols-10 2xl:gap-x-14">
          {/* image */}
          <div className="3xl:col-span-3 flex justify-center lg:col-span-4 lg:justify-start lg:pt-20 xl:col-span-44 2xl:col-span-4">
            <div className="xss:h-[425px] xss:w-[340px] mlg:h-[470px] mlg:w-[376px] s:h-[450px] s:w-[360px] relative h-[400px] w-[320px] lg:h-[480px] lg:w-[400px]">
              <Image
                alt="leadershipImage"
                src="/founder.png"
                fill
                priority
                sizes="(max-width:1024px) 80vw, 400px"
                className="rounded-2xl object-cover shadow-xl saturate-100 dark:saturate-75"
              />
            </div>
          </div>

          {/* description */}
          <div className=" text-muted-foreground 3xl:col-span-7 flex flex-col text-justify text-base leading-[1.9] lg:col-span-6 lg:ps-2 lg:text-lg xl:col-span-56 xl:ps-4 xl:text-xl 2xl:col-span-6">
            {/* title */}
            <div className="text-foreground s:text-[30px] mb-6 text-[28px] leading-[1.25] md:text-[32px] xl:mb-8 xl:text-[36px]">
              {t("title")}
            </div>

            {/* paragraph 1 */}
            <div className="mb-5 xl:mb-8">{t("paragraph1")}</div>

            {/* paragraph 2 */}
            <div className="mb-5 xl:mb-8">{t("paragraph2")}</div>

            {/* paragraph 3 */}
            <div>{t("paragraph3")}</div>

            {/* divider */}
            <div className="bg-border my-6 h-0.5 w-28 xl:my-8 xl:w-36" />

            {/* author */}
            <div>
              <div className="text-foreground mb-1 text-xl font-medium md:text-2xl">
                {t("name")}
              </div>

              <div className="text-lg md:text-[20px] xl:text-[22px]">
                {t("role")}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;
