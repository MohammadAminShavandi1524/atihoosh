import CTA from "@/components/landing/CTA";
import HeroSection from "@/components/landing/HeroSection";
import OurCustomers from "@/components/landing/OurCustomers";
import ProcessSection from "@/components/landing/proccesSection/ProcessSection";
import Services from "@/components/landing/Services";


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
      <div className="ps-2">
        <Services />
      </div>

      {/* Entrust Your Project To Us */}
      <CTA />

      {/* read more carousel  */}
      <OurCustomers />

      {/* How We Run Software Project  stiky title !!*/}

      <ProcessSection />

      {/* team section */}

      {/* <TeamSection /> */}
    </div>
  );
}
