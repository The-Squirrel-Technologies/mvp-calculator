<div align="center">

# MVP & AI Cost Calculator

**By [The Squirrel Technologies](https://www.thesquirrel.tech/) — Bengaluru's Product Engineering Studio**

[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow?style=flat-square)](./LICENSE)
[![Hosted on GitHub Pages](https://img.shields.io/badge/Hosted-GitHub_Pages-181717?style=flat-square&logo=github)](https://pages.github.com/)

An open-source, interactive estimator that gives founders and product teams an instant, itemized breakdown of what their MVP, mobile app, or AI automation will actually cost — and how long it will take to ship.

**[→ Live Calculator](https://squirrel-technologies.github.io/mvp-calculator/)** &nbsp;•&nbsp; **[thesquirrel.tech](https://www.thesquirrel.tech/)** &nbsp;•&nbsp; **[Book a Call](https://calendly.com/ganeshghatti/discovery-call)** &nbsp;•&nbsp; **[WhatsApp](https://wa.me/919449610077)**

</div>

---

## What this does

Most software agencies give you a quote after a 30-minute call and a week of back-and-forth. This calculator does it in under two minutes.

Pick your platform (web, mobile, web + mobile, or pure automation), layer in the AI capabilities you need, toggle the features, and the live estimate panel on the right updates in real time — line-by-line scope breakdown, recommended tech stack, and a timeline. The whole thing is pre-filled into a Calendly or WhatsApp link the moment you're ready to talk.

It exists as a standalone tool because [The Squirrel Technologies](https://www.thesquirrel.tech/) ships products fast — and we figured the calculator itself should model that same transparency.

---

## Features

**Interactive scope builder** — Four platform tracks (Next.js web app, React Native mobile, Web + Mobile monorepo, Python/FastAPI automation backend), each with real production pricing.

**AI layer toggle** — Choose from five AI capabilities built directly into Squirrel's delivery model: [AI Customer Support Agent](https://www.thesquirrel.tech/solutions/ai-customer-service-chatbot), [AI Voice Receptionist](https://www.thesquirrel.tech/solutions/ai-receptionist), [Accounts Payable & OCR automation](https://www.thesquirrel.tech/solutions/accounts-payable-automation), and [Enterprise Search via RAG](https://www.thesquirrel.tech/solutions/ai-enterprise-search). Costs and timelines add automatically.

**Feature modules** — Auth & RBAC, Stripe/Razorpay payments, admin dashboard, 3rd-party API integrations, custom DB schema, and i18n — each with an itemized add-on price.

**USD / INR toggle** — Live currency switch for founders in both markets. Squirrel works across US, UK, and Indian clients.

**Delivery velocity** — Three modes: 15-Day Guaranteed Sprint (the flagship), Standard 3–4 week sprint, or Monthly Retainer CTO partnership.

**One-click scope export** — Copies a clean, structured text summary of the full scope to clipboard. Useful for sending to co-founders, investors, or directly to our team.

**Dynamic CTA links** — The "Book Call" button pre-populates the Calendly form with platform, AI layer, feature count, estimated cost, and timeline so the discovery call is already informed before it starts.

**100/100 Lighthouse score** — Static export via `next build`, zero client-side JS bottlenecks.

---

## Tech stack

| Layer | Choice |
|---|---|
| Framework | Next.js 16 (App Router, `output: 'export'`) |
| UI library | React 19 |
| Language | TypeScript 5 |
| Styling | Tailwind CSS 4 |
| Icons | Lucide React |
| Font | Plus Jakarta Sans (Google Fonts) |
| Deployment | GitHub Pages via GitHub Actions |

---

## Getting started

```bash
git clone https://github.com/squirrel-technologies/mvp-calculator.git
cd mvp-calculator
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Deploying to GitHub Pages

Everything is already wired up. The workflow at [`.github/workflows/deploy.yml`](./.github/workflows/deploy.yml) runs `npm run build`, outputs a fully static site to `./out`, and deploys it to GitHub Pages on every push to `main`.

**First-time setup (three steps):**

1. Push this repo to GitHub.
2. Go to **Settings → Pages → Build and deployment → Source** and select **GitHub Actions**.
3. Push any commit to `main`. GitHub Actions takes it from there.

Your calculator will be live at:
```
https://<your-username>.github.io/<repo-name>/
```

> **Note:** If your repo lives at a subpath (not the root domain), update `basePath` and `assetPrefix` in [`next.config.ts`](./next.config.ts) to match. Example: if the repo is `mvp-calculator`, set both to `/mvp-calculator`.

---

## Customising the pricing

All pricing data lives in [`src/components/Calculator.tsx`](./src/components/Calculator.tsx) inside three plain arrays — `platforms`, `aiSolutions`, and `features`. Each entry has a `usd` and `inr` field. Change the numbers, the labels, or add new entries and the estimate panel picks them up automatically.

---

## About The Squirrel Technologies

[The Squirrel Technologies](https://www.thesquirrel.tech/) is a product engineering studio based in Bengaluru. We work with founders, venture-backed startups, and enterprise teams across the US, UK, and India to ship production-ready software — fast.

**What we build:**

- [MVP Development](https://www.thesquirrel.tech/#services) — Idea to market-ready product in 15 days, guaranteed.
- [AI Solutions](https://www.thesquirrel.tech/solutions) — [AI receptionists](https://www.thesquirrel.tech/solutions/ai-receptionist), [sales agents](https://www.thesquirrel.tech/solutions/ai-sales-agent), [customer service bots](https://www.thesquirrel.tech/solutions/ai-customer-service-chatbot), [workflow automation](https://www.thesquirrel.tech/solutions/ai-workflow-automation), and [RAG-powered enterprise search](https://www.thesquirrel.tech/solutions/ai-enterprise-search).
- [Mobile & Web apps](https://www.thesquirrel.tech/#services) — React Native, Next.js, full-stack from design to deployment.
- [Monthly CTO retainer](https://www.thesquirrel.tech/#pricing) — Ongoing engineering partnership at $2,250/mo.

**Contact:**

| | |
|---|---|
| Website | [thesquirrel.tech](https://www.thesquirrel.tech/) |
| Email | [ganesh@thesquirrel.tech](mailto:ganesh@thesquirrel.tech) |
| Phone / WhatsApp | [+91 94496 10077](https://wa.me/919449610077) |
| Book a call | [calendly.com/ganeshghatti/discovery-call](https://calendly.com/ganeshghatti/discovery-call) |

---

## License

[MIT](./LICENSE) — fork it, modify it, ship it.

