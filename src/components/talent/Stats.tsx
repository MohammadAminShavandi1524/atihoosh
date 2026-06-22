"use client";

import ExpSection from "../aboutUs/ExpSection";

interface StatsProps {}

const Stats = ({}: StatsProps) => {
  return (
    <div className="mt-15 flex items-center justify-center ps-20 w-full gap-x-40 ">
      {/* experience section */}
      <ExpSection
        number="+50"
        label="Successful projects"
        topLineClassName="ms-1.5"
      />

      <ExpSection number="8" label="Team members" />

      <ExpSection
        number="+3"
        label="Years of experience"
        topLineClassName="ms-1.5"
      />
    </div>
  );
};

export default Stats;
