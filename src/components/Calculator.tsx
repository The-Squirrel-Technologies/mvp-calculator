"use client";

import React, { useMemo, useState } from "react";
import {
  Globe, Smartphone, Layers, Cpu, Bot, PhoneCall, FileSpreadsheet, Search, Lock, CreditCard, LayoutDashboard,
  Share2, Database, Languages, Check, Calendar, MessageCircle, Copy, CheckCircle, ArrowRight, Printer,
} from "lucide-react";
import {
  AI_SOLUTIONS, FEATURES, PLATFORMS, RETAINER, estimate, formatMoney,
  AiId, Currency, PlatformId, VelocityId,
} from "@/lib/pricing";
import { CALENDLY_URL, SITE_URL, WHATSAPP_URL } from "@/lib/site";
import PrintReport from "./PrintReport";

const platformIcons: Record<PlatformId, React.ElementType> = { web: Globe, mobile: Smartphone, ecosystem: Layers, automation: Cpu };
const aiIcons: Record<AiId, React.ElementType> = { none: Layers, chatbot: Bot, receptionist: PhoneCall, ap_automation: FileSpreadsheet, enterprise_search: Search };
const featureIcons: Record<string, React.ElementType> = { auth: Lock, payments: CreditCard, admin: LayoutDashboard, integrations: Share2, database: Database, i18n: Languages };

const VELOCITIES: { id: VelocityId; name: string; desc: string; flagship?: boolean }[] = [
  { id: "15days", name: "15-Day Rapid Sprint", desc: "Idea to production-ready MVP in one sprint, with daily updates.", flagship: true },
  { id: "standard", name: "Standard Sprint", desc: "Relaxed weekly cadence, 5% lower price.", },
  { id: "retainer", name: "Monthly Retainer", desc: "Ongoing CTO partnership: 2 major features per month plus maintenance." },
];

const cardBase = "w-full text-left cursor-pointer rounded-xl border-2 p-4 transition-all focus-visible:outline-2 focus-visible:outline-[#a74911]";
const cardOn = "border-[#a74911] bg-[#fff8f4] shadow-sm";
const cardOff = "border-gray-200 bg-white hover:border-[#a74911]/40";

