import React from "react";
import { CheckCircle2, Zap, ShieldCheck, Clock } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#f7f9fa] py-16 md:py-24 border-b border-gray-100 bg-pinstripes">
      {/* Concentric Dashed Background Circles */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-40 md:opacity-60">
        <div className="absolute h-72 w-72 md:h-125 md:w-125 rounded-full border border-dashed border-gray-300 animate-pulse-glow" />
        <div className="absolute h-125 w-125 md:h-225 md:w-225 rounded-full border border-dashed border-[#a74911]/20" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6">
        {/* Pill Badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3.5 py-1 shadow-sm">
          <span className="h-2 w-2 rounded-full bg-[#a74911] animate-ping" />
          <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#a74911]">
            • INTERACTIVE ESTIMATOR
          </span>
          <span className="h-3 w-px bg-gray-200" />
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#1a1f2c]">
            Idea to MVP in 15 Days
          </span>
        </div>

        {/* Hero Heading */}
        <h1 className="text-4xl font-black uppercase tracking-tight text-[#1a1f2c] sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05]">
          CALCULATE YOUR <span className="text-[#a74911]">MVP &amp; AI</span> SCOPE
        </h1>

        {/* Hero Subtitle */}
        <p className="mx-auto mt-6 max-w-2xl text-base font-medium leading-relaxed text-[#767e89] sm:text-lg">
          Configure your product requirements, select intelligent AI features, and get an instant, transparent price and timeline breakdown. Built by Bengaluru’s premier product studio.
        </p>

        {/* Trust Bar / Fast Metrics */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 border-t border-dashed border-gray-200 pt-8 sm:gap-10">
          <div className="flex items-center gap-2 text-xs font-bold text-[#1a1f2c] uppercase tracking-wide">
            <Zap className="h-4 w-4 text-[#a74911]" />
            <span>15-Day Guaranteed Launch</span>
          </div>
          <div className="flex items-center gap-2 text-xs font-bold text-[#1a1f2c] uppercase tracking-wide">
            <ShieldCheck className="h-4 w-4 text-[#a74911]" />
            <span>100% Source Code Ownership</span>
          </div>
          <div className="flex items-center gap-2 text-xs font-bold text-[#1a1f2c] uppercase tracking-wide">
            <Clock className="h-4 w-4 text-[#a74911]" />
            <span>Fixed Scope &amp; No Hidden Fees</span>
          </div>
        </div>
      </div>
    </section>
  );
}
