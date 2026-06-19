"use client";

import ExpSection from "@/components/aboutUs/ExpSection";
import OurTeamBox from "@/components/aboutUs/OurTeamBox";

import OurValuesBox from "@/components/aboutUs/OurValuesBox";
import TimeLine from "@/components/aboutUs/TimeLine";
import { BadgeCheck, Lightbulb, Users } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";

interface pageProps {}

const page = ({}: pageProps) => {
  const t = useTranslations("AboutPage");
  const values = t.raw("ValuesSection.items");
  const member = t.raw("TeamSection.members.default");
  const locale = useLocale();

  return (
    <div className="">
      <section className="flex flex-col">
        {/* hero section */}
        <div className="border-t-border pt-18.75 mb-18.75 border-t">
          <div className="w90 flex flex-col gap-y-12.5 text-center">
            <div className="text-[90px] font-medium">
              <span>{t("HeroSection.titlePart1") + " "}</span>
              <span className="text-primary">
                {t("HeroSection.titlePart2") + " "}
              </span>
              <span>{t("HeroSection.titlePart3")} </span>
            </div>
            <div className="text-[28px] font-medium">
              {t("HeroSection.description")}
            </div>
          </div>
        </div>

        {/* experience */}
        <div className="border-y-border my-10 border-y py-25">
          <div className="w90 flex items-center justify-between px-30 2xl:px-40">
            {/* experience section */}
            <ExpSection
              number="+50"
              label={t("StatsSection.successfulProjects")}
              topLineClassName="ms-1.5"
            />

            <ExpSection number="8" label={t("StatsSection.teamMembers")} />

            <ExpSection
              number="+3"
              label={t("StatsSection.yearsOfExperience")}
              topLineClassName="ms-1.5"
            />

            <ExpSection number="24/7" label={t("StatsSection.support")} />
          </div>
        </div>

        {/* our story */}
        <div className="w90 my-15 grid h-100 grid-cols-2 px-30 2xl:px-40">
          {/* left side */}
          <div className="flex flex-col pe-20 2xl:pe-25">
            <div className="text-primary text-2xl">
              {t("StorySection.badge")}
            </div>

            <div className="mt-10 mb-12 text-5xl">
              {t("StorySection.title")}
            </div>

            <div className="text-muted text-justify text-xl font-light">
              {t("StorySection.description")}
            </div>
          </div>

          {/* right side timeline */}
          <div className="border-s-primary flex flex-col gap-y-8 border-s pt-7">
            <TimeLine
              year={2022}
              title={t("StorySection.timeline.founded.title")}
              description={t("StorySection.timeline.founded.description")}
            />

            <TimeLine
              year={2024}
              title={t("StorySection.timeline.firstProduct.title")}
              description={t("StorySection.timeline.firstProduct.description")}
            />

            <TimeLine
              year={2024}
              title={t("StorySection.timeline.teamGrowth.title")}
              description={t("StorySection.timeline.teamGrowth.description")}
            />
          </div>
        </div>
      </section>

      <section className="relative my-15 flex h-120 w-full">
        {/* banner */}
        <div className="relative flex w-full flex-col">
          {/* image */}
          <div className="absolute top-0 h-120 w-full">
            <Image alt="AUbanner" src={"/AUbanner.png"} fill />
          </div>

          {/* content */}
          <div className="z-10 mx-auto flex h-full flex-col items-center justify-center gap-y-8 text-white 2xl:w-[60%]">
            {/* title */}
            <div className="text-center text-[40px]">
              {t("BannerSection.title")}
            </div>

            {/* description */}
            <div className="mx-auto text-center text-lg 2xl:w-[54%]">
              {t("BannerSection.description")}
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col">
        {/* Our values */}
        <div className="border-b-border mb-20 border-b pb-20">
          <div className="w90 flex flex-col 2xl:px-30">
            <div className="text-primary mb-6 text-2xl">
              {t("ValuesSection.badge")}
            </div>

            <div className="mb-10 text-[48px]">{t("ValuesSection.title")}</div>

            <div className="flex items-center justify-between gap-x-18">
              <OurValuesBox
                title={values.innovation.title}
                description={values.innovation.description}
                Logo={Lightbulb}
              />

              <OurValuesBox
                title={values.teamwork.title}
                description={values.teamwork.description}
                Logo={Users}
              />

              <OurValuesBox
                title={values.quality.title}
                description={values.quality.description}
                Logo={BadgeCheck}
              />
            </div>
          </div>
        </div>

        {/* our team */}

        {/* <div className="mt-20 mb-10 border-y-1 border-y-[#32323261] py-25">
          <div className="w90 flex flex-col 2xl:px-30">
            <div className="text-primary text-[22px]">
              {t("TeamSection.badge")}
            </div>

            <div className="mb-[72px] text-[44px]">
              {t("TeamSection.title")}
            </div>

           
            <div className="grid grid-cols-4 gap-x-7 gap-y-14">
              {Array.from({ length: 8 }).map((_, i) => (
                <OurTeamBox
                  key={i}
                  EmployeeName={member.name}
                  EmployeeStatus={member.role}
                />
              ))}
            </div>
          </div>
        </div> */}
      </section>
    </div>
  );
};

export default page;
