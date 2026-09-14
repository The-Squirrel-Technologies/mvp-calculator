import React from "react";
import { Check, ArrowRight } from "lucide-react";

export default function PricingTiers() {
  const tiers = [
    {
      tier: "• TIER 1",
      name: "Product Development",
      price: "$5,999",
      desc: "End-to-end AI solutions and product development.",
      badge: "Most Popular",
      features: [
        "Product or AI solution strategy + scope definition",
        "UI/UX design + full development (web/mobile as needed)",
        "Up to 2 design iteration rounds included",
        "QA testing, launch, and production deployment",
        "Source code ownership + repository handover",
        "1 month post-launch support & fixes",
      ],
      buttonText: "Start 15-Day Sprint",
      buttonLink: "https://calendly.com/ganeshghatti/discovery-call",
      highlight: true,
    },
    {
      tier: "• TIER 2",
      name: "Monthly Retainer",
      price: "$2,250",
      period: "/ mo",
      desc: "Ongoing technical partnership for products that need to keep moving.",
      features: [
        "Ongoing maintenance, updates, and monitoring",
        "2 major features or 3 minor features per month",
        "Up to 5 bug fixes per month",
        "Regular progress updates + delivery cadence",
        "Support for integrations, analytics, and tooling",
        "Fast turnaround for small changes and iterations",
      ],
      buttonText: "Join Monthly Retainer",
      buttonLink: "https://calendly.com/ganeshghatti/discovery-call",
      highlight: false,
    },
    {
      tier: "• TIER 3",
      name: "Custom Engagement",
      price: "Let's Talk",
      desc: "Have something bigger in mind? We scope custom projects based on your needs.",
      features: [
        "Dedicated full-stack engineering team",
        "Enterprise LLM fine-tuning & local model hosting",
        "Custom workflow automation & legacy system migration",
        "SLA-backed 24/7 technical monitoring",
        "Custom security, compliance & on-premise deployments",
      ],
      buttonText: "Discuss Custom Scope",
      buttonLink: "https://calendly.com/ganeshghatti/discovery-call",
      highlight: false,
    },
  ];

  return (
    <section id="pricing" className="border-t border-b border-gray-100 bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-14">
          <span className="text-xs font-black uppercase tracking-widest text-[#a74911]">
            • TRANSPARENT PRICING TIERS
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-black uppercase tracking-tight text-[#1a1f2c]">
            CLEAR &amp; PREDICTABLE MODELS
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#767e89] max-w-xl mx-auto">
            Choose the ideal engagement model to match your product’s lifecycle and team needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((t, idx) => (
            <div
              key={idx}
              className={`flex flex-col rounded-2xl border transition-all duration-300 overflow-hidden ${
                t.highlight
                  ? "border-[#a74911] shadow-xl ring-1 ring-[#a74911]/20 relative"
                  : "border-gray-200 bg-white shadow-sm hover:border-[#a74911]/40 hover:shadow-md"
              }`}
            >
              {t.highlight && (
                <span className="absolute top-3 right-4 rounded-full bg-[#a74911] px-2.5 py-0.5 text-[9px] font-black uppercase tracking-wider text-white">
                  {t.badge}
                </span>
              )}
              <div className="border-b border-dashed border-gray-200 bg-[#fafbfc] p-6">
                <span className="text-[11px] font-extrabold tracking-widest text-[#a74911]">
                  {t.tier}
                </span>
                <h3 className="mt-2 text-xl font-black uppercase text-[#1a1f2c]">
                  {t.name}
                </h3>
                <div className="mt-3 flex items-baseline gap-1 text-[#a74911]">
                  <span className="text-3xl font-black">{t.price}</span>
                  {t.period && (
                    <span className="text-xs font-bold text-[#767e89]">{t.period}</span>
                  )}
                </div>
                <p className="mt-2 text-xs text-[#767e89] min-h-[32px]">{t.desc}</p>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between bg-white">
                <ul className="space-y-3 mb-6">
                  {t.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2.5 text-xs text-[#475569]">
                      <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#fff8f4] text-[#a74911] mt-0.5">
                        <Check className="h-3 w-3" strokeWidth={3} />
                      </span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={t.buttonLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex w-full items-center justify-center gap-2 rounded-xl py-3 text-xs font-bold uppercase tracking-wider transition-all ${
                    t.highlight
                      ? "bg-[#a74911] text-white hover:bg-[#8e3e0e] shadow-md"
                      : "border border-gray-200 bg-white text-[#1a1f2c] hover:border-[#1a1f2c] hover:bg-[#1a1f2c] hover:text-white"
                  }`}
                >
                  <span>{t.buttonText}</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
