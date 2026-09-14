"use client";

import React, { useState, useMemo } from "react";
import {
  Globe,
  Smartphone,
  Layers,
  Cpu,
  Bot,
  PhoneCall,
  FileSpreadsheet,
  Search,
  Lock,
  CreditCard,
  LayoutDashboard,
  Share2,
  Database,
  Languages,
  Check,
  Calendar,
  MessageCircle,
  Copy,
  CheckCircle,
  Sparkles,
  ArrowRight,
} from "lucide-react";

type PlatformType = "web" | "mobile" | "ecosystem" | "automation";
type AiType = "none" | "chatbot" | "receptionist" | "ap_automation" | "enterprise_search";
type VelocityType = "15days" | "standard" | "retainer";
type CurrencyType = "USD" | "INR";

interface FeatureConfig {
  id: string;
  name: string;
  desc: string;
  usd: number;
  inr: number;
  tag: string;
  icon: React.ElementType;
}

export default function Calculator() {
  const [platform, setPlatform] = useState<PlatformType>("web");
  const [aiSolution, setAiSolution] = useState<AiType>("chatbot");
  const [selectedFeatures, setSelectedFeatures] = useState<Set<string>>(
    new Set(["auth", "payments", "admin"])
  );
  const [velocity, setVelocity] = useState<VelocityType>("15days");
  const [currency, setCurrency] = useState<CurrencyType>("USD");
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Platform configs
  const platforms = [
    {
      id: "web" as PlatformType,
      name: "Web Application",
      desc: "Full-stack Next.js 15, React, and Tailwind CSS responsive web app.",
      usd: 5499,
      inr: 450000,
      days: 15,
      tag: "Next.js 15",
      icon: Globe,
    },
    {
      id: "mobile" as PlatformType,
      name: "Mobile App",
      desc: "Cross-platform iOS & Android mobile application with React Native/Expo.",
      usd: 6499,
      inr: 535000,
      days: 18,
      tag: "React Native / Expo",
      icon: Smartphone,
    },
    {
      id: "ecosystem" as PlatformType,
      name: "Web + Mobile Ecosystem",
      desc: "Unified web platform and native mobile apps sharing a single backend.",
      usd: 8999,
      inr: 740000,
      days: 25,
      tag: "Next.js + Expo Monorepo",
      icon: Layers,
    },
    {
      id: "automation" as PlatformType,
      name: "AI Automation System",
      desc: "Headless background processing pipelines, API webhooks, and agents.",
      usd: 4499,
      inr: 370000,
      days: 12,
      tag: "Python + FastAPI",
      icon: Cpu,
    },
  ];

  // AI Solution configs (matching thesquirrel.tech core solutions)
  const aiSolutions = [
    {
      id: "none" as AiType,
      name: "Standard Application (No AI)",
      desc: "Traditional business logic and workflows without generative AI models.",
      usd: 0,
      inr: 0,
      days: 0,
      tag: null,
      icon: Layers,
    },
    {
      id: "chatbot" as AiType,
      name: "AI Customer Support Agent",
      desc: "Intelligent chatbot trained on your company knowledge, FAQs, and docs.",
      usd: 1200,
      inr: 98000,
      days: 3,
      tag: "OpenAI / Claude API",
      icon: Bot,
    },
    {
      id: "receptionist" as AiType,
      name: "AI Voice Phone Receptionist",
      desc: "Real-time conversational voice agent handling phone calls and bookings.",
      usd: 2400,
      inr: 198000,
      days: 5,
      tag: "Twilio + Realtime Voice AI",
      icon: PhoneCall,
    },
    {
      id: "ap_automation" as AiType,
      name: "Accounts Payable & OCR",
      desc: "Automated invoice reading, line-item extraction, and approval routing.",
      usd: 1800,
      inr: 148000,
      days: 4,
      tag: "Document Intelligence",
      icon: FileSpreadsheet,
    },
    {
      id: "enterprise_search" as AiType,
      name: "AI Enterprise Search (RAG)",
      desc: "Semantic vector search across PDFs, spreadsheets, and internal databases.",
      usd: 1600,
      inr: 132000,
      days: 4,
      tag: "pgvector + Hybrid Search",
      icon: Search,
    },
  ];

  // Features
  const features: FeatureConfig[] = [
    {
      id: "auth",
      name: "Auth & Role Permissions",
      desc: "OAuth, email logins, session tokens, and team permission controls.",
      usd: 350,
      inr: 29000,
      tag: "Supabase / Clerk",
      icon: Lock,
    },
    {
      id: "payments",
      name: "Payments & Subscriptions",
      desc: "Stripe, LemonSqueezy, or Razorpay checkout and customer billing portal.",
      usd: 450,
      inr: 37000,
      tag: "Stripe / Razorpay",
      icon: CreditCard,
    },
    {
      id: "admin",
      name: "Admin Operations Dashboard",
      desc: "Internal analytics, user management, metrics, and audit logs.",
      usd: 650,
      inr: 54000,
      tag: "Operations UI",
      icon: LayoutDashboard,
    },
    {
      id: "integrations",
      name: "3rd Party API Integrations",
      desc: "Sync data with Slack, HubSpot, Salesforce, or WhatsApp webhooks.",
      usd: 500,
      inr: 41000,
      tag: "Webhook Pipelines",
      icon: Share2,
    },
    {
      id: "database",
      name: "Custom Schema & Cloud Storage",
      desc: "PostgreSQL database design, indexing, and scalable S3 file storage.",
      usd: 400,
      inr: 33000,
      tag: "PostgreSQL / S3",
      icon: Database,
    },
    {
      id: "i18n",
      name: "Internationalization (i18n)",
      desc: "Multi-language UI translation and localization architecture.",
      usd: 300,
      inr: 25000,
      tag: "next-intl",
      icon: Languages,
    },
  ];

  // Velocity configs
  const velocities = [
    {
      id: "15days" as VelocityType,
      name: "Flagship 15-Day Rapid Sprint",
      desc: "Idea to production-ready MVP in 15 days. Dedicated team, daily sprints.",
      label: "15 Days (Guaranteed)",
      flagship: true,
    },
    {
      id: "standard" as VelocityType,
      name: "Standard Development Sprint",
      desc: "Balanced delivery cadence across 3 to 4 weeks with weekly milestones.",
      label: "3 - 4 Weeks",
      flagship: false,
    },
    {
      id: "retainer" as VelocityType,
      name: "Monthly Retainer Partnership",
      desc: "Ongoing engineering CTO partnership ($2,250 / mo). 2 major features/mo.",
      label: "Continuous Delivery",
      isRetainer: true,
      usd: 2250,
      inr: 185000,
      flagship: false,
    },
  ];

  // Toggle Feature selection
  const toggleFeature = (id: string) => {
    const next = new Set(selectedFeatures);
    if (next.has(id)) {
      next.delete(id);
    } else {
      next.add(id);
    }
    setSelectedFeatures(next);
  };

  // Calculations
  const calculation = useMemo(() => {
    const isUSD = currency === "USD";
    const currKey = isUSD ? "usd" : "inr";

    let total = 0;
    let days = 0;
    const stack = new Set<string>();
    const breakdown: { name: string; tag: string | null; cost: number }[] = [];

    // Platform
    const curPlatform = platforms.find((p) => p.id === platform)!;
    total += curPlatform[currKey];
    days += curPlatform.days;
    stack.add(curPlatform.tag);
    breakdown.push({
      name: curPlatform.name,
      tag: curPlatform.tag,
      cost: curPlatform[currKey],
    });

    // AI
    const curAi = aiSolutions.find((a) => a.id === aiSolution)!;
    if (curAi[currKey] > 0) {
      total += curAi[currKey];
      days += curAi.days;
      if (curAi.tag) stack.add(curAi.tag);
      breakdown.push({
        name: curAi.name,
        tag: curAi.tag,
        cost: curAi[currKey],
      });
    }

    // Features
    selectedFeatures.forEach((featId) => {
      const f = features.find((item) => item.id === featId);
      if (f) {
        total += f[currKey];
        stack.add(f.tag);
        breakdown.push({
          name: f.name,
          tag: f.tag,
          cost: f[currKey],
        });
      }
    });

    // Baseline stack additions
    stack.add("Tailwind CSS");
    stack.add("TypeScript");
    stack.add("Vercel Cloud");

    // Velocity & Timeline logic
    const curVelocity = velocities.find((v) => v.id === velocity)!;
    let finalTimeline = curVelocity.label;
    let isRetainer = false;

    if (curVelocity.isRetainer) {
      isRetainer = true;
      total = curVelocity[currKey]!;
    } else {
      if (velocity === "standard") {
        total = Math.round(total * 0.95);
        const computedWeeks = Math.max(3, Math.ceil(days / 6));
        finalTimeline = `${computedWeeks} - ${computedWeeks + 1} Weeks`;
      } else {
        finalTimeline = "15 Days (Guaranteed)";
      }
    }

    // Complexity label
    let complexity = "Moderate";
    if (total > (isUSD ? 8000 : 650000) || selectedFeatures.size >= 5) {
      complexity = "Enterprise";
    } else if (total < (isUSD ? 5500 : 450000) && selectedFeatures.size <= 2) {
      complexity = "Lean MVP";
    }

    return {
      total,
      timeline: finalTimeline,
      complexity,
      stack: Array.from(stack),
      breakdown,
      isRetainer,
      platformName: curPlatform.name,
      aiName: curAi.name,
    };
  }, [platform, aiSolution, selectedFeatures, velocity, currency]);

  // Format currency output
  const formatMoney = (amount: number) => {
    if (currency === "USD") {
      return `$${amount.toLocaleString("en-US")}`;
    }
    return `₹${amount.toLocaleString("en-IN")}`;
  };

  // Copy scope handler
  const copyScope = () => {
    const scopeText = `====================================
THE SQUIRREL TECHNOLOGIES - MVP ESTIMATE
https://www.thesquirrel.tech/
====================================
Platform: ${calculation.platformName}
AI Solution: ${calculation.aiName}
Delivery Velocity: ${velocities.find((v) => v.id === velocity)?.name}
Timeline: ${calculation.timeline}
Estimated Investment: ${formatMoney(calculation.total)}${calculation.isRetainer ? " / month" : ""}

Included Features:
${Array.from(selectedFeatures)
  .map((id) => `  • ${features.find((f) => f.id === id)?.name}`)
  .join("\n")}

Recommended Architecture:
  ${calculation.stack.join(", ")}

Book 15-Day Sprint: https://calendly.com/ganeshghatti/discovery-call
Direct WhatsApp: https://wa.me/919449610077
====================================`;

    navigator.clipboard.writeText(scopeText).then(() => {
      setToastMessage("Scope summary copied to clipboard!");
      setTimeout(() => setToastMessage(null), 3500);
    });
  };

  // Build dynamic Calendly url with parameters
  const calendlyUrl = useMemo(() => {
    const note = `MVP Scope: ${calculation.platformName} | AI: ${calculation.aiName} | Features: ${selectedFeatures.size} | Est: ${formatMoney(calculation.total)} | Timeline: ${calculation.timeline}`;
    return `https://calendly.com/ganeshghatti/discovery-call?a1=${encodeURIComponent(note)}`;
  }, [calculation, selectedFeatures, currency]);

  // Build dynamic WhatsApp url
  const whatsAppUrl = useMemo(() => {
    const text = `Hi Ganesh & The Squirrel team! I used your MVP Cost Calculator:%0A%0A• Platform: ${calculation.platformName}%0A• AI: ${calculation.aiName}%0A• Timeline: ${calculation.timeline}%0A• Est. Cost: ${formatMoney(calculation.total)}${calculation.isRetainer ? " / mo" : ""}%0A%0AI'd like to discuss building this project!`;
    return `https://wa.me/919449610077?text=${text}`;
  }, [calculation, currency]);

  return (
    <section className="relative py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-xl bg-[#1a1f2c] px-4 py-3 text-sm font-bold text-white shadow-2xl transition-all">
          <CheckCircle className="h-4 w-4 text-[#a74911]" />
          <span>{toastMessage}</span>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* LEFT COLUMN: Interactive Steps (7 cols) */}
        <div className="lg:col-span-7 space-y-8">
          {/* STEP 1: Platform Type */}
          <div className="rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden transition-all hover:shadow-md">
            <div className="border-b border-dashed border-gray-200 bg-[#fafbfc] px-6 py-4 flex items-center justify-between">
              <div>
                <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#a74911]">
                  • STEP 01
                </span>
                <h2 className="text-lg font-black uppercase tracking-tight text-[#1a1f2c]">
                  Select Platform Architecture
                </h2>
              </div>
              <span className="text-xs font-semibold text-[#767e89]">Single Choice</span>
            </div>

            <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {platforms.map((p) => {
                const Icon = p.icon;
                const isSelected = platform === p.id;
                return (
                  <div
                    key={p.id}
                    onClick={() => setPlatform(p.id)}
                    className={`cursor-pointer rounded-xl border-2 p-4 transition-all ${
                      isSelected
                        ? "border-[#a74911] bg-[#fff8f4] shadow-sm"
                        : "border-gray-200 bg-white hover:border-[#a74911]/40 hover:bg-gray-50/50"
                    }`}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div
                        className={`flex h-10 w-10 items-center justify-center rounded-lg transition-colors ${
                          isSelected ? "bg-[#a74911] text-white" : "bg-gray-100 text-[#1a1f2c]"
                        }`}
                      >
                        <Icon className="h-5 w-5" />
                      </div>
                      <div
                        className={`flex h-5 w-5 items-center justify-center rounded-full border-2 transition-all ${
                          isSelected ? "border-[#a74911] bg-[#a74911]" : "border-gray-300"
                        }`}
                      >
                        {isSelected && <div className="h-2 w-2 rounded-full bg-white" />}
                      </div>
                    </div>
                    <h3 className="text-sm font-extrabold uppercase tracking-tight text-[#1a1f2c]">
                      {p.name}
                    </h3>
                    <p className="mt-1 text-xs text-[#767e89] leading-relaxed line-clamp-2">
                      {p.desc}
                    </p>
                    <div className="mt-3 flex items-center justify-between pt-2 border-t border-dashed border-gray-200">
                      <span className="text-[10px] font-bold uppercase text-[#a74911] bg-[#a74911]/10 px-2 py-0.5 rounded">
                        {p.tag}
                      </span>
                      <span className="text-xs font-bold text-[#1a1f2c]">
                        {formatMoney(p[currency === "USD" ? "usd" : "inr"])}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* STEP 2: AI & Agent Capabilities */}
          <div className="rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden transition-all hover:shadow-md">
            <div className="border-b border-dashed border-gray-200 bg-[#fafbfc] px-6 py-4 flex items-center justify-between">
              <div>
                <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#a74911]">
                  • STEP 02
                </span>
                <h2 className="text-lg font-black uppercase tracking-tight text-[#1a1f2c]">
                  AI &amp; Automation Layer
                </h2>
              </div>
              <span className="text-xs font-semibold text-[#767e89]">The Squirrel Speciality</span>
            </div>

            <div className="p-6 space-y-3">
              {aiSolutions.map((ai) => {
                const Icon = ai.icon;
                const isSelected = aiSolution === ai.id;
                return (
                  <div
                    key={ai.id}
                    onClick={() => setAiSolution(ai.id)}
                    className={`cursor-pointer rounded-xl border-2 p-4 transition-all flex items-center justify-between gap-4 ${
                      isSelected
                        ? "border-[#a74911] bg-[#fff8f4] shadow-sm"
                        : "border-gray-200 bg-white hover:border-[#a74911]/40"
                    }`}
                  >
                    <div className="flex items-center gap-3.5">
                      <div
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${
                          isSelected ? "bg-[#a74911] text-white" : "bg-gray-100 text-[#1a1f2c]"
                        }`}
                      >
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="text-sm font-extrabold uppercase tracking-tight text-[#1a1f2c]">
                            {ai.name}
                          </h3>
                          {ai.tag && (
                            <span className="hidden sm:inline-block text-[9px] font-bold text-[#a74911] bg-[#a74911]/10 px-1.5 py-0.5 rounded uppercase">
                              {ai.tag}
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-[#767e89] mt-0.5">{ai.desc}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 shrink-0">
                      <span className="text-xs font-bold text-[#1a1f2c]">
                        {ai.usd === 0 ? "Included" : `+${formatMoney(ai[currency === "USD" ? "usd" : "inr"])}`}
                      </span>
                      <div
                        className={`flex h-5 w-5 items-center justify-center rounded-full border-2 ${
                          isSelected ? "border-[#a74911] bg-[#a74911]" : "border-gray-300"
                        }`}
                      >
                        {isSelected && <div className="h-2 w-2 rounded-full bg-white" />}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* STEP 3: Essential Features & Infrastructure */}
          <div className="rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden transition-all hover:shadow-md">
            <div className="border-b border-dashed border-gray-200 bg-[#fafbfc] px-6 py-4 flex items-center justify-between">
              <div>
                <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#a74911]">
                  • STEP 03
                </span>
                <h2 className="text-lg font-black uppercase tracking-tight text-[#1a1f2c]">
                  Features &amp; Modules
                </h2>
              </div>
              <span className="text-xs font-semibold text-[#767e89]">Multi-Select</span>
            </div>

            <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {features.map((feat) => {
                const Icon = feat.icon;
                const isSelected = selectedFeatures.has(feat.id);
                return (
                  <div
                    key={feat.id}
                    onClick={() => toggleFeature(feat.id)}
                    className={`cursor-pointer rounded-xl border-2 p-3.5 transition-all ${
                      isSelected
                        ? "border-[#a74911] bg-[#fff8f4] shadow-sm"
                        : "border-gray-200 bg-white hover:border-[#a74911]/40"
                    }`}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <Icon className={`h-4 w-4 ${isSelected ? "text-[#a74911]" : "text-gray-500"}`} />
                        <span className="text-xs font-extrabold uppercase text-[#1a1f2c]">
                          {feat.name}
                        </span>
                      </div>
                      <div
                        className={`flex h-4 w-4 items-center justify-center rounded border transition-all ${
                          isSelected ? "border-[#a74911] bg-[#a74911]" : "border-gray-300"
                        }`}
                      >
                        {isSelected && <Check className="h-3 w-3 text-white" strokeWidth={3} />}
                      </div>
                    </div>
                    <p className="text-[11px] text-[#767e89] leading-snug">{feat.desc}</p>
                    <div className="mt-2.5 flex items-center justify-between pt-1.5 border-t border-dashed border-gray-200 text-[11px]">
                      <span className="text-[10px] font-semibold text-gray-500">{feat.tag}</span>
                      <span className="font-bold text-[#1a1f2c]">
                        +{formatMoney(feat[currency === "USD" ? "usd" : "inr"])}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* STEP 4: Delivery Velocity */}
          <div className="rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden transition-all hover:shadow-md">
            <div className="border-b border-dashed border-gray-200 bg-[#fafbfc] px-6 py-4 flex items-center justify-between">
              <div>
                <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#a74911]">
                  • STEP 04
                </span>
                <h2 className="text-lg font-black uppercase tracking-tight text-[#1a1f2c]">
                  Delivery Velocity &amp; Engagement
                </h2>
              </div>
              <span className="text-xs font-semibold text-[#767e89]">Speed to Market</span>
            </div>

            <div className="p-6 space-y-3.5">
              {velocities.map((v) => {
                const isSelected = velocity === v.id;
                return (
                  <div
                    key={v.id}
                    onClick={() => setVelocity(v.id)}
                    className={`relative cursor-pointer rounded-xl border-2 p-4 transition-all ${
                      isSelected
                        ? "border-[#a74911] bg-[#fff8f4] shadow-sm"
                        : "border-gray-200 bg-white hover:border-[#a74911]/40"
                    }`}
                  >
                    {v.flagship && (
                      <span className="absolute top-3 right-3 rounded-full bg-[#a74911] px-2.5 py-0.5 text-[9px] font-black uppercase tracking-wider text-white">
                        FLAGSHIP MODEL
                      </span>
                    )}
                    <div className="flex items-center justify-between pr-24 sm:pr-28">
                      <div className="flex items-center gap-3">
                        <div
                          className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 ${
                            isSelected ? "border-[#a74911] bg-[#a74911]" : "border-gray-300"
                          }`}
                        >
                          {isSelected && <div className="h-2 w-2 rounded-full bg-white" />}
                        </div>
                        <div>
                          <h3 className="text-sm font-extrabold uppercase tracking-tight text-[#1a1f2c]">
                            {v.name}
                          </h3>
                          <p className="text-xs text-[#767e89] mt-0.5">{v.desc}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Sticky Real-time Quote Card (5 cols) */}
        <div className="lg:col-span-5 lg:sticky lg:top-24 space-y-6">
          <div className="rounded-3xl border border-gray-200 bg-white shadow-xl overflow-hidden">
            {/* Header & Currency Toggle */}
            <div className="border-b border-dashed border-gray-200 bg-[#fafbfc] p-6">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#a74911]">
                  • LIVE ESTIMATE
                </span>
                {/* Currency Switcher */}
                <div className="flex items-center rounded-full border border-gray-200 bg-white p-0.5 shadow-xs">
                  <button
                    onClick={() => setCurrency("USD")}
                    className={`rounded-full px-3 py-1 text-xs font-extrabold transition-all ${
                      currency === "USD" ? "bg-[#a74911] text-white" : "text-[#767e89] hover:text-[#1a1f2c]"
                    }`}
                  >
                    USD ($)
                  </button>
                  <button
                    onClick={() => setCurrency("INR")}
                    className={`rounded-full px-3 py-1 text-xs font-extrabold transition-all ${
                      currency === "INR" ? "bg-[#a74911] text-white" : "text-[#767e89] hover:text-[#1a1f2c]"
                    }`}
                  >
                    INR (₹)
                  </button>
                </div>
              </div>

              {/* Price Display */}
              <div className="mt-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#767e89]">
                  {calculation.isRetainer ? "MONTHLY PARTNERSHIP INVESTMENT" : "ESTIMATED TOTAL SCOPE"}
                </span>
                <div className="flex items-baseline gap-1 mt-1">
                  <span className="text-4xl sm:text-5xl font-black text-[#1a1f2c] tracking-tight">
                    {formatMoney(calculation.total)}
                  </span>
                  {calculation.isRetainer && (
                    <span className="text-sm font-semibold text-[#767e89]">/ mo</span>
                  )}
                </div>
                <p className="text-xs text-[#767e89] mt-1">
                  {calculation.isRetainer
                    ? "Includes 2 major features/mo + ongoing maintenance & SLA"
                    : "100% Source code & IP handover • 1 month post-launch support"}
                </p>
              </div>

              {/* Timeline & Complexity Badges */}
              <div className="mt-4 grid grid-cols-2 gap-3 pt-3 border-t border-dashed border-gray-200">
                <div className="rounded-xl border border-gray-200 bg-white p-3 text-center">
                  <span className="block text-[10px] font-bold uppercase tracking-wider text-[#767e89]">
                    Timeline
                  </span>
                  <span className="text-sm font-black text-[#a74911] mt-0.5 block">
                    {calculation.timeline}
                  </span>
                </div>
                <div className="rounded-xl border border-gray-200 bg-white p-3 text-center">
                  <span className="block text-[10px] font-bold uppercase tracking-wider text-[#767e89]">
                    Complexity
                  </span>
                  <span className="text-sm font-black text-[#1a1f2c] mt-0.5 block">
                    {calculation.complexity}
                  </span>
                </div>
              </div>
            </div>

            {/* Scope Items Breakdown */}
            <div className="p-6 space-y-4">
              <div>
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#1a1f2c] mb-3">
                  Scope Summary ({calculation.breakdown.length} items)
                </h4>
                <ul className="space-y-2 text-xs max-h-48 overflow-y-auto pr-1">
                  {calculation.breakdown.map((item, index) => (
                    <li key={index} className="flex items-center justify-between text-[#2d3446]">
                      <span className="flex items-center gap-1.5">
                        <Check className="h-3.5 w-3.5 text-[#a74911] shrink-0" />
                        <span className="font-semibold">{item.name}</span>
                      </span>
                      <span className="font-bold text-[#1a1f2c]">{formatMoney(item.cost)}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack Preview */}
              <div className="pt-3 border-t border-dashed border-gray-200">
                <span className="block text-[10px] font-extrabold uppercase tracking-wider text-[#767e89] mb-2">
                  Recommended Production Architecture
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {calculation.stack.map((tag, idx) => (
                    <span
                      key={idx}
                      className="rounded-md border border-gray-200 bg-gray-50 px-2 py-0.5 text-[10px] font-bold text-[#1a1f2c]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTAs */}
              <div className="pt-4 space-y-2.5">
                <a
                  href={calendlyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#a74911] py-3.5 text-xs font-black uppercase tracking-wider text-white shadow-lg transition-all hover:bg-[#8e3e0e] hover:shadow-xl active:scale-98"
                >
                  <Calendar className="h-4 w-4" />
                  <span>Lock In 15-Day Sprint — Book Call</span>
                  <ArrowRight className="h-4 w-4" />
                </a>

                <a
                  href={whatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] py-3 text-xs font-bold text-white transition-all hover:bg-[#1eb956]"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>Quick WhatsApp Inquiry (+91 94496 10077)</span>
                </a>

                <button
                  onClick={copyScope}
                  className="flex w-full items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white py-2.5 text-xs font-bold text-[#1a1f2c] transition-all hover:border-[#1a1f2c] hover:bg-gray-50"
                >
                  <Copy className="h-3.5 w-3.5 text-gray-500" />
                  <span>Copy Scope Breakdown</span>
                </button>
              </div>
            </div>
          </div>

          {/* Founder Guarantee Box */}
          <div className="rounded-2xl border border-gray-200 bg-white p-5 text-center shadow-xs">
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#a74911]">
              • THE SQUIRREL COMMITMENT
            </span>
            <p className="mt-2 text-xs font-medium leading-relaxed text-[#767e89]">
              “We build like you have a CTO because now you do. We take you from idea to market-ready product in 15 days with complete transparency and zero technical debt.”
            </p>
            <span className="mt-3 block text-xs font-black text-[#1a1f2c]">
              — Ganesh Ghatti, Founder
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
