"use client";

import React, { useEffect, useState } from "react";
import { X, Copy, Check, Code2 } from "lucide-react";
import { MAIN_URL, SITE_URL } from "@/lib/site";

// Both snippets keep a plain, crawlable attribution link in the host page's own HTML.
const attribution = `<p style="font-size:12px;color:#64748b;text-align:center;margin-top:8px">Free <a href="${SITE_URL}/">MVP cost calculator</a> by <a href="${MAIN_URL}/services/mvp-development">The Squirrel Technologies</a></p>`;
const iframeCode = `<iframe src="${SITE_URL}/embed/" width="100%" height="1500" style="border:0;border-radius:16px" title="MVP & AI Cost Calculator by The Squirrel Technologies" loading="lazy"></iframe>
${attribution}`;
const scriptCode = `<div data-squirrel-mvp>${attribution}</div>
<script src="${SITE_URL}/widget.js" async></script>`;

export default function EmbedModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [copied, setCopied] = useState<string | null>(null);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const copy = async (text: string, id: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(id);
      setTimeout(() => setCopied(null), 2500);
    } catch {
      window.prompt("Copy the embed code:", text);
    }
  };

  const block = (id: string, title: string, note: string, code: string, rows: number) => (
    <div className="mb-6">
      <div className="mb-1.5 flex items-center justify-between gap-2">
        <div>
          <div className="text-sm font-bold text-[#1a1f2c]">{title}</div>
          <div className="text-xs text-[#5b6470]">{note}</div>
        </div>
        <button type="button" onClick={() => copy(code, id)} className="inline-flex items-center gap-1.5 rounded-lg border border-gray-200 px-3 py-1.5 text-xs font-bold hover:border-[#a74911]">
          {copied === id ? <Check className="h-3.5 w-3.5 text-[#007956]" /> : <Copy className="h-3.5 w-3.5" />}
          {copied === id ? "Copied" : "Copy"}
        </button>
      </div>
      <textarea readOnly rows={rows} value={code} aria-label={title} onFocus={(e) => e.currentTarget.select()} className="w-full resize-none rounded-lg border border-gray-200 bg-slate-50 p-3 font-mono text-xs text-slate-700" />
    </div>
  );

  return (
    <div role="dialog" aria-modal="true" aria-label="Embed this calculator" onClick={onClose} className="fixed inset-0 z-[100] flex items-center justify-center bg-[#1a1f2c]/65 p-4">
      <div onClick={(e) => e.stopPropagation()} className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl bg-white p-7">
        <div className="mb-5 flex items-center justify-between">
          <h2 className="flex items-center gap-2 text-xl font-black text-[#1a1f2c]"><Code2 className="h-5 w-5 text-[#a74911]" /> Embed this calculator</h2>
          <button type="button" onClick={onClose} aria-label="Close" className="text-[#5b6470] hover:text-[#1a1f2c]"><X className="h-5 w-5" /></button>
        </div>
        {block("script", "Option 1: auto-resizing embed (recommended)", "Loads the calculator and resizes to fit. Keep the attribution link.", scriptCode, 4)}
        {block("iframe", "Option 2: plain iframe", "Works anywhere that allows iframes. Adjust the height if needed.", iframeCode, 6)}
        <p className="text-xs text-[#5b6470]">Free under the MIT license. Please keep the attribution link.</p>
      </div>
    </div>
  );
}
