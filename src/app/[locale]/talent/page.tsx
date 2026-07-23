"use client";

import ApplyForm from "@/components/talent/ApplyForm";
import HeroSection from "@/components/talent/HeroSection";

interface pageProps {}

const page = ({}: pageProps) => {
  return (
    <div className="headerPadding">
      <HeroSection />

      <div className="xs:pb-12 pb-10 sm:pb-14 md:pb-16 lg:pb-20">
        <ApplyForm />
      </div>
    </div>
  );
};

export default page;
