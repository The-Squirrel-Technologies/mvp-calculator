import React from "react";
import Image from "next/image";
import { CALENDLY_URL, MAIN_URL, ORG_URL, REPO_URL, ROI_REPO_URL, ROI_SITE_URL, WHATSAPP_URL } from "@/lib/site";

const services: [string, string][] = [
  ["MVP Development", "/services/mvp-development"],
  ["AI Solutions", "/services/ai-solutions"],
  ["Full-Cycle Development", "/services/full-cycle-development"],
  ["AI Receptionist", "/solutions/ai-receptionist"],
  ["AI Customer Service Chatbot", "/solutions/ai-customer-service-chatbot"],
  ["AI Enterprise Search", "/solutions/ai-enterprise-search"],
];

export default function Footer() {
  const link = "hover:text-[#a74911] transition-colors";
  return (
    <footer className="screen-only mt-auto border-t border-gray-100 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <a href={MAIN_URL} className="flex items-center gap-2.5 mb-3">
              <Image src="/logo.png" alt="The Squirrel Technologies logo" width={36} height={36} className="object-contain" />
              <span className="font-black uppercase text-[#1a1f2c]">The Squirrel</span>
            </a>
            <p className="text-sm text-[#5b6470]">Product engineering studio in Bengaluru building MVPs, AI systems and automations.</p>
          </div>
          <div>
            <h3 className="mb-3 text-xs font-extrabold uppercase tracking-wider text-[#1a1f2c]">Services</h3>
            <ul className="space-y-2 text-sm text-[#475569]">
              {services.map(([n, p]) => (<li key={p}><a href={`${MAIN_URL}${p}`} className={link}>{n}</a></li>))}
            </ul>
          </div>
          <div>
            <h3 className="mb-3 text-xs font-extrabold uppercase tracking-wider text-[#1a1f2c]">Free tools</h3>
            <ul className="space-y-2 text-sm text-[#475569]">
              <li><a href={ROI_SITE_URL} className={link}>AI Receptionist ROI Calculator</a></li>
              <li><a href={REPO_URL} className={link}>MVP calculator on GitHub</a></li>
              <li><a href={ROI_REPO_URL} className={link}>ROI calculator on GitHub</a></li>
              <li><a href={ORG_URL} className={link}>The-Squirrel-Technologies on GitHub</a></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-3 text-xs font-extrabold uppercase tracking-wider text-[#1a1f2c]">Contact</h3>
            <ul className="space-y-2 text-sm text-[#475569]">
              <li><a href="mailto:ganesh@thesquirrel.tech" className={link}>ganesh@thesquirrel.tech</a></li>
              <li><a href={WHATSAPP_URL} className={link}>WhatsApp +91 94496 10077</a></li>
              <li><a href={CALENDLY_URL} className={link}>Book a discovery call</a></li>
              <li><a href={`${MAIN_URL}/privacy`} className={link}>Privacy</a> · <a href={`${MAIN_URL}/terms`} className={link}>Terms</a></li>
            </ul>
          </div>
        </div>
        <p className="mt-10 border-t border-gray-100 pt-5 text-xs text-[#5b6470]">
          © {new Date().getFullYear()} <a href={MAIN_URL} className="font-bold text-[#1a1f2c]">The Squirrel Technologies</a>. MIT licensed.
        </p>
      </div>
    </footer>
  );
}
