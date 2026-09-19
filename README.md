# MVP & AI Cost Calculator

Free, open-source calculator that turns a platform, an AI layer and a feature list into an itemised price and timeline for a startup MVP, mobile app or AI automation. Built by [The Squirrel Technologies](https://www.thesquirrel.tech/), a product engineering studio in Bengaluru.

**Live calculator: <https://mvp-calculator.thesquirrel.tech>**

## What it does

- Four platform tracks: web app, mobile app, web + mobile, AI automation backend
- AI layer options: support agent, voice receptionist, accounts-payable OCR, enterprise search (RAG)
- Six add-on features, USD and INR pricing
- Two delivery models: fixed-scope sprint (from $5,999, the published Product Development price) and the $2,250/month retainer
- Every platform, AI layer and feature adds both cost and build days; the total is the exact sum of the itemised lines and the 15-day guarantee is shown only when the scope fits
- One-page PDF report (Save PDF), copy-to-clipboard summary, pre-filled booking and WhatsApp links

## Embed it on your site

```html
<div data-squirrel-mvp>
  <p style="font-size:12px;color:#64748b;text-align:center;margin-top:8px">Free <a href="https://mvp-calculator.thesquirrel.tech/">MVP cost calculator</a> by <a href="https://www.thesquirrel.tech/services/mvp-development">The Squirrel Technologies</a></p>
</div>
<script src="https://mvp-calculator.thesquirrel.tech/widget.js" async></script>
```

A plain iframe (`https://mvp-calculator.thesquirrel.tech/embed/`) also works. Please keep the attribution link.

## Run locally

```bash
npm install
npm run dev     # http://localhost:3000
npm test        # pricing engine tests (checks every possible selection)
npm run build   # static export to ./out
```

Pricing lives in [`src/lib/pricing.ts`](./src/lib/pricing.ts). Edit the price lists there; totals, breakdown and the PDF update automatically.

## Deployment

Pushes to `main` build a static export and deploy it to GitHub Pages via [`.github/workflows/deploy.yml`](./.github/workflows/deploy.yml), served on the custom domain in `public/CNAME`.

## Related

- [MVP development in 15 days](https://www.thesquirrel.tech/services/mvp-development)
- [AI solutions](https://www.thesquirrel.tech/services/ai-solutions) and [full-cycle development](https://www.thesquirrel.tech/services/full-cycle-development)
- [AI Receptionist ROI Calculator](https://roi-calculator.thesquirrel.tech) ([source](https://github.com/The-Squirrel-Technologies/roi-calculator))
- [Book a discovery call](https://calendly.com/ganeshghatti/discovery-call) · [ganesh@thesquirrel.tech](mailto:ganesh@thesquirrel.tech)

## License

[MIT](./LICENSE)
