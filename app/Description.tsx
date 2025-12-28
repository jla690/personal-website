import Link from "next/link";
import React from "react";

const Description = () => {
  return (
    <div className="py-24 max-w-4xl mx-auto" id="about">
      <div>
        <h1 className="text-4xl md:text-5xl font-medium pb-6">Jason Li</h1>
      </div>
      <div className="text-lg leading-relaxed  max-w-2xl mb-8">
        Hi! I am a new graduate from Simon Fraser University with a
        Bachelor&apos;s degree in Software Systems. I am based in Vancouver,
        Canada and I previously worked on backend database drivers in my co-ops.
        I like to work on websites on the side.
      </div>
    </div>
  );
};

export default Description;
