"use client";

import { useState } from "react";
import { Code2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Calculator from "@/components/Calculator";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import EmbedModal from "@/components/EmbedModal";
import StarButtons from "@/components/StarButtons";

export default function Home() {
  const [embedOpen, setEmbedOpen] = useState(false);
  return (
    <main className="min-h-screen flex flex-col bg-[#f7f9fa]">
      <Navbar />
      <Hero />
      <Calculator />
      <section className="screen-only bg-[#1a1f2c] px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6">
          <div className="max-w-xl">
            <h2 className="text-xl font-black text-white">Free and open source (MIT)</h2>
            <p className="mt-1 text-sm text-slate-400">Embed this calculator on your site, or star the code on GitHub.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <button type="button" onClick={() => setEmbedOpen(true)} className="inline-flex items-center gap-2 rounded-xl bg-[#a74911] px-4 py-3 text-xs font-bold text-white hover:bg-[#8e3e0e]">
              <Code2 className="h-4 w-4" /> Get embed code
            </button>
            <StarButtons />
          </div>
        </div>
      </section>
      <Faq />
      <Footer />
      <EmbedModal isOpen={embedOpen} onClose={() => setEmbedOpen(false)} />
    </main>
  );
}
