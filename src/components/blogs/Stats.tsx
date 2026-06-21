"use client";

import StatRow from "./StatRow";

interface StatsProps {}

const Stats = ({}: StatsProps) => {
  return (
    <div className=" flex items-center justify-center">
      <div className="bg-border flex items-center gap-x-px">
        <StatRow number="4" label="Articles published" />
        <StatRow number="3" label="Topics covered" />
        <StatRow number="2026" label="Latest edition" />
        <StatRow number="~6 min" label="Avg. read time" />
      </div>
    </div>
  );
};

export default Stats;
