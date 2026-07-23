"use client";

import ProcessSectionDesktop from "./ProcessSectionDesktop";
import ProcessSectionMobile from "./ProcessSectionMobile";

export default function ProcessSection() {
  return (
    <>
      <div className="max-lg:hidden">
        <ProcessSectionDesktop />
      </div>

      <div className="lg:hidden">
        <ProcessSectionMobile />
      </div>
    </>
  );
}
