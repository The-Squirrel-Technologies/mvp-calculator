export type PlatformId = "web" | "mobile" | "ecosystem" | "automation";
export type AiId = "none" | "chatbot" | "receptionist" | "ap_automation" | "enterprise_search";
export type VelocityId = "sprint" | "retainer";
export type Currency = "USD" | "INR";

export interface Priced {
  name: string;
  desc: string;
  usd: number;
  inr: number;
  tag: string | null;
}
export interface Platform extends Priced { id: PlatformId; days: number; tag: string }
export interface AiSolution extends Priced { id: AiId; days: number }
export interface Feature extends Priced { id: string; tag: string; days: number }

export const PLATFORMS: Platform[] = [
  { id: "web", name: "Web Application", desc: "Full-stack Next.js, React and Tailwind CSS responsive web app.", usd: 5999, inr: 490000, days: 15, tag: "Next.js" },
  { id: "mobile", name: "Mobile App", desc: "Cross-platform iOS and Android app with React Native / Expo.", usd: 6999, inr: 575000, days: 18, tag: "React Native / Expo" },
  { id: "ecosystem", name: "Web + Mobile Ecosystem", desc: "Web platform and mobile apps sharing a single backend.", usd: 9499, inr: 780000, days: 25, tag: "Next.js + Expo Monorepo" },
  { id: "automation", name: "AI Automation System", desc: "Headless processing pipelines, API webhooks and agents.", usd: 5999, inr: 490000, days: 12, tag: "Python + FastAPI" },
];

export const AI_SOLUTIONS: AiSolution[] = [
  { id: "none", name: "No AI layer", desc: "Standard business logic and workflows.", usd: 0, inr: 0, days: 0, tag: null },
  { id: "chatbot", name: "AI Customer Support Agent", desc: "Chatbot trained on your knowledge base, FAQs and docs.", usd: 1200, inr: 98000, days: 3, tag: "OpenAI / Claude API" },
  { id: "receptionist", name: "AI Voice Phone Receptionist", desc: "Real-time voice agent that answers calls and books appointments.", usd: 2400, inr: 198000, days: 5, tag: "Twilio + Realtime Voice AI" },
  { id: "ap_automation", name: "Accounts Payable & OCR", desc: "Invoice reading, line-item extraction and approval routing.", usd: 1800, inr: 148000, days: 4, tag: "Document Intelligence" },
  { id: "enterprise_search", name: "AI Enterprise Search (RAG)", desc: "Semantic search across PDFs, sheets and internal databases.", usd: 1600, inr: 132000, days: 4, tag: "pgvector + Hybrid Search" },
];

export const FEATURES: Feature[] = [
  { id: "auth", name: "Auth & Role Permissions", desc: "OAuth, email login, sessions and team permissions.", usd: 350, inr: 29000, tag: "Supabase / Clerk", days: 1 },
  { id: "payments", name: "Payments & Subscriptions", desc: "Stripe, LemonSqueezy or Razorpay checkout and billing portal.", usd: 450, inr: 37000, tag: "Stripe / Razorpay", days: 1 },
  { id: "admin", name: "Admin Operations Dashboard", desc: "Analytics, user management, metrics and audit logs.", usd: 650, inr: 54000, tag: "Operations UI", days: 2 },
  { id: "integrations", name: "3rd Party API Integrations", desc: "Sync with Slack, HubSpot, Salesforce or WhatsApp webhooks.", usd: 500, inr: 41000, tag: "Webhook Pipelines", days: 1 },
  { id: "database", name: "Custom Schema & Cloud Storage", desc: "PostgreSQL design, indexing and S3 file storage.", usd: 400, inr: 33000, tag: "PostgreSQL / S3", days: 1 },
  { id: "i18n", name: "Internationalization (i18n)", desc: "Multi-language UI and localization architecture.", usd: 300, inr: 25000, tag: "next-intl", days: 1 },
];

