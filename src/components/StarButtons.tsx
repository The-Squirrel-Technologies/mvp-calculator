import React from "react";
import { Star } from "lucide-react";
import { REPO_URL, ROI_REPO_URL } from "@/lib/site";

const cls = "inline-flex items-center gap-2 rounded-xl border border-white/25 bg-white/10 px-4 py-3 text-xs font-bold text-white hover:bg-white/20";

/** Links to the two real repositories. */
export default function StarButtons() {
  return (
    <>
      <a href={REPO_URL} target="_blank" rel="noopener" className={cls} aria-label="Star mvp-calculator on GitHub">
        <Star className="h-4 w-4 text-[#f0ad7a]" fill="#f0ad7a" /><span>Star mvp-calculator</span>
      </a>
      <a href={ROI_REPO_URL} target="_blank" rel="noopener" className={cls} aria-label="Star roi-calculator on GitHub">
        <Star className="h-4 w-4 text-[#f0ad7a]" fill="#f0ad7a" /><span>Star roi-calculator</span>
      </a>
    </>
  );
}
