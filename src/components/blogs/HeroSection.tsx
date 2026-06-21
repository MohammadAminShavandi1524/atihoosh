"use client";

import Stats from "./Stats";

interface HeroSectionProps {}

const HeroSection = ({}: HeroSectionProps) => {
  return (
    <div className="border-y-border mb-12 flex flex-col items-center border-y pt-20 pb-20">
      {/* title */}
      <div className="mb-12 text-center text-[58px]">
        <div>
          <span>Ideas on</span>
          <span className="text-primary"> AI </span>
          <span>, software</span>
        </div>
        <div>and building things that last</div>
      </div>

      {/* description */}
      <div className="text-muted-foreground mx-auto mb-10 w-5/10 max-w-150 text-center text-lg">
        Insights on artificial intelligence, software engineering and
        cybersecurity — written for teams who build, not just talk.
      </div>

      <div className="from-background to-primary mb-8 h-16 w-px self-center rounded-full bg-linear-to-t" />

      <Stats />
    </div>
  );
};

export default HeroSection;