function Radio({ on }: { on: boolean }) {
  return (
    <span className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 ${on ? "border-[#a74911] bg-[#a74911]" : "border-gray-300"}`}>
      {on && <span className="h-2 w-2 rounded-full bg-white" />}
    </span>
  );
}

function StepHeader({ n, title, hint }: { n: string; title: string; hint: string }) {
  return (
    <div className="border-b border-dashed border-gray-200 bg-[#fafbfc] px-6 py-4 flex items-center justify-between gap-3">
      <div>
        <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#a74911]">Step {n}</span>
        <h2 className="text-lg font-black uppercase tracking-tight text-[#1a1f2c]">{title}</h2>
      </div>
      <span className="text-xs font-semibold text-[#767e89]">{hint}</span>
    </div>
  );
}

export default function Calculator() {
  const [platform, setPlatform] = useState<PlatformId>("web");
  const [ai, setAi] = useState<AiId>("none");
  const [features, setFeatures] = useState<string[]>(["auth", "payments", "admin"]);
  const [velocity, setVelocity] = useState<VelocityId>("15days");
  const [currency, setCurrency] = useState<Currency>("USD");
  const [toast, setToast] = useState<string | null>(null);

  const key = currency === "USD" ? "usd" : "inr";
  const money = (n: number) => formatMoney(n, currency);
  const est = useMemo(() => estimate({ platform, ai, features, velocity, currency }), [platform, ai, features, velocity, currency]);
  const perMonth = est.isRetainer ? " / month" : "";

  const toggleFeature = (id: string) => setFeatures((cur) => (cur.includes(id) ? cur.filter((f) => f !== id) : [...cur, id]));

  const summary = [
    `MVP estimate (${SITE_URL})`,
    `Platform: ${est.platformName}`,
    `AI: ${est.aiName}`,
    `Features: ${est.featureNames.join(", ") || "none"}`,
    `Timeline: ${est.timeline}`,
    `Estimated investment: ${money(est.total)}${perMonth}`,
    `Book a call: ${CALENDLY_URL}`,
  ].join("\n");

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(summary);
      setToast("Scope summary copied");
      setTimeout(() => setToast(null), 3000);
    } catch {
      window.prompt("Copy your estimate:", summary);
    }
  };

  const note = `MVP scope: ${est.platformName} | AI: ${est.aiName} | Features: ${features.length} | Est: ${money(est.total)}${perMonth} | Timeline: ${est.timeline}`;
  const calendlyUrl = `${CALENDLY_URL}?a1=${encodeURIComponent(note)}`;
  const whatsAppUrl = `${WHATSAPP_URL}?text=${encodeURIComponent(`Hi Ganesh, I used your MVP cost calculator.\n${note}\nI'd like to discuss this project.`)}`;

  return (
    <>
      <section className="screen-only relative py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        {toast && (
          <div role="status" className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-xl bg-[#1a1f2c] px-4 py-3 text-sm font-bold text-white shadow-2xl">
            <CheckCircle className="h-4 w-4 text-[#f0ad7a]" />
            <span>{toast}</span>
          </div>
        )}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 space-y-6">
            <div className="rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden">
              <StepHeader n="01" title="Platform" hint="Choose one" />
              <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {PLATFORMS.map((p) => {
                  const Icon = platformIcons[p.id];
                  const on = platform === p.id;
                  return (
                    <button key={p.id} type="button" role="radio" aria-checked={on} onClick={() => setPlatform(p.id)} className={`${cardBase} ${on ? cardOn : cardOff}`}>
                      <div className="flex items-start justify-between mb-3">
                        <span className={`flex h-10 w-10 items-center justify-center rounded-lg ${on ? "bg-[#a74911] text-white" : "bg-gray-100 text-[#1a1f2c]"}`}><Icon className="h-5 w-5" /></span>
                        <Radio on={on} />
                      </div>
                      <h3 className="text-sm font-extrabold uppercase tracking-tight text-[#1a1f2c]">{p.name}</h3>
                      <p className="mt-1 text-xs text-[#5b6470] leading-relaxed">{p.desc}</p>
                      <div className="mt-3 flex items-center justify-between pt-2 border-t border-dashed border-gray-200">
                        <span className="text-[10px] font-bold uppercase text-[#a74911] bg-[#a74911]/10 px-2 py-0.5 rounded">{p.tag}</span>
                        <span className="text-xs font-bold text-[#1a1f2c]">{money(p[key])}</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden">
              <StepHeader n="02" title="AI layer" hint="Choose one" />
              <div className="p-6 space-y-3">
                {AI_SOLUTIONS.map((a) => {
                  const Icon = aiIcons[a.id];
                  const on = ai === a.id;
                  return (
                    <button key={a.id} type="button" role="radio" aria-checked={on} onClick={() => setAi(a.id)} className={`${cardBase} flex items-center justify-between gap-4 ${on ? cardOn : cardOff}`}>
                      <span className="flex items-center gap-3.5">
                        <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${on ? "bg-[#a74911] text-white" : "bg-gray-100 text-[#1a1f2c]"}`}><Icon className="h-5 w-5" /></span>
                        <span>
                          <span className="block text-sm font-extrabold uppercase tracking-tight text-[#1a1f2c]">{a.name}</span>
                          <span className="block text-xs text-[#5b6470] mt-0.5">{a.desc}</span>
                        </span>
                      </span>
                      <span className="flex items-center gap-3 shrink-0">
                        <span className="text-xs font-bold text-[#1a1f2c]">{a.usd === 0 ? "-" : `+${money(a[key])}`}</span>
                        <Radio on={on} />
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden">
              <StepHeader n="03" title="Features" hint="Pick any" />
              <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {FEATURES.map((f) => {
                  const Icon = featureIcons[f.id];
                  const on = features.includes(f.id);
                  return (
                    <button key={f.id} type="button" aria-pressed={on} onClick={() => toggleFeature(f.id)} className={`${cardBase} !p-3.5 ${on ? cardOn : cardOff}`}>
                      <span className="flex items-start justify-between mb-2">
                        <span className="flex items-center gap-2">
                          <Icon className={`h-4 w-4 ${on ? "text-[#a74911]" : "text-gray-500"}`} />
                          <span className="text-xs font-extrabold uppercase text-[#1a1f2c]">{f.name}</span>
                        </span>
                        <span className={`flex h-4 w-4 items-center justify-center rounded border ${on ? "border-[#a74911] bg-[#a74911]" : "border-gray-300"}`}>
                          {on && <Check className="h-3 w-3 text-white" strokeWidth={3} />}
                        </span>
                      </span>
                      <span className="block text-[11px] text-[#5b6470] leading-snug">{f.desc}</span>
                      <span className="mt-2 flex items-center justify-between pt-1.5 border-t border-dashed border-gray-200 text-[11px]">
                        <span className="text-[10px] font-semibold text-gray-500">{f.tag}</span>
                        <span className="font-bold text-[#1a1f2c]">+{money(f[key])}</span>
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden">
              <StepHeader n="04" title="Delivery model" hint="Choose one" />
              <div className="p-6 space-y-3">
                {VELOCITIES.map((v) => {
                  const on = velocity === v.id;
                  return (
                    <button key={v.id} type="button" role="radio" aria-checked={on} onClick={() => setVelocity(v.id)} className={`${cardBase} flex items-center gap-3 ${on ? cardOn : cardOff}`}>
                      <Radio on={on} />
                      <span className="flex-1">
                        <span className="block text-sm font-extrabold uppercase tracking-tight text-[#1a1f2c]">{v.name}</span>
                        <span className="block text-xs text-[#5b6470] mt-0.5">{v.desc}</span>
                      </span>
                      {v.flagship && <span className="rounded-full bg-[#a74911] px-2.5 py-0.5 text-[9px] font-black uppercase tracking-wider text-white">Flagship</span>}
                      {v.id === "retainer" && <span className="text-xs font-bold text-[#1a1f2c]">{money(RETAINER[key])}/mo</span>}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <aside aria-live="polite" className="lg:col-span-5 lg:sticky lg:top-24">
            <div className="rounded-3xl border border-gray-200 bg-white shadow-xl overflow-hidden">
              <div className="border-b border-dashed border-gray-200 bg-[#fafbfc] p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#a74911]">Live estimate</span>
                  <div role="group" aria-label="Currency" className="flex items-center rounded-full border border-gray-200 bg-white p-0.5">
                    {(["USD", "INR"] as Currency[]).map((c) => (
                      <button key={c} type="button" aria-pressed={currency === c} onClick={() => setCurrency(c)}
                        className={`rounded-full px-3 py-1 text-xs font-extrabold ${currency === c ? "bg-[#a74911] text-white" : "text-[#5b6470] hover:text-[#1a1f2c]"}`}>
                        {c === "USD" ? "USD ($)" : "INR (₹)"}
                      </button>
                    ))}
                  </div>
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#5b6470]">{est.isRetainer ? "Monthly retainer" : "Estimated total"}</span>
                <div className="flex items-baseline gap-1 mt-1">
                  <span className="text-4xl sm:text-5xl font-black text-[#1a1f2c] tracking-tight">{money(est.total)}</span>
                  {est.isRetainer && <span className="text-sm font-semibold text-[#5b6470]">/ mo</span>}
                </div>
                <p className="text-xs text-[#5b6470] mt-1">
                  {est.isRetainer
                    ? `The same scope as a one-off build would be ${money(est.oneOffScope)}.`
                    : "100% source code and IP handover, 30 days of launch fixes."}
                </p>
                <div className="mt-4 grid grid-cols-2 gap-3 pt-3 border-t border-dashed border-gray-200">
                  <div className="rounded-xl border border-gray-200 bg-white p-3 text-center">
                    <span className="block text-[10px] font-bold uppercase tracking-wider text-[#5b6470]">Timeline</span>
                    <span className="text-sm font-black text-[#a74911] mt-0.5 block">{est.timeline}</span>
                  </div>
                  <div className="rounded-xl border border-gray-200 bg-white p-3 text-center">
                    <span className="block text-[10px] font-bold uppercase tracking-wider text-[#5b6470]">Complexity</span>
                    <span className="text-sm font-black text-[#1a1f2c] mt-0.5 block">{est.complexity}</span>
                  </div>
                </div>
                {est.exceedsSprint && (
                  <p className="mt-3 text-xs text-[#8a4b0f] bg-[#fff8f4] border border-[#a74911]/20 rounded-lg p-2.5">
                    This scope needs {est.buildDays} build days, more than one 15-day sprint. We would phase it, or pick a Standard Sprint.
                  </p>
                )}
              </div>

              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-xs font-extrabold uppercase tracking-wider text-[#1a1f2c] mb-3">Scope ({est.lines.length} {est.lines.length === 1 ? "line" : "lines"})</h3>
                  <ul className="space-y-2 text-xs max-h-56 overflow-y-auto pr-1">
                    {est.lines.map((l, i) => (
                      <li key={i} className="flex items-center justify-between gap-3 text-[#2d3446]">
                        <span className="flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-[#a74911] shrink-0" /><span className="font-semibold">{l.name}</span></span>
                        <span className={`font-bold ${l.cost < 0 ? "text-[#007956]" : "text-[#1a1f2c]"}`}>{money(l.cost)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pt-3 border-t border-dashed border-gray-200 flex flex-wrap gap-1.5">
                  {est.stack.map((t) => (<span key={t} className="rounded-md border border-gray-200 bg-gray-50 px-2 py-0.5 text-[10px] font-bold text-[#1a1f2c]">{t}</span>))}
                </div>
                <div className="pt-3 space-y-2.5">
                  <a href={calendlyUrl} target="_blank" rel="noopener" className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#a74911] py-3.5 text-xs font-black uppercase tracking-wider text-white shadow-lg hover:bg-[#8e3e0e]">
                    <Calendar className="h-4 w-4" /><span>Book a call about this scope</span><ArrowRight className="h-4 w-4" />
                  </a>
                  <div className="grid grid-cols-2 gap-2.5">
                    <a href={whatsAppUrl} target="_blank" rel="noopener" className="flex items-center justify-center gap-2 rounded-xl bg-[#1a7f4b] py-2.5 text-xs font-bold text-white hover:bg-[#156a3e]">
                      <MessageCircle className="h-4 w-4" /><span>WhatsApp</span>
                    </a>
                    <button type="button" onClick={() => window.print()} className="flex items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white py-2.5 text-xs font-bold text-[#1a1f2c] hover:border-[#1a1f2c]">
                      <Printer className="h-3.5 w-3.5" /><span>Save PDF</span>
                    </button>
                  </div>
                  <button type="button" onClick={copy} className="flex w-full items-center justify-center gap-2 text-xs font-semibold text-[#5b6470] hover:text-[#1a1f2c]">
                    <Copy className="h-3.5 w-3.5" /><span>Copy scope summary</span>
                  </button>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>
      <PrintReport est={est} currency={currency} velocityName={VELOCITIES.find((v) => v.id === velocity)!.name} />
    </>
  );
}
