import React from "react";
import { Currency, Estimate, formatMoney } from "@/lib/pricing";
import { CALENDLY_URL, MAIN_URL, SITE_URL } from "@/lib/site";

const th: React.CSSProperties = { textAlign: "left", padding: "3px 6px", borderBottom: "1px solid #999", fontSize: "11px" };
const td: React.CSSProperties = { padding: "3px 6px", borderBottom: "1px solid #ddd", fontSize: "11px" };
const h2: React.CSSProperties = { fontSize: "13px", margin: "12px 0 4px", color: "#a74911" };

/** Print-only report: the selected scope, the pricing working and the next step. */
export default function PrintReport({ est, currency, velocityName }: { est: Estimate; currency: Currency; velocityName: string }) {
  const m = (n: number) => formatMoney(n, currency);
  const date = new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
  return (
    <div className="print-report" style={{ fontFamily: "system-ui, sans-serif", color: "#111" }}>
      <div style={{ borderBottom: "2px solid #a74911", paddingBottom: "8px", display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
        <div>
          <div style={{ fontSize: "18px", fontWeight: 800 }}>MVP &amp; AI Cost Estimate</div>
          <div style={{ fontSize: "11px", color: "#555" }}>Prepared <span suppressHydrationWarning>{date}</span> · {currency}</div>
        </div>
        <div style={{ fontSize: "11px", fontWeight: 700 }}>The Squirrel Technologies</div>
      </div>

      <div style={{ margin: "12px 0", padding: "10px 12px", border: "1px solid #a74911", borderRadius: "6px" }}>
        <div style={{ fontSize: "11px", color: "#555" }}>{est.isRetainer ? "Monthly retainer" : "Estimated total"}</div>
        <div style={{ fontSize: "24px", fontWeight: 800, color: "#a74911" }}>{m(est.total)}{est.isRetainer ? " / month" : ""}</div>
        <div style={{ fontSize: "11px" }}>Timeline: {est.timeline} · Complexity: {est.complexity} · Delivery: {velocityName}</div>
      </div>

      <h2 style={h2}>Selected scope</h2>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead><tr><th style={th}>Item</th><th style={th}>Technology</th><th style={{ ...th, textAlign: "right" }}>Price</th></tr></thead>
        <tbody>
          {est.lines.map((l, i) => (
            <tr key={i}><td style={td}>{l.name}</td><td style={{ ...td, color: "#555" }}>{l.tag ?? ""}</td><td style={{ ...td, textAlign: "right", fontWeight: 700 }}>{m(l.cost)}</td></tr>
          ))}
          <tr><td style={{ ...td, fontWeight: 800 }} colSpan={2}>{est.isRetainer ? "Monthly retainer" : "Total"}</td><td style={{ ...td, textAlign: "right", fontWeight: 800 }}>{m(est.total)}</td></tr>
        </tbody>
      </table>
      {est.isRetainer && <p style={{ fontSize: "10.5px", marginTop: "4px" }}>The scope above as a one-off build would be {m(est.oneOffScope)}.</p>}

      <h2 style={h2}>Recommended architecture</h2>
      <div style={{ fontSize: "11px" }}>{est.stack.join(" · ")}</div>

      <h2 style={h2}>Notes</h2>
      <ul style={{ fontSize: "10px", paddingLeft: "16px", lineHeight: 1.4, listStyle: "disc" }}>
        <li>Planning estimate based on The Squirrel Technologies&apos; list prices; a fixed quote follows a scoping call.</li>
        <li>Build time is platform plus AI layer ({est.buildDays} days). A 15-day sprint is guaranteed only when the scope fits in 15 days.</li>
        <li>Includes 100% source code and IP handover and 30 days of launch fixes.</li>
      </ul>

      <h2 style={h2}>Next steps</h2>
      <div style={{ fontSize: "11px", lineHeight: 1.5 }}>
        MVP development in 15 days: {MAIN_URL}/services/mvp-development<br />
        AI solutions: {MAIN_URL}/solutions<br />
        Book a free discovery call: {CALENDLY_URL}<br />
        Re-run this calculator: {SITE_URL}
      </div>
    </div>
  );
}
