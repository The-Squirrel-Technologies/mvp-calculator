import { test } from "node:test";
import assert from "node:assert/strict";
import { AI_SOLUTIONS, FEATURES, PLATFORMS, RETAINER, estimate, Selection, VelocityId, Currency } from "./pricing";

const velocities: VelocityId[] = ["15days", "standard", "retainer"];
const currencies: Currency[] = ["USD", "INR"];

function* allSelections(): Generator<Selection> {
  for (const platform of PLATFORMS) for (const ai of AI_SOLUTIONS)
    for (let mask = 0; mask < 1 << FEATURES.length; mask++)
      for (const velocity of velocities) for (const currency of currencies)
        yield { platform: platform.id, ai: ai.id, velocity, currency, features: FEATURES.filter((_, i) => mask & (1 << i)).map((f) => f.id) };
}

test("exhaustive: line items always sum to the total (except retainer, a single line)", () => {
  let n = 0;
  for (const sel of allSelections()) {
    const e = estimate(sel);
    assert.equal(e.lines.reduce((s, l) => s + l.cost, 0), e.total, JSON.stringify(sel));
    assert.ok(Number.isInteger(e.total) && e.total > 0);
    n++;
  }
  assert.equal(n, 4 * 5 * 64 * 3 * 2);
});

test("known totals", () => {
  const base = { platform: "web", ai: "none", features: [], currency: "USD", velocity: "15days" } as const;
  assert.equal(estimate(base).total, 5499);
  assert.equal(estimate({ ...base, ai: "chatbot", features: ["auth", "payments", "admin"] }).total, 5499 + 1200 + 350 + 450 + 650);
  const std = estimate({ ...base, velocity: "standard" });
  assert.equal(std.total, 5499 - Math.round(5499 * 0.05));
  assert.equal(std.lines.at(-1)!.cost, -Math.round(5499 * 0.05));
  assert.equal(estimate({ ...base, velocity: "retainer" }).total, RETAINER.usd);
  assert.equal(estimate({ ...base, velocity: "retainer", currency: "INR" }).total, RETAINER.inr);
});

test("timeline never promises 15 days for a scope that needs more", () => {
  const web = { platform: "web", features: [], currency: "USD", velocity: "15days" } as const;
  assert.equal(estimate({ ...web, ai: "none" }).timeline, "15 Days (Guaranteed)");
  const big = estimate({ ...web, platform: "ecosystem", ai: "receptionist" });
  assert.equal(big.buildDays, 30);
  assert.equal(big.timeline, "30 Days");
  assert.ok(big.exceedsSprint);
  assert.equal(estimate({ ...web, ai: "none", velocity: "standard" }).timeline, "3 - 4 Weeks");
  assert.equal(estimate({ ...web, platform: "ecosystem", ai: "receptionist", velocity: "standard" }).timeline, "6 - 7 Weeks");
});

test("complexity ignores retainer fee and currency", () => {
  const sel = { platform: "ecosystem", ai: "receptionist", features: ["auth"], currency: "USD", velocity: "15days" } as const;
  assert.equal(estimate(sel).complexity, "Enterprise");
  assert.equal(estimate({ ...sel, velocity: "retainer" }).complexity, "Enterprise");
  assert.equal(estimate({ ...sel, currency: "INR" }).complexity, "Enterprise");
  assert.equal(estimate({ platform: "automation", ai: "none", features: [], currency: "INR", velocity: "15days" }).complexity, "Lean MVP");
});

test("unknown ids and duplicate features are ignored, INR/USD price lists stay within 1% of each other", () => {
  const e = estimate({ platform: "web", ai: "none", features: ["auth", "auth", "nope"], currency: "USD", velocity: "15days" });
  assert.equal(e.total, 5499 + 350);
  for (const i of [...PLATFORMS, ...AI_SOLUTIONS.slice(1), ...FEATURES]) {
    const implied = i.inr / i.usd;
    assert.ok(implied > 80 && implied < 84, `${i.name} implies ${implied.toFixed(1)} INR/USD`);
  }
});
