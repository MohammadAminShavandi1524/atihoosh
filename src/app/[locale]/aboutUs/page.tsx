"use client";

import ExpSection from "@/components/aboutUs/ExpSection";
import LeadershipSection from "@/components/aboutUs/LeaderShip";
import OurTeamBox from "@/components/aboutUs/OurTeamBox";

import OurValuesBox from "@/components/aboutUs/OurValuesBox";
import TimeLine from "@/components/aboutUs/TimeLine";
import { BadgeCheck, Lightbulb, Users } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";

interface pageProps {}

const page = ({}: pageProps) => {
  const t = useTranslations("AboutPage");
  const values = t.raw("ValuesSection.items");
  const member = t.raw("TeamSection.members.default");
  const locale = useLocale();

  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="headerPadding">
      <section className="flex flex-col">
        {/* hero section */}
        <div className="border-b-border mb-20 border-b pt-20 pb-20">
          <div className="w90 flex flex-col gap-y-17.5 text-center 2xl:px-30">
            <div className="flex flex-col font-medium">
              <span className="text-primary text-[108px]">
                {t("HeroSection.titlePart1")}
              </span>
              <span className="text-[48px]">{t("HeroSection.titlePart2")}</span>
            </div>
            <div className="flex flex-col gap-y-6 text-justify text-[28px] font-medium">
              <span>{t("HeroSection.description1")}</span>
              <span>{t("HeroSection.description2")}</span>
              <span>{t("HeroSection.description3")}</span>
            </div>
          </div>
        </div>

        {/* experience */}
        <div className="border-y-border my-10 hidden border-y py-25">
          <div className="w90 flex max-w-[1000px] items-center justify-between">
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

            {/* <ExpSection number="24/7" label={t("StatsSection.support")} /> */}
          </div>
        </div>

        {/* our story === hidden */}
        <div className="w90 my-15 grid hidden h-100 grid-cols-2 px-30 2xl:px-40">
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

      {/* hidden */}
      <section className="relative my-15 hidden h-120 w-full">
        {/* banner */}
        <div className="relative flex w-full flex-col">
          {/* image */}
          <div className="absolute top-0 h-120 w-full">
            <Image
              alt="AUbanner"
              src={theme === "dark" ? "/AUbanner.png" : "/AUbannerLight.png"}
              fill
            />
          </div>

          {/* content */}
          <div className="z-10 mx-auto flex h-full flex-col items-center justify-center gap-y-8 2xl:w-[60%]">
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

            <div className="grid grid-cols-3 gap-x-18 gap-y-18 2xl:grid-cols-4 2xl:gap-x-10 2xl:gap-y-10">
              <OurValuesBox
                title={t("ValuesSection.items.onTimeDelivery.title")}
              />
              <OurValuesBox
                title={t("ValuesSection.items.customerFocusedSolutions.title")}
              />

              <OurValuesBox
                title={t("ValuesSection.items.crossDisciplinaryExpertise.title")}
              />
              <OurValuesBox
                title={t("ValuesSection.items.continuousSupport.title")}
              />
            </div>
          </div>
        </div>

      </section>

      {/* ceo */}
      <LeadershipSection />
    </div>
  );
};

export default page;
