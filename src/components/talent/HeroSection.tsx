"use client";

import Stats from "./Stats";

interface HeroSectionProps {}

const HeroSection = ({}: HeroSectionProps) => {
  return (
    <div className="border-y-border mb-12 border-y pt-20 pb-20">
      <div className="w90 flex flex-col items-center">
        {/* title */}
        <div className="mb-12 max-w-240 text-center text-[64px]">
          <span>Build a career that's as </span>
          <span className="text-primary">exciting </span>
          <span>as the world we're shaping</span>
        </div>

        {/* description */}
        <div className="text-muted-foreground mx-auto mb-10 w-5/10 max-w-155 text-center text-lg">
          We're a team of designers and developers who use AI to build better
          digital experiences. Send us your resume — we'd love to know what
          you're great at.
        </div>


        <Stats/>
      </div>
    </div>
  );
};

export default HeroSection;
