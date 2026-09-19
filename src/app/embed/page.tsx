"use client";

import { useEffect } from "react";
import Image from "next/image";
import Calculator from "@/components/Calculator";
import { MAIN_URL, SITE_URL } from "@/lib/site";

export default function EmbedPage() {
  // Tell the host page (see /widget.js) how tall we are so it can resize the iframe.
  useEffect(() => {
    const send = () => window.parent?.postMessage({ type: "squirrel-mvp-height", height: document.documentElement.scrollHeight }, "*");
    send();
    const ro = new ResizeObserver(send);
    ro.observe(document.body);
    return () => ro.disconnect();
  }, []);

  return (
    <div className="bg-[#f7f9fa]">
      <div className="screen-only mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href={MAIN_URL} target="_blank" rel="noopener" className="flex items-center gap-2">
          <Image src="/logo.png" alt="The Squirrel Technologies logo" width={28} height={28} />
          <span className="text-sm font-black uppercase text-[#1a1f2c]">MVP &amp; AI Cost Calculator</span>
        </a>
        <a href={SITE_URL} target="_blank" rel="noopener" className="rounded-lg bg-[#a74911] px-3 py-1.5 text-xs font-bold text-white">Open full version</a>
      </div>
      <Calculator />
      <p className="screen-only pb-6 text-center text-xs text-[#5b6470]">
        Powered by <a href={`${MAIN_URL}/services/mvp-development`} target="_blank" rel="noopener" className="font-bold text-[#a74911]">The Squirrel Technologies</a>
      </p>
    </div>
  );
}
