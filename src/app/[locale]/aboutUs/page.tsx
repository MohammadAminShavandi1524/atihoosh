"use client";

import HeroSection from "@/components/aboutUs/HeroSection";
import LeadershipSection from "@/components/aboutUs/LeaderShip";
import OurValues from "@/components/aboutUs/OurValues";
import { useLocale, useTranslations } from "next-intl";

interface pageProps {}

const page = ({}: pageProps) => {
  const t = useTranslations("AboutPage");
  const locale = useLocale();

  return (
    <div className="headerPadding">
      {/* hero section */}
      <HeroSection />
      {/* Our values */}
      <OurValues />
      {/* ceo */}
      <LeadershipSection />
    </div>
  );
};

export default page;
