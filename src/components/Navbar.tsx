"use client";

import React from "react";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a
          href="https://www.thesquirrel.tech/"
          className="flex items-center gap-2.5 transition-opacity hover:opacity-90"
        >
          <div className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-lg">
            <Image
              src="/logo.png"
              alt="The Squirrel Logo"
              width={40}
              height={40}
              className="object-contain"
              priority
            />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-base font-black tracking-tight text-[#1a1f2c] uppercase">
              The Squirrel
            </span>
            <span className="hidden sm:inline-flex items-center rounded-full border border-[#a74911]/20 bg-[#fff8f4] px-2 py-0.5 text-[10px] font-extrabold uppercase tracking-wider text-[#a74911]">
              ESTIMATOR
            </span>
          </div>
        </a>

        {/* Book Consultation CTA */}
        <a
          href="https://calendly.com/ganeshghatti/discovery-call"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-10 items-center justify-center rounded-lg bg-[#a74911] px-4 text-[12px] font-extrabold uppercase tracking-wider text-white shadow-sm transition-all hover:bg-[#8e3e0e] hover:shadow-md active:scale-95"
        >
          <span className="hidden sm:inline">Book Free Consultation</span>
          <span className="sm:hidden">Book Call</span>
        </a>
      </div>
    </header>
  );
}
