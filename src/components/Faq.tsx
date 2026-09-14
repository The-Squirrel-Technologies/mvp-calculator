"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "How does the 15-Day Rapid MVP Sprint work?",
      a: "Our 15-day sprint is structured into three focused 5-day phases: (1) Architecture, UI wireframing & database schema, (2) Core full-stack engineering & AI integrations, (3) Testing, polishing, CI/CD pipeline, and deployment to production. You receive daily Loom updates and direct Slack/WhatsApp communication.",
    },
    {
      q: "Do I retain 100% ownership of the source code and IP?",
      a: "Yes, absolutely. At the end of the sprint, the entire GitHub repository, architecture docs, database credentials, and production deployments are transferred completely to your team. There are zero licensing fees or vendor lock-in.",
    },
    {
      q: "What tech stack do you use to guarantee production readiness?",
      a: "We specialize in modern, battle-tested technologies: Next.js 15, TypeScript, React, Tailwind CSS, Supabase / PostgreSQL, React Native (Expo) for mobile, and leading AI models (OpenAI, Anthropic Claude, pgvector, Twilio Voice). Everything is hosted on scalable cloud infrastructure like Vercel or AWS.",
    },
    {
      q: "What if my requirements change or expand during the build?",
      a: "Before coding begins on Day 1, we finalize a laser-focused Feature Scope Document so there are no surprises. If you want to add major new capabilities later, we can seamlessly transition to our Monthly Retainer ($2,250/mo) or scope a secondary sprint.",
    },
    {
      q: "Where is The Squirrel Technologies located?",
      a: "We are headquartered in Bengaluru, Karnataka, India—the Silicon Valley of India. We work with innovative scale-ups and founders across India, the US, UK, and Europe.",
    },
  ];

  return (
    <section className="bg-[#f7f9fa] py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <span className="text-xs font-black uppercase tracking-widest text-[#a74911]">
            • FREQUENTLY ASKED QUESTIONS
          </span>
          <h2 className="mt-3 text-3xl font-black uppercase tracking-tight text-[#1a1f2c]">
            EVERYTHING YOU NEED TO KNOW
          </h2>
          <p className="mt-3 text-sm text-[#767e89]">
            Have more questions? Book a free discovery call with our technical leadership.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-gray-200 bg-white overflow-hidden transition-all shadow-xs"
              >
                <button
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
                  <div className="px-6 pb-5 pt-1 text-xs sm:text-sm font-medium text-[#767e89] leading-relaxed border-t border-dashed border-gray-100">
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
