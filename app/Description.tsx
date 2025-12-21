import Link from "next/link";
import React from "react";

const Description = () => {
  return (
    <div className="px-15 py-20 max-w-4xl mx-auto" id="about">
      <div>
        <h1 className="text-4xl md:text-5xl font-bold pb-6">Jason Li</h1>
      </div>
      <div className="text-lg leading-relaxed">
        Hi! I am a new graduate from Simon Fraser University with a
        Bachelor&apos;s degree in Software Systems. I am based in Vancouver,
        Canada and I previously worked on backend database drivers in my co-ops.
        I like to work on websites on the side.
      </div>
    </div>
  );
};

export default Description;
