"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FAQS } from "@/lib/faq";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = FAQS;

  return (
    <section className="screen-only bg-[#f7f9fa] py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-8 text-center text-3xl font-black uppercase tracking-tight text-[#1a1f2c]">Frequently asked questions</h2>
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-gray-200 bg-white overflow-hidden transition-all shadow-xs"
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full text-left px-6 py-4 flex items-center justify-between gap-4 font-extrabold text-sm uppercase tracking-tight text-[#1a1f2c] hover:text-[#a74911] transition-colors"
                >
                  <span>{faq.q}</span>
                  <div
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gray-100 text-[#1a1f2c] transition-transform ${
                      isOpen ? "rotate-180 bg-[#a74911] text-white" : ""
                    }`}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-xs sm:text-sm font-medium text-[#5b6470] leading-relaxed border-t border-dashed border-gray-100">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
