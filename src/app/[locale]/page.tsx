
import CTA from "@/components/landing/CTA";
import HeroSection from "@/components/landing/HeroSection";
import OurCustomers from "@/components/landing/OurCustomers";
import Services from "@/components/landing/Services";
import StickyTitle from "@/components/landing/StickyTitle";
import TeamSection from "@/components/landing/TeamSection";


import { Locale, useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { use } from "react";

export default function IndexPage({ params }: PageProps<"/[locale]">) {
  const { locale } = use(params);

  // Enable static rendering
  setRequestLocale(locale as Locale);

  return (
    <div className="headerPadding">
      {/* hero section */}
      <HeroSection />

      {/* services */}
      {/* <Services /> */}

      {/* Entrust Your Project To Us */}
      {/* <CTA /> */}

      {/* read more carousel  */}
      {/* <OurCustomers /> */}

      {/* How We Run Software Project  stiky title !!*/}

      {/* <StickyTitle /> */}

      {/* team section */}

      {/* <TeamSection /> */}
    </div>
  );
}