export const RETAINER = { usd: 2250, inr: 185000 };
/**
 * Published Tier 1 "Product Development" price on thesquirrel.tech. No platform is priced below it.
 * A single flagship sprint is 15 working days. Add-on build days follow the ~$400 per build day
 * that the AI layer prices already imply (chatbot 1,200 = 3 days, RAG 1,600 = 4 days), minimum 1 day.
 */
export const MIN_ENGAGEMENT_USD = 5999;
export const SPRINT_DAYS = 15;
export const USD_PER_ADDON_DAY = 400;
const BASE_STACK = ["Tailwind CSS", "TypeScript", "Vercel Cloud"];

export interface Selection {
  platform: PlatformId;
  ai: AiId;
  features: readonly string[];
  velocity: VelocityId;
  currency: Currency;
}

export interface LineItem {
  name: string;
  tag: string | null;
  cost: number; // negative for discounts
}

export interface Estimate {
  lines: LineItem[];
  /** Amount charged. For retainers this is the monthly fee. */
  total: number;
  isRetainer: boolean;
  /** One-off price of the selected scope, shown as a comparison against the retainer. */
  oneOffScope: number;
  /** Platform + AI layer + feature days. */
  buildDays: number;
  /** Working days shown to the user, e.g. "18 Days". */
  timeline: string;
  /** Approximate calendar weeks (5 working days a week). */
  weeks: number;
  /** True when the whole scope fits the 15-day sprint guarantee. */
  within15DaySprint: boolean;
  complexity: "Lean MVP" | "Moderate" | "Enterprise";
  stack: string[];
  platformName: string;
  aiName: string;
  featureNames: string[];
}

export function estimate(sel: Selection): Estimate {
  const key = sel.currency === "USD" ? "usd" : "inr";
  const platform = PLATFORMS.find((p) => p.id === sel.platform) ?? PLATFORMS[0];
  const ai = AI_SOLUTIONS.find((a) => a.id === sel.ai) ?? AI_SOLUTIONS[0];
  // Ignore unknown ids and duplicates; keep the catalogue order so output is deterministic.
  const features = FEATURES.filter((f) => sel.features.includes(f.id));

  const items: Priced[] = [platform, ...(ai.usd > 0 ? [ai] : []), ...features];
  const lines: LineItem[] = items.map((i) => ({ name: i.name, tag: i.tag, cost: i[key] }));
  const subtotal = lines.reduce((sum, l) => sum + l.cost, 0);
  const usdSubtotal = items.reduce((sum, i) => sum + i.usd, 0);
  const buildDays = platform.days + ai.days + features.reduce((d, f) => d + f.days, 0);
  const weeks = Math.ceil(buildDays / 5);

  const stack = Array.from(new Set([...items.map((i) => i.tag).filter((t): t is string => !!t), ...BASE_STACK]));

  const isRetainer = sel.velocity === "retainer";
  const total = isRetainer ? RETAINER[key] : subtotal;
  const finalLines: LineItem[] = isRetainer ? [{ name: "Monthly CTO retainer", tag: null, cost: total }] : lines;

  // Complexity depends on the scope selected (never the retainer fee) and always uses USD list prices.
  let complexity: Estimate["complexity"] = "Moderate";
  if (usdSubtotal > 8500 || features.length >= 5) complexity = "Enterprise";
  else if (usdSubtotal < 6500 && features.length <= 2) complexity = "Lean MVP";

  return {
    lines: finalLines,
    total,
    isRetainer,
    oneOffScope: subtotal,
    buildDays,
    timeline: isRetainer ? "Continuous delivery" : `${buildDays} Days`,
    weeks,
    within15DaySprint: buildDays <= SPRINT_DAYS,
    complexity,
    stack,
    platformName: platform.name,
    aiName: ai.name,
    featureNames: features.map((f) => f.name),
  };
}

export function formatMoney(amount: number, currency: Currency): string {
  const sign = amount < 0 ? "-" : "";
  const abs = Math.abs(amount);
  return currency === "USD" ? `${sign}$${abs.toLocaleString("en-US")}` : `${sign}₹${abs.toLocaleString("en-IN")}`;
}
