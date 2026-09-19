import { test } from "node:test";
import assert from "node:assert/strict";
import { AI_SOLUTIONS, FEATURES, PLATFORMS, RETAINER, MIN_ENGAGEMENT_USD, USD_PER_ADDON_DAY, estimate, Selection, VelocityId, Currency } from "./pricing";

const velocities: VelocityId[] = ["sprint", "retainer"];
const currencies: Currency[] = ["USD", "INR"];

function* allSelections(): Generator<Selection> {
  for (const platform of PLATFORMS) for (const ai of AI_SOLUTIONS)
    for (let mask = 0; mask < 1 << FEATURES.length; mask++)
      for (const velocity of velocities) for (const currency of currencies)
        yield { platform: platform.id, ai: ai.id, velocity, currency, features: FEATURES.filter((_, i) => mask & (1 << i)).map((f) => f.id) };
}

test("exhaustive: line items always sum to the total; totals are whole numbers", () => {
  let n = 0;
  for (const sel of allSelections()) {
    const e = estimate(sel);
    assert.equal(e.lines.reduce((s, l) => s + l.cost, 0), e.total, JSON.stringify(sel));
    assert.ok(Number.isInteger(e.total) && e.total > 0);
    n++;
  }
  assert.equal(n, 4 * 5 * 64 * 2 * 2);
});

test("matches the published thesquirrel.tech pricing", () => {
  assert.equal(MIN_ENGAGEMENT_USD, 5999); // Tier 1 Product Development
  assert.equal(RETAINER.usd, 2250); // Tier 2 Monthly Retainer
  for (const p of PLATFORMS) assert.ok(p.usd >= MIN_ENGAGEMENT_USD, `${p.name} is below the published minimum`);
  const web = { platform: "web", ai: "none", features: [], currency: "USD", velocity: "sprint" } as const;
  const e = estimate(web);
  assert.equal(e.total, 5999);
  assert.equal(e.buildDays, 15);
  assert.equal(e.timeline, "15 Days");
  assert.ok(e.within15DaySprint);
});

test("every add-on adds both cost and build days", () => {
  const web = { platform: "web", ai: "none", currency: "USD", velocity: "sprint" } as const;
  const base = estimate({ ...web, features: [] });
  for (const f of FEATURES) {
    const e = estimate({ ...web, features: [f.id] });
    assert.equal(e.total, base.total + f.usd, f.name);
    assert.equal(e.buildDays, base.buildDays + f.days, f.name);
    assert.ok(f.days >= 1);
  }
  const ai = estimate({ ...web, ai: "chatbot", features: [] });
  assert.equal(ai.total, 5999 + 1200);
  assert.equal(ai.buildDays, 18);
});

test("add-on days follow the ~$400 per day implied by the AI layer prices", () => {
  for (const f of FEATURES) assert.equal(f.days, Math.max(1, Math.round(f.usd / USD_PER_ADDON_DAY)), f.name);
  for (const a of AI_SOLUTIONS.slice(1)) assert.ok(Math.abs(a.days - a.usd / USD_PER_ADDON_DAY) <= 1, a.name);
});

test("15-day guarantee only when the whole scope fits", () => {
  const web = { platform: "web", ai: "none", currency: "USD", velocity: "sprint" } as const;
  assert.ok(!estimate({ ...web, features: ["auth"] }).within15DaySprint); // 16 days
  const big = estimate({ ...web, platform: "ecosystem", ai: "receptionist", features: ["auth"] });
  assert.equal(big.buildDays, 25 + 5 + 1);
  assert.equal(big.timeline, "31 Days");
  assert.equal(big.weeks, 7);
  assert.equal(estimate({ ...web, platform: "automation", features: [] }).timeline, "12 Days");
});

test("retainer: one line at the published fee; complexity ignores it", () => {
  const sel = { platform: "ecosystem", ai: "receptionist", features: ["auth"], currency: "USD", velocity: "sprint" } as const;
  const r = estimate({ ...sel, velocity: "retainer" });
  assert.equal(r.total, 2250);
  assert.equal(r.lines.length, 1);
  assert.equal(r.oneOffScope, estimate(sel).total);
  assert.equal(r.complexity, estimate(sel).complexity);
  assert.equal(estimate({ ...sel, currency: "INR" }).complexity, "Enterprise");
  assert.equal(estimate({ platform: "automation", ai: "none", features: [], currency: "INR", velocity: "sprint" }).complexity, "Lean MVP");
});

test("unknown ids and duplicates ignored; INR list implies a consistent rate", () => {
  const e = estimate({ platform: "web", ai: "none", features: ["auth", "auth", "nope"], currency: "USD", velocity: "sprint" });
  assert.equal(e.total, 5999 + 350);
  for (const i of [...PLATFORMS, ...AI_SOLUTIONS.slice(1), ...FEATURES]) {
    const implied = i.inr / i.usd;
    assert.ok(implied > 80 && implied < 84, `${i.name} implies ${implied.toFixed(1)} INR/USD`);
  }
});
