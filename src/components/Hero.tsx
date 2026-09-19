import React from "react";

export default function Hero() {
  return (
    <section className="screen-only relative w-full overflow-hidden bg-[#f7f9fa] py-14 md:py-20 border-b border-gray-100 bg-pinstripes">
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6">
        <h1 className="text-4xl font-black uppercase tracking-tight text-[#1a1f2c] sm:text-5xl md:text-6xl leading-[1.05]">
          MVP &amp; AI <span className="text-[#a74911]">Cost Calculator</span>
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-base font-medium leading-relaxed text-[#5b6470] sm:text-lg">
          Pick a platform, an AI layer and the features you need. Get an itemised price and timeline for your startup MVP, built by Bengaluru&apos;s{" "}
          <a href="https://www.thesquirrel.tech/services/mvp-development" className="text-[#a74911] underline font-bold">product studio</a>.
        </p>
      </div>
    </section>
  );
}
